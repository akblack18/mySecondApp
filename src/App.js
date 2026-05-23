import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const [showAnchor, setShowAnchor] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowAnchor(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">

      {/* TOP UTILITY BAR */}
      <div className="topBar">
        <div className="container topBarInner">
          <div className="topBarLeft">
            <span>📍 Lisbon, Portugal</span>
            <span>✉ info@graciebarra.pt</span>
          </div>
          <div className="topBarRight">
            <a href="#home" className="topBarLink">Facebook</a>
            <a href="#home" className="topBarLink">Instagram</a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="siteHeader" id="home">
        <div className="container headerInner">
          <a href="#home" className="headerLogo" onClick={closeMenu}>
            <img
              src="https://graciebarraeurope.com/wp-content/uploads/2025/08/RED-SHIELD-BARRA.png"
              alt="Gracie Barra"
            />
          </a>
          <nav className="mainNav">
            <a href="#home">Home</a>
            <a href="#sobreNos">About Us</a>
            <a href="#programas">Programs</a>
            <a href="#eventos">Events</a>
            <a href="#noticias">News</a>
            <a href="#contacto">Contact</a>
          </nav>
          <a href="#contacto" className="headerCta"><span className="btnInner">Free Class</span></a>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* MOBILE DRAWER */}
        <div className={`mobileNav${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#sobreNos" onClick={closeMenu}>About Us</a>
          <a href="#programas" onClick={closeMenu}>Programs</a>
          <a href="#eventos" onClick={closeMenu}>Events</a>
          <a href="#noticias" onClick={closeMenu}>News</a>
          <a href="#contacto" onClick={closeMenu}>Contact</a>
          <a href="#contacto" className="mobileNavCta" onClick={closeMenu}>Free Class</a>
        </div>
      </header>

      {/* OVERLAY */}
      {menuOpen && <div className="mobileOverlay" onClick={closeMenu} />}

      {/* HERO */}
      <section className="hero">
        <img
          className="heroImg"
          src="https://graciebarraeurope.com/wp-content/uploads/2020/11/DSC_0091-10-1200x799-1.jpg"
          alt="Gracie Barra Training"
        />
        <div className="heroOverlay">
          <div className="heroContent">
            <span className="heroLabel">Gracie Barra School</span>
            <h1 className="heroTitle">Jiu-Jitsu<br />For Everyone</h1>
            <p className="heroSub">
              Start your Jiu-Jitsu journey. For all ages, all levels.
              Your Gracie Barra family is waiting for you.
            </p>
            <div className="heroCtas">
              <a href="#contacto" className="btnPrimary"><span className="btnInner">Free Trial Class</span></a>
              <a href="#sobreNos" className="btnOutline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="statsStrip">
        <div className="container statsGrid">
          <div className="stat">
            <span className="statNum">30+</span>
            <span className="statLabel">Years of Experience</span>
          </div>
          <div className="stat">
            <span className="statNum">800+</span>
            <span className="statLabel">Schools Worldwide</span>
          </div>
          <div className="stat">
            <span className="statNum">1986</span>
            <span className="statLabel">Founded by Carlos Gracie Jr.</span>
          </div>
          <div className="stat">
            <span className="statNum">100%</span>
            <span className="statLabel">Jiu-Jitsu For Everyone</span>
          </div>
        </div>
      </div>

      {/* WE ARE GRACIE BARRA + WHY */}
      <section id="sobreNos" className="aboutWhy">
        <div className="container aboutGrid">
          <div className="aboutText">
            <span className="sectionLabel">About Us</span>
            <h2 className="sectionTitle">We Are Gracie Barra</h2>
            <p>
              At Gracie Barra we embody the values of Brotherhood, Integrity and Development.
              We treat all members as part of our extended family, with the goal of spreading
              Jiu-Jitsu and building the next generation, honouring those who came before us.
            </p>
            <p>
              Our academy is a safe and welcoming space for all ages and levels.
              Whether for self-defence, fitness or competition — we have the right program for you.
            </p>
            <a href="#programas" className="btnPrimary"><span className="btnInner">View Programs</span></a>
          </div>
          <div className="aboutImage">
            <img
              src="https://graciebarraeurope.com/wp-content/uploads/2020/12/children-fighting.png"
              alt="Children practising Jiu-Jitsu"
            />
          </div>
        </div>
        <div className="container whyGrid">
          <div className="whyImage">
            <img
              src="https://graciebarraeurope.com/wp-content/uploads/2020/12/fighting-with-logo.png"
              alt="Gracie Barra Combat"
            />
          </div>
          <div className="whyText">
            <span className="sectionLabel">Our Philosophy</span>
            <h2 className="sectionTitle">Why Gracie Barra?</h2>
            <p>
              Gracie Barra instructors are trained in the philosophy and teaching methods
              of Master Carlos Gracie Jr., who founded Gracie Barra in 1986. A legacy of
              over 30 years of teaching experience is at your service.
            </p>
            <p>
              Don't worry — you and your family are in good hands. Our instructors
              are certified and dedicated to your development on and off the mat.
            </p>
            <a href="#contacto" className="btnPrimary"><span className="btnInner">Join Us</span></a>
          </div>
        </div>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section id="programas" className="programs">
        <div className="programsBg">
          <img
            src="https://graciebarraeurope.com/wp-content/uploads/2020/12/program-background-1.jpg"
            alt=""
          />
          <div className="programsBgOverlay" />
        </div>
        <div className="container programsInner">
          <div className="sectionHeader centered">
            <span className="sectionLabel light">What We Offer</span>
            <h2 className="sectionTitle light">Programs</h2>
            <p className="sectionDesc light">
              Gracie Barra offers a range of Jiu-Jitsu programs for children and adults
              of all ages and abilities. We believe in the philosophy of Jiu-Jitsu for everyone.
            </p>
          </div>
          <div className="programsGrid">
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" alt="GB1" />
              <div className="programCardOverlay">
                <h3>GB1</h3>
                <p>Fundamentals</p>
                <a href="#contacto" className="btnSmall">Learn More</a>
              </div>
            </div>
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" alt="GB2" />
              <div className="programCardOverlay">
                <h3>GB2</h3>
                <p>Advanced</p>
                <a href="#contacto" className="btnSmall">Learn More</a>
              </div>
            </div>
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" alt="GB3" />
              <div className="programCardOverlay">
                <h3>GB3</h3>
                <p>High Competition</p>
                <a href="#contacto" className="btnSmall">Learn More</a>
              </div>
            </div>
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/12/children-fighting.png" alt="GB Kids" />
              <div className="programCardOverlay">
                <h3>GB Kids</h3>
                <p>Children</p>
                <a href="#contacto" className="btnSmall">Learn More</a>
              </div>
            </div>
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/12/fighting-with-logo.png" alt="Barra FIT" />
              <div className="programCardOverlay">
                <h3>Barra FIT</h3>
                <p>Fitness &amp; Conditioning</p>
                <a href="#contacto" className="btnSmall">Learn More</a>
              </div>
            </div>
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" alt="Private Training" />
              <div className="programCardOverlay">
                <h3>Private Training</h3>
                <p>Personalised</p>
                <a href="#contacto" className="btnSmall">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section
        id="eventos"
        className="events"
        style={{ backgroundImage: "url('https://graciebarraeurope.com/wp-content/uploads/2020/12/events-home.jpg')" }}
      >
        <div className="eventsOverlay">
        <div className="eventsContent">
          <span className="sectionLabel light">What's Happening</span>
          <h2 className="sectionTitle light">Events</h2>
          <p className="eventsIntro">
            Gracie Barra offers a wide range of exciting events — from training days,
            competition training and seminars to Jiu-Jitsu camps and competitions.
          </p>
          <div className="eventsGrid">
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/comp-icon.png" alt="CompNet" />
              <div className="eventCardBody">
                <h4>CompNet</h4>
                <p>Professional competitions for children and adults of all ages.</p>
                <a href="#eventos" className="btnSmall">Learn More</a>
              </div>
            </div>
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Camping-icon.png" alt="Camps" />
              <div className="eventCardBody">
                <h4>Jiu-Jitsu Camps</h4>
                <p>An unforgettable Jiu-Jitsu experience in stunning locations.</p>
                <a href="#eventos" className="btnSmall">Learn More</a>
              </div>
            </div>
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Trophy-icon.png" alt="Competition" />
              <div className="eventCardBody">
                <h4>Competition Training</h4>
                <p>Monthly sessions with experienced black belts in competition.</p>
                <a href="#eventos" className="btnSmall">Learn More</a>
              </div>
            </div>
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Conference-icon.png" alt="Conferences" />
              <div className="eventCardBody">
                <h4>GB Conferences</h4>
                <p>Training and support with regular conferences across the region.</p>
                <a href="#eventos" className="btnSmall">Learn More</a>
              </div>
            </div>
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Trophy-icon.png" alt="Regional" />
              <div className="eventCardBody">
                <h4>Regional Training Days</h4>
                <p>Seminars with renowned Professors from across Europe.</p>
                <a href="#eventos" className="btnSmall">Learn More</a>
              </div>
            </div>
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Special-events-icon.png" alt="Special" />
              <div className="eventCardBody">
                <h4>Special Events</h4>
                <p>Award galas, super fights and unique seminars.</p>
                <a href="#eventos" className="btnSmall">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="ctaBanner">
        <img
          className="ctaBannerImg"
          src="https://graciebarraeurope.com/wp-content/uploads/2020/11/DSC_0091-10-1200x799-1.jpg"
          alt=""
        />
        <div className="ctaOverlay">
          <div className="container ctaContent">
            <h2>Ready to Start?</h2>
            <p>Book your first trial class completely free. No commitment required.</p>
            <a href="#contacto" className="btnCta">Book Free Class</a>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section id="noticias" className="news">
        <div className="container">
          <div className="sectionHeader centered">
            <span className="sectionLabel">Stay Updated</span>
            <h2 className="sectionTitle">Latest News</h2>
          </div>
          <div className="newsGrid">
            <article className="newsCard">
              <div className="newsCardImg">
                <img
                  src="https://graciebarraeurope.com/wp-content/uploads/2020/11/DSC_0091-10-1200x799-1.jpg"
                  alt="World Summit"
                />
              </div>
              <div className="newsCardBody">
                <span className="newsCategory">Competition</span>
                <h3>World Summit 2025 in Europe</h3>
                <p>Gracie Barra's biggest annual event brings instructors from around the world to share knowledge and celebrate the GB family.</p>
                <a href="#noticias" className="newsLink">Read More →</a>
              </div>
            </article>
            <article className="newsCard">
              <div className="newsCardImg">
                <img
                  src="https://graciebarraeurope.com/wp-content/uploads/2020/12/children-fighting.png"
                  alt="CompNet Ranking"
                />
              </div>
              <div className="newsCardBody">
                <span className="newsCategory">Programs</span>
                <h3>Global CompNet Ranking System</h3>
                <p>The new global ranking system allows athletes of all ages to track their competitive progress.</p>
                <a href="#noticias" className="newsLink">Read More →</a>
              </div>
            </article>
            <article className="newsCard">
              <div className="newsCardImg">
                <img
                  src="https://graciebarraeurope.com/wp-content/uploads/2020/12/fighting-with-logo.png"
                  alt="GB Mindset"
                />
              </div>
              <div className="newsCardBody">
                <span className="newsCategory">Philosophy</span>
                <h3>The Gracie Barra Mindset: Success Beyond Titles</h3>
                <p>How Jiu-Jitsu shapes character, resilience and success on and off the mat — the philosophy that defines us.</p>
                <a href="#noticias" className="newsLink">Read More →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="contact">
        <div className="container contactGrid">
          <div className="contactInfo">
            <span className="sectionLabel light">Get In Touch</span>
            <h2 className="sectionTitle light">Contact</h2>
            <div className="contactDetails">
              <div className="contactItem">
                <strong>Address</strong>
                <p>Rua do Jiu-Jitsu, 123<br />Lisbon, Portugal</p>
              </div>
              <div className="contactItem">
                <strong>Phone</strong>
                <p>+351 000 000 000</p>
              </div>
              <div className="contactItem">
                <strong>Email</strong>
                <p>info@graciebarra.pt</p>
              </div>
              <div className="contactItem">
                <strong>Hours</strong>
                <p>Monday–Friday: 07h–22h<br />Saturday: 09h–18h<br />Sunday: 10h–14h</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <h3>Book Your Free Class</h3>
            <form>
              <div className="formRow">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <select>
                <option value="">Program of Interest</option>
                <option>GB1 – Fundamentals</option>
                <option>GB2 – Advanced</option>
                <option>GB Kids – Children</option>
                <option>Barra FIT – Fitness</option>
                <option>Private Training</option>
              </select>
              <textarea placeholder="Message (optional)" rows="4"></textarea>
              <button type="submit" className="btnPrimary fullWidth"><span className="btnInner">Send Request</span></button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="siteFooter">
        <div className="container footerGrid">
          <div className="footerBrand">
            <img
              src="https://graciebarraeurope.com/wp-content/uploads/2025/08/RED-SHIELD-BARRA.png"
              alt="Gracie Barra"
            />
            <p>Jiu-Jitsu For Everyone. A global family united by the values of Brotherhood, Integrity and Development.</p>
            <div className="socialLinks">
              <a href="#home" className="socialLink" aria-label="Facebook">f</a>
              <a href="#home" className="socialLink" aria-label="Instagram">ig</a>
            </div>
          </div>
          <div className="footerCol">
            <h4>Academy</h4>
            <ul>
              <li><a href="#sobreNos">About Us</a></li>
              <li><a href="#sobreNos">Why Gracie Barra?</a></li>
              <li><a href="#programas">Programs</a></li>
              <li><a href="#contacto">Find Us</a></li>
            </ul>
          </div>
          <div className="footerCol">
            <h4>Programs</h4>
            <ul>
              <li><a href="#programas">GB1 – Fundamentals</a></li>
              <li><a href="#programas">GB2 – Advanced</a></li>
              <li><a href="#programas">GB Kids</a></li>
              <li><a href="#programas">Barra FIT</a></li>
              <li><a href="#programas">Private Training</a></li>
            </ul>
          </div>
          <div className="footerCol">
            <h4>Resources</h4>
            <ul>
              <li><a href="#noticias">News</a></li>
              <li><a href="#eventos">Events</a></li>
              <li><a href="#contacto">Contact</a></li>
              <li><a href="#home">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <div className="container footerBottomInner">
            <p>© 2025 Gracie Barra. All rights reserved.</p>
            <p>Part of the GRACIEBARRA.COM family</p>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <button
        className={`anchorBtn${showAnchor ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>

    </div>
  );
}

export default App;
