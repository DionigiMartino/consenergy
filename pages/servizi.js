import React, { useEffect, useContext } from "react";
import serviziPage from "../src/style/output/serviziPage.module.css";
import AppContext from "../context/context";
import backgroundFotovoltaico from "../public/media/img/fotovoltaico_img.jpeg";
import backgroundImpianto from "../public/media/img/impianto_solare_termico.jpeg";
import backgroundRisparmio from "../public/media/img/risparmio.jpeg";
import backgroundColonne from "../public/media/img/colonne.jpeg";
import biogas from "../public/media/img/tabellaGassificazione.jpg";

function Servizi() {
  useEffect(() => {
    document.title = "Servizi - Consenergy";
  }, []);

  const { service, setService } = useContext(AppContext);

  return (
    <div className={serviziPage.cont__serviziPage}>
      <ul className={serviziPage.cont__serviziPage_list}>
        <li
          id={service == "1" ? "active" : null}
          onClick={() => setService(service == "1" ? "0" : "1")}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${backgroundFotovoltaico})`,
          }}
        >
          Impianti Fotovoltaici <ul></ul>
        </li>
        <li
          id={service == "2" ? "active" : null}
          onClick={() => setService(service == "2" ? "0" : "2")}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${backgroundImpianto})`,
          }}
        >
          Impianto di Cogenerazione
        </li>
        <li
          id={service == "3" ? "active" : null}
          onClick={() => setService(service == "3" ? "0" : "3")}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${backgroundRisparmio})`,
          }}
        >
          IMPIANTI DI GASSIFICAZIONE
        </li>
        <li
          id={service == "4" ? "active" : null}
          onClick={() => setService(service == "4" ? "0" : "4")}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${backgroundColonne})`,
          }}
        >
          Impianti di Biogas
        </li>
      </ul>

      <section>
        <article id={service == "1" ? "active" : null}>
          <p>
            Un impianto solare fotovoltaico permette di trasformare 
            l&apos;energia
            solare incidente sulla superficie terrestre in energia elettrica, la
            seguente figura indica lo schema funzionale dell&apos;impianto:
          </p>

          <p>
            I moduli fotovoltaici, esposti al sole, producono corrente elettrica
            in forma continua. L&apos;inverter trasforma la corrente da continua ad
            alternata, che è quella comunemente utilizzata dalle utenze. La
            corrente erogata dall&apos;inverter viene assorbita dall&apos;utenza
            attraverso l&apos;impianto esistente. Nel caso in cui l&apos;impianto 
            solare produca più energia di quella che serve in quel momento, il
            surplus viene immesso nella rete elettrica del Gestore di zona e
            viene misurato dal contatore, installato nel punto di consegna,
            dedicato proprio a conteggiare la corrente prodotta dal
            l&apos;impianto solare e non usata dall&apos;utente. <br />
            Quando l&apos;impianto solare non produce (di notte) o produce poco
            (brutto tempo) o la corrente richiesta dall&apos;utenza è maggiore di
            quella che può essere fornita in quel momento dal sistema
            fotovoltaico, si utilizza l&apos;energia del distributore.
          </p>

          <p>
            Nel caos di impianti fotovoltaici con accumulo elettrico 
            l&apos;energia
            prodotta dall&apos;impianto fotovoltaico viene accumulata con la
            possibilità per l&apos;utente di prelevare l&apos;energia necessaria
            dall&apos;accumulo senza doverla prelevare dalla Rete, anche quando
            l&apos;impianto fotovoltaico non sta producendo.
          </p>

          <p>
            Utilizzare l&apos;elettricità e il gas in modo consapevole ed efficiente
            significa consumare meglio e far risparmiare la tua azienda, anche a
            livello assicurativo. Alcuni interventi di efficienza energetica
            rispondono inoltre a obblighi normativi, permettono di fare
            manutenzione e prevenire il fermo macchine verificando la corretta
            installazione e il buon funzionamento degli impianti e
            contribuiscono alla sicurezza in azienda. Dalla fornitura di
            energia, al monitoraggio di consumi e picchi di potenza, fino
            all&apos;analisi di efficienza degli impianti, sono diverse le azioni
            che puoi mettere in campo per limitare i costi di esercizio della
            tua attività e ridurre gli sprechi. E per farlo, mettiamo a tua
            disposizione un consulente energetico capace di orientarti verso la
            soluzione più adatta al tuo lavoro. Il risparmio inizia da qui,
            intervenendo sulle abitudini di consumo e senza interferenze con la
            produttività, perché un utilizzo efficiente dell&apos;energia 
            consente di impiegarne meno a parità di servizio.
          </p>

          <p>
            La nostra azienda, dopo ave studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con l&apos;indicazione del vantaggio economico
            perseguibile grazie al risparmio ottenuto ed ai benefici fiscali
            legati ad ogni singolo intervento
          </p>
        </article>

        <article id={service == "2" ? "active" : null}>
          <p>
            La cogenerazione è la produzione combinata di energia elettrica ed
            energia termica a partire da un&apos;unica fonte di energia primaria. Un
            impianto di cogenerazione, dunque, fornisce sia elettricità che
            calore, garantendo una migliore resa energetica rispetto alle due
            produzioni separate
          </p>

          <p>
            Comprendere il funzionamento di un impianto di cogenerazione
            richiede di sapere come avviene tradizionalmente la produzione di
            energia elettrica. In una centrale termoelettrica convenzionale si
            brucia del combustibile in una fornace per portare a ebollizione
            dell&apos;acqua e produrre così vapore. Il vapore mette in moto una
            turbina, che a sua volta aziona un generatore, il quale produce
            elettricità. Il problema è che nel corso del processo gran parte
            dell&apos;energia termica iniziale va perduta, per cui solo il 30-55%
            viene effettivamente convertita in energia elettrica. Il resto
            finisce disperso come calore nell&apos;ambiente.
          </p>

          <p>
            In un impianto di cogenerazione, invece, la maggior parte di quel
            calore viene recuperato e utilizzato per altri scopi (riscaldamento,
            produzione di acqua calda sanitaria, forza meccanica, generazione
            secondaria di elettricità). In questo modo la resa energetica
            complessiva sale al 65-90%. Di solito gli impianti di cogenerazione
            più piccoli (fino a 2 MW) hanno al posto della turbina un motore a
            combustione interna (essenzialmente simile a quelli di auto e
            camion) ma lo schema di funzionamento non cambia (con scambiatori di
            calore che recuperano il calore dai fumi di scarico). Come fonte di
            energia primaria si utilizzano per lo più combustibili fossili, come
            gas naturale, GPL e gasolio, o combustibili organici non fossili,
            come biogas, biometano, olio vegetale e biomasse. In futuro è
            probabile che gli impianti di cogenerazione useranno celle a
            combustibile, che sfruttano la reazione dell&apos;idrogeno con l&apos;ossigeno
            per produrre sia elettricità che calore.
          </p>

          <p>
            <b>I vantaggi di un impianto di Cogenerazione</b>
          </p>

          <p>
            I vantaggi della cogenerazione sono numerosi. In particolare,
            l&apos;impiego sul posto di un impianto di cogenerazione permette di:
            <br />
            <br />
            <b>
              Migliorare l&apos;efficienza complessiva di utilizzo dell&apos;energia,
              combinando in un solo generatore la produzione di calore e di
              energia elettrica.
              <br />
              Ridurre la spesa energetica e affrancarsi progressivamente dalla
              dipendenza dalla rete elettrica.
              <br /> Evitare la dispersione di energia elettrica (fino al 5% di
              quella prodotta) dovuta alla sua trasmissione su lunghe distanze.
              Ottenere incentivi economici per progetti di efficientamento.
            </b>
          </p>

          <p>
            <b>Cogenerazione industriale: quando conviene?</b>
          </p>

          <p>
            I sistemi di cogenerazione possono alimentare un&apos;ampia varietà di
            processi industriali e manifatturieri e produrre ulteriore energia
            utile, come vapore ad alta pressione, calore di processo ed energia
            meccanica. In particolare un cogeneratore conviene quando si ha un
            elevato fabbisogno di elettricità e/o calore (come nell&apos;industria
            alimentare, cartaria o ceramica). In questi casi un impianto di
            cogenerazione industriale garantisce un notevole risparmio
            economico, perché aumenta l&apos;efficienza energetica e riduce
            sensibilmente, a parità di prestazioni, i consumi di combustibile.
            Passare a un&apos;unità di cogenerazione può far risparmiare fino al 30%
            sul costo dell&apos;energia, oltre a tagliare le emissioni di CO2.
          </p>

          <p>
            <b>CONSENERGY e il “progetto consulenza globale energia”</b>
          </p>

          <p>
            L&apos;idea ispiratrice che ha portato alla nascita del “progetto
            consulenza globale energia” è scaturita dalla riflessione che
            l&apos;imprenditore moderno, nell&apos;esercizio della propria attività,
            utilizza energia termica ( kW termici) e energia elettrica ( kW
            elettrici) e, visto il continuo aumento dei costi di tale energia,
            necessita di prestazioni consulenziali specialistiche e coordinate
            che rendano funzionali gli impianti preesistenti presso le sedi
            aziendali, ottimizzandone il rendimento e riducendo, sensibilmente,
            i costi aziendali nel settore dell&apos;energia. In quest&apos;ottica
            Consenergy ha raggruppato al proprio interno molteplici
            professionalità specialistiche già consolidate, avvalendosi ,dove
            necessario, della collaborazione di Aziende produttrici leader nella
            costruzione di apparecchiature per il “risparmio energetico” al fine
            di affiancare l&apos;imprenditore nell&apos;individuazione, adozione ed
            applicazione di tecniche di ottimizzazione sistematica della
            gestione aziendale tese al raggiungimento del miglior rapporto
            qualità prezzo nella produzione e acquisto di energia termica ed
            elettrica. Consenergy si propone sul mercato come il primo
            “consulente globale aziendale”, studia le esigenze dei clienti e gli
            offre “prodotti e servizi” tali da assicurare sicuri risparmi e le
            migliori performance nel settore dell&apos;energia, attuando un ruolo di
            vitale importanza per lo sviluppo delle aziende Consenergy è in
            grado di assistere l&apos;Azienda a 360 gradi, offrendo la sua opera a
            costo zero, consentendo, così, all&apos;imprenditore di realizzare un
            ulteriore risparmio proveniente da un uso più conveniente delle
            “risorse umane aziendali”. L&apos;azione di Consenergy non si esaurisce
            con la prima visita, ma continua nel tempo per il mantenimento degli
            standard realizzati e la verifica periodica di ulteriori possibilità
            di migliorarli.
          </p>
        </article>

        <article id={service == "3" ? "active" : null}>
          <p>
            Un impianto di gassificazione si basa sul concetto della pirolisi.
            La pirolisi è un processo di conversione termochimica della materia
            organica, chiamata anche distillazione a secco, che si basa sulla
            trasformazione della biomassa ad opera del calore a temperature
            comprese tra i 400 e i 1000°C e in completa assenza di un agente
            ossidante (normalmente ossigeno) o al più impiegando una
            ridottissima quantità di ossigeno (parziale gassificazione). Il
            materiale viene portato a temperature comprese tra i 200 e i 1000°C
            (gassificazione completa della biomassa), talvolta immettendo
            opportune quantità̀ di ossigeno che consentono l&apos;innesco di una
            parziale combustione che porta ad un aumento della temperatura. Da
            questo processo si ottengono prodotti gassosi, liquidi e solidi in
            percentuale dipendente dai parametri di reazione.
          </p>

          <img src={biogas} alt="Biomassificazione" />

          <p>
            Attualmente sono disponibili impianti alimentati da biomassa di
            varia potenza , in particolare CON MOTORE ENDOTERMICO Potenza
            elettrica 20 kW/ 50 kW/ 100 kW / 200 kW CON TURBINA Potenza
            elettrica 100 kW / 200 kW
          </p>

          <p>
            La nostra azienda, dopo ave studiato attentamente la qualita&apos; e la
            quantita&apos; di biomassa disponibile, sviluppa un progetto preliminare
            completo di business plan con l&apos;indicazione del vantaggio economico
            perseguibile grazie al risparmio ottenuto ed ai benefici fiscali
            legati ad ogni singolo intervento
          </p>
        </article>

        <article id={service == "4" ? "active" : null}>
          <p>
            Gli impianti biogas lavorano utilizzando la digestione anaerobica
            per produrre biogas partendo dalle biomasse: nel digestore, in
            assenza di ossigeno, si attivano enzimi e batteri specializzati che
            fermentano la biomassa, determinando la produzione di biogas. Il
            funzionamento di un impianto biogas, le sue tecnologie implicate e
            strutture, possono variare rispetto al tipo di biomasse utilizzate.
          </p>

          <p>I vantaggi della tecnologia proposta sono notevoli: </p>
          <p>
            <b>
              La possibilità di valorizzare e sfruttare biomasse di scarto e
              sottoprodotti per produrre energia, riducendo l&apos;impatto ambientale
              derivante dal trattamento dei rifiuti
              <br />
              <br />
              La possibilità di diminuire le emissioni di anidride carbonica. La
              combustione del biogas non origina CO2 aggiuntiva rispetto a
              quella già utilizzata in precedenza dalle biomasse vegetali o
              animali di partenza, a differenza dei combustibili fossili che la
              producono ex novo;
              <br />
              <br />
              La possibilità di ridurre l&apos;importazione di gas metano, che ha un
              impatto negativo sull&apos;economia nazionale;
              <br />
              <br />
              La possibilità di produrre anche calore. Difatti il biogas può
              essere impiegato sia per generare energia elettrica sia per
              soddisfare la domanda di riscaldamento;
              <br />
              <br />
              La possibilità di essere erogato in forma continua poiché
              l&apos;energia da biomasse è regolabile a piacimento e può essere
              bloccata quando desiderato, al pari delle energie da fonti
              fossili;
              <br />
              <br /> La possibilità , una volta depurato dalle impurità ed
              eliminata la CO2, di essere trasformato in biometano. In seguito,
              viene trasportato e utilizzato attraverso le tradizionali
              infrastrutture, consentendo ai Paesi di ridurre le emissioni in
              alcuni settori difficili, come l&apos;industria pesante e il trasporto
              merci.
            </b>
          </p>

          <p>
            La nostra azienda, dopo aver studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con l&apos;indicazione del vantaggio
            economico perseguibile grazie al risparmio ottenuto ed ai benefici
            fiscali legati ad ogni singolo intervento.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Servizi;
