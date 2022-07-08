import React, { useState } from "react";
import headerStyle from "../style/output/header.module.css";
import Link from "next/link";
import logo from "../../public/media/img/logoconsenergy.jpeg";

function Header() {
  const [open, openMenu] = useState(false);

  return (
    <div className={headerStyle.cont__header}>
      <ul
        className={headerStyle.cont__header_menu_mobile}
        style={{ left: open ? "0" : "-100%" }}
      >
        <li onClick={() => openMenu(false)}>
          <Link href="/azienda">Azienda</Link>
        </li>

        <li onClick={() => openMenu(false)}>
          <Link href="/servizi">Servizi</Link>
        </li>

        <li onClick={() => openMenu(false)}>
          <Link href="media/docs/ACCISEAGEVOLATE.pdf">Accise Agevolate</Link>
        </li>
        <li onClick={() => openMenu(false)}>
          <Link href="media/docs/ILMERCATODELGAS.pptx">Mercato del Gas</Link>
        </li>
        <li onClick={() => openMenu(false)}>
          <Link href="media/docs/ILMERCATOENERGETICO.pptx">
            Mercato Energetico
          </Link>
        </li>

        <li onClick={() => openMenu(false)}>
          <Link href="/notizie">Notizie</Link>
        </li>

        <li id="cta" onClick={() => openMenu(false)}>
          <Link href="/contatti">Richiedi un preventivo</Link>
        </li>

        <li id="cta" onClick={() => openMenu(false)}>
          <Link href="/lavora-con-noi">Lavora con Noi</Link>
        </li>

        <button onClick={() => openMenu(false)}>X</button>
      </ul>
      <nav className={headerStyle.cont__header_menu}>
        <button
          className={headerStyle.cont__header_menu_button}
          onClick={() => openMenu(open ? false : true)}
        >
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

          <li id="dropdown">
            <Link href="/">Agevolazioni Fiscali</Link>

            <ul>
              <li>
                <Link href="media/docs/ACCISEAGEVOLATE.pdf">
                  Accise Agevolate
                </Link>
              </li>
              <li>
                <Link href="media/docs/ILMERCATODELGAS.pptx">
                  Mercato del Gas
                </Link>
              </li>
              <li>
                <Link href="media/docs/ILMERCATOENERGETICO.pptx">
                  Mercato Energetico
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/notizie">Notizie</Link>
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
