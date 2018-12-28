import React, { Component } from "react";
import "./CV.css";
import airbusImage from "./pfd.png";
import planeur from "./planeur.svg";
import cravate from "./cravate.svg";
import education from "./education.svg";
import sports from "./sports.svg";
import uk from "./uk.svg";
import photoIdentite from "./photo_identite.jpg";
import { LogoLeft, P } from "./utils";
import styled from "styled-components";
import "styled-components/macro";

const A = props => {
  return (
    <span className="a320" style={props.style}>
      {props.txt}
    </span>
  );
};

const Aero = () => {
  return (
    <div class="section aerAéronautiqueonautique">
      <LogoLeft img={planeur} />
      <div className="titreSection">Aeronautics</div>
      <div class="gridcontainer content">
        <div>
          <b>Ultralight</b>
        </div>
        <div>
          Ultralight solo flights - 15 hours of flight
          <br />
          Theoretical instructor ultralight license
        </div>
        <div>
          <b>Glider</b>
        </div>
        <div>7 hours of flight</div>
        <div>
          <b>Flight Simulation</b>
        </div>
        <div>
          At the age of 15-18, I exchanged with pilots and air traffic
          controllers on the IVAO (International Virtual Aviation Organisation)
          platform. This experience was an introduction to flying (phraseology,
          air charts, flight plans).
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
      <div className="titreSection">Professional Experience</div>
      <div class="content">
        <div style={xpStyle}>
          <b>
            <span class="a320">2018 > 2019</span> - Software Engineer - Paris
          </b>
          <P>
            I am working part-time to leave enough time to train for pilot
            selections and possibly start studying the ATPL in parallel of my
            job.
          </P>
          <P>
            Freelance gigs for companies based in Paris and Clermont-Ferrand.
          </P>
        </div>
        <div style={xpStyle}>
          <b>
            <span class="a320">2014 > 2018</span> - Software Engineer - GoEuro
            GmbH, Berlin
          </b>
          <P>Flight, Train & Bus tickets booking platform.</P>
          <P>100% english-speaking environment.</P>
          <P>3 years of experience in recruiting Software Engineers.</P>
        </div>
        <div style={xpStyle}>
          <b>
            <span class="a320">2012</span> - Software Engineering Intern -
            Google, Madrid{" "}
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
      <div className="titreSection">Studies</div>
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
        <div>Exchange semester with ESCP Berlin</div>
        <div>
          <b>
            <span class="a320">2010</span>
          </b>
        </div>
        <div>
          Lycée Sainte-Geneviève, Versailles.{" "}
          <i>Classes préparatoires PCSI – PC*</i>.
        </div>
        <div>
          <b>
            <span class="a320">2007</span>
          </b>
        </div>
        <div>
          <i>Baccalauréat scientifique</i> (A-levels, awarded with honours)
        </div>
      </div>
    </div>
  );
};

const Langues = () => {
  return (
    <div class="section langues">
      <LogoLeft img={uk} />

      <div className="titreSection">Languages</div>
      <div
        class="gridcontainer content"
        style={{ gridTemplateColumns: `1fr 7fr 2fr` }}
      >
        <div>English</div>
        <div>
          <span class="a320 b">C2</span> - 5 years of professional experience
          <br />
          <b>TOEIC</b> <span class="a320 b"> 990/990 </span> Listening and
          Reading - 28/02/2018
          <br />
        </div>
        <div>
          Spanish
          <span class="a320 b"> B1</span>
          <br />
          <br /> German
          <span class="a320 b"> A2</span>
        </div>
      </div>
    </div>
  );
};

const Autres = () => {
  return (
    <div class="section autres">
      <LogoLeft img={sports} />
      <div className="titreSection">Hobbies & other activities</div>
      <div
        class="gridcontainer content"
        style={{ gridTemplateColumns: `3cm 1fr` }}
      >
        <div>
          <b>Societies</b>
        </div>
        <div>
          Sports Society, Supélec - Vice-President - 2012
          <ul>
            <li>400 student members, > 20 sports</li>
            <li>
              Yearly university tournament, >2000 students from French and
              foreign universities
            </li>
          </ul>
        </div>
        <div>
          <b>Sports</b>
        </div>
        <div>
          Skiing (FFS licence, compétition en 2017-2018) - Inline Skating -
          Tennis - Kitesurfing
        </div>

        <div>
          <b>Soutien scolaire</b>
        </div>
        <div>
          Tutoring high school students in Mathematics, Physics and Chemistry.
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
            <A style={{ fontSize: `0.8em` }} txt="+33 6 77 80 25 71" />
            <br />
            thomas.carli@gmail.com
            <br />
            <A style={{ fontSize: `0.8em` }} txt="29" /> y/o
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
              <b>generation easyjet candidate</b>
            </p>
          </div>

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
