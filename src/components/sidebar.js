import { Link } from 'gatsby';
import React from 'react';

function Sidebar() {
  return (
    <>
      <style jsx>{`
        aside {
          padding: 1.5rem;
          background-color: #f4f4f4;
          position: sticky;
          top: 0;
        }
      `}</style>
      <aside>Sidebar</aside>
    </>
  )
}

export default Sidebar;
