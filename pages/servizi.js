import React, { useEffect, useContext } from "react";
import serviziPage from "../src/style/output/serviziPage.module.css";
import AppContext from "../context/context";
import backgroundFotovoltaico from "../public/media/img/fotovoltaico_img.jpeg";
import backgroundImpianto from "../public/media/img/impianto_solare_termico.jpeg";
import backgroundRisparmio from "../public/media/img/risparmio.jpeg";
import backgroundColonne from "../public/media/img/colonne.jpeg";

function servizi() {
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
          Impianto Solare Termico
        </li>
        <li
          id={service == "3" ? "active" : null}
          onClick={() => setService(service == "3" ? "0" : "3")}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${backgroundRisparmio})`,
          }}
        >
          Risparmio Energetico
        </li>
        <li
          id={service == "4" ? "active" : null}
          onClick={() => setService(service == "4" ? "0" : "4")}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${backgroundColonne})`,
          }}
        >
          Colonnine Elettriche
        </li>
      </ul>

      <section>
        <article id={service == "1" ? "active" : null}>
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
            Utilizzare l’elettricità e il gas in modo consapevole ed efficiente
            significa consumare meglio e far risparmiare la tua azienda, anche a
            livello assicurativo. Alcuni interventi di efficienza energetica
            rispondono inoltre a obblighi normativi, permettono di fare
            manutenzione e prevenire il fermo macchine verificando la corretta
            installazione e il buon funzionamento degli impianti e
            contribuiscono alla sicurezza in azienda. Dalla fornitura di
            energia, al monitoraggio di consumi e picchi di potenza, fino
            {"all’analisi"} di efficienza degli impianti, sono diverse le azioni
            che puoi mettere in campo per limitare i costi di esercizio della
            tua attività e ridurre gli sprechi. E per farlo, mettiamo a tua
            disposizione un consulente energetico capace di orientarti verso la
            soluzione più adatta al tuo lavoro. Il risparmio inizia da qui,
            intervenendo sulle abitudini di consumo e senza interferenze con la
            produttività, perché un utilizzo efficiente {"dell’energia"}{" "}
            consente di impiegarne meno a parità di servizio.
          </p>
        </article>

        <article id={service == "2" ? "active" : null}>
          <p>
            Con il termine SOLARI TERMICI si identificano in gergo tecnico
            quelli che sono comunemente denominati pannelli solari termici,
            ovvero quei dispositivi utilizzati per la conversione della
            radiazione solare in energia termica.
          </p>

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

          <p>
            Quando si parla di fotovoltaico e impianto solare termico, spesso si
            fa una gran confusione perché si pensa che si tratti della stessa
            cosa. Ma così non è. Sicuramente, entrambe le tecnologie sfruttano i
            raggi solari per produrre energia, ma vi sono delle differenze
            sostanziali. Esaminiamole più nel dettaglio. <br /> <br />
            <b>Meccanismo di funzionamento</b>: Il fotovoltaico trasforma i
            raggi solari in corrente elettrica, mentre il solare termico
            accumula il calore del sole e lo sfrutta per scaldare l’acqua
            destinata a uso sanitario e {"all’impianto"} di riscaldamento.{" "}
            <br />
            <br /> <b>Materiale</b>: gli impianti fotovoltaici sono
            fondamentalmente costituiti da silicio combinato con altri elementi
            chimici, vetro e componenti strutturali vari. Gli impianti solari
            termici sono invece composti da metallo (come rame, acciaio,
            alluminio) e vetro. <br />
            <br /> <b>Costi</b>: il solare termico è una tecnologia semplice e
            abbastanza economica, mentre i pannelli fotovoltaici richiedono un
            investimento piuttosto importante. <br />
            <br />
            <b>Spazi e ingombro</b>: i pannelli solari termici occupano poco
            spazio, invece quelli fotovoltaici necessitano di superfici molto
            più ampie. Efficienza: in media, il fotovoltaico ha{" "}
            {"un’efficienza"} compresa tra il 17% ed il 25%, mentre il solare
            termico offre una maggior efficienza (può raggiungere l’80%).
          </p>
        </article>

        <article id={service == "3" ? "active" : null}>
          <p>
            La questione del risparmio energetico vantaggio per le aziende è un
            argomento molto discusso negli ultimi anni. Questo non solo per la
            necessità di tutelare {"l’ambiente"}, ma anche allo scopo di
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
            anni, ottenendo così una detrazione pari a 6.500 euro {"all’anno"}.
            In aggiunta a queste indicazioni è doveroso sottolineare come gli
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
            In tema di risparmio energetico un riferimento obbligato è alle
            Società di servizi energetici (nell'acronimo inglese ESCO - ossia
            Energy Service Companies), realtà imprenditoriali (per la massima
            parte costituite sotto forma di società di capitali) che si occupano
            dell'attuazione di misure di efficienza energetica (ossia interventi
            tesi al raggiungimento di una riduzione dei consumi negli usi finali
            dell'energia da parte degli utenti).
          </p>

          <p>
            Premesso il compito principale delle ESCO (realizzazione di misure
            di aumento dell'efficienza energetica) è da notare che il valore
            aggiunto di tali società è quello di fornire un punto di riferimento
            unico per la realizzazione di interventi che richiedono una grande
            varietà di competenze, direttamente dipendenti (al di là della fase
            di auditing che pare, in verità, la più tipizzata) {"dall'oggetto"}
            degli interventi di riqualificazione energetica. Alle difficoltà
            derivanti dalle competenze necessarie per la realizzazione di tali
            interventi si associa la ingente quantità di capitali necessaria per
            realizzarli. Anche per tale aspetto il sistema delle ESCO
            rappresenta una soluzione, essendo il reperimento della provvista
            finanziaria necessario alla realizzazione degli interventi.{" "}
          </p>

          <p>
            Un altro compito delle ESCO, le quali avranno altresì la
            responsabilità diretta di garantire i terzi finanziatori circa la
            capacità {"dell'intervento"} di generare il ritorno degli
            investimenti effettuati nel periodo previsto (pay back period). Tale
            finanziamento prende il nome di Finanziamento tramite terzi (FTT o
            anche, nell'acronimo inglese, Third Part Financing - TPF) ed è stato
            inserito nell'ordinamento italiano per la prima volta con il d.lgs.
            n. 115/2008, il quale lo definisce come energetica, che fornisce i
            capitali per tale misura e addebita al beneficiario un canone pari a
            una parte del risparmio energetico conseguito avvalendosi della
            misura stessa. Il terzo può essere una ESCO (d.lgs. n. 115/2008,
            art. 2, comma 1, lettera m). Le ESCO possono essere certificate
            secondo la norma UNI CEI 11352. Accanto a tale formula di
            reperimento della provvista finanziaria si riconoscono diverse
            tipologie contrattuali deputate a regolare i rapporti tra le parti
            di un intervento di efficienza energetica.
          </p>

          <p>
            Tra queste la più adatta risulta essere quella {"dell'Energy"}
            Performance Contract (EPC). Sebbene le tipologie contrattuali adatte
            a regolare gli interventi realizzati in tale settore siano
            molteplici, dal punto di vista pratico la struttura basilare di
            un'operazione di efficientamento condotta attraverso una ESCO
            dovrebbe avere generalmente le seguenti caratteristiche: utente
            {"dell'intervento"} affida l'audit energetico, la progettazione e la
            realizzazione degli interventi alla ESCO, dovendo interloquire in
            tal modo con un unico soggetto e si impegna a pagare alla ESCO una
            somma pari alla spesa storica (di norma {"dell'ultimo"} triennio)
            meno una quota da stabilirsi in sede di contrattazione; la ESCO,
            individuati gli interventi necessari, costruisce un business plan
            per la proiezione delle caratteristiche economico-finanziarie
            {"dell'intervento"} al fine di individuare i partner finanziari
            necessari a finanziare {"l'intervento"} progettato, sgravando in tal
            modo {"l'utente"} da qualsiasi spesa, a meno {"l'utente"} stesso non
            voglia partecipare pro quota al finanziamento; La ESCO riceve i
            fondi e realizza gli interventi di efficientamento energetico dai
            quali deriva un risparmio nei consumi finali; La ESCO gestisce gli
            interventi realizzati per il periodo concordato; Mediante tale
            risparmio la ESCO, ricevendo {"dall'utente"} una somma pari alla
            spesa storica (decurtata di quanto stabilito tra le parti), che
            risulta superiore alla spesa reale dovuta agli interventi, incamera
            la differenza quale corrispettivo per la propria attività (dal quale
            tuttavia bisognerà decurtare le somme di rimborso di eventuali
            capitali ricevuti dalla ESCO) e per il periodo contrattuale previsto
            (periodo che varia a seconda degli interventi). Da quanto detto
            risulta evidente che quello realizzato dalle ESCO è un esempio
            tipico di Demand Side Management, in quanto la ESCO ha tutto
            {"l'interesse"} di effettuare interventi che garantiscono il massimo
            risparmio possibile (maggiori sono i risparmi, maggiori sono le
            economie trattenute dalla ESCO); lo stesso vale per{" "}
            {"l'individuazione"}
            di eventuali inefficienze nel corso della gestione. Non bisogna
            dimenticare, infatti, che essendo la ESCO obbligata nei confronti
            dei creditori ed essendo garantito altresì {"all'utente"}
            {"dell'intervento"} {"l'ammontare"} di retribuzione da corrispondere
            alla ESCO, questa si troverà esposta qualora {"l'intervento"} non
            generi economie sufficienti a trarre un profitto per se stessa una
            volta ripagati i creditori (sebbene sia un caso di scuola, in tal
            senso, la ESCO qualora la spesa energetica post-intervento dovesse
            risultare maggiore sarebbe tenuta sia a pagare la differenza tra la
            bolletta che gli corrisponde il cliente e la spesa effettiva, sia a
            pagare quanto stabilito nel piano di rientro con i finanziatori).
          </p>

          <p>
            La nostra azienda, dopo aver studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con {"l’indicazione"} del vantaggio
            economico perseguibile grazie al risparmio ottenuto ed ai benefici
            fiscali legati ad ogni singolo intervento.
          </p>
        </article>

        <article id={service == "4" ? "active" : null}>
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
            oppure in modo del tutto “privato” a casa, mediante{" "}
            {"l’installazione"}
            di una colonnina o usufruendo delle prese domestiche o industriali.
            In entrambi i casi, {"l’alimentazione"} avviene “via cavo”. Questi
            cavi sono dotati di un sistema di protezione denominato PWM (Pulse
            Width Modulation - con impulso modulato) che garantisce la sicurezza
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
            La carta (o {"l’applicazione"}) viene utilizzata per avviare la
            ricarica e terminare la ricarica alla fine. Consente inoltre di
            considerare le spese, che di solito sono allocate ad un importo
            fisso dell’operatore e ad una variabile calcolata in base ai kW/h
            forniti.
          </p>

          <p>
            Il tempo richiesto per effettuare un ciclo di ricarica completo con
            la modalità di ricarica lenta è di 8 ore. Tuttavia, la maggior parte
            dei costruttori di auto ha implementato la possibilità di effettuare
            una ricarica rapida in 30 minuti. Questa modalità permette di le
            batterie all’80%, così da avere abbastanza energia per effettuare
            tutti gli spostamenti necessari senza innescare {"l’ansia"} da
            ricarica.
          </p>

          <p>
            La nostra azienda, dopo aver studiato attentamente i consumi ed il
            profilo energetico del cliente, sviluppa un progetto preliminare
            completo di business plan con {"l’indicazione"} del vantaggio
            economico perseguibile grazie al risparmio ottenuto ed ai benefici
            fiscali legati ad ogni singolo intervento.
          </p>
        </article>
      </section>
    </div>
  );
}

export default servizi;
