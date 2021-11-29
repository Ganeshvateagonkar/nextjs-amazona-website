import Head from 'next/head';
import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All right reserved. Next Amazona</Typography>
      </footer>
    </div>
  );
};

export default Layout;
