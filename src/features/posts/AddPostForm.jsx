import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { selectedAllUsers } from '../users/usersSlice';


const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");


  const users = useSelector(selectedAllUsers);
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

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

  const onAuthorChanged = useCallback(
    (e) => {
      setUserId(e.target.value);
    }, [userId]
  )

  const onButtonClicked = useCallback(
    () => {
      if(title && content) {
        // A component doesn't need to know the structure of a data.
        dispatch(postAdded(title, content, userId))
        // dispatch(postAdded({
        //   id: nanoid(),
        //   title: title,
        //   content: content,
        // }))
        setTitle("")
        setContent("")
        setUserId("");
      }
    }
  )

  const usersoptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

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
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {usersoptions}
        </select>

        <label htmlFor="postContent">Post Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type='button' onClick={onButtonClicked} disabled={!canSave}>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;