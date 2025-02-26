import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    return (
        <>
            <div className={styles.navbar_style}>
                <div className="container flex justify-between items-center text-lg">

                    {/* Logo */}
                    <Link to="/home">
                        <img 
                            src="https://ik.imagekit.io/grupo03/Desk%20Dundies/HR_DUNDIES_1.png?updatedAt=1740530750161"
                            className="w-24" 
                            alt="Logo" 
                        />
                    </Link>

                    {/* Hamburguer para mobile */}
                    <div 
                        className=" flex flex-col gap-2 items-center justify-center cursor-pointer md:hidden" 
                        onClick={toggleMenu}
                    >
                        <div className="w-6 h-1 bg-white"></div>
                        <div className="w-6 h-1 bg-white"></div>
                        <div className="w-6 h-1 bg-white"></div>
                    </div>

                    <div className="hidden md:flex gap-6 items-center">
                        <Link to="/colaboradores" className="text-light-gray hover:text-light-brown">Colaboradores</Link>
                        <Link to="/departamentos" className="text-light-gray hover:text-light-brown">Departamentos</Link>
                        <Link to="/sobre" className="text-light-gray hover:text-light-brown">Sobre</Link>
                        
                        {/* Imagem de Perfil */}
                        <img 
                            src="https://i.pinimg.com/736x/73/71/9b/73719b7d19e9931b467b8f6bf8158c99.jpg"
                            className="w-12 h-12 rounded-full border-2 border-zinc-900" 
                            alt="Perfil" 
                        />

                        <Link to="/sair" className="text-light-gray hover:text-light-brown">Sair</Link>
                    </div>
                </div>
            </div>

            {/* Menu para responsividade */}
            
            <div className={`absolute top-0 right-0 bg-dark-gray text-beige w-3/4 h-full md:hidden ${menuActive ? 'block' : 'hidden'}`}>
            
                <ul className="flex flex-col items-center pt-20">
                    <li><Link to="/colaboradores" className="py-3 text-lg text-light-gray hover:text-light-brown">Colaboradores</Link></li>
                    <li><Link to="/departamentos" className="py-3 text-lg text-light-gray hover:text-light-brown">Departamentos</Link></li>
                    <li><Link to="/sobre" className="py-3 text-lg text-light-gray hover:text-light-brown">Sobre</Link></li>
                    <li><Link to="/sair" className="py-3 text-lg text-light-gray hover:text-light-brown">Sair</Link></li>
                </ul>
            </div>
            
        </>
    );
}

export default Navbar;
