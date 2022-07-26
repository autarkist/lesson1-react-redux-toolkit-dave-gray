import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = useCallback(
    (e) => {
      setTitle(e.target.value);
    }, [title]
  )

  const onContentChanged = useCallback(
    (e) => {
      setContent(e.target.value);
    }, [content]
  )

  const onButtonClicked = useCallback(
    () => {
      if(title && content) {
        // A component doesn't need to know the structure of a data.
        dispatch(postAdded(title, content))
        // dispatch(postAdded({
        //   id: nanoid(),
        //   title: title,
        //   content: content,
        // }))
        setTitle("")
        setContent("")
      }
    }
  )

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type='button' onClick={onButtonClicked} >Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;