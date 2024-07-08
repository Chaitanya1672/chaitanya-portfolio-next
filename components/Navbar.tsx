// components/Navbar.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          href="https://chaitanya-potfolio.vercel.app/"
        >
          <Image src="/navbarImg.svg" alt="Brand Logo" width={50} height={50} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse btnColor collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            <Link
              className="nav-link"
              href="https://chaitanya-potfolio.vercel.app/"
            >
              Home
            </Link>
            <Link className="nav-link" href="/open-source">
              Open Source
            </Link>
            {/* <Link className="nav-link" href="#skills">Skills</Link>
            <Link className="nav-link" href="#experience">Experience</Link>
            <Link className="nav-link" href="#projects">Projects</Link>
            <Link className="nav-link" href="#contact">Contact</Link> */}
            <Link
              className="nav-link"
              href="https://flowcv.com/resume/dknft98k3a"
              target="_blank"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
