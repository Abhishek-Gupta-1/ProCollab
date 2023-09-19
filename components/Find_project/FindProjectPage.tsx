"use client";

import * as React from "react"
import { Button, CssBaseline, Grid, Stack, Box, Typography, Container, Link } from '@mui/material';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Image from 'next/image';
import { Input, FormControl, FormLabel, FormHelperText } from '@mui/joy';
import Autocomplete from "@mui/joy/Autocomplete";

// Importing Components:- 
import Navbar from '../dashboard/Navbar';
import Cards from '../dashboard/Cards';
import Footer from '../dashboard/Footer';

const defaultTheme = createTheme();

const options = [
  { label: 'All', id: 1 },
  { label: 'Software', id: 2 },
  { label: 'Hardware', id: 3 },
];

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
              backgroundColor: '#E50914',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Container sx={{ pb: 10 }} >
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

      {/* -----------------Search Category---------------------------------- */}
      <FormControl sx={{ pt: 5, pl: 5 }}>
        <FormLabel>Search Project</FormLabel>
        <Input color="primary"
          placeholder="Enter Project details"
          size="lg"
          variant="outlined" sx={{ '--Input-focused': 1, width: 256 }} />
      </FormControl>

      <FormControl>
        <FormLabel>Category</FormLabel>
        <Autocomplete
          placeholder="Select Category"
          options={options}
          sx={{ width: 300 }}
        />
      </FormControl>

      {/* <Cards /> */}
      {/* <Footer /> */}
    </>
  );
}