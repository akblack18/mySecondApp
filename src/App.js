import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="headerTopInfo">
          <div className="headerTopContainer">
            <div className="mainLogoBig">
              <img
                width={500}
                height={500}
                src="https://graciebarraeurope.com/wp-content/uploads/2025/08/RED-SHIELD-BARRA.png"
              />
            </div>
            <div className="headerTopItens">
              <div className="infoLineOne">
                <h1>Começe a sua jornada no Jiu Jitsu connosco!</h1>
              </div>
              <div className="infoLineTwo">
                <h1>Gracie Barra School</h1>
                <img
                  className="smallGbLogoOne"
                  src="https://graciebarraeurope.com/wp-content/uploads/2025/08/RED-SHIELD-BARRA.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="topNavigationBar">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#sobreNos">Sobre Nós</a>
          <a href="#horario">Horário das aulas</a>
          <a href="#contacto">Contacto</a>
        </div>
      </header>
      <section className="introducaoImagemLogo">
        <div className="backgroundImageOneDiv">
          <h1 className="highlightQuoteOne">Jiu Jitsu Para Todos!</h1>
          <img
            className="backgroundImageOne"
            src="https://graciebarraeurope.com/wp-content/uploads/2020/11/DSC_0091-10-1200x799-1.jpg"
          />
        </div>
      </section>
      <section className="apresentacaoAcademiaSobreNos">
        <div className="apresentacaoGracieBarra">
          <h1 className="tituloApresentacaoGracieBarra">We are Gracie Barra</h1>
          <p className="presentationTextOne">
            At Gracie Barra Europe we embody the values of Brotherhood,
            Integrity, and development. We treat all our members as part of our
            extended family, with the goal of spreading Jiu-Jitsu and building
            the next generation whilst honouring those that came before.
          </p>
          <button className="learnMoreButtonOne">Learn More</button>
        </div>
        <div className="apresentacaoImagemOne">
          <img src="https://graciebarraeurope.com/wp-content/uploads/2020/12/children-fighting.png" />
        </div>
      </section>
      <section className="apresentacaoAcademiaSobreNosTwo">
        <div className="apresentacaoImagemTwo">
          <img src="https://graciebarraeurope.com/wp-content/uploads/2020/12/fighting-with-logo.png" />
        </div>
        <div className="apresentacaoGracieBarraTwo">
          <h1 className="tituloApresentacaoGracieBarraTwo">
            WHY GRACIE BARRA?
          </h1>
          <p className="presentationTextTwo">
            Gracie Barra Instructors are trained in the teaching philosophy and
            methods of Master Carlos Gracie Jr., who founded Gracie Barra in
            1986. A legacy of over 30 years of teaching experience is at your
            service, so you don’t have to worry: you and your family are in
            great hands.
          </p>
          <button className="learnMoreButtonTwo">Learn More</button>
        </div>
      </section>
      <section className="programOverview">
        <div className="programTitleAndText">
          <h1 className="programTitle">Program Overview</h1>
          <p className="programParagraph">
            Gracie Barra offers a range of Brazilian Jiu-Jitsu programs for kids
            and adults of all ages and abilities, we believe in the philosophy
            of Jiu-Jitsu for everyone and our classes are designed to be
            accessible to anyone.
          </p>
        </div>
        <div className="programBackgroundImage">
          <img
            className="programBackgroundIMG"
            src="https://graciebarraeurope.com/wp-content/uploads/2020/12/program-background-1.jpg"
          />
        </div>
        <div className="programOverviewImgTiles">
          <div className="overViewImg1">
            <div>
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" />
              <a href="#learnMore">GB1</a>
            </div>
            <div>
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" />
              <a href="#learnMore">GB1</a>
            </div>
            <div>
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" />
              <a href="#learnMore">GB1</a>
            </div>
            <div>
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" />
              <a href="#learnMore">GB1</a>
            </div>
            <div>
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" />
              <a href="#learnMore">GB1</a>
            </div>
            <div>
              <img src="https://graciebarraeurope.com/wp-content/uploads/2020/11/006DSC_7684-1-800x532.jpg" />
              <a href="#learnMore">GB1</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="eventsGracieBarra">
          <img
            className="eventsImage"
            src="https://graciebarraeurope.com/wp-content/uploads/2020/12/events-home.jpg"
          />
          <div className="eventTiles">
            <div className="eventTitleAndText">
              <h1>Events</h1>
              <p>
                Gracie Barra Europe offers a wide range of exciting events from
                training days, competition training and seminars to Jiu-Jitsu
                camps and competitions. We also provide conferences and special
                events for Gracie Barra school owners from across the region.
                Click on one of the links below to find out more!
              </p>
            </div>
            <div className="eventTilesContainer">
              <div className="eventRow">
                <div className="compnetCol">
                  <div className="eventTile1">
                    <div className="eventTileIcon">
                      <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/comp-icon.png" />
                      <h1>Compnet</h1>
                      <p>
                        Gracie Barra CompNet competitions are professionally run
                        events for kids and adults of all ages. These are a
                        great opportunity to get your first competition
                        experience.
                      </p>
                      <button className="buttonEvent">
                        Find out More
                        <a href="#event" />
                      </button>
                    </div>
                    <div className="eventTileIcon">
                      <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Camping-icon.png" />
                      <h1>Jiu Jistu Camps</h1>
                      <p>
                        Our camps will give you an unforgettable Jiu-Jitsu
                        experience in a beautiful location with an opportunity
                        to train with some of the biggest names in Gracie Barra!
                      </p>
                      <button className="buttonEvent">
                        Find out More
                        <a href="#event" />
                      </button>
                    </div>
                    <div className="eventTileIcon">
                      <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Trophy-icon.png" />
                      <h1>Competition Training</h1>
                      <p>
                        We provide monthly competition training accessible to
                        all athletes from across Gracie Barra to attend. All
                        sessions are hosted by experienced black belt
                        competitors!
                      </p>
                      <button className="buttonEvent">
                        Find out More
                        <a href="#event" />
                      </button>
                    </div>
                  </div>
                  <div className="eventTile2">
                    <div className="eventTileIcon">
                      <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Conference-icon.png" />
                      <h1>Gracie Barra Conferences</h1>
                      <p>
                        Gracie Barra Europe provides up to date training and
                        support with regular conferences across the region
                      </p>
                      <button className="buttonEvent">
                        Find out More
                        <a href="#event" />
                      </button>
                    </div>
                    <div className="eventTileIcon">
                      <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Trophy-icon.png" />
                      <h1>Regional Training Days</h1>
                      <p>
                        Gracie Barra training days are seminar based events with
                        a host of well known Professors, they offer a great
                        opportunity to learn new techniques and meet students
                        from across Europe!
                      </p>
                      <button className="buttonEvent">
                        Find out More
                        <a href="#event" />
                      </button>
                    </div>
                    <div className="eventTileIcon">
                      <img src="https://graciebarraeurope.com/wp-content/uploads/2020/10/Special-events-icon.png" />
                      <h1>Special Events</h1>
                      <p>
                        Every year we put on a range of special events from
                        awards nights, super fights, and once in a lifetime
                        seminars!
                      </p>
                      <button className="buttonEvent">
                        Find out More
                        <a href="#event" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
