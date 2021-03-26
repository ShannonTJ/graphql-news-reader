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

import moment from "moment";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.name}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.username}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <FaEllipsisH fontSize="default" />
        </Button>
      </div>
      <CardContent>
        <div className={classes.title}>
          <Typography variant="h5" gutterBottom>
            {post.comments}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          <FaStar fontSize="small" /> Like {post.score}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <FaTrash fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
