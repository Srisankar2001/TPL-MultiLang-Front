import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import english from "../Locale/en"
import arabic from "../Locale/ar"
import french from "../Locale/fr"

i18n.use(initReactI18next).init({
    debug : true,
    fallbackLng : "en",
    resources : {
        en : {
            translation : english
        },
        ar : {
            translation : arabic
        },
        fr : {
            translation : french
        }
    }
})

export default i18n;