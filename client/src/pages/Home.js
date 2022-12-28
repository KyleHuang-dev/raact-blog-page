import { useState, useEffect} from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import BottomNavigation from '@mui/material/BottomNavigation';

import FeaturedPost from '../components/FeaturedPost'


function Home(props) {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [pages, setPages] = useState(1);
    
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000");
        const data = await response.json();
        setPages(data.pages)
        setFeaturedPosts(data.posts)
        return data
      } catch (err) {
        console.log(err.message)
      }
    }
    getAllPosts();
  },[]);


  const changePage = async(event, pageNumber) =>{
    try {
      const sendData = {pageNumber: pageNumber};
      const updatePage = await fetch("http://localhost:8000",  {
      method: 'PUT',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(sendData)
    });

    const updateData = await updatePage.json();
    setFeaturedPosts(updateData);
    console.log(updateData)
    } catch (err) {
      console.log(err.message)
    }
  }

    return (
       <>
        <CssBaseline />
        <Container maxWidth="lg">   
          <Grid container  sx={{ m: 2 }} >
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </Grid>
        </Container>
        <BottomNavigation >
          <Stack spacing={1}>
            <Pagination count={pages} color = "primary" onChange={changePage} />
          </Stack>
        </BottomNavigation>
       </>
    )
}

export default Home;