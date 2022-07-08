import React, {useContext} from "react";
import footerStyle from "../style/output/footer.module.css";
import logo from "../../public/media/img/logoconsenergy.jpeg";
import Link from "next/link";
import AppContext from "../../context/context";

function Footer() {
  const {setService} = useContext(AppContext)

  return (
    <footer className={footerStyle.cont__footer}>
      <div className={footerStyle.cont__footer_inside}>
        <div className={footerStyle.cont__footer_inside_info}>
          <div className={footerStyle.cont__footer_inside_info_logo}>
            <Link href="/">
              <img src={logo} alt="Consenergy" />
            </Link>
          </div>

          <ul className={footerStyle.cont__footer_inside_info_social}>
            <li>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                >
                  <g
                    id="Raggruppa_13"
                    data-name="Raggruppa 13"
                    transform="translate(-1273 -2994)"
                  >
                    <path
                      id="Tracciato_103"
                      data-name="Tracciato 103"
                      d="M82,71.444A10.554,10.554,0,0,1,71.444,82H16.556A10.555,10.555,0,0,1,6,71.444V16.556A10.555,10.555,0,0,1,16.556,6H71.444A10.554,10.554,0,0,1,82,16.556Z"
                      transform="translate(1267 2988)"
                    />
                    <path
                      id="icons8-linkedin"
                      d="M23.179,17c-3.618,0-5.789,2.175-5.789,5.072s2.171,5.063,5.426,5.063c3.618,0,5.789-2.167,5.789-5.063S26.435,17,23.179,17Zm-5.5,15.553V62.111H28.333V32.556Zm19.445,0V62.111H47.779V45.956c0-4.809,3.431-5.5,4.461-5.5s3.785,1.033,3.785,5.5V62.111H66.333V45.956c0-9.276-4.122-13.4-9.277-13.4s-7.905,1.717-9.277,4.123V32.556Z"
                      transform="translate(1270 2991)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </Link>
            </li>

            <li>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                >
                  <g
                    id="Raggruppa_12"
                    data-name="Raggruppa 12"
                    transform="translate(-834 -3085)"
                  >
                    <path
                      id="Tracciato_101"
                      data-name="Tracciato 101"
                      d="M82,71.444A10.554,10.554,0,0,1,71.444,82H16.556A10.555,10.555,0,0,1,6,71.444V16.556A10.555,10.555,0,0,1,16.556,6H71.444A10.554,10.554,0,0,1,82,16.556Z"
                      transform="translate(828 3079)"
                    />
                    <path
                      id="Tracciato_102"
                      data-name="Tracciato 102"
                      d="M47,38.333h-7.11V65.778H29.333V38.333H23V29.889h6.333V24.8c0-7.406,3.08-11.8,11.805-11.8h7.195v8.444H43.505c-3.4,0-3.616,1.267-3.616,3.637v4.807h8.444Z"
                      transform="translate(846.889 3086.778)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </Link>
            </li>

            <li>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                >
                  <g
                    id="Raggruppa_14"
                    data-name="Raggruppa 14"
                    transform="translate(-1398 -2750)"
                  >
                    <path
                      id="Tracciato_104"
                      data-name="Tracciato 104"
                      d="M82,71.444A10.554,10.554,0,0,1,71.444,82H16.556A10.555,10.555,0,0,1,6,71.444V16.556A10.555,10.555,0,0,1,16.556,6H71.444A10.554,10.554,0,0,1,82,16.556Z"
                      transform="translate(1392 2744)"
                    />
                    <path
                      id="icons8-twitter"
                      d="M51.836,20.367a10.507,10.507,0,0,0-10.5,10.5c0,1.085.363,1.81.363,2.532a29.37,29.37,0,0,1-21.35-10.852A8.3,8.3,0,0,0,18.9,27.608c0,3.618,1.812,6.521,4.709,9.055A18.1,18.1,0,0,1,18.9,35.211,10.457,10.457,0,0,0,27.22,45.346a7.94,7.94,0,0,1-2.895.363,15.9,15.9,0,0,0-1.814-.363,10.552,10.552,0,0,0,9.772,7.232,23.408,23.408,0,0,1-13.03,4.346H16.722a30.406,30.406,0,0,0,15.924,4.709c19.182,0,29.679-15.927,29.679-29.679V30.5A24.43,24.43,0,0,0,67.4,25.068a19.805,19.805,0,0,1-6.152,1.814,10.575,10.575,0,0,0,4.7-5.789,17.567,17.567,0,0,1-6.515,2.532A9.851,9.851,0,0,0,51.836,20.367Z"
                      transform="translate(1395 2747)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div className={footerStyle.cont__footer_inside_menu}>
          <ul>
            <li>Servizi</li>
            <li onClick={() => setService("1")}>
              <Link href="/servizi">Fotovoltaico</Link>
            </li>
            <li onClick={() => setService("2")}>
              <Link href="/servizi">Impianti Solare Termico</Link>
            </li>
            <li onClick={() => setService("3")}>
              <Link href="/servizi">Risparmio Energetico</Link>
            </li>
            <li onClick={() => setService("4")}>
              <Link href="/servizi">Colonnine Elettriche</Link>
            </li>
          </ul>

          <ul>
            <li>Azienda</li>
            <li>
              <Link href="/">Chi Siamo</Link>
            </li>
            <li>
              <Link href="/">Politiche Aziendali</Link>
            </li>
          </ul>

          <ul>
            <li>Agevolazioni</li>

            <li>
              <Link href="media/docs/ACCISEAGEVOLATE.pdf">Accise Agevolate</Link>
            </li>
            <li>
              <Link href="media/docs/ILMERCATODELGAS.pptx">Mercato del Gas</Link>
            </li>
            <li>
              <Link href="media/docs/ILMERCATOENERGETICO.pptx">Mercato Energetico</Link>
            </li>
          </ul>

          <ul>
            <li>Contatti</li>

            <li>
              <Link href="/contatti">Contattaci</Link>
            </li>

            <li>
              <Link href="/lavora-con-noi">Lavora con noi</Link>
            </li>
          </ul>
        </div>
          </div>
          
          <div className={footerStyle.cont__footer_under}>
              <p>Copyright © 2022 - Consenergy - P.IVA 029292019 - Made by <a href="www.previrtae.com">Previrtae</a></p>
          </div>
    </footer>
  );
}

export default Footer;
