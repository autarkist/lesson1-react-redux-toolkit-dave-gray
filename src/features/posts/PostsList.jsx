import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostsExcerpt from './PostsExcerpt';
import { selectedAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectedAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if(postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus])

  // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  // const renderedAllPosts = orderedPosts.map(post => (
  // ))
  let content;
  if(postsStatus === 'loading'){
    content = <p>"Loading...</p>;
  } else if (postsStatus === 'succeeded'){
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />);
  } else if (postsStatus === 'failed'){
    content = <p>{getPostsError}</p>
  }


  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;