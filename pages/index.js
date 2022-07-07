import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import introModule from "../src/style/output/introModule.module.css";
import serviziStyle from "../src/style/output/servizi.module.css";
import Link from "next/link";
import Intro from "../src/components/Intro";

export default function Home() {
  const [section, setSection] = useState("1");

  return (
    <div className={styles.container}>
      <Head>
        <title>Consenergy - I tuoi consulenti per {"l'energia"}</title>
        <meta
          name="description"
          content="La nostra Società, vanta un’esperienza consolidata nel mercato dell’energia, specialistica nel settore delle energie rinnovabili e dell’efficienza energetica, riconosciuta come Energy Service Company–Esco. Offre i propri servizi professionali per lo sviluppo ed il sostegno economico dei piani di sviluppo aziendale dei propri Clienti, costituiti principalmente da: Utenti business e residenziali, produttori di energia, investitori istituzionali (fondi di investimento e banche finanziatrici), aziende fornitrici di EPC. Grazie alle competenze multidisciplinari dei suoi professionisti, l’accreditamento presso gli enti e le istituzioni competenti, la Società si propone di diventare uno «sportello unico» di fiducia per i propri Clienti, su tutti gli aspetti legati alla gestione dell’energia, ai meccanismi di incentivazione e alla costruzione ed esercizio di sistemi energetici, anche complessi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />

      <div className={serviziStyle.cont__servizi}>
        <ul className={serviziStyle.cont__servizi_list}>
          <li
            onClick={() => setSection("1")}
            id={section == "1" ? "active" : null}
          >
            Impianti Fotovoltaici
          </li>

          <li
            onClick={() => setSection("2")}
            id={section == "2" ? "active" : null}
          >
            Impianto Solare Termico
          </li>

          <li
            onClick={() => setSection("3")}
            id={section == "3" ? "active" : null}
          >
            Risparmio Energetico
          </li>

          <li
            onClick={() => setSection("4")}
            id={section == "4" ? "active" : null}
          >
            Colonnine Elettriche
          </li>
        </ul>

        <section style={{ display: section == "1" ? "flex" : "none" }}>
          <p>
            Un impianto solare fotovoltaico permette di trasformare{" "}
            {"l’energia"}
            solare incidente sulla superficie terrestre in energia elettrica, la
            seguente figura indica lo schema funzionale del{"l’impianto"}:
          </p>

          <p>
            I moduli fotovoltaici, esposti al sole, producono corrente elettrica
            in forma continua. L’inverter trasforma la corrente da continua ad
            alternata, che è quella comunemente utilizzata dalle utenze. La
            corrente erogata dall’inverter viene assorbita {"dall’utenza"}
            attraverso {"l’impianto"} esistente. Nel caso in cui {"l’impianto"}{" "}
            solare produca più energia di quella che serve in quel momento, il
            surplus viene immesso nella rete elettrica del Gestore di zona e
            viene misurato dal contatore, installato nel punto di consegna,
            dedicato proprio a conteggiare la corrente prodotta dal
            {"l’impianto"} solare e non usata dall’utente. <br />
            Quando {"l’impianto"} solare non produce (di notte) o produce poco
            (brutto tempo) o la corrente richiesta {"dall’utenza"} è maggiore di
            quella che può essere fornita in quel momento dal sistema
            fotovoltaico, si utilizza {"l’energia"} del distributore.
          </p>

          <p>
            Nel caos di impianti fotovoltaici con accumulo elettrico{" "}
            {"l’energia"}
            prodotta dal{"l’impianto"} fotovoltaico viene accumulata con la
            possibilità per l’utente di prelevare {"l’energia"} necessaria
            dall’accumulo senza doverla prelevare dalla Rete, anche quando
            {"l’impianto"} fotovoltaico non sta producendo.
          </p>

          <p>
            La nostra azienda, dopo aver studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con {"l’indicazione"} del vantaggio economico
            perseguibile grazie al risparmio ottenuto ed ai benefici fiscali
            legati ad ogni singolo intervento.
          </p>
        </section>

        <section style={{ display: section == "2" ? "flex" : "none" }}>
          <p>
            Con il termine SOLARI TERMICI si identificano in gergo tecnico
            quelli che sono comunemente denominati pannelli solari termici,
            ovvero quei dispositivi utilizzati per la conversione della
            radiazione solare in energia termica, che viene poi trasferita verso
            un accumulatore termico per essere successivamente sfruttata per un
            uso ulteriore:
          </p>

          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M11 44q-1.25 0-2.125-.875T8 41V12q0-3.3 2.35-5.65Q12.7 4 16 4h16q3.3 0 5.65 2.35Q40 8.7 40 12v29q0 1.25-.875 2.125T37 44Zm0-8.5V41h26v-5.5q-1.5 0-2.65 1t-3.85 1q-2.7 0-3.775-1-1.075-1-2.725-1-1.65 0-2.725 1-1.075 1-3.775 1t-3.775-1q-1.075-1-2.725-1Zm6.5-1q1.65 0 2.725-1 1.075-1 3.775-1t3.85 1q1.15 1 2.65 1t2.65-1q1.15-1 3.85-1V12q0-2.1-1.45-3.55Q34.1 7 32 7H16q-2.1 0-3.55 1.45Q11 9.9 11 12v20.5q2.7 0 3.775 1 1.075 1 2.725 1Zm6.75-4.6q-3.3 0-5.75-2.175t-2.45-5.575q0-1.15.325-2.375t1.175-2.425q.15-.25.425-.4.275-.15.625-.15.2 0 .3.125.1.125.1.275-.05.3-.075.575-.025.275-.025.525 0 1.5.625 2.625t1.125 1.125q.3 0 .425-.2t.125-.45q0-.25-.1-.575-.1-.325-.25-.825-.1-.4-.2-.975t-.1-1.325q0-2.7 1.225-4.625Q23 11.15 25.25 10.15q.2-.1.275-.125Q25.6 10 25.75 10q.15 0 .225.1.075.1.025.25-.2.55-.275.975-.075.425-.075.975 0 1.6.875 2.85t2.325 2.25q1.55 1.05 2 2.575.45 1.525.45 3.125 0 2.55-1.75 4.675t-5.3 2.125Zm.05-3q1.75 0 2.875-1t1.125-2.7q0-1.1-.35-1.95-.35-.85-1.1-1.65-.55-.55-1.175-1.15-.625-.6-1.075-1.3-.7.5-.925 1.5-.225 1 .025 2.25.1.55.15 1.025.05.475.05.875 0 1.15-.95 1.975-.95.825-1.85.975.45.4 1.3.775.85.375 1.9.375ZM24 24Z" />
              </svg>
              Produzione di Acqua Calda
            </li>

            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M40.5 13.5q-.65 0-1.075-.425Q39 12.65 39 12V5.5q0-.65.425-1.075Q39.85 4 40.5 4q.65 0 1.075.425Q42 4.85 42 5.5V12q0 .65-.425 1.075-.425.425-1.075.425Zm0 6q-.6 0-1.05-.45Q39 18.6 39 18q0-.65.45-1.075.45-.425 1.05-.425.65 0 1.075.425Q42 17.35 42 18q0 .6-.425 1.05-.425.45-1.075.45ZM20 44q-5.85 0-9.925-4.075Q6 35.85 6 30q0-3.15 1.4-5.775Q8.8 21.6 11.95 18.3q3.35-3.5 3.925-6.625Q16.45 8.55 16.35 4q8.15 5.05 12.9 12.075Q34 23.1 34 30q0 5.85-4.075 9.925Q25.85 44 20 44Zm0-3q1.25 0 2.4-.95t1.15-3q0-1.3-.775-3.425T20 28.95q-1.9 2.45-2.675 4.625-.775 2.175-.775 3.475.05 2 1.15 2.975Q18.8 41 20 41Zm-6.25-1.8q-.55-2.9.725-6.525Q15.75 29.05 18.9 25.75q.25-.25.55-.375.3-.125.55-.125.3 0 .575.125.275.125.525.375 2.55 2.7 4.3 6.275t.95 7.175q1.85-1.3 3.25-3.8T31 30q0-3.1-1.15-6.075t-2.875-5.6q-1.725-2.625-3.8-4.85Q21.1 11.25 19.25 9.7 19 13 17.7 15.475q-1.3 2.475-3.8 5.175-2.55 2.75-3.725 4.75Q9 27.4 9 30q0 2.85 1.325 5.225Q11.65 37.6 13.75 39.2Z" />
              </svg>
              Riscaldamento degli ambienti
            </li>

            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M24 9.5q-.65 0-1.075-.425Q22.5 8.65 22.5 8V3.5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075V8q0 .65-.425 1.075Q24.65 9.5 24 9.5Zm10.25 4.25q-.45-.45-.45-1.05 0-.6.45-1.05l3.15-3.2Q37.85 8 38.475 8t1.075.45Q40 8.9 40 9.5q0 .6-.45 1.05l-3.2 3.2q-.45.45-1.05.45-.6 0-1.05-.45ZM40 25.5q-.65 0-1.075-.425Q38.5 24.65 38.5 24q0-.65.425-1.075Q39.35 22.5 40 22.5h4.5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 46q-.65 0-1.075-.425-.425-.425-.425-1.075V40q0-.65.425-1.075Q23.35 38.5 24 38.5q.65 0 1.075.425.425.425.425 1.075v4.5q0 .65-.425 1.075Q24.65 46 24 46ZM11.65 13.75l-3.2-3.15Q8 10.15 8 9.525t.45-1.075Q8.9 8 9.5 8q.6 0 1.05.45l3.2 3.2q.45.45.45 1.05 0 .6-.45 1.05-.45.4-1.075.4t-1.025-.4Zm25.8 25.8-3.2-3.2q-.45-.45-.45-1.05 0-.6.45-1.05.4-.4 1.025-.4.625 0 1.075.4l3.25 3.15q.45.45.425 1.075Q40 39.1 39.6 39.55q-.45.45-1.075.45t-1.075-.45ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5H8q.65 0 1.075.425Q9.5 23.35 9.5 24q0 .65-.425 1.075Q8.65 25.5 8 25.5Zm4.95 14.05Q8 39.1 8 38.5q0-.6.45-1.05l3.2-3.2q.4-.4 1.025-.4.625 0 1.075.4.45.45.45 1.075t-.45 1.075l-3.15 3.15q-.45.45-1.075.45t-1.075-.45ZM24 36q-5 0-8.5-3.5T12 24q0-5 3.5-8.5T24 12q5 0 8.5 3.5T36 24q0 5-3.5 8.5T24 36Zm0-3q3.75 0 6.375-2.625T33 24q0-3.75-2.625-6.375T24 15q-3.75 0-6.375 2.625T15 24q0 3.75 2.625 6.375T24 33Z" />
              </svg>
              Raffrescamento Solare
            </li>
          </ul>

          <p>
            Collettori sanitari termici sono infatti utilizzati principalmente
            per aumentare {"l’efficienza"} energetica e ridurre i consumi di gas
            combustibile utilizzato nella produzione di acqua calda sanitaria o
            per il riscaldamento di abitazioni, uffici e negozi. Vengono
            indicati come collettori solari termici, dunque, tutti quei
            dispositivi in grado di “raccogliere” luce e calore e trasformarli
            in altre forme di energia, come accade in natura con le piante e la
            fotosintesi clorofilliana! <br />I collettori solari di cui si
            compone un impianto solare termico possono essere di tre diversi
            tipi, a seconda della tecnologia utilizzata:
          </p>

          <p>
            • Un primo tipo sono i collettori solari scoperti, ovvero dei
            semplici tubi realizzate in materiale plastico ed esposti alla luce
            del sole che, sfruttando questa esposizione, surriscaldano il
            liquido al loro interno. <br />
            <br /> • Un secondo tipo sono i collettori solari piani vetrati, in
            cui la radiazione solare viene assorbita da un collettore piano
            metallico e trasmessa al liquido che scorre nei condotti situati
            nella parte inferiore del pannello. <br />
            <br /> • Un terzo tipo sono i collettori solari sottovuoto, formati
            da alcune tubazioni collocate in condotti di vetro sottovuoto e
            ricoperte da un materiale particolare che assorbe la radiazione
            solare.
          </p>
        </section>

        <section style={{ display: section == "3" ? "flex" : "none" }}>
          <p>
            La questione del risparmio energetico vantaggio per le aziende è un
            argomento molto discusso negli ultimi anni. Questo non solo per la
            necessità di tutelare {"l’ambiente"}, ma anche allo scopo di consentire
            alle aziende di avere vantaggi fiscali. Si può sicuramente dire che
            il risparmio energetico rappresenti per le imprese un duplice
            vantaggio fiscale, ecco di seguito quali sono questi vantaggi.
          </p>

          <p>
            Il risparmio energetico, ed in particolare gli interventi che hanno
            come obiettivo tale risparmio, assicura vantaggi non solo per le
            persone fisiche, che possono ottenere le classiche agevolazioni
            previste, ma anche per le imprese e le società. Applicare il
            risparmio energetico permette alle imprese di ottenere una doppia
            detrazione ed è importante capire come effettuare la richiesta. In
            caso di interventi come quelli di recupero del patrimonio edilizio,
            combinati con il risparmio energetico:
            <br />
            <br />- <b>Le persone fisiche</b> possono avere accesso alla
            detrazione Irpef; <br /> - <b>Le imprese</b> possono unire le
            detrazioni “per privati” alla deduzione della spesa con
            l’ammortamento degli investimenti effettuati.
          </p>

          <p>
            Facciamo degli esempi pratici. Nello specifico, si può individuare
            un caso che abbia attinenza con la realtà, tenendo al momento da
            parte la disamina relativa all’Iva. Prendiamo ad esempio in
            considerazione il caso di un intervento pari a 100 mila euro,
            effettuato su un capannone appartenente ad una società di capitali.
            Già nel 2016 sarebbe stato possibile ottenere una detrazione Ires
            del 65% della spesa sostenuta. In più, questa detrazione sarebbe
            stata sommata al risparmio fiscale derivante dalla deduzione
            dell’imponibile Ires. La deduzione sarebbe stata, per il 2017, pari
            al 27,5%, mentre per l’Irap del 3,9% rispetto alle quote di
            ammortamento. Facendo un rapido calcolo si può notare come in questo
            caso preso come esempio, il risparmio complessivo potrebbe arrivare
            al 92,95%, un dato estremamente positivo. In questo caso pratico
            avrebbe generato un risparmio di detrazione pari a 65mila euro.
            Successivamente, questi 65 mila euro sarebbero stati suddivisi in 10
            anni, ottenendo così una detrazione pari a 6.500 euro {"all’anno"}. In
            aggiunta a queste indicazioni è doveroso sottolineare come gli
            imponibili Ires ed Irap avrebbero potuto essere ridotti delle quote
            di ammortamento per {"l’investimento"}, determinando un ulteriore
            risparmio energetico per le imprese. Proprio in relazione agli
            imponibili, a seconda del tipo di intervento effettuato, il costo si
            sarebbe potuto ripartire in un periodo di tempo di minimo un anno e
            massimo 34 anni. Alla luce di quanto emerso da questo esempio
            pratico è facile capire perché si parla di risparmio energetico come
            di un duplice vantaggio fiscale per le imprese.
          </p>

          <p>
            La nostra azienda, dopo aver studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con {"l’indicazione"} del vantaggio economico
            perseguibile grazie al risparmio ottenuto ed ai benefici fiscali
            legati ad ogni singolo intervento.
          </p>
        </section>

        <section style={{ display: section == "4" ? "flex" : "none" }}>
          <p>
            Con colonnine elettriche si definiscono tutte le apparecchiature con
            cui è possibile ricaricare le batterie dei propri veicoli elettrici
            o veicoli ibridi. Impariamo a conoscere le colonnine elettriche: con
            la crescente diffusione di veicoli elettrici e ibridi, è necessario
            capire come fare il pieno di elettricità.
          </p>

          <p>
            Le colonnine elettriche non sono solamente una scelta consapevole di
            sostenibilità ambientale, ma anche una soluzione per soddisfare una
            domanda crescente di mercato. Infatti la 2030 agenda, definita
            dall’ONU per lo sviluppo sostenibile, prevede che entro il 2030 non
            siano più prodotte automobili a motore endotermico. Il rifornimento
            può essere effettuato in modo “pubblico” presso le stazioni di
            ricarica diffuse sul suolo nazionale (anche in luoghi privati
            destinati ad uso pubblico come i parcheggi dei centri commerciali)
            oppure in modo del tutto “privato” a casa, mediante {"l’installazione"}
            di una colonnina o usufruendo delle prese domestiche o industriali.
            In entrambi i casi, {"l’alimentazione"} avviene “via cavo”. Questi cavi
            sono dotati di un sistema di protezione denominato PWM (Pulse Width
            Modulation - con impulso modulato) che garantisce la sicurezza
            durante il funzionamento.
          </p>

          <p>
            Non esiste una forma standard delle colonnine elettriche: a seconda
            della destinazione d’uso, le stazioni di ricarica per veicoli
            elettrici hanno strutture diverse: dalle stazioni di ricarica a
            parete (dette anche scatole da parete o wall box) installate in
            garage e parcheggi interrati alle stazioni di ricarica installate su
            pali o colonne su strade e luoghi pubblici. La ricerca e il
            progresso però corrono velocemente e sono già al lavoro su sistemi
            di ricarica ad induzione che, in futuro, potrebbero consentire agli
            automobilisti di evitare di caricare i cavi a bordo della vettura.
          </p>

          <p>
            Tuttavia, se sei in viaggio o fuori casa, è importante trovare e
            sapere come utilizzare le colonnine elettriche In tal proposito è
            possibile prevedere che in futuro possa cambiare il modo di
            viaggiare e di spostarsi, poichè sarà necessario pianificare
            anzitempo dove fermarsi per “fare il pieno” di elettricità. Di
            solito, questi dispositivi di ricarica vengono attivati tramite una
            carta o un’applicazione fornita dal gestore scelto per il servizio.
            La carta (o {"l’applicazione"}) viene utilizzata per avviare la ricarica
            e terminare la ricarica alla fine. Consente inoltre di considerare
            le spese, che di solito sono allocate ad un importo fisso
            dell’operatore e ad una variabile calcolata in base ai kW/h forniti.
          </p>

          <p>
            Il tempo richiesto per effettuare un ciclo di ricarica completo con
            la modalità di ricarica lenta è di 8 ore. Tuttavia, la maggior parte
            dei costruttori di auto ha implementato la possibilità di effettuare
            una ricarica rapida in 30 minuti. Questa modalità permette di le
            batterie all’80%, così da avere abbastanza energia per effettuare
            tutti gli spostamenti necessari senza innescare {"l’ansia"} da ricarica.
          </p>

          <p>
            La nostra azienda, dopo aver studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con {"l’indicazione"} del vantaggio economico
            perseguibile grazie al risparmio ottenuto ed ai benefici fiscali
            legati ad ogni singolo intervento.
          </p>
        </section>
      </div>
    </div>
  );
}
