import { NavLink } from 'react-router-dom'
import { navigationItems } from '../content/siteContent'
import { siteConfig } from '../constants/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true">
              SP
            </span>
            <span>
              <strong>{siteConfig.brandName}</strong>
              <small>We design and develop custom software applications to optimize processes and generate growth through digital transformation.</small>
            </span>
          </div>
        </div>

        <div>
          <p className="footer-title">Overview</p>
          <div className="footer-links">
            {navigationItems.map((item) => (
              <NavLink key={item.path} to={item.path} className="footer-link">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-title">Contact Information</p>
          <div className="footer-contact">
            <p>{siteConfig.address}</p>
            <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`}>{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <p>{siteConfig.hours}</p>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>Copyright © {new Date().getFullYear()}, {siteConfig.brandName}</span>
        <span>{siteConfig.hours}</span>
      </div>
    </footer>
  )
}
