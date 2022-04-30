import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

  import postImg from '../assets/post.jpg'

const Post = () => {
  return (
    <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "royalblue" }} aria-label="username">
              C
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Conor Doherty"
          subheader="September 14, 2021"
        />
        <CardMedia
          component="img"
          height="120%"
          src={postImg}
          alt="coloured cmoke"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae beatae magnam mollitia omnis dolores dolore id repellendus ipsam, eveniet quo debitis. Quos reiciendis perspiciatis amet nihil nostrum cumque, possimus fugit.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post