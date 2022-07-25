import React, { useEffect, useContext } from "react";
import serviziPage from "../src/style/output/serviziPage.module.css";
import AppContext from "../context/context";

function Agevolazioni() {
  useEffect(() => {
    document.title = "Agevolazioni Fiscali - Consenergy";
  }, []);

  const { service, setService } = useContext(AppContext);

  return (
    <div className={serviziPage.cont__serviziPage}>
      <section>
        <article id="consulenza">
          <p>
            Per chi intende investire nella realizzazione di impianti per la
            produzione di energia elettrica e gas da fonte rinnovabili,
            (fotovoltaico, cogenerazione, trigenerazione, biometano,
            gassificazione) sono previste molte forme di incentivazione che si
            traducono in “crediti d’imposta” e in finanziamenti a fondo perduto
            o a tasso agevolato.
          </p>

          <p>
            Gli incentivi sono molteplici e non e’ possibile elencarli tutti
            anche perché’ molti di questi sono a tempo determinato o vengono
            integrati e sostituiti con altri incentivi con caratteristiche
            diverse.
          </p>

          <p>
            Elenchiamo comunque quelli di interesse piu’ generale e attualmente
            in vigore fino al 31/12/2023
          </p>

          <p>
            <b>Per Utenti Residenziali</b>
          </p>
        </article>
      </section>

      <ul className={serviziPage.cont__serviziPage_list} id="consulenza">
        <li>EcoBonus 50%</li>
        <li>EcoBonus 65%</li>
      </ul>

      <ul className={serviziPage.cont__serviziPage_list} id="consulenza">
        <li>
          Concesso per gli interventi di efficientamento energetico per la
          riduzione dei consumi di energia elettrica
        </li>
        <li>
          Concesso per gli interventi di efficientamento energetico per la
          riduzione dei consumi di energia termica
        </li>
      </ul>

      <section>
        <article id="consulenza">
          <p>
            <b>Per Utenti Business</b>
          </p>
        </article>
      </section>

      <ul className={serviziPage.cont__serviziPage_list} id="consulenza2">
        <li>CREDITO D’IMPOSTA PER IL SUD FINO AL 45%</li>
        <li>CONTRIBUTI A FONDO PERDUTO PER LO SMALTIMENTO DI AMIANTO</li>
        <li id={service == "3" ? "active" : null}>
          CONTRIBUTI A FONDO PERDUTO PER AZIENDE NEL COMPARTO AGRICOLO
        </li>
      </ul>

      <ul className={serviziPage.cont__serviziPage_list} id="consulenza2">
        <li>
          Concesso per gli interventi di efficientamento energetico per la
          riduzione dei consumi di energia elettrica e termica
        </li>
        <li>
          Concesso da INAIL tutte le aziende che provvedono alla rimozione e
          smaltimento dell’amianto inn copertura
        </li>
        <li>
          Sono quelli previsti nel “bando AGRISOLE” che prevede contributi a
          fondo perduto fino al 40% {"dell’investimento"} sostenuto dall’azienda
        </li>
      </ul>

      <ul className={serviziPage.cont__serviziPage_list} id="consulenza3">
        <li>CREDITO {"D'IMPOSTA"} SU ENERGIA ELETTRICA E GAS NATURALE</li>
      </ul>

      <section>
        <article id="consulenza">
          Il Decreto Sostegni-ter introduce l’agevolazione dedicata alle imprese
          a forte consumo di energia elettrica (cd. imprese energivore). Si
          tratta di un credito d’imposta pari al 20 per cento delle spese
          sostenute per la componente energetica acquistata ed effettivamente
          utilizzata nel primo trimestre 2022. L’articolo 15 del decreto
          Sostegni-ter (DL n. 4/2022) prevede, infatti, un contributo
          straordinario, sotto forma di credito d’imposta, a favore di quelle
          imprese caratterizzate da un alto impatto dei costi energetici
          rispetto all’attività svolta, per garantire loro una parziale
          compensazione degli extra costi sostenuti a causa dell’eccezionale
          innalzamento del prezzo dell’energia elettrica. Il credito d’imposta,
          utilizzabile esclusivamente in compensazione, non concorre alla
          formazione del reddito d'impresa né della base imponibile IRAP ed è
          cumulabile con altre agevolazioni che abbiano ad oggetto i medesimi
          costi, a condizione che tale cumulo non porti al superamento del costo
          sostenuto. Per poter accedere all’agevolazione è necessario che la
          media dei costi per kWh della componente energia elettrica relativi
          all’ultimo trimestre 2021, al netto delle imposte e degli eventuali
          sussidi, sia superiore del 30% rispetto alla media di quelli relativi
          all’ultimo trimestre del 2019. Alle imprese che soddisfano questo
          requisito spetta un credito d’imposta pari al 20% delle spese
          sostenute per la componente energetica acquistata ed effettivamente
          utilizzata nel primo trimestre del 2022. La risoluzione n. 13/E
          pubblicata il 21 marzo 2022 istituisce il codice tributo “6960” da
          utilizzare per accedere all’agevolazione. Tale codice va inserito nel
          modello F24 nella “sezione erario”, in corrispondenza delle somme
          indicate nella colonna “importi a credito compensati” oppure, nei casi
          in cui l’esercente debba procedere al riversamento dell’agevolazione,
          nella colonna “importi a debito versati”. Per utilizzare il credito in
          compensazione, il modello F24 deve essere presentato esclusivamente
          tramite i servizi telematici messi a disposizione dall’Agenzia delle
          Entrate. Il Decreto Energia (Decreto Legge n. 17 del 1° marzo 2022)
          conferma per il secondo trimestre 2022 l’agevolazione nei confronti
          delle imprese energivore e introduce un contributo straordinario,
          sotto forma di credito d’imposta, anche per le imprese a forte consumo
          di gas naturale (cd. imprese gasivore). Per poter accedere
          all’agevolazione è necessario che la media dei costi per kWh della
          componente energia elettrica relativi al primo trimestre 2022, al
          netto delle imposte e degli eventuali sussidi, sia superiore del 30%
          rispetto alla media di quelli relativi al primo trimestre del 2019.
          Alle imprese energivore che soddisfano questo requisito spetta un
          credito d’imposta pari al 25% delle spese sostenute per la componente
          energetica acquistata ed effettivamente utilizzata nel secondo
          trimestre del 2022. Alle imprese a forte consumo di gas naturale è
          riconosciuto, a parziale compensazione dei maggiori oneri sostenuti
          per l'acquisto del gas naturale, un contributo straordinario, sotto
          forma di credito di imposta, pari al 20 per cento della spesa
          sostenuta per l'acquisto del medesimo gas, consumato nel secondo
          trimestre solare dell'anno 2022, per usi energetici diversi dagli usi
          termoelettrici, qualora il prezzo di riferimento del gas naturale,
          calcolato come media, riferita al primo trimestre 2022, dei prezzi di
          riferimento del Mercato Infragiornaliero (MI-GAS) pubblicati dal
          Gestore del mercati energetici (GME), abbia subito un incremento
          superiore al 30 per cento del corrispondente prezzo medio riferito al
          medesimo trimestre dell'anno 2019. Da verifiche effettuate sui
          suddetti prezzi del mercato MI-GAS l’incremento del 30% è
          abbondantemente superato (incremento del 376,77%). Il Decreto Ucraina
          bis (Decreto Legge 21/2022) incrementa la misura delle agevolazioni.
          Per le imprese energivore e gasivore i contributi straordinari già
          disposti dal decreto “Energia” (articoli 4 e 5 del Dl n. 17/2022) sono
          rideterminati nella misura del 25% (anziché 20) per i consumi di
          energia e del 20% (anziché 15) per il gas naturale. Il Decreto Ucraina
          bis prevede, inoltre, analoghi contributi, sempre sotto forma di
          crediti d’imposta, a parziale compensazione delle spese sostenute per
          l’acquisto dell’energia elettrica o del gas naturale acquistati e
          consumati nel secondo trimestre 2022, rispettivamente, da parte delle
          imprese non energivore di potenza disponibile non inferiore a 16,5 Kw
          (nella misura del 12%) e delle imprese non gasivore (nella misura del
          20%). Si ritiene che le norme sopra indicate non ostino all’utilizzo
          in compensazione dei relativi crediti d’imposta in un momento
          antecedente rispetto alla conclusione del trimestre di riferimento, a
          condizione che, nel rispetto di tutti gli altri requisiti previsti
          dalle norme a tal fine applicate, le spese per l’acquisto dell’energia
          elettrica e del gas naturale consumati, con riferimento alle quali è
          calcolato il credito d’imposta spettante, possano considerarsi
          sostenute, secondo i criteri di cui all’articolo 109 del TUIR, nel
          predetto trimestre e il loro sostenimento sia documentato mediante il
          possesso della/e fattura/e di acquisto. Per accedere al credito
          d'imposta per energia elettrica del primo trimestre 2022, solo per gli
          energivori, bisogna produrre le fatture dell'ultimo trimestre 2021 e
          dell'ultimo trimestre 2019. Per accedere al credito d'imposta per
          energia elettrica del secondo trimestre 2022, per l'energia elettrica
          prelevata e autoprodotta, per gli utenti energivori e non, bisogna
          produrre le fatture del primo trimestre 2022 e del primo trimestre
          2019 e la quantità di energia autoconsumata. In tal caso l'incremento
          del costo per kWh di energia elettrica prodotta e autoconsumata è
          calcolato con riferimento alla variazione del prezzo unitario dei
          combustibili acquistati ed utilizzati dall'impresa per la produzione
          della medesima energia elettrica e il credito d'imposta è determinato
          con riguardo al prezzo convenzionale dell'energia elettrica pari alla
          media, relativa al secondo trimestre 2022, del prezzo unico nazionale
          (PUN) dell'energia elettrica. In tal caso bisogna fornire il prezzo
          medio del combustibile utilizzato per autoprodurre energia elettrica
          per il primo trimestre 2022 e per il primo trimestre 2019. Per
          accedere al credito d'imposta per il gas naturale, per gli utenti
          gasivori e non, solo per il secondo trimestre 2022, come indicato in
          precedenza, si deve ricavare dal sito del GME sezione gas la media
          aritmetica del prezzo del gas del mercato infragiornaliero (MI-GAS)
          rispettivamente del primo trimestre 2022 e del primo trimestre 2019
          verificando che per il primo trimestre 2022 la media sia superiore del
          30% rispetto alla media del primo trimestre 2019. Come detto sopra
          l'ipotesi è verificata abbondantemente e quindi sull'importo delle
          fatture del secondo trimestre 2022 (anche mese per mese e non
          necessariamente per il trimestre) si può calcolare e chiedere un
          credito d'imposta del 20% dell'importo delle fatture con le modalità
          sopra riportate.
        </article>
      </section>
    </div>
  );
}

export default Agevolazioni;
