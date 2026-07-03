import { siteConfig } from '../constants/site'

type ContactBandProps = {
  title: string
  description: string
}

export function ContactBand({ title, description }: ContactBandProps) {
  return (
    <section className="contact-band">
      <div className="shell">
        <div className="contact-inner">
          <div>
            <p className="eyebrow">Contact Us</p>
            <h2>{title}</h2>
            <p className="section-heading__description">{description}</p>
          </div>
          <div className="contact-actions">
            <a className="button button--light" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <a
              className="button button--outline-light"
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`}
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
