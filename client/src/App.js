import './App.css';
import { Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Post from './pages/Post'
import Header from './components/Header';
import Footer from './components/Footer';

import Container from '@mui/material/Container';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const sections = [
  { title: 'Home', url: '/' },
];


function App() {
  return (  
    <Container maxWidth="lg"> 
      <Header title="Kyle's Coding Challenge" sections={sections} />

      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/:slug" element={<Post />} />
      </Routes> 

      <Box sx={{ pb: 6 }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={1}>
          <BottomNavigation >
            <Footer description="Have a nice day and Happy New Year!" />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
