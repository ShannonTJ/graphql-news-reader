import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "../Post/Post";
import { GridItem, PostsContainer } from "./PostsStyle";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <PostsContainer>
      {posts.map((post) => (
        <Post post={post} setCurrentId={setCurrentId} key={post._id} />
      ))}
    </PostsContainer>
  );
};

export default Posts;
