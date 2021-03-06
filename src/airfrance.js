import React, { Component } from "react";
import "./CV.css";
import planeur from "./planeur.svg";
import cravate from "./cravate.svg";
import education from "./education.svg";
import sports from "./sports.svg";
import uk from "./uk.svg";
import photoIdentite from "./photo_identite.jpg";
import { LogoLeft, P } from "./utils";

const A = props => {
  return (
    <span className="a320" style={props.style}>
      {props.txt}
    </span>
  );
};

const Aero = () => {
  return (
    <div class="section aeronautique">
      <LogoLeft img={planeur} />
      <div className="titreSection">Aéronautique</div>
      <div class="gridcontainer content">
        <div>
          <b>ULM</b>
        </div>
        <div>
          Laché en ULM 3 axes - 15 heures de vol - Licence théorique
          d’instructeur ULM
        </div>
        <div>
          <b>Planeur</b>
        </div>
        <div>7 heures de vol</div>
        <div>
          <b>Simulation de vol</b>
        </div>
        <div>
          A l'âge de 15-18 ans, j'ai échangé avec des pilotes et des contrôleurs
          aériens sur la plateforme IVAO. J'ai pu accéder et m'initier au
          pilotage, et au contrôle aérien (phraséologie, cartes aériennes, plans
          de vol).
        </div>
      </div>
    </div>
  );
};

const ExperiencePro = () => {
  const xpStyle = {
    marginBottom: "10px",
  };
  return (
    <div class="section experience">
      <LogoLeft img={cravate} size={"90%"} />
      <div className="titreSection">Expérience Professionnelle</div>
      <div class="content">
        <div style={xpStyle}>
          <b>
            <span class="a320">2018 > 2019</span> - Développeur informatique -
            Auto-Entrepreneur, Paris
          </b>
          <P>
            J'ai choisi ce mode de trvail pour me laisser du temps et de la
            flexibilité, dans l'optique de passer des sélections de pilote, et
            d'intégrer une formation.
            </P>
          <P>
            J'ai effectué des missions pour des clients basés à Paris et à
            Clermont-Ferrand.
          </P>
        </div>
        <div style={xpStyle}>
          <b>
            <span class="a320">2014 > 2018</span> - Développeur informatique -
            GoEuro GmbH, Berlin
          </b>
          <ul>
            <li>
              Site internet de comparaison et de réservation de billets d’avion,
              de train et de bus.
            </li>
            <li>
              Équipe multidisciplinaire et internationale. Anglais exclusivement
              utilisé.
            </li>
            <li>
              Traitement de données du transport aérien, ferroviaire et routier.
            </li>
            <li>
              3 ans d’expérience comme interviewer technique en entretiens
              d’embauche.
            </li>
          </ul>
        </div>
        <div style={xpStyle}>
          <b>
            <span class="a320">2012</span> - Développeur informatique stagiaire
            - Google, Madrid{" "}
          </b>
        </div>
      </div>
    </div>
  );
};

const Formation = () => {
  return (
    <div class="section formation">
      <LogoLeft img={education} />
      <div className="titreSection">Formation</div>
      <div class="gridcontainer content">
        <div>
          <b>
            <span class="a320">2014</span>
          </b>
        </div>
        <div>Supélec, Gif-sur-Yvette. Master of Science in Engineering.</div>
        <div>
          <b>
            <span class="a320">2012</span>
          </b>
        </div>
        <div>Semestre d’échange avec l’ESCP Europe (Berlin)</div>
        <div>
          <b>
            <span class="a320">2010</span>
          </b>
        </div>
        <div>
          Lycée Sainte-Geneviève, Versailles. Classes préparatoires PCSI – PC*.
        </div>
        <div>
          <b>
            <span class="a320">2007</span>
          </b>
        </div>
        <div>Baccalauréat scientifique (mention Très Bien).</div>
      </div>
    </div>
  );
};

const Langues = () => {
  return (
    <div class="section langues">
      <LogoLeft img={uk} />

      {/* <div className="logoleft">
      <Gauge style={{ background: 'white' }} value={990.0} />
      TOEIC
    </div> */}
      <div className="titreSection">Langues</div>
      <div
        class="gridcontainer content"
        style={{ gridTemplateColumns: `1fr 7fr 2fr` }}
      >
        <div>Anglais</div>
        <div>
          <span class="a320 b">C2</span> - 5 ans d’expérience professionnelle
          <br />
          <b>TOEIC</b> <span class="a320 b"> 990/990 </span> Listening and
          Reading - 28/02/2018
          <br />
        </div>
        <div>
          Espagnol
          <span class="a320 b"> B1</span>
          <br />
          <br /> Allemand
          <span class="a320 b"> A2</span>
        </div>
      </div>
    </div>
  );
};

const Autres = () => {
  return (
    <div class="section autres">
      <LogoLeft img={sports} size="70%" />
      <div className="titreSection">Autres Activités</div>
      <div
        class="gridcontainer content"
        style={{ gridTemplateColumns: `3cm 1fr` }}
      >
        <div>
          <b>Associations</b>
        </div>
        <div>
          Bureau des Sports de Supélec - Vice-Président - 2012
          <ul>
            <li>400 licenciés pratiquant 20 sports différents.</li>
            <li>
              Tournoi universitaire annuel - 2000 sportifs venant d’universités
              françaises et étrangères.
            </li>
          </ul>
        </div>
        <div>
          <b>Sports</b>
        </div>
        <div>
          Ski (licencié FFS, compétition en 2017-2018) - Roller - Tennis -
          Kitesurf
        </div>

        <div>
          <b>Soutien scolaire</b>
        </div>
        <div>
          À 2 élèves de terminale S préparent le baccalauréat scientifique.
        </div>
      </div>
    </div>
  );
};

const CV = () => {
  return (
    <div className="CV">
      <div className="page">
        <div className="content-grid">
          <img className="photo" src={photoIdentite} />
          <div className="nom">
            <b style={{ fontSize: `1.5em`, fontVariant: "small-caps" }}>
              Thomas Carli
            </b>
            <br />
            <A style={{ fontSize: `0.8em` }} txt="06 77 80 25 71" />
            <br />
            thomas.carli@gmail.com
            <br />
            <A style={{ fontSize: `0.8em` }} txt="29" /> ans
            <br />
          </div>

          <div className="background" />
          <div className="topright" />
          <div
            class="titre"
            style={{
              fontSize: "2em",
              textAlign: `center`,
              fontVariant: "small-caps",
            }}
          >
            <p>
              <b>candidat cadets air france</b>
            </p>
            {/* <p><b>Air France </b></p> */}
          </div>

          {/* <div className="left-col"> */}
          {/* <img id="plane" src={airbusImage} /> */}
          {/* </div> */}

          <div class="sections">
            <Aero />
            <ExperiencePro />
            <Formation />
            <Langues />
            <Autres />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
