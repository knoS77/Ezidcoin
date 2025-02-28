import React, {useContext} from "react";
import { Collapse } from 'antd';
import { LanguageContext } from "./Header"; 
import en from "../translator/en.json";
import ru from "../translator/ru.json";


const {Panel} = Collapse;
const Faq = () => {
    const { language } = useContext(LanguageContext);

    // Объект с переводами
    const translations = { ru: ru, en: en };
    return(
        <>
            <Collapse defaultActiveKey={['1']}>
  <Panel header={translations[language].WhoAreYezidis} key='1'>
    <p>{translations[language].AboutYezidis}</p>
  </Panel>
  <Panel header={translations[language].WhyShouldEzidcoin} key="2">
    <p>{translations[language].EzidcoinOpportunity} <br/>
{translations[language].SupportYezidis} <br />
{translations[language].InvestEzidcoin}
<br />
{translations[language].joinUs}  </p>
  </Panel>
  <Panel header={translations[language].Risks} key="3">
    <p>{translations[language].AboutRisks} <br />
{translations[language].HighVolatility} <br />
{translations[language].TechnologicalProblem} <br />

{translations[language].Recommendations}</p>
  </Panel>
</Collapse>
        </>
    )
}

export default Faq;