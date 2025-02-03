'use client'

import React, { useEffect, useState } from 'react'
import { HeaderBack } from './styles'

interface Post {
  id: string;
  author: string;
  guid: {
    rendered: string;
  };
  _links: {
    author: [
      {
        href: string;
      }
    ]
  }
}

interface Author {
  name: string;
  description: string;
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState<Map<string, Author>>(new Map()); // Para armazenar dados de autores

  const fetchPosts = async () => {
    const response = await fetch("https://devblog.insanydesign.com/wp-json/wp/v2/posts/");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  }

  const fetchAuthorDetails = async (authorUrl: string, postId: string) => {
    const response = await fetch(authorUrl);
    const data = await response.json();

    setAuthors(prev => new Map(prev).set(postId, data)); // Armazena os dados do autor no estado
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    posts.forEach(post => {
      const authorUrl = post._links.author[0].href;
      if (authorUrl) {
        fetchAuthorDetails(authorUrl, post.id);
      }
    });
  }, [posts]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <HeaderBack />
      {posts?.map((post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <p>{post.guid.rendered}</p>
          <p>{post._links.author[0].href}</p>
          {authors.has(post.id) && (
            <div>
              <h4>Author Info:</h4>
              <p>Name: {authors.get(post.id)?.name}</p>
              <p>Description: {authors.get(post.id)?.description}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Page;
