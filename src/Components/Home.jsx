import React, { useContext } from "react";
import ru from "../translator/ru.json";
import en from "../translator/en";
import Faq from "./faq.jsx";
import "../Styles/Home.css";
import { LanguageContext } from "./Header"; // Импортируем контекст
import bybit from "../Images/bybit.svg";
import blum from "../Images/blum.png";
import ston from "../Images/ston.svg";
import dex from "../Images/dex.svg";

const Home = () => {
  // Получаем текущий язык из контекста
  const { language } = useContext(LanguageContext);

  // Объект с переводами
  const translations = { ru: ru, en: en };

  return (
    <main>
      <section id="one">
        <div className="one__container">
        <h1>{translations[language].Welcome}</h1>
          <div className="one__button">
            <a target="_blank" rel="noreferrer"  href="https://app.ston.fi/swap?chartVisible=true&chartInterval=all&ft=USD%25E2%2582%25AE&tt=EQBqeG-XDp2nMojL8FQpXNMsjCHujHcXKLRI5vPwv6UXAjpX">
              <button>{translations[language].BuyEzidcoin}</button>
            </a>
          </div>
        </div>
      </section>
      <section id="two">
        <div className="two__container">
          <h2> {translations[language].WhereIsItUsed} <span>Ezidcoin</span> </h2>
          <div className="two__about">
            {translations[language].AboutEzidcoin}
          </div>
          <div className="two__container-img">
              <a target="_blank" rel="noreferrer" href="https://www.bybit.com">
                <img src={bybit} alt="" />
                <p>Bybit</p>
              </a>
              <a target="_blank" rel="noreferrer"  href="https://app.ston.fi">
                <img src={ston} alt="" />
                <p>Ston.fi</p>
              </a>
              <a target="_blank" rel="noreferrer"  href="https://t.me/Blum">
                <img src={blum} alt="" />
                <p>Blum</p>
              </a>
              <a target="_blank" rel="noreferrer"  href="https://dexscreener.com">
                <img src={dex} alt="" />
                <p>DEX</p>
              </a>
          </div>
        </div>
      </section>

      <section id="three">
              <h2>{translations[language].Price}</h2>
        <div className="three__container">
        {/* Описание цены */}
        <div className="price__description">
          <p>
            💡 {translations[language].PriceDescription}
          </p>
        </div>

        {/* Ссылка на платформу */}
        <div className="price__link">
          <a href="https://www.geckoterminal.com" target="_blank" rel="noreferrer" >
            {translations[language].CheckCurrentPrice}
          </a>
        </div>

        {/* Призыв к действию */}
        <div className="price__cta">
        <a target="_blank" rel="noreferrer"  href="https://app.ston.fi/swap?chartVisible=true&chartInterval=all&ft=USD%25E2%2582%25AE&tt=EQBqeG-XDp2nMojL8FQpXNMsjCHujHcXKLRI5vPwv6UXAjpX">
          <button type="submit">
            {translations[language].BuyNow}
          </button>
          </a>
        </div>
        </div>
      </section>


      <section id="four">
        <h2>F.A.Q</h2>
        <div className="four__container">
          <Faq/>
        </div>
      </section>
    </main>
  );
};

export default Home;