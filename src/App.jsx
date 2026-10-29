
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";

const projects = [
  {
    name: "Forma",
    category: "Architecture & interiors",
    description: "A calmer way to experience modern spaces.",
    className: "forma",
    number: "01",
    link:"https://www.prashant-sharma.com.np/"
  },
  {
    name: "Sunday Supply",
    category: "Lifestyle & e-commerce",
    description: "Everyday essentials, presented differently.",
    className: "sunday",
    number: "02",
    link:"https://www.prashant-sharma.com.np/"
  },
  {
    name: "Northstar",
    category: "Creative consultancy",
    description: "A sharper digital home for ambitious ideas.",
    className: "northstar",
    number: "03",
    link:"https://www.prashant-sharma.com.np/"
  },
  {
    name: "Offscript",
    category: "Fashion & culture",
    description: "Built for a brand that refuses to blend in.",
    className: "offscript",
    number: "04",
    link:"https://oasis-creation.vercel.app/"
  },
];

const services = [
  {
    number: "01",
    title: "Website design",
    description:
      "Distinctive layouts, thoughtful typography, and a clear experience for your customers.",
  },
  {
    number: "02",
    title: "Website development",
    description:
      "Responsive, fast-loading websites that work smoothly across phones, tablets, and desktops.",
  },
  {
    number: "03",
    title: "Landing pages",
    description:
      "Focused pages that communicate your offer clearly and make it easy to get in touch.",
  },
  {
    number: "04",
    title: "Website redesign",
    description:
      "Give an outdated website a more considered look and a better user experience.",
  },
];

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Webly home">
        <span className="brand-mark">
          <span />
          <span />
          <span />
        </span>
        <span>Webly</span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/studio">Studio</NavLink>
      </nav>

      <Link to="https://api.whatsapp.com/send/?phone=9779702677993" className="header-cta">
        Let's talk <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Link to="/" className="footer-brand">
        webly<span>.</span>
      </Link>

      <p>Good websites make a difference.</p>

      <a href="https://api.whatsapp.com/send/?phone=9779702677993">
        Get in touch <span aria-hidden="true">↗</span>
      </a>
    </footer>
  );
}

function ProjectArtwork({ project }) {
  return (
    <div className={`project-artwork ${project.className}`}>
      {project.className === "forma" && (
        <div className="forma-scene">
          <div className="forma-sun" />
          <div className="forma-building forma-building-one" />
          <div className="forma-building forma-building-two" />
          <div className="forma-floor" />
          <span className="art-word">forma.</span>
        </div>
      )}

      {project.className === "sunday" && (
        <div className="sunday-scene">
          <span className="sunday-small">THE GOOD EVERYDAY</span>
          <span className="sunday-word">Take it<br />slow.</span>
          <div className="sunday-object sunday-object-one" />
          <div className="sunday-object sunday-object-two" />
          <div className="sunday-object sunday-object-three" />
        </div>
      )}

      {project.className === "northstar" && (
        <div className="northstar-scene">
          <div className="northstar-orbit orbit-one" />
          <div className="northstar-orbit orbit-two" />
          <div className="northstar-star">✳</div>
          <span className="northstar-word">Find your<br />north.</span>
        </div>
      )}

      {project.className === "offscript" && (
        <div className="offscript-scene">
          <span className="offscript-word">NOT<br />HERE TO<br /><i>FIT IN.</i></span>
          <div className="offscript-shape" />
          <span className="offscript-mark">O/S</span>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Link to={project.link} className="project-card">
      <div className="project-image">
        <ProjectArtwork project={project} />
        <span className="project-open" aria-hidden="true">↗</span>
      </div>

      <div className="project-details">
        <div>
          <h3>{project.name}</h3>
          <p>{project.category}</p>
        </div>
        <span className="project-number">{project.number}</span>
      </div>
    </Link>
  );
}

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <h1>
              Your next website
              <br />
              should feel <span>different.</span>
            </h1>

            <div className="hero-bottom">
              <p>
                We design and build thoughtful websites for businesses ready
                to stand out.
              </p>

              <Link to="https://api.whatsapp.com/send/?phone=9779702677993" className="round-link" aria-label="Start a project">
                <span aria-hidden="true">↘</span>
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-grid" />
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-core">
              <div className="hero-core-shape">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="hero-side-note">Ideas into experiences.</div>
          </div>
        </section>

        <section className="work-section section-wrap">
          <div className="section-heading">
            <h2>Selected work<span>.</span></h2>
            <Link to="/work" className="text-link">
              Explore our work <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="project-grid">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <div className="project-grid project-grid-second">
            {projects.slice(2).map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="services-section">
          <div className="section-wrap services-inner">
            <div className="services-intro">
              <h2>
                Good design.
                <br />
                No unnecessary
                <br />
                <span>complications.</span>
              </h2>
              <p>
                From the first idea to the finished website, we keep the
                process clear and the details intentional.
              </p>
            </div>

            <div className="service-list">
              {services.map((service) => (
                <div className="service-row" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-cta section-wrap">
          <h2>
            Have something
            <br />
            <span>in mind?</span>
          </h2>
          <div className="closing-cta-bottom">
            <p>Let's turn it into a website worth remembering.</p>
            <Link to="https://api.whatsapp.com/send/?phone=9779702677993" className="button-link">
              Start a project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Work() {
  return (
    <>
      <main className="inner-page section-wrap">
        <div className="inner-heading">
          <h1>
            Work that
            <br />
            makes an <span>impression.</span>
          </h1>
          <p>
            A collection of website concepts exploring different brands,
            industries, and visual directions.
          </p>
        </div>

        <div className="project-grid work-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <section className="work-bottom">
          <h2>Your business could be next.</h2>
          <Link to="https://api.whatsapp.com/send/?phone=9779702677993" className="button-link">
            Let's talk <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Studio() {
  return (
    <>
      <main className="inner-page studio-page">
        <section className="studio-hero section-wrap">
          <h1>
            Small details.
            <br />
            <span>Big difference.</span>
          </h1>
          <p>
            Webly helps businesses build a stronger online presence through
            carefully designed, easy-to-use websites.
          </p>
        </section>

        <section className="studio-statement">
          <div className="section-wrap">
            <p>
              A website shouldn't just exist. It should tell people who you
              are, make your value clear, and give them a reason to choose you.
            </p>
          </div>
        </section>

        <section className="studio-services section-wrap">
          <h2>What we can help with</h2>
          <div className="service-list">
            {services.map((service) => (
              <div className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <h2>
              Let's make
              <br />
              something <span>good.</span>
            </h2>
            <p>
              Tell us about your business and what you'd like your website
              to do.
            </p>
            <a className="button-link" href="https://api.whatsapp.com/send/?phone=9779702677993">
              Whatsapp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </BrowserRouter>
  );
}
