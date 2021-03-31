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

import {
  PostContainer,
  TitleContainer,
  InfoContainer,
  CommentsContainer,
  Overlay,
  ImageContainer,
} from "./PostStyle";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <PostContainer>
      <ImageContainer>
        {post.selectedFile ? (
          <img src={post.selectedFile} alt={post.name} />
        ) : (
          <img src={defaultPic} alt={post.name} />
        )}
      </ImageContainer>
      <Overlay>Okami Kasu but lots of text to test out</Overlay>
      <TitleContainer>{moment(post.createdAt).fromNow()}</TitleContainer>
      <InfoContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          fugiat nulla explicabo minus exercitationem aliquid numquam pariatur
          quasi nihil voluptas alias accusamus quis, esse impedit, quo dolorum
          quas ipsa odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          numquam unde dolores vel. Vero assumenda nostrum blanditiis voluptate
          sint, voluptates adipisci obcaecati dolorem ex, alias, ratione eius
          architecto? Rem, magnam!
        </p>
      </InfoContainer>
      <CommentsContainer>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet esse
        corrupti, quibusdam doloremque similique maiores fuga dolorem ratione
        distinctio fugiat, aliquid temporibus, suscipit labore totam! Suscipit
        tempore atque quod molestias.
      </CommentsContainer>
    </PostContainer>
  );

  // return (
  //   <Card className={classes.card}>
  //     {post.selectedFile ? (
  //       <CardMedia
  //         className={classes.media}
  //         image={post.selectedFile}
  //         title={post.name}
  //       />
  //     ) : (
  //       <CardMedia
  //         className={classes.media}
  //         image={defaultPic}
  //         title={post.name}
  //       />
  //     )}
  //     <div className={classes.overlay}>
  //       <Typography variant="h6">{post.username}</Typography>
  //       <Typography variant="body2">
  //         {moment(post.createdAt).fromNow()}
  //       </Typography>
  //     </div>
  //     <div className={classes.overlay2}>
  //       {(user?.result?.googleId === post?.creator ||
  //         user?.result._id === post?.creator) && (
  //         <Button
  //           style={{ color: "white" }}
  //           size="small"
  //           onClick={() => setCurrentId(post._id)}
  //         >
  //           <FaEllipsisH fontSize="default" />
  //         </Button>
  //       )}
  //     </div>
  //     <CardContent>
  //       <div className={classes.title}>
  //         <Typography variant="h5" gutterBottom>
  //           {post.comments}
  //         </Typography>
  //       </div>
  //     </CardContent>
  //     <CardActions>
  //       <Button
  //         disabled={!user?.result}
  //         size="small"
  //         color="primary"
  //         onClick={() => {
  //           dispatch(likePost(post._id));
  //         }}
  //       >
  //         <FaStar fontSize="small" /> Like {post.score.length}
  //       </Button>
  //       {(user?.result?.googleId === post?.creator ||
  //         user?.result._id === post?.creator) && (
  //         <Button
  //           disabled={!user?.result}
  //           size="small"
  //           color="primary"
  //           onClick={() => {
  //             dispatch(deletePost(post._id));
  //           }}
  //         >
  //           <FaTrash fontSize="small" /> Delete
  //         </Button>
  //       )}
  //     </CardActions>
  //   </Card>
  // );
};

export default Post;
