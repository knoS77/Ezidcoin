import React, { useContext, useState } from "react";
import "../Styles/Header.css";
import sun from "../Images/sun.png";
import telegram from "../Images/telegram.svg";
import ru from "../translator/ru.json";
import en from "../translator/en";

// Импортируем контекст
export const LanguageContext = React.createContext();

const Header = () => {
  // Получаем текущий язык и функцию изменения языка из контекста
  const { language, changeLanguage } = useContext(LanguageContext);

  // Объект с переводами
  const translations = { ru: ru, en: en };

  // Состояние для бургер-меню
  const [isOpen, setOpen] = useState(false);

  // Функция для обработки клика на бургер-меню
  const burgerMenu = (event) => {
    if (event.target.closest(".burger")) {
      setOpen((prev) => !prev);
      event.preventDefault();
    } else {
      setOpen(false);
    }
  };

  return (
    <header id="header">
      <div className="header__logo">
        <img src={sun} alt="" />
        
          <span>Ezid</span>coin
         
      </div>
      <div onClick={burgerMenu} className="header__container">
        {/* Навигация */}
        <nav id="nav" className={`header__nav ${isOpen ? "active" : ""}`}>
          <ul className="nav__list">
            <li>
              <a href="#header">{translations[language].AboutUs}</a>
            </li>
            <li>
              <a href="#two">{translations[language].WhereAreWe}</a>
            </li>
            <li>
              <a href="#three">{translations[language].Price}</a>
            </li>
            <li>
              <a href="#four">FAQ</a>
            </li>

            {/* Выбор языка */}
            <select id="language-select" value={language} onChange={(e) => changeLanguage(e.target.value)}>
              <option value="ru">ru</option>
              <option value="en">en</option>
            </select>
          </ul>
        </nav>

        {/* Бургер-меню */}
        <div id="burger" className={`burger ${isOpen ? "active" : ""}`}>
          <span></span>
        </div>

        {/* Кнопка Telegram */}
        <div className="header__button">
          <a target="_blank" href="https://t.me/Ezidcoin_rus" rel="noreferrer">
            <button type="submit">
              <img src={telegram} alt="" /> Telegram
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
