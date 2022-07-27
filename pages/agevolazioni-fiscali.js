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
          di gas naturale (cd. imprese gasivore). 
        </article>
      </section>
    </div>
  );
}

export default Agevolazioni;
