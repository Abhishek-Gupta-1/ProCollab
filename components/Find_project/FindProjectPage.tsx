"use client";


import * as React from "react"
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

import Navbar from '../dashboard/Navbar';
import Cards from '../dashboard/Cards';
import Footer from '../dashboard/Footer';


const defaultTheme = createTheme();

export default function FindProjectPage() {
  return (
    <>
    <Navbar />
{/* --------------------Hero Section Start---------------------- */}
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
        <main>
        <Box
          sx={{
            width: 1,
            pt: 5,
            bgcolor: 'black',
            backgroundColor: 'red',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Container sx= {{ pb: 10  }} >
            <Typography
              variant="h2"
              align="center"
              color="#FFFFFF" 
            >
             Search Among 1000+ Projects
            </Typography>
          </Container>
        </Box>    
        {/* -------------Hero Section End----------------------- */}

      </main>
    </ThemeProvider>

    {/* <Cards /> */}
    {/* <Footer /> */}

    </>

  );
}
