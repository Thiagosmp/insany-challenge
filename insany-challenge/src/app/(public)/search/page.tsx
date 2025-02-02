'use client'

import React, { useEffect, useState } from 'react'
import { HeaderBack } from './styles'

// Definir a interface para os dados dos posts
interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const query = `
        query {
          posts {
            nodes {
              id
              title
              content
              date
            }
          }
        }
      `;

    const response = await fetch('https://devblog.insanydesign.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();
    setPosts(data.posts.nodes);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <HeaderBack />
      <div>
        {posts?.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
