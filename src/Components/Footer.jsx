import React, {useContext} from "react";
import { LanguageContext } from "./Header";
import "../Styles/Footer.css";
import en from "../translator/en.json";
import ru from "../translator/ru.json";
import sun from "../Images/sun.png";




const Footer = () => {
  // Получаем текущий язык из контекста
  const { language } = useContext(LanguageContext);

  // Объект с переводами
  const translations = { ru: ru, en: en };
    return(
        <footer>
            <div className="footer__container">
            <div className="footer__logo">

        <img src={sun} alt="" />
       
          <span>Ezid</span>coin
       
      </div>
     <div className="footer__block">
        <p>
        {/* Авторские права © 2025 */}
        {translations[language].right}
        </p>
        <p>

        {translations[language].copyright}
        </p>
     </div>
            </div>
        </footer>
    )
}


export default Footer;