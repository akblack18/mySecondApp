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
            <span>📍 Lisboa, Portugal</span>
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
            <a className="active" href="#home">Home</a>
            <a href="#sobreNos">Sobre Nós</a>
            <a href="#programas">Programas</a>
            <a href="#eventos">Eventos</a>
            <a href="#noticias">Notícias</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a href="#contacto" className="headerCta">Aula Grátis</a>
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
          <a href="#sobreNos" onClick={closeMenu}>Sobre Nós</a>
          <a href="#programas" onClick={closeMenu}>Programas</a>
          <a href="#eventos" onClick={closeMenu}>Eventos</a>
          <a href="#noticias" onClick={closeMenu}>Notícias</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a href="#contacto" className="mobileNavCta" onClick={closeMenu}>Aula Grátis</a>
        </div>
      </header>

      {/* OVERLAY */}
      {menuOpen && <div className="mobileOverlay" onClick={closeMenu} />}

      {/* HERO */}
      <section className="hero">
        <img
          className="heroImg"
          src="https://graciebarraeurope.com/wp-content/uploads/2020/11/DSC_0091-10-1200x799-1.jpg"
          alt="Treino Gracie Barra"
        />
        <div className="heroOverlay">
          <div className="heroContent">
            <span className="heroLabel">Gracie Barra School</span>
            <h1 className="heroTitle">Jiu-Jitsu<br />Para Todos</h1>
            <p className="heroSub">
              Comece a sua jornada no Jiu-Jitsu. Para todas as idades, todos os níveis.
              A sua família Gracie Barra espera por si.
            </p>
            <div className="heroCtas">
              <a href="#contacto" className="btnPrimary">Aula Experimental Grátis</a>
              <a href="#sobreNos" className="btnOutline">Saiba Mais</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="statsStrip">
        <div className="container statsGrid">
          <div className="stat">
            <span className="statNum">30+</span>
            <span className="statLabel">Anos de Experiência</span>
          </div>
          <div className="stat">
            <span className="statNum">800+</span>
            <span className="statLabel">Escolas pelo Mundo</span>
          </div>
          <div className="stat">
            <span className="statNum">1986</span>
            <span className="statLabel">Fundada por Carlos Gracie Jr.</span>
          </div>
          <div className="stat">
            <span className="statNum">100%</span>
            <span className="statLabel">Jiu-Jitsu Para Todos</span>
          </div>
        </div>
      </div>

      {/* WE ARE GRACIE BARRA */}
      <section id="sobreNos" className="about">
        <div className="container aboutGrid">
          <div className="aboutText">
            <span className="sectionLabel">Sobre Nós</span>
            <h2 className="sectionTitle">We Are Gracie Barra</h2>
            <p>
              Na Gracie Barra encarnamos os valores de Fraternidade, Integridade e Desenvolvimento.
              Tratamos todos os membros como parte da nossa família alargada, com o objetivo
              de difundir o Jiu-Jitsu e construir a próxima geração, honrando aqueles que vieram antes.
            </p>
            <p>
              A nossa academia é um espaço seguro e acolhedor para todas as idades e níveis.
              Seja para defesa pessoal, condição física ou competição — temos o programa certo para si.
            </p>
            <a href="#programas" className="btnPrimary">Ver Programas</a>
          </div>
          <div className="aboutImage">
            <img
              src="https://graciebarraeurope.com/wp-content/uploads/2020/12/children-fighting.png"
              alt="Crianças a praticar Jiu-Jitsu"
            />
          </div>
        </div>
      </section>

      {/* WHY GRACIE BARRA */}
      <section className="why">
        <div className="container whyGrid">
          <div className="whyImage">
            <img
              src="https://graciebarraeurope.com/wp-content/uploads/2020/12/fighting-with-logo.png"
              alt="Combate Gracie Barra"
            />
          </div>
          <div className="whyText">
            <span className="sectionLabel">A Nossa Filosofia</span>
            <h2 className="sectionTitle">Why Gracie Barra?</h2>
            <p>
              Os instrutores da Gracie Barra são formados na filosofia e métodos de ensino
              do Mestre Carlos Gracie Jr., que fundou a Gracie Barra em 1986. Um legado de
              mais de 30 anos de experiência de ensino está ao seu serviço.
            </p>
            <p>
              Não se preocupe: você e a sua família estão em boas mãos. Os nossos instrutores
              são certificados e dedicados ao seu desenvolvimento dentro e fora do tatami.
            </p>
            <a href="#contacto" className="btnPrimary">Junte-se a Nós</a>
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
            <span className="sectionLabel light">O Que Oferecemos</span>
            <h2 className="sectionTitle light">Programas</h2>
            <p className="sectionDesc light">
              A Gracie Barra oferece uma gama de programas de Jiu-Jitsu para crianças e adultos
              de todas as idades e capacidades. Acreditamos na filosofia de Jiu-Jitsu para todos.
            </p>
          </div>
          <div className="programsGrid">
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" alt="GB1" />
              <div className="programCardOverlay">
                <h3>GB1</h3>
                <p>Fundamentos</p>
                <a href="#contacto" className="btnSmall">Saiba Mais</a>
              </div>
            </div>
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" alt="GB2" />
              <div className="programCardOverlay">
                <h3>GB2</h3>
                <p>Avançado</p>
                <a href="#contacto" className="btnSmall">Saiba Mais</a>
              </div>
            </div>
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" alt="GB3" />
              <div className="programCardOverlay">
                <h3>GB3</h3>
                <p>Alta Competição</p>
                <a href="#contacto" className="btnSmall">Saiba Mais</a>
              </div>
            </div>
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/12/children-fighting.png" alt="GB Kids" />
              <div className="programCardOverlay">
                <h3>GB Kids</h3>
                <p>Crianças</p>
                <a href="#contacto" className="btnSmall">Saiba Mais</a>
              </div>
            </div>
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/12/fighting-with-logo.png" alt="Barra FIT" />
              <div className="programCardOverlay">
                <h3>Barra FIT</h3>
                <p>Fitness &amp; Condição</p>
                <a href="#contacto" className="btnSmall">Saiba Mais</a>
              </div>
            </div>
            <div className="programCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" alt="Treino Privado" />
              <div className="programCardOverlay">
                <h3>Treino Privado</h3>
                <p>Personalizado</p>
                <a href="#contacto" className="btnSmall">Saiba Mais</a>
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
          <span className="sectionLabel light">O Que Acontece</span>
          <h2 className="sectionTitle light">Eventos</h2>
          <p className="eventsIntro">
            A Gracie Barra oferece uma vasta gama de eventos emocionantes — desde dias de treino,
            treinos de competição e seminários até acampamentos de Jiu-Jitsu e competições.
          </p>
          <div className="eventsGrid">
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/comp-icon.png" alt="CompNet" />
              <div className="eventCardBody">
                <h4>CompNet</h4>
                <p>Competições profissionais para crianças e adultos de todas as idades.</p>
                <a href="#eventos" className="btnSmall">Saiba Mais</a>
              </div>
            </div>
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Camping-icon.png" alt="Camps" />
              <div className="eventCardBody">
                <h4>Jiu-Jitsu Camps</h4>
                <p>Uma experiência inesquecível de Jiu-Jitsu em locais deslumbrantes.</p>
                <a href="#eventos" className="btnSmall">Saiba Mais</a>
              </div>
            </div>
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Trophy-icon.png" alt="Competição" />
              <div className="eventCardBody">
                <h4>Treino de Competição</h4>
                <p>Sessões mensais com faixa-preta experientes em competição.</p>
                <a href="#eventos" className="btnSmall">Saiba Mais</a>
              </div>
            </div>
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Conference-icon.png" alt="Conferências" />
              <div className="eventCardBody">
                <h4>Conferências GB</h4>
                <p>Formação e suporte com conferências regulares em toda a região.</p>
                <a href="#eventos" className="btnSmall">Saiba Mais</a>
              </div>
            </div>
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Trophy-icon.png" alt="Regional" />
              <div className="eventCardBody">
                <h4>Dias de Treino Regional</h4>
                <p>Seminários com Professores reconhecidos de toda a Europa.</p>
                <a href="#eventos" className="btnSmall">Saiba Mais</a>
              </div>
            </div>
            <div className="eventCard">
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Special-events-icon.png" alt="Especiais" />
              <div className="eventCardBody">
                <h4>Eventos Especiais</h4>
                <p>Galas de prémios, super fights e seminários únicos.</p>
                <a href="#eventos" className="btnSmall">Saiba Mais</a>
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
            <h2>Pronto para Começar?</h2>
            <p>Agende a sua primeira aula experimental completamente grátis. Sem compromissos.</p>
            <a href="#contacto" className="btnCta">Marcar Aula Grátis</a>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section id="noticias" className="news">
        <div className="container">
          <div className="sectionHeader centered">
            <span className="sectionLabel">Fique a Par</span>
            <h2 className="sectionTitle">Últimas Notícias</h2>
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
                <span className="newsCategory">Competição</span>
                <h3>World Summit 2025 na Europa</h3>
                <p>O maior evento anual da Gracie Barra reúne instrutores de todo o mundo para partilhar conhecimento e celebrar a família GB.</p>
                <a href="#noticias" className="newsLink">Ler Mais →</a>
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
                <span className="newsCategory">Programas</span>
                <h3>Sistema de Ranking CompNet Global</h3>
                <p>O novo sistema de ranking global permite que atletas de todas as idades acompanhem o seu progresso competitivo.</p>
                <a href="#noticias" className="newsLink">Ler Mais →</a>
              </div>
            </article>
            <article className="newsCard">
              <div className="newsCardImg">
                <img
                  src="https://graciebarraeurope.com/wp-content/uploads/2020/12/fighting-with-logo.png"
                  alt="Mindset GB"
                />
              </div>
              <div className="newsCardBody">
                <span className="newsCategory">Filosofia</span>
                <h3>O Mindset Gracie Barra: Sucesso Além dos Títulos</h3>
                <p>Como o Jiu-Jitsu molda o carácter, a resiliência e o sucesso dentro e fora do tatami — a filosofia que nos define.</p>
                <a href="#noticias" className="newsLink">Ler Mais →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="contact">
        <div className="container contactGrid">
          <div className="contactInfo">
            <span className="sectionLabel light">Fale Connosco</span>
            <h2 className="sectionTitle light">Contacto</h2>
            <div className="contactDetails">
              <div className="contactItem">
                <strong>Morada</strong>
                <p>Rua do Jiu-Jitsu, 123<br />Lisboa, Portugal</p>
              </div>
              <div className="contactItem">
                <strong>Telefone</strong>
                <p>+351 000 000 000</p>
              </div>
              <div className="contactItem">
                <strong>Email</strong>
                <p>info@graciebarra.pt</p>
              </div>
              <div className="contactItem">
                <strong>Horário</strong>
                <p>Segunda–Sexta: 07h–22h<br />Sábado: 09h–18h<br />Domingo: 10h–14h</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <h3>Marque a Sua Aula Grátis</h3>
            <form>
              <div className="formRow">
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Apelido" />
              </div>
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Telefone" />
              <select>
                <option value="">Programa de Interesse</option>
                <option>GB1 – Fundamentos</option>
                <option>GB2 – Avançado</option>
                <option>GB Kids – Crianças</option>
                <option>Barra FIT – Fitness</option>
                <option>Treino Privado</option>
              </select>
              <textarea placeholder="Mensagem (opcional)" rows="4"></textarea>
              <button type="submit" className="btnPrimary fullWidth">Enviar Pedido</button>
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
            <p>Jiu-Jitsu Para Todos. Uma família global unida pelos valores de Fraternidade, Integridade e Desenvolvimento.</p>
            <div className="socialLinks">
              <a href="#home" className="socialLink" aria-label="Facebook">f</a>
              <a href="#home" className="socialLink" aria-label="Instagram">ig</a>
            </div>
          </div>
          <div className="footerCol">
            <h4>Academia</h4>
            <ul>
              <li><a href="#sobreNos">Sobre Nós</a></li>
              <li><a href="#sobreNos">Por Que Gracie Barra?</a></li>
              <li><a href="#programas">Programas</a></li>
              <li><a href="#contacto">Encontre-nos</a></li>
            </ul>
          </div>
          <div className="footerCol">
            <h4>Programas</h4>
            <ul>
              <li><a href="#programas">GB1 – Fundamentos</a></li>
              <li><a href="#programas">GB2 – Avançado</a></li>
              <li><a href="#programas">GB Kids</a></li>
              <li><a href="#programas">Barra FIT</a></li>
              <li><a href="#programas">Treino Privado</a></li>
            </ul>
          </div>
          <div className="footerCol">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#noticias">Notícias</a></li>
              <li><a href="#eventos">Eventos</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#home">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <div className="container footerBottomInner">
            <p>© 2025 Gracie Barra. Todos os direitos reservados.</p>
            <p>Parte da família GRACIEBARRA.COM</p>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <button
        className={`anchorBtn${showAnchor ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
      >
        ↑
      </button>

    </div>
  );
}

export default App;
