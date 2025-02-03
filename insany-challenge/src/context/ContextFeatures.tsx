import { IAuthor, IFeaturedMedia, IContextFeaturesType, IPost } from '@/types';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

const ContextFeatures = createContext<IContextFeaturesType | undefined>(undefined);

interface ContextFeaturesProps {
  children: ReactNode;
}

export const ContextFeaturesProvider = ({ children }: ContextFeaturesProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [authors, setAuthors] = useState<Map<string, IAuthor>>(new Map());
  const [featuresMedia, setFeaturesMedia] = useState<Map<string, IFeaturedMedia>>(new Map());

  const fetchPosts = async () => {
    const response = await fetch('https://devblog.insanydesign.com/wp-json/wp/v2/posts/');
    const data = await response.json();
    setPosts(prev => [...prev, ...data]);
  };

  const fetchAuthorDetails = async (authorUrl: string, postId: string) => {
    const response = await fetch(authorUrl);
    const data = await response.json();
    setAuthors(prev => new Map([...prev, [postId, data]]));
  };

  const fetchFeaturesMedia = async (featureUrl: string, featureId: string) => {
    const response = await fetch(featureUrl);
    const data = await response.json();
    setFeaturesMedia(prev => new Map(prev).set(featureId, data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    posts.forEach(post => {
      const authorUrl = post._links.author[0]?.href;
      if (authorUrl) {
        fetchAuthorDetails(authorUrl, post.id);
      }
    });
  }, [posts]);

  useEffect(() => {
    posts.forEach(post => {
      const featuresMediaUrl = post._links['wp:featuredmedia']?.[0]?.href;
      if (featuresMediaUrl) {
        fetchFeaturesMedia(featuresMediaUrl, post.id);
      }
    });
  }, [posts]);

  return (
    <ContextFeatures.Provider value={{ posts, authors, featuresMedia, fetchPosts, fetchAuthorDetails, fetchFeaturesMedia }}>
      {children}
    </ContextFeatures.Provider>
  );
};

export const useContextFeatures = () => {
  const context = React.useContext(ContextFeatures);
  if (!context) {
    throw new Error('useContextFeatures must be used within a BlogProvider');
  }
  return context;
};
