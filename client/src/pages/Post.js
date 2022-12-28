import './Post.css';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


function Post(){
  const [singlePost, setSinglePost] = useState([]);
  let { slug } = useParams();
  useEffect(() => {
    const getPost = async (slug) => {
        try {
          const post = await fetch(`http://localHost:8000/${slug}`)
          const updateData = await post.json();
          console.log(updateData)
          setSinglePost(updateData)
          return updateData
        } catch (err) {
          console.log(err.message)
      }
    }
    getPost(slug);
  },[slug]);
    
    return(
      <>
        <CssBaseline />
        <Container maxWidth="lg">   
          <div dangerouslySetInnerHTML={ {__html: singlePost.content} } />
        </Container>
      </>
)}


export default Post;