import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-green-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Conselho do RH | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>

                        <a href="" target="_blank"><LinkedinLogo size={48} weight='bold' /></a>
                        <a href="" target="_blank"><InstagramLogo size={48} weight='bold' /></a>
                        <a href="" target="_blank"><FacebookLogo size={48} weight='bold' /></a>
                        <a href="" target='_blank'><GithubLogo size={48} weight="bold" /></a>

                    </div>
                    <img className="w-[250px]" 
                        src="https://ik.imagekit.io/vp8x0spqk/Generation/Távola_Redonda-removebg-preview.png?updatedAt=1740510818552" alt="Tavola Redonda" />
                </div>
            </div>
        </>
    )
}

export default Footer