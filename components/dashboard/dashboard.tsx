"use client";


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Image from 'next/image';


import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © ProCollab '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
//Navbar **************************************
export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          {/* lOGO */}
          <Typography variant="h4" color="inherit" noWrap position="relative">
            ProCollab
          </Typography>
        <Link variant="h6" color="#FFFFFF" noWrap style={{ textDecoration: 'none' }} position="relative" sx={{ pl : 85}}>Home</Link>
          <Link variant="h6" color="#FFFFFF" noWrap style={{ textDecoration: 'none' }} position="relative" sx={{ pl : 3 }} href="" > Collaboration</Link>
          <Link variant="h6" color="#FFFFFF" noWrap style={{ textDecoration: 'none' }} position="relative" sx={{ pl : 3 }} href="" > Search Projects</Link>
          <Link variant="h6" color="#FFFFFF" noWrap style={{ textDecoration: 'none' }} position="relative" sx={{ pl : 3 , pr: 3}} href="" > Upload Projects</Link>
          <Button variant="contained" color="success" href="#contained-buttons">Login</Button>
        </Toolbar>
      </AppBar>
      <main>

{/* ----------------------------------------------------------------------/}
        {/* ----------------Hero unit ---------------------------*/}
        <Box
          sx={{
            width: 1,
            bgcolor: 'black',
            backgroundImage: 'url(https://i.postimg.cc/3xrfBBXs/hero.jpg)', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            
            pt: 10,
            backgroundPosition: 'center'
          }}
          
        >
          <Container sx= {{   }} >
            <Typography
              component="h1"
              variant="h1"
              align="left"
              color="text.primary"
              
            >
             Inspire Collaborate
            </Typography>
            <Typography
            component="h4"
            variant="h5"
            align='left'
            color="text.primary"
            // sx = {{ pb : 10}}
            >
            Connecting Minds
            </Typography>
            
            <Stack
              sx={{ pt: 8, pb : 30 }}
              direction="row"
              spacing={2}
              justifyContent="center"
              
              
            >
              <Button variant="contained">Upload Project</Button>
              <Button variant="contained">Search Project</Button>
            </Stack>
          </Container>
        </Box>
        <Typography
        variant='h4'
        align='center'
        color="red"
        fontWeight="medium"
        sx={{ mt: 4 }}

        >
          ~Projects~
        </Typography>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Collaborate</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))} 
          </Grid>
        </Container>
      </main>
      {/* ------Pagination----------- */}
    
{/* =============Pagination END============ */}


      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        
 
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
