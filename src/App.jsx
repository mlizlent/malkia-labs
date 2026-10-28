import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      
      <header className="site-header">
        <div className="container">
          <div className="site-header__brand">
            <span className="site-header__wordmark">Malkia <span style={{color: 'var(--lilac-700)'}}>Labs</span></span>
          </div>
          
          <nav className="nav" aria-label="Primary">
            <ul className="nav-links">
              <li><a href="#who-we-are">Who We Are</a></li>
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#team">Our Team</a></li>
            </ul>
          </nav>
          
          <div className="site-header__actions">
            <a href="#footer" className="btn btn--primary btn--sm">Get in Touch</a>
            <details className="menu-toggle">
              <summary className="menu-toggle__btn" aria-label="Menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </summary>
              <div className="menu-panel">
                <a href="#who-we-are">Who We Are</a>
                <a href="#approach">Our Approach</a>
                <a href="#team">Our Team</a>
                <a href="#footer" className="btn btn--primary">Get in Touch</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="hero" className="hero">
          <div className="container">
            <div className="hero__content">
              <h1>Malkia Labs</h1>
              <p className="hero__tagline">Crowning the African Tech</p>
              <p className="hero__sub">
                To build technology that works for women, and to create opportunities for women to build it.
              </p>
              <div className="hero__actions">
                <a href="#approach" className="btn btn--primary">Our Approach</a>
                <a href="#footer" className="btn btn--secondary">Get in Touch</a>
              </div>
            </div>
            <div className="hero__art" aria-hidden="true">
              <svg className="hero__shape hero__shape--1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" fill="var(--lilac-200)" opacity="0.6"/>
              </svg>
              <svg className="hero__shape hero__shape--2" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="110" height="110" rx="20" fill="var(--lilac-300)" opacity="0.5"/>
              </svg>
              <svg className="hero__shape hero__shape--3" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="50" fill="var(--lilac-500)" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </section>

        <section id="who-we-are" className="section">
          <div className="container">
            <div className="who">
              <div className="who__intro">
                <span className="eyebrow">Who We Are</span>
                <h2>A women-led technology company, built in Kisumu</h2>
                <p style={{marginTop: 'var(--space-4)'}}>
                  Malkia Labs is a women-led technology company proudly founded at Zone01 Kisumu, Kenya's leading peer-learning software engineering school.
                </p>
              </div>
              <div className="who__cards">
                <article className="card card--problem">
                  <h3 style={{marginBottom: 'var(--space-3)'}}>The Problem</h3>
                  <p>Women make up less than <span style={{fontWeight: 700, color: 'var(--lilac-700)', fontFamily: 'Poppins'}}>30%</span> of tech founders in Kenya, leaving many everyday problems without purpose-built digital solutions.</p>
                </article>
                <article className="card card--solution">
                  <h3 style={{marginBottom: 'var(--space-3)'}}>The Solution</h3>
                  <p>Our team of trained engineers and designers builds products informed directly by the women they serve, to address persistent, underserved challenges with scalable solutions.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="vision-values" className="section section--tint">
          <div className="container">
            <div style={{marginBottom: 'var(--space-8)'}}>
              <span className="eyebrow">Our Vision</span>
              <h2 style={{marginBottom: 'var(--space-6)'}}>Where women shape technology</h2>
              <div className="vision">
                A world where women are full participants in shaping technology, and where every woman has digital tools that help her thrive.
              </div>
            </div>
            
            <div>
              <h3 style={{marginBottom: 'var(--space-6)'}}>Our Values</h3>
              <div className="values">
                <article className="card" style={{textAlign: 'center'}}>
                  <div className="icon-chip" style={{margin: '0 auto var(--space-4)'}}>
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 style={{fontSize: '1rem', marginBottom: 'var(--space-2)'}}>Women at the Center</h3>
                  <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Building collaboratively with the people served.</p>
                </article>
                
                <article className="card" style={{textAlign: 'center'}}>
                  <div className="icon-chip" style={{margin: '0 auto var(--space-4)'}}>
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 style={{fontSize: '1rem', marginBottom: 'var(--space-2)'}}>Practical Impact</h3>
                  <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Delivering simple, effective tools that solve real problems.</p>
                </article>
                
                <article className="card" style={{textAlign: 'center'}}>
                  <div className="icon-chip" style={{margin: '0 auto var(--space-4)'}}>
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <h3 style={{fontSize: '1rem', marginBottom: 'var(--space-2)'}}>Boldness</h3>
                  <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Channelling the "queen" aspect of the name into confidence and absolute product ownership.</p>
                </article>
                
                <article className="card" style={{textAlign: 'center'}}>
                  <div className="icon-chip" style={{margin: '0 auto var(--space-4)'}}>
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 style={{fontSize: '1rem', marginBottom: 'var(--space-2)'}}>Learning & Collaboration</h3>
                  <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Rooted deeply in the peer-learning spirit of Zone01 Kisumu.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="section">
          <div className="container">
            <div style={{marginBottom: 'var(--space-8)'}}>
              <span className="eyebrow">Our Approach</span>
              <h2>A product-led pipeline</h2>
            </div>
            <div className="steps">
              <article className="step card">
                <div className="step__num">01</div>
                <h3 style={{marginBottom: 'var(--space-2)'}}>Product-Led</h3>
                <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Absolute focus on building real, impactful digital products instead of tech services.</p>
              </article>
              <article className="step card">
                <div className="step__num">02</div>
                <h3 style={{marginBottom: 'var(--space-2)'}}>User-Driven</h3>
                <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Validating every single problem through direct engagement with target users before writing code.</p>
              </article>
              <article className="step card">
                <div className="step__num">03</div>
                <h3 style={{marginBottom: 'var(--space-2)'}}>Lean & Mobile-First</h3>
                <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Launching simple, low-data products optimized for local market infrastructure and iterating based on real usage.</p>
              </article>
              <article className="step card">
                <div className="step__num">04</div>
                <h3 style={{marginBottom: 'var(--space-2)'}}>Scalable</h3>
                <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Growing a diverse portfolio of products designed to improve women's economic participation, safety, and wellbeing across Kenya and the wider region.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="team" className="section section--grey">
          <div className="container">
            <div style={{marginBottom: 'var(--space-8)', textAlign: 'center'}}>
              <span className="eyebrow">Our Team</span>
              <h2>The full product lifecycle, in-house</h2>
              <p style={{marginTop: 'var(--space-4)', marginLeft: 'auto', marginRight: 'auto'}}>
                A cross-functional team handling everything from research and design to engineering, AI/ML, and delivery.
              </p>
            </div>
            <div className="team">
              <article className="card team__card">
                <div className="avatar">ML</div>
                <div className="team__info">
                  <h3 style={{fontSize: '1.125rem', marginBottom: 'var(--space-1)'}}>Meroline Lizlent</h3>
                  <p style={{color: 'var(--lilac-700)', fontWeight: 600, fontSize: 'var(--fs-small)', marginBottom: 'var(--space-2)', maxWidth: '100%'}}>SEO Specialist, Full Stack Developer & AI/ML Engineer</p>
                  <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Focusing on frontend development and product design.</p>
                </div>
              </article>
              <article className="card team__card">
                <div className="avatar">II</div>
                <div className="team__info">
                  <h3 style={{fontSize: '1.125rem', marginBottom: 'var(--space-1)'}}>Ivy Imoh</h3>
                  <p style={{color: 'var(--lilac-700)', fontWeight: 600, fontSize: 'var(--fs-small)', marginBottom: 'var(--space-2)', maxWidth: '100%'}}>Product Designer</p>
                  <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Leading user research and user-centered design.</p>
                </div>
              </article>
              <article className="card team__card">
                <div className="avatar">GN</div>
                <div className="team__info">
                  <h3 style={{fontSize: '1.125rem', marginBottom: 'var(--space-1)'}}>Grace Nyaboke</h3>
                  <p style={{color: 'var(--lilac-700)', fontWeight: 600, fontSize: 'var(--fs-small)', marginBottom: 'var(--space-2)', maxWidth: '100%'}}>Frontend Development Lead</p>
                  <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Full stack developer leading frontend architecture and implementation.</p>
                </div>
              </article>
              <article className="card team__card">
                <div className="avatar">TM</div>
                <div className="team__info">
                  <h3 style={{fontSize: '1.125rem', marginBottom: 'var(--space-1)'}}>Taheera Mohamed</h3>
                  <p style={{color: 'var(--lilac-700)', fontWeight: 600, fontSize: 'var(--fs-small)', marginBottom: 'var(--space-2)', maxWidth: '100%'}}>Project Manager</p>
                  <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Full stack developer overseeing planning and delivery.</p>
                </div>
              </article>
              <article className="card team__card">
                <div className="avatar">EO</div>
                <div className="team__info">
                  <h3 style={{fontSize: '1.125rem', marginBottom: 'var(--space-1)'}}>Emmaculate Odhiambo</h3>
                  <p style={{color: 'var(--lilac-700)', fontWeight: 600, fontSize: 'var(--fs-small)', marginBottom: 'var(--space-2)', maxWidth: '100%'}}>Full Stack Developer</p>
                  <p style={{fontSize: 'var(--fs-small)', maxWidth: '100%'}}>Backend specialist in Django.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <div className="container">
          <div className="site-footer__top">
            <div className="site-footer__brand">
              <div className="site-footer__wordmark">Malkia <span style={{color: 'var(--lilac-300)'}}>Labs</span></div>
              <p className="site-footer__summary">Malkia Labs — Thoughtful technology, designed with her in mind.</p>
            </div>
            <nav className="site-footer__nav" aria-label="Footer">
              <ul className="site-footer__links">
                <li><a href="#who-we-are">Who We Are</a></li>
                <li><a href="#approach">Our Approach</a></li>
                <li><a href="#team">Our Team</a></li>
              </ul>
            </nav>
          </div>
          <div className="site-footer__bottom">
            <p>© 2026 Malkia Labs · Proudly rooted in Kisumu, Kenya.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
