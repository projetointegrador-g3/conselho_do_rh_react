import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-yellow-100 text-gray-800'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Conselho do RH</Link>

                    <div className='flex gap-4'>
                        Colaboradores
                        Sobre
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar