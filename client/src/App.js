import React,{useEffect,useState} from 'react';
import { styled } from '@mui/system';
import { AppBar, Container, Grid, Typography } from '@mui/material';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux'
import {getPosts}  from './actions/posts';
const StyledContainer = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(3, 0),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary,
}));

const StyledImage = styled('img')(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const App = () => {
  const [currentId, setCurrentId] = useState(0);





  console.log(currentId,"currentid")

  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(getPosts());
}, [currentId, dispatch]);

return (
    <StyledContainer maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <StyledTypography variant="h2" align="center">
          Memories
        </StyledTypography>
        <StyledImage src={memories} alt="icon" height="60" />
      </StyledAppBar>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default App;
