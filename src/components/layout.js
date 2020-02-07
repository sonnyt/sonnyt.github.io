import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Navbar from './navbar';
import Sidebar from './sidebar';

function Layout({ children }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap-reboot.min.css');

        body {
          color: #242938;
        }

        .container {
          display: grid;
          grid-template-columns: 75px auto 300px;
          min-height: 100vh;
        }
      `}</style>
      <div className="container">
        <Navbar />

        <main>{children}</main>

        <Sidebar />
      </div>
    </>
  );
}

export default Layout;
