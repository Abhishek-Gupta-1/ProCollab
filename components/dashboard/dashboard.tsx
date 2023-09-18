"use client";


import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Image from 'next/image';

import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';


const defaultTheme = createTheme();

export default function Dashboard() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
        {/* ----------------Hero unit ---------------------------*/}
        <main>
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
        {/* -------------Hero Section End----------------------- */}

        <Cards />
        <Footer />

      </main>
    </ThemeProvider>
  );
}
