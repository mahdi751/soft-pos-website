import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../content/siteContent'
import { siteConfig } from '../constants/site'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="info-bar">
        <div className="shell info-bar__inner">
          <span>{siteConfig.address}</span>
          <div className="info-bar__actions">
            <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`}>{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>
      </div>

      <div className="shell nav-shell">
        <NavLink className="brand" to="/" aria-label={`${siteConfig.brandName} home`} onClick={() => setIsOpen(false)}>
          <span className="brand__mark" aria-hidden="true">
            SP
          </span>
          <span>
            <strong>{siteConfig.brandName}</strong>
            <small>{siteConfig.tagline}</small>
          </span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${isOpen ? 'site-nav--open' : ''}`} aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="button button--small" href={`mailto:${siteConfig.email}`} onClick={() => setIsOpen(false)}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  )
}
