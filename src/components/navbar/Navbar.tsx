import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import MusicPlayer from "../../lib/MusicPlayer"

function Navbar() {
    return (
        <>
            <div className={styles.navbar_style}>
                <div className="container flex justify-between text-lg">

                    <a href='/home'>
                    <img className='w-25' src='https://ik.imagekit.io/grupo03/Desk%20Dundies/HR_DUNDIES_1.png?updatedAt=1740530750161'/>
                    </a>

                    <div className='flex gap-4 items-center'>
                        <Link to='/colaboradores'>Colaboradores</Link>
                        <Link to='/departamentos'>Departamentos</Link>
                        <Link to='/sobre'>Sobre</Link>
                        <img src='https://i.pinimg.com/736x/73/71/9b/73719b7d19e9931b467b8f6bf8158c99.jpg'
                        className='size-15 rounded-full border-zinc-900' />
                        <Link to='/sair'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
