import React from "react";
import headerStyle from "../style/output/header.module.css";
import Link from "next/link";
import logo from "../../public/media/img/logoconsenergy.jpeg";

function Header() {
  return (
    <div className={headerStyle.cont__header}>
      <nav className={headerStyle.cont__header_menu}>
        <button className={headerStyle.cont__header_menu_button}>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </button>

        <div className={headerStyle.cont__header_menu_logo}>
          <Link href="/" passHref>
            <img
              src={logo}
              alt="Consenergy - I tuoi consulenti per l'energia"
            />
          </Link>
        </div>

        <ul className={headerStyle.cont__header_menu_inside}>
          <li>
            <Link href="/azienda">Azienda</Link>
          </li>

          <li>
            <Link href="/servizi">Servizi</Link>
          </li>

          <li>
            <Link href="/agevolazioni-fiscali">Agevolazioni Fiscali</Link>
          </li>

          <li>
            <Link href="/prodotti">Prodotti</Link>
          </li>
        </ul>

        <ul className={headerStyle.cont__header_menu_inside} id="cta">
          <li>
            <Link href="/contatti">Richiedi un preventivo</Link>
          </li>

          <li>
            <Link href="/lavora-con-noi">Lavora con Noi</Link>
          </li>
        </ul>
      </nav>

      <div className={headerStyle.cont__header_cover}></div>
    </div>
  );
}

export default Header;
