import React from 'react';
import '../App.css'
import { useTranslation } from 'react-i18next';


export default function Navbar() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.dir = lng === "ar" || lng === "ur" ? "rtl" : "ltr";
        document.documentElement.lng = lng;
    };

    const languages = [
        { code: "en", name: "English" },
        { code: "ar", name: "العربية" },
        { code: "ur", name: "urdo" },
        { code: "sp", name: "Spain" },
    ]

    const navLinks = () => {
        switch (currentLang) {
            case 'ar':
                return [
                    { title: t('About Us') },
                    { title: t('contact') },
                    { title: t('register') }
                ];
            case 'en':
                return [
                    { title: t('About Us') },
                    { title: t('contact') },
                    { title: t('register') }
                ];
            case 'sp':
                return [
                    { title: t('About Us') },
                    { title: t('contact') },
                    { title: t('register') }
                ];
            case 'ur':
                return [
                    { title: t('About Us') },
                    { title: t('contact') },
                    { title: t('register') }
                ];
        }
    }
    const navLink = navLinks();
    return (
        <>
            <header style={{ fontFamily: "Thamanyah" }} className="bg-cyan-900 text-white shadow-md sticky top-0">
                <div className="max-w-7xl mx-auto max-h-16 items-center flex flex-row justify-around">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <img src="public/logo1.png" alt="الشعار" className="w-18 h-18 object-contain" />
                    </div>

                    {navLink.map((e) => (

                    <div className="py-2"> {e.title} </div>
                    ))}

                    <div>
                        <select onChange={(e) => changeLanguage(e.target.value)}
                            value={i18n.language}>
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>{lang.name}</option>
                            ))}
                        </select>
                    </div>

                </div>
            </header>
        </>
    )
}