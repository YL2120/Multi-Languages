import React, {createContext, useState} from "react"
type LangName = "EN" | "FR" | "ES";

const initialState = {
    lang: "EN" as  LangName,
    toggleLang: function(a: any) {}
  };
  

  interface LangProviderProps {
    children: React.ReactNode;
  }
  
export const Context = createContext(initialState);

const supportedLangs = ["EN", "FR", "ES"];
let browserLang = navigator.language.slice(0,2).toUpperCase() as LangName;
console.log(browserLang);

if(supportedLangs.indexOf(browserLang) === -1){
    console.log("not supported");
    browserLang = "EN";
}

const ContextProvider = (props : LangProviderProps)=> {
    const [lang, setLang] = useState(browserLang)

    
    const toggleLang = (changeLang: LangName) => {
        setLang(changeLang)
    }

    return(
        <Context.Provider value ={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider; //on exporte notre contexte pour pouvoir wrapper notre application