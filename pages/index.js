import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import introModule from "../src/style/output/introModule.module.css";
import serviziStyle from "../src/style/output/servizi.module.css";
import Link from "next/link";
import Intro from "../src/components/Intro";

export default function Home() {
  const [section, setSection] = useState("1");
  const [sectionNew, setSectionNew] = useState("1");
  const [sectionThird, setSectionThird] = useState("1");

  return (
    <div className={styles.container}>
      <Head>
        <title>Consenergy - I tuoi consulenti per l&apos;energia</title>
        <meta
          name="description"
          content="La nostra Società, vanta un&apos;esperienza consolidata nel mercato dell&apos;energia, specialistica nel settore delle energie rinnovabili e dell&apos;efficienza energetica, riconosciuta come Energy Service Company–Esco. Offre i propri servizi professionali per lo sviluppo ed il sostegno economico dei piani di sviluppo aziendale dei propri Clienti, costituiti principalmente da: Utenti business e residenziali, produttori di energia, investitori istituzionali (fondi di investimento e banche finanziatrici), aziende fornitrici di EPC. Grazie alle competenze multidisciplinari dei suoi professionisti, l&apos;accreditamento presso gli enti e le istituzioni competenti, la Società si propone di diventare uno «sportello unico» di fiducia per i propri Clienti, su tutti gli aspetti legati alla gestione dell&apos;energia, ai meccanismi di incentivazione e alla costruzione ed esercizio di sistemi energetici, anche complessi."
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
            Cogenerazione
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

          <li
            onClick={() => setSection("5")}
            id={section == "5" ? "active" : null}
          >
            Fornitura Elettrica
          </li>
        </ul>

        <section style={{ display: section == "1" ? "flex" : "none" }}>
          <p>
            Un impianto solare fotovoltaico permette di trasformare
            l&apos;energia solare incidente sulla superficie terrestre in
            energia elettrica, la seguente figura indica lo schema funzionale
            dell&apos;impianto:
          </p>

          <p>
            I moduli fotovoltaici, esposti al sole, producono corrente elettrica
            in forma continua. L&apos;inverter trasforma la corrente da continua
            ad alternata, che è quella comunemente utilizzata dalle utenze. La
            corrente erogata dall&apos;inverter viene assorbita dall&apos;utenza
            attraverso l&apos;impianto esistente. Nel caso in cui
            l&apos;impianto solare produca più energia di quella che serve in
            quel momento, il surplus viene immesso nella rete elettrica del
            Gestore di zona e viene misurato dal contatore, installato nel punto
            di consegna, dedicato proprio a conteggiare la corrente prodotta dal
            l&apos;impianto solare e non usata dall&apos;utente. <br />
            Quando l&apos;impianto solare non produce (di notte) o produce poco
            (brutto tempo) o la corrente richiesta dall&apos;utenza è maggiore
            di quella che può essere fornita in quel momento dal sistema
            fotovoltaico, si utilizza l&apos;energia del distributore.
          </p>

          <p>
            Nel caos di impianti fotovoltaici con accumulo elettrico
            l&apos;energia prodotta dall&apos;impianto fotovoltaico viene
            accumulata con la possibilità per l&apos;utente di prelevare
            l&apos;energia necessaria dall&apos;accumulo senza doverla prelevare
            dalla Rete, anche quando l&apos;impianto fotovoltaico non sta
            producendo.
          </p>

          <p>
            La nostra azienda, dopo aver studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con l&apos;indicazione del vantaggio
            economico perseguibile grazie al risparmio ottenuto ed ai benefici
            fiscali legati ad ogni singolo intervento.
          </p>
        </section>

        <section style={{ display: section == "2" ? "flex" : "none" }}>
          <p>
            La cogenerazione è la produzione combinata di energia elettrica ed
            energia termica a partire daun&apos;unica fonte di energia primaria.
            Un impianto di cogenerazione, dunque, fornisce sia elettricità che
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
            dell&apos;energia termica iniziale va perduta, per cui solo il
            30-55% viene effettivamente convertita in energia elettrica. Il
            resto finisce disperso come calore nell&apos;ambiente.
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
            combustibile, che sfruttano la reazione dell&apos;idrogeno con
            l&apos;ossigeno per produrre sia elettricità che calore.
          </p>
        </section>

        <section style={{ display: section == "3" ? "flex" : "none" }}>
          <p>
            La questione del risparmio energetico vantaggio per le aziende è un
            argomento molto discusso negli ultimi anni. Questo non solo per la
            necessità di tutelare l&apos;ambiente, ma anche allo scopo di
            consentire alle aziende di avere vantaggi fiscali. Si può
            sicuramente dire che il risparmio energetico rappresenti per le
            imprese un duplice vantaggio fiscale, ecco di seguito quali sono
            questi vantaggi.
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
            l&apos;ammortamento degli investimenti effettuati.
          </p>

          <p>
            Facciamo degli esempi pratici. Nello specifico, si può individuare
            un caso che abbia attinenza con la realtà, tenendo al momento da
            parte la disamina relativa all&apos;Iva. Prendiamo ad esempio in
            considerazione il caso di un intervento pari a 100 mila euro,
            effettuato su un capannone appartenente ad una società di capitali.
            Già nel 2016 sarebbe stato possibile ottenere una detrazione Ires
            del 65% della spesa sostenuta. In più, questa detrazione sarebbe
            stata sommata al risparmio fiscale derivante dalla deduzione
            dell&apos;imponibile Ires. La deduzione sarebbe stata, per il 2017,
            pari al 27,5%, mentre per l&apos;Irap del 3,9% rispetto alle quote
            di ammortamento. Facendo un rapido calcolo si può notare come in
            questo caso preso come esempio, il risparmio complessivo potrebbe
            arrivare al 92,95%, un dato estremamente positivo. In questo caso
            pratico avrebbe generato un risparmio di detrazione pari a 65mila
            euro. Successivamente, questi 65 mila euro sarebbero stati suddivisi
            in 10 anni, ottenendo così una detrazione pari a 6.500 euro
            all&apos;anno. In aggiunta a queste indicazioni è doveroso
            sottolineare come gli imponibili Ires ed Irap avrebbero potuto
            essere ridotti delle quote di ammortamento per l&apos;investimento,
            determinando un ulteriore risparmio energetico per le imprese.
            Proprio in relazione agli imponibili, a seconda del tipo di
            intervento effettuato, il costo si sarebbe potuto ripartire in un
            periodo di tempo di minimo un anno e massimo 34 anni. Alla luce di
            quanto emerso da questo esempio pratico è facile capire perché si
            parla di risparmio energetico come di un duplice vantaggio fiscale
            per le imprese.
          </p>

          <p>
            La nostra azienda, dopo aver studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con l&apos;indicazione del vantaggio
            economico perseguibile grazie al risparmio ottenuto ed ai benefici
            fiscali legati ad ogni singolo intervento.
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
            dall&apos;ONU per lo sviluppo sostenibile, prevede che entro il 2030
            non siano più prodotte automobili a motore endotermico. Il
            rifornimento può essere effettuato in modo “pubblico” presso le
            stazioni di ricarica diffuse sul suolo nazionale (anche in luoghi
            privati destinati ad uso pubblico come i parcheggi dei centri
            commerciali) oppure in modo del tutto “privato” a casa, mediante
            l&apos;installazione di una colonnina o usufruendo delle prese
            domestiche o industriali. In entrambi i casi, l&apos;alimentazione
            avviene “via cavo”. Questi cavi sono dotati di un sistema di
            protezione denominato PWM (Pulse Width Modulation - con impulso
            modulato) che garantisce la sicurezza durante il funzionamento.
          </p>

          <p>
            Non esiste una forma standard delle colonnine elettriche: a seconda
            della destinazione d&apos;uso, le stazioni di ricarica per veicoli
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
            carta o un&apos;applicazione fornita dal gestore scelto per il
            servizio. La carta (o l&apos;applicazione) viene utilizzata per
            avviare la ricarica e terminare la ricarica alla fine. Consente
            inoltre di considerare le spese, che di solito sono allocate ad un
            importo fisso dell&apos;operatore e ad una variabile calcolata in
            base ai kW/h forniti.
          </p>

          <p>
            Il tempo richiesto per effettuare un ciclo di ricarica completo con
            la modalità di ricarica lenta è di 8 ore. Tuttavia, la maggior parte
            dei costruttori di auto ha implementato la possibilità di effettuare
            una ricarica rapida in 30 minuti. Questa modalità permette di le
            batterie all&apos;80%, così da avere abbastanza energia per
            effettuare tutti gli spostamenti necessari senza innescare
            l&apos;ansia da ricarica.
          </p>

          <p>
            La nostra azienda, dopo aver studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con l&apos;indicazione del vantaggio
            economico perseguibile grazie al risparmio ottenuto ed ai benefici
            fiscali legati ad ogni singolo intervento.
          </p>
        </section>

        <section style={{ display: section == "5" ? "flex" : "none" }}>
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
            dall&apos;ONU per lo sviluppo sostenibile, prevede che entro il 2030
            non siano più prodotte automobili a motore endotermico. Il
            rifornimento può essere effettuato in modo “pubblico” presso le
            stazioni di ricarica diffuse sul suolo nazionale (anche in luoghi
            privati destinati ad uso pubblico come i parcheggi dei centri
            commerciali) oppure in modo del tutto “privato” a casa, mediante
            l&apos;installazione di una colonnina o usufruendo delle prese
            domestiche o industriali. In entrambi i casi, l&apos;alimentazione
            avviene “via cavo”. Questi cavi sono dotati di un sistema di
            protezione denominato PWM (Pulse Width Modulation - con impulso
            modulato) che garantisce la sicurezza durante il funzionamento.
          </p>

          <p>
            Non esiste una forma standard delle colonnine elettriche: a seconda
            della destinazione d&apos;uso, le stazioni di ricarica per veicoli
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
            carta o un&apos;applicazione fornita dal gestore scelto per il
            servizio. La carta (o l&apos;applicazione) viene utilizzata per
            avviare la ricarica e terminare la ricarica alla fine. Consente
            inoltre di considerare le spese, che di solito sono allocate ad un
            importo fisso dell&apos;operatore e ad una variabile calcolata in
            base ai kW/h forniti.
          </p>

          <p>
            Il tempo richiesto per effettuare un ciclo di ricarica completo con
            la modalità di ricarica lenta è di 8 ore. Tuttavia, la maggior parte
            dei costruttori di auto ha implementato la possibilità di effettuare
            una ricarica rapida in 30 minuti. Questa modalità permette di le
            batterie all&apos;80%, così da avere abbastanza energia per
            effettuare tutti gli spostamenti necessari senza innescare
            l&apos;ansia da ricarica.
          </p>

          <p>
            La nostra azienda, dopo aver studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con l&apos;indicazione del vantaggio
            economico perseguibile grazie al risparmio ottenuto ed ai benefici
            fiscali legati ad ogni singolo intervento.
          </p>
        </section>
      </div>

      <div className={serviziStyle.cont__servizi}>
        <h3>
          <b>
            INCENTIVI ALLE FAMIGLIE PER INTERVENTI DI EFFICIENTAMENTO ENERGETICO
          </b>
        </h3>

        <ul className={serviziStyle.cont__servizi_list}>
          <li
            onClick={() => setSectionNew("1")}
            id={sectionNew == "1" ? "active" : null}
          >
            Superbonus 110%
          </li>

          <li
            onClick={() => setSectionNew("2")}
            id={sectionNew == "2" ? "active" : null}
          >
            EcoBonus 50%
          </li>
        </ul>

        <section style={{ display: sectionNew == "1" ? "flex" : "none" }}>
          <p>
            Superbonus al 110 per cento con sconto in fattura o cessione del
            credito per tutti gli interventi di risparmio energetico realizzati
            sugli interi edifici, di proprietà condominiale o privata, comprese
            le villette a schiera, a patto che si riduca di due classi il
            consumo energetico. Agevolazione ammessa anche per le seconde case,
            ma esclusa per gli immobili di lusso. Nessuna limitazione, invece,
            per gli interventi in condominio. In caso di sconto in fattura,
            questo non potrà superare l&apos;importo dei lavori, per cui il bonus
            pari al 110 per cento della spesa sarà riconosciuto esclusivamente
            nel caso in cui si intenda utilizzare la detrazione direttamente o
            effettuare la cessione del credito. Sconto e cessione anche per chi
            non paga Irpef ma è titolare di redditi esenti, o soggetti a
            tassazione separata o imposta sostitutiva. Possibilità di sconto in
            fattura o cessione del credito anche per il bonus facciate al 90 per
            cento, e per le detrazioni “ordinarie” per ristrutturazione e
            risparmio energetico. Opzione solo per i lavori effettuati nel 2020
            e 2021. Asseverazione sui costi e visto di conformità obbligatori
            per il riconoscimento del Superbonus.
          </p>

          <p>
            Con il varo dei provvedimenti attuativi da parte del Ministero dello
            sviluppo economico e del direttore dell&apos;Agenzia delle entrate,
            diventano pienamente operative le norme degli articoli 119 e 121 del
            decreto Rilancio (dl 34/2020). Possibile quindi avviare i lavori.
            Condizione indispensabile per ottenere il Superbonus è la riduzione
            di due classi di consumo energetico dell&apos;edificio, o del singolo
            appartamento in caso di immobili vincolati sui quali non sono
            ammessi interventi sull&apos;esterno del fabbricato.
          </p>

          <p>
            <b>1.1 La lista dei Lavori Agevolati</b>
            <br /> <br />
            Il Superbonus è riconosciuto esclusivamente per gli immobili dotati
            di impianto di riscaldamento a destinazione residenziale, ovvero con
            una superficie complessiva delle unità immobiliari destinate a
            residenza ricomprese nell&apos;edificio superiore al 50 per cento,
            come specificatamente indicato dalla circolare 24 delle Entrate.
            L&apos;installazione di un nuovo impianto in un edificio che ne è privo
            non consente di accedere all&apos;agevolazione. La detrazione del 110 per
            cento va ripartita in cinque quote annuali tra tutti i soggetti che
            hanno partecipato alla spesa in riferimento alla quota
            effettivamente versata. Obbligatorio per il pagamento il bonifico
            dedicato.
          </p>

          <p>
            La lista degli interventi che danno diritto alla detrazione con
            aliquota al 110 per cento è suddivisa in due categorie: interventi
            “trainanti” (comma 1 art. 119) e interventi “trainati” (comma 2).
            L&apos;esecuzione di uno degli interventi trainanti dà diritto ad
            ottenere il Superbonus anche per gli interventi trainati. La
            riduzione di due classi energetiche dell&apos;edificio può essere
            ottenuta anche dalla somma di interventi delle due categorie. Quello
            che conta è il risultato finale.
          </p>

          <p>Gli interventi trainanti sono i seguenti:</p>

          <p>
            <b>
              interventi di isolamento termico delle superfici opache verticali
              e orizzontali e inclinate che interessano l&apos;involucro
              dell&apos;edificio con un&apos;incidenza superiore al 25 per cento
              della superficie disperdente lorda dell&apos;edificio medesimo, o
              dell&apos;unità immobiliare situata all&apos;interno di edifici
              plurifamiliari che sia funzionalmente indipendente e disponga di
              uno o più accessi autonomi dall&apos;esterno;
              <br />
              <br /> interventi sulle parti comuni degli edifici per la
              sostituzione degli impianti di climatizzazione invernale esistenti
              con impianti centralizzati per il riscaldamento, il raffrescamento
              o la fornitura di acqua calda sanitaria a condensazione, con
              efficienza almeno pari alla classe A, inclusi gli impianti ibridi
              o geotermici, anche abbinati all&apos;installazione di impianti
              fotovoltaici, e per l&apos;installazione di collettori solari. Per i
              comuni montani non interessati a procedure d&apos;infrazione
              comunitarie in riferimento alla qualità dell&apos;aria la detrazione è
              ammessa anche per l&apos;allaccio a sistemi di teleriscaldamento
              efficiente. Il massimale di spesa copre anche i lavori per la
              sostituzione della canna fumaria collettiva esistente, mediante
              sistemi fumari multipli o collettivi nuovi, compatibili con
              apparecchi a condensazione, con marcatura CE, nel rispetto dei
              requisiti minimi di prestazione;
              <br />
              <br /> interventi sugli edifici unifamiliari, compresi quelli
              situati all&apos;interno di edifici plurifamiliari che siano
              funzionalmente indipendenti e dispongano di uno o più accessi
              autonomi dall&apos;esterno, per la sostituzione degli impianti di
              climatizzazione invernale esistenti con impianti per il
              riscaldamento, il raffrescamento o la fornitura di acqua calda
              sanitaria, gli impianti ibridi o geotermici, anche abbinati
              all&apos;installazione di impianti fotovoltaici ovvero con
              impianti di microcogenerazione, per una spesa non superiore a
              30.000 euro, compresa quella per lo smaltimento e la bonifica
              dell&apos;impianto sostituito.
              <br /> <br /> Nei comuni con aree non metanizzate e nei comuni
              montani, è ammessa anche la sostituzione dell&apos;impianto
              preesistente con altro con caldaia a biomassa con classe di
              qualità non inferiore a 5 stelle. In entrambi i casi si deve
              trattare di comuni non interessati a procedure d&apos;infrazione
              comunitarie in riferimento alla qualità dell&apos;aria.
            </b>
          </p>

          <p>
            Sono ammessi al Superbonus anche gli interventi di demolizione e
            ricostruzione come indicati nell&apos;articolo 3, comma 1, lettera d),
            del Testo unico delle disposizioni legislative e regolamentari in
            materia edilizia D.P.R. 380/2001.
          </p>

          <p>
            La nostra Azienda offre agli utenti residenziali, privati e
            condomini, la consulenza per verificare la fattibilità degli
            interventi e la possibilità di ottenere i benefici fiscali legati
            agli interventi Provvede poi a sviluppare la documentazione
            richiesta ed a progettare e realizzare gli interventi agevolati.
          </p>
        </section>

        <section style={{ display: sectionNew == "2" ? "flex" : "none" }}>
          <p>
            Sulla Gazzetta Ufficiale n.322 del 30.12.2020 è stata pubblicata la
            Legge di Bilancio 2021 (L. 30.12.2020 n.178) che proroga al 31
            dicembre 2021 le detrazioni fiscali per l&apos;efficienza energetica
            degli edifici (Ecobonus) e le detrazioni fiscali per le
            ristrutturazioni (Bonus Casa), in relazione alle spese sostenute dal
            1° gennaio 2021 al 31 dicembre 2023 In analogia a quanto già
            previsto in materia di detrazioni fiscali per la riqualificazione
            energetica degli edifici, occorre trasmettere per via telematica
            all&apos;ENEA le informazioni sugli interventi terminati dal 2018 in
            poi, che accedono alle detrazioni fiscali del 50% per le
            ristrutturazioni edilizie (Bonus Casa) che comportano risparmio
            energetico e/o utilizzo delle fonti rinnovabili.
          </p>

          <p>
            La seguente tabella sintetizza gli interventi di risparmio
            energetico e utilizzo di fonti di energia rinnovabile che
            usufruiscono delle detrazioni fiscali del 50% previste per le
            ristrutturazioni edilizie - ex art. 16 bis del DPR 917/86 soggetti
            all&apos;obbligo di invio all&apos;ENEA:
          </p>

          <p>
            <b>Strutture Edilizie: </b>
            <br /> <br />
            riduzione della trasmittanza delle pareti verticali che delimitano
            gli ambienti riscaldati dall&apos;esterno, dai vani freddi e dal
            terreno;
            <br />
            <br />
            riduzione delle trasmittanze delle strutture opache orizzontali e
            inclinate (coperture) che delimitano gli ambienti riscaldati
            dall&apos;esterno e dai vani freddi;
            <br />
            <br />
            riduzione della trasmittanza termica dei pavimenti che delimitano
            gli ambienti riscaldati dall&apos;esterno, dai vani freddi e dal
            terreno;
          </p>

          <p>
            <b>Infissi:</b>
            <br />
            <br />
            riduzione della trasmittanza dei serramenti comprensivi di infissi
            che delimitano gli ambienti riscaldati dall&apos;esterno e dai vani
            freddi
          </p>

          <p>
            <b>Impianti Tecnologici</b>
            <br />
            <br />
            <br />
            installazione di collettori solari (solare termico) per la
            produzione di acqua calda sanitaria e/o il riscaldamento degli
            ambienti;
            <br />
            sostituzione di generatori di calore con caldaie a condensazione per
            il riscaldamento degli ambienti (con o senza produzione di acqua
            calda sanitaria) o per la sola produzione di acqua calda per una
            pluralità di utenze ed eventuale adeguamento dell&apos;impianto;
            <br />
            sostituzione di generatori con generatori di calore ad aria a
            condensazione ed eventuale adeguamentodell&apos;impianto;
            <br />
            pompe di calore per climatizzazione degli ambienti ed eventuale
            adeguamento dell&apos;impianto;
            <br />
            sistemi ibridi (caldaia a condensazione e pompa di calore) ed
            eventuale adeguamento dell&apos;impianto;
            <br />
            microcogeneratori (Pe50kWe);
            <br />
            scaldacqua a pompa di calore;
            <br />
            generatori di calore a biomassa;
            <br />
            installazione di sistemi di contabilizzazione del calore negli
            impianti centralizzati per una pluralità di utenze;
            <br />
            installazione di impianti fotovoltaici e sistemi di accumulo
            (limitatamente ai sistemi di accumulo i dati vanno trasmessi per gli
            interventi con data di fine lavori a partire dal 01/01/2019);
            <br />
            teleriscaldamento;
            <br />
            installazione di sistemi di termoregolazione e building automation.
          </p>

          <p>
            <b>Elettrodomestici</b> - solo se collegati ad un intervento di
            recupero del patrimonio edilizio iniziato a decorrere dal: 1°
            gennaio 2018 per le spese sostenute nel 2019 1° gennaio 2019 per le
            spese sostenute nel 2020.
            <br />
            <br />
            forni <br />
            frigoriferi <br />
            lavastoviglie <br />
            piani cottura elettrici <br />
            lavasciuga
            <br />
            lavatrici <br />
            asciugatrici
          </p>

          <p>
            La nostra Azienda offre agli utenti residenziali, privati e
            condomini, la consulenza per verificare la fattibilità degli
            interventi e la possibilità di ottenere i benefici fiscali legati
            agli interventi Provvede poi a sviluppare la documentazione
            richiesta ed a progettare e realizzare gli interventi agevolati.
          </p>
        </section>
      </div>

      <div className={serviziStyle.cont__servizi}>
        <h3>
          <b>
            INCENTIVI ALLE AZIENDE PER INTERVENTI DI EFFICIENTAMENTO ENERGETICO
          </b>
        </h3>

        <ul className={serviziStyle.cont__servizi_list} id="aziende">
          <li
            onClick={() => setSectionThird("1")}
            id={sectionThird == "1" ? "active" : null}
          >
            CREDITO D&apos;IMPOSTA PER IL SUD
          </li>

          <li
            onClick={() => setSectionThird("2")}
            id={sectionThird == "2" ? "active" : null}
          >
            DECRETO LEGGE 25 MARZO 2022 “PARCO AGRISOLARE PER LE AZIENDE
            AGRICOLE
          </li>

          <li
            onClick={() => setSectionThird("3")}
            id={sectionThird == "3" ? "active" : null}
          >
            DECRETO LEGGE 17 DEL 2/22 AZZERAMENTO ONERI DI SISTEMA E CREDITO
            D&apos;IMPOSTA
          </li>
        </ul>

        <section style={{ display: sectionThird == "1" ? "flex" : "none" }}>
          <p>
            Il titolo I del D.L. 17/2022 denominato “Misure urgenti in materia
            di energia elettrica, gas naturale e fonti rinnovabili”, introduce,
            all&apos;art. 14, un contributo sotto forma di credito
            d&apos;imposta per l&apos;efficienza energetica nelle regioni del
            Sud Italia, al fine di contenere l&apos;aumento dei costi
            dell&apos;energia elettrica e del gas naturale, ed al tempo stesso
            promuovere lo sviluppo delle energie rinnovabili e il rilancio delle
            politiche industriali ecosostenibili.Il bonus per l&apos;efficientamento
            energetico sarà valido fino al 30 novembre 2023 e coprirà gli
            investimenti effettuati dalle imprese per le loro strutture
            produttive, se ubicate nelle regioni Abruzzo, Basilicata, Calabria,
            Campania, Molise, Puglia, Sardegna e Sicilia.
          </p>

          <p>
            Per ciascuno degli anni 2022 e 2023 sono stati stanziati 145 milioni
            di euro, sotto forma di credito d&apos;imposta, nella misura massima
            consentita dal regolamento UE n. 651/2014 della Commissione. Il
            credito sarà utilizzabile esclusivamente in compensazione e non
            concorrerà alla formazione del reddito dell&apos;impresa né della base
            imponibile dell&apos;Irap (Imposta regionale sulle attività produttive).
            Lo sgravio è cumulabile con altre agevolazioni che abbiano ad
            oggetto i medesimi costi, a condizione che tale cumulo non porti al
            superamento del costo sostenuto. Saranno ammessi gli interventi
            finalizzati a conseguire un risparmio energetico e le spese per
            avviare l&apos;autoproduzione di energia da fonti rinnovabili.
          </p>

          <p>
            Entro sessanta giorni dalla data di entrata in vigore del D.L. n.
            17/2022 (auspicabilmente entro il 2 maggio 2022), il Ministro per il
            Sud e la coesione territoriale, di concerto il Ministro della
            Transizione ecologica, il Ministro dello Sviluppo economico e il
            Ministro dell&apos;Economia e delle finanze, emanerà un decreto
            attuativo con il quale verranno messi a punto criteri, modalità di
            attuazione, costi ammissibili all&apos;agevolazione, documentazione
            richiesta, procedure di concessione e condizioni di revoca del
            credito d&apos;imposta per l&apos;efficienza energetica nelle
            regioni del Sud Italia.
          </p>

          <p>
            La nostra Azienda offre alle aziende, la consulenza per verificare
            la fattibilità degli interventi e la possibilità di ottenere i
            benefici fiscali legati agli interventi Provvede poi a sviluppare la
            documentazione richiesta ed a progettare e realizzare gli interventi
            agevolati.
          </p>
        </section>

        <section style={{ display: sectionThird == "2" ? "flex" : "none" }}>
          <p>
            La presente scheda illustrativa riporta gli elementi essenziali del
            Decreto 25 marzo 2022, emanato dal Ministro delle politiche agricole
            alimentari e forestali, per dare avvio alla misura PNRR “Parco
            Agrisolare”. Le informazioni sotto riportate potranno essere
            integrate a seguito del confronto con la Commissione europea in
            materia di aiuti di stato e saranno dettagliate dal Bando che sarà
            emanato nei prossimi mesi.
          </p>

          <p>
            Sostegno agli investimenti nelle strutture produttive del settore
            agricolo, zootecnico e agroindustriale, al fine di installare
            pannelli solari e sistemi di gestione intelligente dei flussi e
            degli accumulatori, rimuovere e smaltire i tetti esistenti e
            costruire nuovi tetti isolati, creare sistemi automatizzati di
            ventilazione e/o di raffreddamento.
          </p>

          <p>
            <b>Cosa Finanzia?</b>
          </p>

          <p>
            1. Intervento principale e obbligatorio: acquisto e posa in opera di
            pannelli fotovoltaici, sui tetti di fabbricati suddetti, con potenza
            di picco non inferiore a 6 kWp e non superiore a 500 kWp. · Per le
            aziende agricole di produzione primaria, gli impianti fotovoltaici
            sono ammissibili agli aiuti unicamente se l&apos;obiettivo è quello
            di soddisfare il fabbisogno energetico dell&apos;azienda e se la
            loro capacità produttiva non supera il consumo medio annuo di
            energia elettrica dell&apos;azienda agricola, compreso quello
            familiare. La vendita di energia elettrica è consentita nella rete
            purché sia rispettato il limite di autoconsumo annuale. 2.
            Interventi facoltativi di riqualificazione ai fini del miglioramento
            dell&apos;efficienza energetica delle strutture: · rimozione e
            smaltimento dell&apos;amianto (o, se del caso, dell&apos;eternit)
            dai tetti, in conformità alla normativa nazionale di settore
            vigente: tale procedura deve essere svolta unicamente da ditte
            specializzate, iscritte nell&apos;apposito registro; · realizzazione
            dell&apos;isolamento termico dei tetti: la relazione tecnica del
            professionista abilitato dovrà descrivere e giustificare la scelta
            del grado di coibentazione previsto in ragione delle specifiche
            destinazioni produttive del fabbricato, anche al fine di migliorare
            il benessere animale; · realizzazione di un sistema di aerazione
            connesso alla sostituzione del tetto (intercapedine d&apos;aria): la
            relazione del professionista dovrà dare conto delle modalità di
            aereazione previste in ragione della destinazione produttiva del
            fabbricato; a ogni modo, il sistema di areazione dovrà essere
          </p>

          <p>
            La nostra Azienda offre alle aziende, la consulenza per verificare
            la fattibilità degli interventi e la possibilità di ottenere i
            benefici fiscali legati agli interventi Provvede poi a sviluppare la
            documentazione richiesta ed a progettare e realizzare gli interventi
            agevolati.
          </p>
        </section>

        <section style={{ display: sectionThird == "3" ? "flex" : "none" }}>
          <p>
            <b>
              Azzeramento degli oneri di sistema per il secondo trimestre 2022
            </b>
          </p>

          <p>
            1. Per ridurre gli effetti degli aumenti dei prezzi nel settore
            elettrico, l&apos;Autorita&apos; di regolazione per energia, reti e ambiente
            (ARERA) provvede ad annullare, per il secondo trimestre 2022, le
            aliquote relative agli oneri generali di sistema applicate alle
            utenze domestiche e alle utenze non domestiche in bassa tensione,
            per altri usi, con potenza disponibile fino a 16,5 kW. 2. Per
            ridurre gli effetti degli aumenti dei prezzi nel settore elettrico,
            l&apos;ARERA provvede ad annullare, per il secondo trimestre 2022, le
            aliquote relative agli oneri generali di sistema applicate alle
            utenze con potenza disponibile pari o superiore a 16,5 kW, anche
            connesse in media e alta/altissima tensione o per usi di
            illuminazione pubblica o di ricarica di veicoli elettrici in luoghi
            accessibili al pubblico. 3. Agli oneri derivanti dalla presente
            disposizione, pari a complessivi 3.000 milioni di euro per l&apos;anno
            2022, da trasferire alla Cassa per i servizi energetici e ambientali
            (CSEA), entro il 31 maggio 2022, si provvede ai sensi dell&apos;articolo
            42.
          </p>

          <p>
            <b>Riduzione dell&apos;IVA e degli oneri generali nel settore del gas</b>
          </p>

          <p>
            1. In deroga a quanto previsto dal decreto del Presidente della
            Repubblica 26 ottobre 1972, n. 633, le somministrazioni di gas
            metano usato per combustione per usi civili e industriali di cui
            all&apos;articolo 26, comma 1, del testo unico delle disposizioni
            legislative concernenti le imposte sulla produzione e sui consumi
            erelative sanzioni penali e amministrative, di cui al decreto
            legislativo 26 ottobre 1995, n. 504, contabilizzate nelle fatture
            emesse per i consumi stimati o effettivi dei mesi di aprile, maggio
            e giugno 2022, sono assoggettate all&apos;aliquota IVA del 5 per cento.
            Qualora le somministrazioni di cui al primo periodo siano
            contabilizzate sulla base di consumi stimati, l&apos;aliquota IVA del
            5per cento si applica anche alla differenza derivante dagli importi
            ricalcolati sulla base dei consumi effettivi riferibili, anche
            percentualmente, ai mesi di aprile, maggio e giugno 2022. 2. Agli
            oneri derivanti dal comma 1, valutati in 591,83 milioni di euro per
            l&apos;anno 2022, si provvede ai sensi dell&apos;articolo 42. 3. Al fine di
            contenere per il secondo trimestre dell&apos;anno 2022 gli effetti degli
            aumenti dei prezzi nel settore del gas naturale, l&apos;ARERA provvede a
            ridurre, per il medesimo trimestre, le aliquote relative agli oneri
            generali di sistema per il settore del gas fino a concorrenza
            dell&apos;importo di 250 milioni di euro. Tale importo e&apos; trasferito alla
            CSEA entro il 31 maggio 2022. 4. Agli oneri derivanti dal comma 3,
            pari a 250 milioni di euro per l&apos;anno 2022, si provvede ai sensi
            dell&apos;articolo 42.
          </p>

          <p>
            <b>
              Contributo straordinario, sotto forma di credito d&apos;imposta, a
              favore delle imprese energivore
            </b>
          </p>

          <p>
            1. Alle imprese a forte consumo di energia elettrica di cui al
            decreto del Ministro dello sviluppo economico 21 dicembre 2017,
            della cui adozione e&apos; stata data comunicazione nella Gazzetta
            Ufficiale della Repubblica italiana n. 300 del 27 dicembre 2017, i
            cui costi per kWh della componente energia elettrica, calcolati
            sulla base della media del primo trimestre 2022 ed al netto delle
            imposte e degli eventuali sussidi, hanno subito un incremento del
            costo per KWh superiore al 30 per cento relativo al medesimo periodo
            dell&apos;anno 2019, anche tenuto conto di eventuali contratti di
            fornitura di durata stipulati dall&apos;impresa, e&apos; riconosciuto un
            contributo straordinario a parziale compensazione dei maggiori oneri
            sostenuti, sotto forma di credito di imposta, pari al 20 per cento
            delle spese sostenute per la componente energetica acquistata ed
            effettivamente utilizzata nel secondo trimestre 2022. 2. Il credito
            di imposta di cui al comma 1 e&apos; riconosciuto anche in relazione alla
            spesa per l&apos;energia elettrica prodotta dalle imprese di cui al
            medesimo comma 1 e dalle stesse autoconsumata nel secondo trimestre
            2022. In tal caso l&apos;incremento del costo per kWh di energia
            elettrica prodotta e autoconsumata e&apos; calcolato con riferimento alla
            variazione del prezzo unitario dei combustibili acquistati ed
            utilizzati dall&apos;impresa per la produzione della medesima energia
            elettrica e il credito di imposta e&apos; determinato con riguardo al
            prezzo convenzionale dell&apos;energia elettrica pari alla media,
            relativa al secondo trimestre 2022, del prezzo unico nazionale
            dell&apos;energiaelettrica. 3. Il credito d&apos;imposta di cui al comma 1 e&apos;
            utilizzabile esclusivamente in compensazione ai sensi dell&apos;articolo
            17 del decreto legislativo 9 luglio 1997, n. 241. Non si applicano i
            limiti di cui all&apos;articolo 1, comma 53, della legge 24 dicembre
            2007, n. 244, e di cui all&apos;articolo 34 della legge 23 dicembre 2000,
            n. 388. Il credito d&apos;imposta non concorre alla formazione del
            reddito d&apos;impresa ne&apos; della base imponibile dell&apos;imposta regionale
            sulle attivita&apos; produttive e non rileva ai fini del rapporto di cui
            agli articoli 61 e 109, comma 5, del testo unico delle imposte sui
            redditi approvato con decreto del Presidente della Repubblica 22
            dicembre 1986, n. 917. Il credito d&apos;imposta e&apos; cumulabile con altre
            agevolazioni che abbiano ad oggetto i medesimi costi, a condizione
            che tale cumulo, tenuto conto anche della non concorrenza alla
            formazione del reddito e della base imponibile dell&apos;imposta
            regionale sulle attivita&apos; produttive, non porti al superamento del
            costo sostenuto. 4. Agli oneri derivanti dall&apos;utilizzo della misura
            agevolativa di cui al presente articolo, valutati in 700 milioni di
            euro per l&apos;anno 2022, si provvede ai sensi dell&apos;articolo 42. 5. Il
            Ministero dell&apos;economia e delle finanze effettua il monitoraggio
            delle fruizioni del credito d&apos;imposta di cui al presente articolo,
            ai fini di quanto previsto dall&apos;articolo 17, comma 13, della legge
            31 dicembre 2009, n. 196
          </p>

          <p>
            La nostra Azienda offre alle aziende, la consulenza per verificare
            la fattibilità degli interventi e la possibilità di ottenere i
            benefici fiscali legati agli interventi Provvede poi a sviluppare la
            documentazione richiesta ed a progettare e realizzare gli interventi
            agevolati.
          </p>
        </section>
      </div>
    </div>
  );
}
