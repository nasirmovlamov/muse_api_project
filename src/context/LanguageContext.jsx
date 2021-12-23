// creat react context for language

import React, { createContext, useContext, useEffect, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('KR');

    const changeLanguage = (lang) => {
        if(lang !== "KR" && lang !== "CH" && lang !== "ID"){
            setLanguage("EN");
        }else { 
            setLanguage(lang);
        }
    }
    
    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
