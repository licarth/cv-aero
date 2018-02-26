import React, { Component } from 'react';
import logo from './logo.svg';
import './CV.css';
import airbusImage from './pfd.png'

const A = (props) => {
  return <span className="a320" style={props.style}>{props.txt}</span>;
}

class CV extends Component {
  render() {
    return (
      <div className="CV">
        <div className="page">
          <div className="content-grid">
            <div className="nom">
              <b style={{ fontSize: `1.5em`, fontVariant: 'small-caps' }}>Thomas Carli</b>
              <br></br>
              <A style={{ fontSize: `0.8em` }} txt='06 77 80 25 71' />
              <br></br>
              thomascarli@gmail.com<br></br>
            </div>

            <div className="background">
            </div>
            <div className="topright"></div>
            <div class="titre" style={{ fontSize: '2em', textAlign: `center`, fontVariant: 'small-caps' }}>
              <b>Candidat à la formation Cadets Air France <A txt='2018' /></b>
            </div>

            <div class="left-col">
              {/* <img id="plane" src={airbusImage} /> */}
            </div>
            <div class="sections">
              <div class="section aeronautique">
                <div className="titreSection">Aéronautique</div>
                <div class="gridcontainer">
                  <div>
                    <b>ULM</b>
                  </div>
                  <div>Laché en ULM 3 axes - 15 heures de vol - Licence théorique d’instructeur ULM</div>
                  <div>
                    <b>Planeur</b>
                  </div>
                  <div>7 heures de vol</div>
                </div>
              </div>
              <div class="section experience">
                <div className="titreSection">Expérience Professionnelle</div>
                <div>
                  <b>
                    <span class="a320">2014 > 2018</span> - Développeur informatique - GoEuro GmbH, Berlin</b>
                  <ul>
                    <li>Site internet de comparaison et de réservation de billets d’avion, de train et de bus.</li>
                    <li>10 millions de visiteurs uniques par mois.</li>
                    <li>Équipe multidisciplinaire et internationale. Anglais exclusivement utilisé.</li>
                    <li>3 ans d’expérience comme interviewer technique en entretiens d’embauche.</li>
                  </ul>
                </div>
                <div>
                  <b>
                    <span class="a320">2012</span> - Développeur informatique stagiaire - Google, Madrid </b>
                  <ul>
                    <li>Première expérience professionnelle.</li>
                  </ul>
                </div>
              </div>
              <div class="section formation">
                <div className="titreSection">Formation</div>
                <div class="gridcontainer" style={{ marginLeft: `3mm` }}>
                  <div>
                    <b>
                      <span class="a320">2014</span>
                    </b>
                  </div>
                  <div>
                    Supélec, Gif-sur-Yvette. Master of Science in Engineering.
                        </div>
                  <div>
                    <b>
                      <span class="a320">2012</span>
                    </b>
                  </div>
                  <div>
                    Semestre d’échange avec l’ESCP Europe (Berlin)
                        </div>
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
                  <div>
                    Baccalauréat scientifique (mention Très Bien).
                        </div>
                </div>
              </div>
              <div class="section langues">
                <div className="titreSection">Langues</div>
                <div class="gridcontainer" style={{ gridTemplateColumns: `1fr 7fr 2fr` }}>
                  <div>Anglais</div>
                  <div>
                    <span class="a320 b">C2</span> - 5 ans d’expérience professionnelle
                            <br></br>
                    <b>TOEIC</b> Listening and Reading - 2 Février 2018, Paris
                            <br></br>Listening
                            <span class="a320 b"> 495/495 </span>
                    - Reading
                            <span class="a320 b"> 495/495 </span>
                    - Total
                            <span class="a320 b"> 990/990 </span>
                  </div>
                  <div>
                    Espagnol
                            <span class="a320 b"> B2</span>
                    <br></br>
                    <br></br> Allemand
                            <span class="a320 b"> A2</span>
                  </div>
                </div>
              </div>
              <div class="section autres">
              <div className="titreSection">Autres Activités</div>
                <div class="gridcontainer" style={{ gridTemplateColumns: `3cm 1fr` }}>
                  <div>
                    <b>Associations</b>
                  </div>
                  <div>Bureau des Sports de Supélec - Vice-Président - 2012
                            <ul>
                      <li>400 licenciés pratiquant 20 sports différents.</li>
                      <li>Tournoi universitaire annuel - 2000 sportifs venant d’universités françaises et étrangères.</li>
                    </ul>
                  </div>
                  <div>
                    <b>Sports</b>
                  </div>
                  <div>Ski (licencié FFS, compétition en 2017-2018) - Roller - Tennis - Kitesurf & Land kiteboarding</div>

                  <div>
                    <b>Soutien scolaire</b>
                  </div>
                  <div>À 2 élèves de terminale S préparent le baccalauréat scientifique.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
