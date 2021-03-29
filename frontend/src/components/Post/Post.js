import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import defaultPic from "../../images/bg2.jpg";

import { deletePost, likePost } from "../../actions/posts";
import { useDispatch } from "react-redux";

import moment from "moment";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Card className={classes.card}>
      {post.selectedFile ? (
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.name}
        />
      ) : (
        <CardMedia
          className={classes.media}
          image={defaultPic}
          title={post.name}
        />
      )}
      <div className={classes.overlay}>
        <Typography variant="h6">{post.username}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        {(user?.result?.googleId === post?.creator ||
          user?.result._id === post?.creator) && (
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <FaEllipsisH fontSize="default" />
          </Button>
        )}
      </div>
      <CardContent>
        <div className={classes.title}>
          <Typography variant="h5" gutterBottom>
            {post.comments}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          disabled={!user?.result}
          size="small"
          color="primary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <FaStar fontSize="small" /> Like {post.score.length}
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result._id === post?.creator) && (
          <Button
            disabled={!user?.result}
            size="small"
            color="primary"
            onClick={() => {
              dispatch(deletePost(post._id));
            }}
          >
            <FaTrash fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
