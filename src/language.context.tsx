import React from 'react';

interface Context {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageContext = React.createContext<Context>({
  language: 'alpi justo',
  setLanguage: (language: string) => {
    alert('illo, q no se ha seleccionado ningún idioma');
  },
});

export const LanguageProvider: React.FC = (props) => {
  const [language, setLanguage] = React.useState<string>('ES');

  return(
    <LanguageContext.Provider value={{language, setLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  )
};
