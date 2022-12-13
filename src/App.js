
import React, { useEffect } from "react";
import axios from "axios";
import useApi from "./hooks/useApi";
const getUsername = () =>
  axios.get("https://jsonplaceholder.typicode.com/users");

const getPosts = () => axios.get("https://jsonplaceholder.typicode.com/posts");
const getComments = () =>
  axios.get("https://jsonplaceholder.typicode.com/comments?postId=1");

export default function App() {
  const getUsernameApi = useApi(getUsername);

  const getPostsApi = useApi(getPosts);
  const getCommentsApi = useApi(getComments);

  useEffect(() => {
    getUsernameApi.request();
    getPostsApi.request();
    getCommentsApi.request();
  }, []);

  return (
    <div className="App">
      {/* Post List */}
      <div>
        <h1>Username</h1>
        <ul>
          {getUsernameApi.data?.map((username) => (
            <li key={username.id}>{username.username} </li>
            
          ))}
          
        </ul>
      </div>
      <div>
        <h1>Posts</h1>
        
        <ul>
          {getPostsApi.data?.map((post) => (
            <li key={post.title}>{post.title}</li>
          ))}
        </ul>
      </div>
      {/* Comment List */}
      <div>
        <h1>Comments</h1>
        <ul>
          {getCommentsApi.data?.map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
