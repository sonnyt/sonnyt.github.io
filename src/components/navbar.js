import { Link } from 'gatsby';
import React from 'react';

function Navbar() {
  return (
    <>
      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
      <nav>
        <ul>
          <li>
            <a href="#">
              <i className="ri-pencil-line"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-flask-line"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-service-line"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
