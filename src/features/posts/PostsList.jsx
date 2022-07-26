import React from 'react';
import { useSelector } from 'react-redux';
import PostAuthor from './PostAuthor';
import { selectedAllPosts } from './postsSlice';

const PostsList = () => {
  const posts = useSelector(selectedAllPosts);

  const renderedAllPosts = posts.map(post => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
    </article>
  ))
  return (
    <section>
      {renderedAllPosts}
    </section>
  );
};

export default PostsList;