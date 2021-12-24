import React, { ContextType, createContext, useContext, useEffect, useState } from 'react';


export const EasterContext = createContext<any>(null);


export const EasterProvider = ({ children }:any) => {
    const [easterFound, seteasterFound] = useState(false)

    return (
        <EasterContext.Provider value={{easterFound , seteasterFound}}>
            {children}
        </EasterContext.Provider>
    );
};





