import React from 'react';
import { LanguageContext } from './language.context';

export const Justo: React.FunctionComponent = () => {
  const { language, setLanguage } = React.useContext(LanguageContext);


  return <>
  <h1>hola {language}</h1>
  <input type="text" value={language} onChange={(e)=>setLanguage(e.target.value)}/>
  </>
};
