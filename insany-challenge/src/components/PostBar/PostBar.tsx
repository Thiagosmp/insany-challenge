import { useContextFeatures } from '@/context/ContextFeatures'
import { useParams } from 'next/navigation'
import React from 'react'

const PostBar = () => {
  const { id } = useParams();
  const { posts } = useContextFeatures();

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return (
    <div>
      <h3>{post.title?.rendered}</h3>
      <span className="question" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
      <span className="question" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
    </div>
  )
}

export default PostBar