'use client'
// components/Navbar.js
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const pathname = usePathname()
  const navigation = [
    { href: '/', label: 'Home', path: '/' },
    { href: '/skills', label: 'Skills', path: '/skills' },
    { href: '/experience', label: 'Experience', path: '/experience' },
    { href: '/open-source', label: 'Open Source', path: '/open-source' },
    { href: '/projects', label: 'Projects', path: '/projects' },
    { href: '/contact', label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image
            src="/Images/navbarImg.png"
            alt="Chaitanya Portfolio"
            width={131}
            height={40}
            style={{ width: 'auto' }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isMobileNavOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse btnColor collapse ${isMobileNavOpen ? 'show' : ''}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            {navigation.map((item) => (
              <Link
                className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                href={item.href}
                key={item.label}
                aria-current={pathname === item.path ? 'page' : undefined}
                onClick={() => setIsMobileNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="nav-link"
              href="https://flowcv.com/resume/dknft98k3a"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
