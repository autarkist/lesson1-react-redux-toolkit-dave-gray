import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AddPostForm />
      <h1>Posts</h1>
      <PostsList />
    </div>
  )
}

export default App
