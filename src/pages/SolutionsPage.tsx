import { ContactBand } from '../components/ContactBand'
import { SectionHeading } from '../components/SectionHeading'
import {
  detailedServices,
  industrySolutions,
  solutionsSeo,
} from '../content/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

export function SolutionsPage() {
  usePageMeta(solutionsSeo)

  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero__inner">
          <p className="eyebrow">Our Solutions &amp; Services</p>
          <h1>POS software and hardware built for your industry</h1>
          <p className="hero-copy__lead">
            Our in-house developed platforms help you manage your business, improve your customer
            base, and extend your reach.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Industry Fit"
            title="Best built for your industry"
            description="Retail, salons, spas, and dining teams all need connected operations, payment flows, and reporting."
          />
          <div className="industry-grid">
            {industrySolutions.map((industry) => (
              <article className="industry-card" key={industry.title}>
                <div className="industry-card__media">
                  <img src={industry.image} alt={industry.title} loading="lazy" />
                </div>
                <div className="industry-card__body">
                  <h3>{industry.title}</h3>
                  <p className="industry-card__tagline">{industry.tagline}</p>
                  <ul>
                    {industry.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Service Detail"
            title="A complete digital operations stack"
            description="Everything you need to sell, serve, and grow — delivered by one coordinated team."
          />
          <div className="details-list">
            {detailedServices.map((service) => (
              <article className="detail-card" key={service.title}>
                <div className="detail-card__media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="detail-card__body">
                  <p className="eyebrow">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <div className="stack">
                    {service.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <ul className="detail-card__bullets">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        title="Need a platform tailored to your business?"
        description="Soft POS combines POS, ordering, design, app development, payments, and smart security into one coordinated delivery model."
      />
    </>
  )
}
