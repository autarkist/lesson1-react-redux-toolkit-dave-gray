import React from 'react';
import { useSelector } from 'react-redux';
import PostAuthor from './PostAuthor';
import { selectedAllPosts } from './postsSlice';
import TimeAgo from './TimeAgo';

const PostsList = () => {
  const posts = useSelector(selectedAllPosts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedAllPosts = orderedPosts.map(post => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
    </article>
  ))
  return (
    <section>
      {renderedAllPosts}
    </section>
  );
};

export default PostsList;