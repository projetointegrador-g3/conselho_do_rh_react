import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import styles from './Footer.module.css'
import { ChevronDown } from "lucide-react";
import { useState } from 'react';

function Footer() {

    const data = new Date().getFullYear()
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("Portuguese");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <>
            <div className={styles.footer_style}>
                <div className="container flex flex-col items-center py-4">
                    <div className='gap-2'>
                        <a href="" target="_blank"><LinkedinLogo size={40} /></a>
                        <a href="" target="_blank"><InstagramLogo size={40} /></a>
                        <a href="" target="_blank"><FacebookLogo size={40} /></a>
                        <a href="" target='_blank'><GithubLogo size={40}  /></a>
                    </div>

                    <p className='font-serif'>That's what she said.</p>
                    <p className='text-lg font-extralight m-1'>Desk Dundies © {data}</p>
                    <p className='text-lg font-extralight m-0'>Conectando talentos às melhores oportunidades. 
                        Sua plataforma confiável para soluções em recrutamento e gestão de pessoas. </p>
                    
                    <div className='text-lg font-extralight m-1 items-center'> Brazil | R$

                        {/* Dropdown de Idioma */}
                        <div className="relative mt-2 text-sm">
                            <button 
                                onClick={toggleDropdown} 
                                className="flex items-center gap-2 border p-2 rounded cursor-pointer"
                            >
                                {language} <ChevronDown size={16} />
                            </button>

                            {isOpen && (
                                <div className=" left-0 mt-1 w-40 bg-black shadow-md rounded-md border z-10">
                                    <ul className="p-2">
                                        <li className="cursor-pointer p-2 hover:bg-gray-900" onClick={() => changeLanguage("Portuguese")}>🇧🇷 Português</li>
                                        <li className="cursor-pointer p-2 hover:bg-gray-900" onClick={() => changeLanguage("English")}>🇺🇸 English</li>
                                        <li className="cursor-pointer p-2 hover:bg-gray-900" onClick={() => changeLanguage("Español")}>🇪🇸 Español</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default Footer
