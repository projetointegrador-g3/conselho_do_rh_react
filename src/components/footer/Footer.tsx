import { ArrowDown, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import styles from './Footer.module.css'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className={styles.footer_style}>
                <div className="container flex flex-col items-center justify-center py-4">
                    <div className='flex gap-3'>
                        <a href="" target="_blank"><LinkedinLogo size={40} /></a>
                        <a href="" target="_blank"><InstagramLogo size={40} /></a>
                        <a href="" target="_blank"><FacebookLogo size={40} /></a>
                        <a href="" target='_blank'><GithubLogo size={40}  /></a>
                    </div>

                    <p>That's what she said.</p>
                    <p className='text-lg font-extralight m-1'>Desk Dundies © {data}</p>
                    <p className='text-lg font-extralight m-0'>Conectando talentos às melhores oportunidades. 
                        Sua plataforma confiável para soluções em recrutamento e gestão de pessoas. </p>
                    <p className='text-lg font-extralight m-1'> Brazil | R$  Portuguese ⬇</p>
                        
                </div>
            </div>
        </>
    )
}

export default Footer
