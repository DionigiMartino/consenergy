import React from "react";
import introModule from "../style/output/introModule.module.css";
import backgroundImage2 from "../../public/media/img/backgroundHome.jpeg";
import backgroundImage3 from "../../public/media/img/work.jpeg";
import Link from "next/link";

function Intro() {
  return (
    <div className={introModule.cont__intro}>
      <div
        className={introModule.cont__intro_company}
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <h1>Consenergy - I tuoi consulenti per {"l'energia"}</h1>
        <h3>
          La nostra Società, vanta un’esperienza consolidata nel mercato
          dell’energia, specialistica nel settore delle energie rinnovabili e
          dell’efficienza energetica, riconosciuta come Energy Service
          Company-Esco.
        </h3>
        <Link href="/servizi">Esplora i nostri servizi</Link>
      </div>
      <div
        className={introModule.cont__intro_info}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0,0,0,.5)), url(${backgroundImage3})`,
        }}
      >
        <h2>Sei alla ricerca di una Consulenza?</h2>

        <p>Contattaci per una Consulenza Gratuita, uno dei nostri esperti si metterà in contatto con Te al più presto.</p>

        <Link href="/contatti">Prendi Appuntamento</Link>
      </div>
      <div className={introModule.cont__intro_perks}>
        <div className={introModule.cont__intro_perks_text}>
          <h4>Chi Siamo</h4>
          <h3>Scopri di cosa ci occupiamo</h3>
        </div>

        <ul className={introModule.cont__intro_perks_elements}>
          <li>
            Impianti Fotovoltaici{" "}
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M18 44V38.9Q12.7 37.05 9.35 32.425Q6 27.8 6 21.9Q6 18.15 7.425 14.875Q8.85 11.6 11.275 9.175Q13.7 6.75 16.975 5.325Q20.25 3.9 23.95 3.9Q27.65 3.9 30.95 5.325Q34.25 6.75 36.7 9.175Q39.15 11.6 40.575 14.875Q42 18.15 42 21.9Q42 27.8 38.625 32.375Q35.25 36.95 30 38.85V44H27V39.65Q26.25 39.75 25.5 39.825Q24.75 39.9 23.95 39.9Q23.2 39.9 22.45 39.825Q21.7 39.75 21 39.65V44ZM24 37Q30.25 37 34.625 32.625Q39 28.25 39 22Q39 15.75 34.625 11.375Q30.25 7 24 7Q17.75 7 13.375 11.375Q9 15.75 9 22Q9 28.25 13.375 32.625Q17.75 37 24 37ZM16 17.5H32V14.5H16ZM22.15 33.65 27.8 28 25.3 25.5 28.15 22.65 25.85 20.35 20.2 26 22.7 28.5 19.85 31.35ZM24 22Q24 22 24 22Q24 22 24 22Q24 22 24 22Q24 22 24 22Q24 22 24 22Q24 22 24 22Q24 22 24 22Q24 22 24 22Z" />
            </svg>
          </li>

          <li>
            Impianto Solare Termico
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M7 22.5Q5.75 22.5 4.875 21.625Q4 20.75 4 19.5V11Q4 9.75 4.875 8.875Q5.75 8 7 8H27V22.5ZM7 19.5H24V11H7Q7 11 7 11Q7 11 7 11V19.5Q7 19.5 7 19.5Q7 19.5 7 19.5ZM7 40Q5.75 40 4.875 39.125Q4 38.25 4 37V28.5Q4 27.25 4.875 26.375Q5.75 25.5 7 25.5H31V40ZM7 37H28V28.5H7Q7 28.5 7 28.5Q7 28.5 7 28.5V37Q7 37 7 37Q7 37 7 37ZM34 40V22.5H30V8H44L40 19H44ZM9.75 34.25H12.75V31.25H9.75ZM9.75 16.75H12.75V13.75H9.75ZM7 19.5Q7 19.5 7 19.5Q7 19.5 7 19.5V11Q7 11 7 11Q7 11 7 11V19.5ZM7 37Q7 37 7 37Q7 37 7 37V28.5Q7 28.5 7 28.5Q7 28.5 7 28.5V37Z" />
            </svg>
          </li>

          <li>
            Risparmio Energetico
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M23 34V26H19L25 14V22H29ZM13 46Q11.8 46 10.9 45.1Q10 44.2 10 43V5Q10 3.8 10.9 2.9Q11.8 2 13 2H35Q36.2 2 37.1 2.9Q38 3.8 38 5V43Q38 44.2 37.1 45.1Q36.2 46 35 46ZM13 38.5H35V9.5H13ZM13 41.5V43Q13 43 13 43Q13 43 13 43H35Q35 43 35 43Q35 43 35 43V41.5ZM13 6.5H35V5Q35 5 35 5Q35 5 35 5H13Q13 5 13 5Q13 5 13 5ZM13 5Q13 5 13 5Q13 5 13 5V6.5V5Q13 5 13 5Q13 5 13 5ZM13 43Q13 43 13 43Q13 43 13 43V41.5V43Q13 43 13 43Q13 43 13 43Z" />
            </svg>
          </li>

          <li>
            Colonnine Elettriche
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M16.85 37.3 21.25 30.3H18.6V25.05L14.25 32.05H16.85ZM11 20.4H24.45V9Q24.45 9 24.45 9Q24.45 9 24.45 9H11Q11 9 11 9Q11 9 11 9ZM11 39H24.45V23.4H11ZM8 42V9Q8 7.8 8.9 6.9Q9.8 6 11 6H24.45Q25.65 6 26.55 6.9Q27.45 7.8 27.45 9V23.4H30.7Q31.75 23.4 32.475 24.125Q33.2 24.85 33.2 25.9V36.85Q33.2 37.95 34.075 38.675Q34.95 39.4 36.1 39.4Q37.25 39.4 38.25 38.675Q39.25 37.95 39.25 36.85V17.5H38.5Q37.9 17.5 37.45 17.05Q37 16.6 37 16V11.5H38V9H39.5V11.5H41.5V9H43V11.5H44V16Q44 16.6 43.575 17.05Q43.15 17.5 42.5 17.5H41.75V36.85Q41.75 39 40.05 40.5Q38.35 42 36.1 42Q33.9 42 32.3 40.5Q30.7 39 30.7 36.85V25.9Q30.7 25.9 30.7 25.9Q30.7 25.9 30.7 25.9H27.45V42ZM24.45 39H11H24.45Z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Intro;
