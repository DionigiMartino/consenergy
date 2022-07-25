import React, { useEffect } from "react";
import chiSiamo from "../src/style/output/chisiamo.module.css";
import axpoLogo from '../public/media/img/axpo.svg'
import dufercoLogo from "../public/media/img/duferco.jpeg";
import bukheLogo from "../public/media/img/bukhe.svg";
import moovyLogo from "../public/media/img/moovy.jpg";
import aegLogo from "../public/media/img/logoaeg.svg";



function Azienda() {
  useEffect(() => {
    document.title = "Azienda - Consenergy";
  });

  return (
    <div className={chiSiamo.cont__chiSiamo}>
      <h3>La nostra Azienda</h3>

      <p>
        La nostra Società, vanta un’esperienza consolidata nel mercato
        dell’energia, specialistica nel settore delle energie rinnovabili e
        dell’efficienza energetica, riconosciuta come Energy Service
        Company-Esco. Offre i propri servizi professionali per lo sviluppo ed il
        sostegno economico dei piani di sviluppo aziendale dei propri Clienti,
        costituiti principalmente da: <br />
        <br /> <b>Utenti business e residenziali</b>, <br />
        <b>
          produttori di energia investitori istituzionali (fondi di investimento
          e banche finanziatrici)
        </b>
        , <br /> <b>aziende fornitrici di EPC</b>,
      </p>

      <p>
        Grazie alle competenze multidisciplinari dei suoi professionisti,
        l’accreditamento presso gli enti e le istituzioni competenti, la Società
        si propone di diventare uno «sportello unico» di fiducia per i propri
        Clienti, su tutti gli aspetti legati alla gestione dell’energia, ai
        meccanismi di incentivazione e alla costruzione ed esercizio di sistemi
        energetici, anche complessi. Naturalmente, come abbiamo avuto modo di
        spiegare al Vostro Responsabile, l’intervento della nostra Società, non
        si esaurirà in queste prime fasi ma continuerà nel tempo affiancando la
        Vostra spettabile Direzione in tutte quelle scelte, che grazie al
        continuo sviluppo delle tecnologie, vi consentiranno di ridurre sempre
        ulteriormente i costi energetici della Struttura.
      </p>

      <p>
        L’azione svolta dalla nostra Società, grazie alle conoscenze specifiche
        acquisite nel settore specifico, assicura all’utente finale una continua
        ottimizzazione dei costi di energia elettrica e termica. La Società,
        inoltre, affianca il Cliente:
        <br />
        <br />
        <b>
          nella ricerca di soluzioni finanziarie, agevolate o non, adattandole
          alle reali possibilità del Cliente stesso.
        </b>{" "}
        <br />
        <b>
          nell’elaborazione di tutti i documenti necessari per l’ottenimento
          delle Autorizzazioni previste per l’esecuzione e la gestione degli
          impianti proposti.
        </b>
      </p>

      <p>
        Grazie a questo continuo impegno, la nostra Società si pone sul mercato,
        e nei confronti dei propri Clienti, come un vero “Partner Aziendale” che
        non si limita a proporre e a fornire impianti e tecnologie, ma svolge
        anche una importante opera di “consulente Aziendale” che aiuta il
        Cliente stesso e gli consiglia sempre le migliori soluzioni presenti sul
        mercato , specialmente nel settore energetico.
      </p>

      <h3>I Nostri Partner</h3>

      <ul>
        <li>
          <img src={dufercoLogo} alt="Duferco" />
        </li>
        <li>
          <img src={axpoLogo} alt="Axpo" />
        </li>

        <li>
          <img src={aegLogo} alt="bukhe" />
        </li>

        <li>
          <img src={moovyLogo} alt="microBees" />
        </li>
      </ul>
    </div>
  );
}

export default Azienda;
