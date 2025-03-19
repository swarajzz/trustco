"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import type { NavItem } from "@/data/navigation"
import "../styles/header.css"

interface HeaderProps {
  mainItems: NavItem[]
  authItems: NavItem[]
}

export function Header({ mainItems, authItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
        <nav className="nav">
          <div>
            <Link href="/">
              <Image
                src="/images/Logo/Logo.svg"
                alt="Trustco Logo"
                width={50}
                height={24}
                className="logo"
              />
            </Link>
          </div>

          <div className="main-nav">
            <ul className="main-nav-list">
              {mainItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="main-nav-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="auth-nav">
            <Link href={authItems[0].href} className="login-link">
              {authItems[0].title}
            </Link>
            <Link href={authItems[1].href} className="signup-button">
              {authItems[1].title}
            </Link>
          </div>

          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="mobile-menu-content">
            {mainItems.map((item) => (
              <Link key={item.title} href={item.href} className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                {item.title}
              </Link>
            ))}
            <div className="mobile-menu-auth">
              <Link href={authItems[0].href} className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                {authItems[0].title}
              </Link>
              <Link href={authItems[1].href} className="mobile-signup-button" onClick={() => setIsMenuOpen(false)}>
                {authItems[1].title}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

