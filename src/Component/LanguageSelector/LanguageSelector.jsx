import React, { useContext, useState } from 'react'
import "./LanguageSelector.css"
import {SideContext } from '../../Context/SideContext'
import {useTranslation} from "react-i18next"

export const LanguageSelector = () => {
    const {i18n} = useTranslation()
    const { side, setSide } = useContext(SideContext)
    const [languages, setLanguages] = useState([
        { code: "en", name: "English", side:"LTR" },
        { code: "ar", name: "Arabic", side:"RTL" },
        { code: "fr", name: "French", side:"LTR" },
    ])
    const handleLanguageChange = (e) => {
        const selectedLanguage = languages.find(lang => lang.code === e.target.value)
        if(selectedLanguage){
            i18n.changeLanguage(selectedLanguage.code)
            setSide(selectedLanguage.side)
        }
    }
    const renderLanguages = () => {
        return (
            <select name='language' onChange={handleLanguageChange}>
                {languages.map(item => (
                    <option key={item.code} value={item.code}>{item.name}</option>
                ))}
            </select >
        )
    }
    return (
        <div className={`languageSelector ${side === "LTR"? "ltr" : "rtl"}`}>
            {renderLanguages()}
        </div>
    )
}
