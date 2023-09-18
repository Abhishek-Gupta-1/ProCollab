"use client";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
//Navbar **************************************
export default function Navbar() {
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
      </ThemeProvider>
     
)
}
