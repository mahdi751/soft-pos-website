import { ContactBand } from '../components/ContactBand'
import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import {
  aboutImage,
  aboutParagraphs,
  featureHighlights,
  heroStats,
  homeSeo,
  serviceCards,
  showcaseItems,
  testimonials,
  workStages,
} from '../content/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  usePageMeta(homeSeo)

  return (
    <>
      <Hero />

      <section className="section section--tight stats-band">
        <div className="shell">
          <div className="stats-grid">
            {heroStats.map((stat) => (
              <div className="stat" key={stat.label}>
                <p className="stat__value">{stat.value}</p>
                <p className="stat__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell about-grid">
          <div className="about-media">
            <img
              src={aboutImage}
              alt="The Soft POS team collaborating in a modern office"
              loading="lazy"
            />
            <span className="about-media__tag">Advisers · Designers · Developers</span>
          </div>
          <div>
            <SectionHeading eyebrow="About Us" title="Who is Soft POS?" />
            <div className="stack">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="feature-list">
              {featureHighlights.map((feature, index) => (
                <div className="feature-item" key={feature.title}>
                  <span className="feature-item__icon" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Hardware & Apps"
            title="One platform, every counter and screen"
            description="From handheld terminals to countertop registers, mobile apps and online ordering — all connected under Soft POS."
            align="center"
          />
          <div className="showcase-grid">
            {showcaseItems.map((item) => (
              <article
                className={`showcase-card${item.wide ? ' showcase-card--wide' : ''}`}
                key={item.title}
              >
                <div className="showcase-card__media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="showcase-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Our Work"
            title="The way we work"
            description="A collaborative process shaped around clarity, delivery discipline, and measurable business value."
            align="center"
          />
          <div className="process-grid">
            {workStages.map((stage, index) => (
              <article className="process-card" key={stage.title}>
                <p className="process-card__index">0{index + 1}</p>
                <h3>{stage.title}</h3>
                <p className="process-card__summary">{stage.summary}</p>
                <ul>
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Platforms"
            title="In-house platforms to run and grow your business"
            description="From point of sale to security, our integrated services help you manage operations, improve your customer base, and extend your reach."
          />
          <div className="services-grid">
            {serviceCards.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card__media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-card__body">
                  <h3>{service.title}</h3>
                  {service.description ? <p>{service.description}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section--dark">
            <div className="section-wrap">
              <SectionHeading
                eyebrow="What Makes Us Standout"
                title="Designed for the future, built for the realities of business"
              />
              <div className="testimonials-grid">
                {testimonials.map((testimonial) => (
                  <blockquote className="testimonial" key={testimonial.quote}>
                    <p className="testimonial__quote">“{testimonial.quote}”</p>
                    <p className="testimonial__author">{testimonial.name}</p>
                    <p className="testimonial__role">{testimonial.role}</p>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBand
        title="Ready to modernize your operations?"
        description="From custom software to in-store and online customer experiences, Soft POS helps you move from idea to launch with one integrated team."
      />
    </>
  )
}
