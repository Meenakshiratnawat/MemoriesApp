import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/system';

import { likePost, deletePost } from '../../../actions/posts';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
}));

const Overlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

const Overlay2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
});

const Details = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

const StyledTitle = styled(Typography)({
  padding: '0 16px',
});

const StyledCardActions = styled(CardActions)({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <StyledCard>
      <StyledCardMedia
        image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
        title={post.title}
      />
      <Overlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </Overlay>
      <Overlay2>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
        {/* <Button style={{ color: 'white' }} size="small" > */}

          <MoreHorizIcon fontSize="default" />
        </Button>
      </Overlay2>
      <Details>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Details>
      <StyledTitle gutterBottom variant="h5" component="h2">
        {post.title}
      </StyledTitle>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <StyledCardActions>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Post;
