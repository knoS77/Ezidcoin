import React, { useState } from "react";
import "./App.css"
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx"
import Home from "./Components/Home";
import { LanguageContext } from "./Components/Header"; // Импортируем контекст

const App = () => {
  // Состояние для выбранного языка
  const [language, setLanguage] = useState("ru");

  // Функция для изменения языка
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
        <Header />
        <Home />
        <Footer/>
    </LanguageContext.Provider>
  );
};

export default App;