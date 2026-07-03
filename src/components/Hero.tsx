import { Link } from 'react-router-dom'
import { siteConfig } from '../constants/site'
import { heroImage } from '../content/siteContent'

export function Hero() {
  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Digital Solutions</p>
          <h1>{siteConfig.heroTitle}</h1>
          <p className="hero-copy__lead">{siteConfig.heroSubtitle}</p>
          <div className="hero-actions">
            <Link className="button" to="/solutions">
              Explore Solutions
            </Link>
            <a className="button button--ghost" href={`mailto:${siteConfig.email}`}>
              Start a Project
            </a>
          </div>
          <div className="hero-trust">
            <span className="hero-trust__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            Trusted by retail, dining and service businesses since 2015
          </div>
        </div>

        <div className="hero-visual">
          <span className="hero-visual__glow" aria-hidden="true" />
          <div className="hero-visual__image">
            <img
              src={heroImage}
              alt="A customer paying with a card at a modern point-of-sale terminal"
              loading="eager"
            />
          </div>
          <div className="hero-badge">
            <span className="hero-badge__icon" aria-hidden="true">
              $
            </span>
            <span>
              <strong>Commission-free</strong>
              <small>Ordering &amp; payments</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
