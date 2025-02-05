import { IAuthor, IFeaturedMedia, IContextFeaturesType, IPost } from '@/types';
import React, { createContext, ReactNode } from 'react';
import { useQuery, useQueries, UseQueryOptions } from '@tanstack/react-query';

const ContextFeatures = createContext<IContextFeaturesType | undefined>(undefined);

interface ContextFeaturesProps {
  children: ReactNode;
}

const fetchPosts = async (): Promise<IPost[]> => {
  const response = await fetch('https://devblog.insanydesign.com/wp-json/wp/v2/posts/');
  if (!response.ok) throw new Error("Erro ao buscar posts");
  return response.json();
};

const fetchAuthorDetails = async (authorUrl: string): Promise<IAuthor> => {
  const response = await fetch(authorUrl);
  if (!response.ok) throw new Error("Erro ao buscar autor");
  return response.json();
};

const fetchFeaturesMedia = async (featureUrl: string): Promise<IFeaturedMedia> => {
  const response = await fetch(featureUrl);
  if (!response.ok) throw new Error("Erro ao buscar features");
  return response.json();
};

export const ContextFeaturesProvider = ({ children }: ContextFeaturesProps) => {
  const { data: posts = [] } = useQuery<IPost[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 minutos
    cacheTime: 1000 * 60 * 10, // 10 minutos
  } as UseQueryOptions<IPost[], Error>);
  
  const authorsQueries = useQueries({
    queries: posts.map((post) => ({
      queryKey: ['author', post.id],
      queryFn: () => fetchAuthorDetails(post._links.author[0]?.href),
      enabled: !!post._links.author?.length,
    })),
  });

  const mediaQueries = useQueries({
    queries: posts
      .map((post) => {
        const mediaUrl = post._links?.['wp:featuredmedia']?.[0]?.href;

        if (!mediaUrl) return null; 

        return {
          queryKey: ['media', post.id],
          queryFn: () => fetchFeaturesMedia(mediaUrl),
        };
      })
      .filter((query): query is { queryKey: string[]; queryFn: () => Promise<IFeaturedMedia> } => Boolean(query)), 
  });

  const authors = new Map(
    posts
      .map((post, index) => [post.id, authorsQueries[index]?.data] as const) 
      .filter((pair): pair is [string, IAuthor] => pair[1] !== undefined) 
  );

  const featuresMedia = new Map(
    posts
      .map((post, index) => [post.id, mediaQueries[index]?.data] as const) 
      .filter((pair): pair is [string, IFeaturedMedia] => pair[1] !== undefined) 
  );

  return (
    <ContextFeatures.Provider value={{
      posts,
      authors,
      featuresMedia,
      fetchPosts,
      fetchAuthorDetails,
      fetchFeaturesMedia
    }}>
      {children}
    </ContextFeatures.Provider>
  );
};

export const useContextFeatures = () => {
  const context = React.useContext(ContextFeatures);
  if (!context) {
    throw new Error('useContextFeatures deve ser usado dentro de um ContextFeaturesProvider');
  }
  return context;
};
