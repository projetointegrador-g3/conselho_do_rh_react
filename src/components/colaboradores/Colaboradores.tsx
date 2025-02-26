import './Colaboradores.css'
import { Money, PencilLine, Trash } from '@phosphor-icons/react'

const Colaboradores = () => {
  return (
    <>
    
      <div className="fundoCol flex flex-col items-center">

        <div className='flex gap-12 px-32 mt-32 mb-12'>

          <div className='bg-zinc-900 p-6 rounded-lg w-3/4 text-white'>
            <img className='w-40 h-40 mb-5' src="https://i.pinimg.com/736x/9d/d0/68/9dd06809fe624bae4da7e37c4f6ba514.jpg" alt="" />
            <h2 className='font-bold text-lg rounded-md'>Jim Halpert</h2>
            <p><strong>Departamento:</strong> Vendas</p>
            <p><strong>Salário:</strong> R$2.000,00</p>
            <p><strong>Email:</strong> jim.halpert@dundermifflin.com</p>
            <div className='flex justify-center border-t mt-5 pt-4 gap-2'>
              <PencilLine size={24} className='cursor-pointer hover:scale-110' />
              <Trash size={24} className='cursor-pointer hover:scale-110'/>
              <Money size={24} className='cursor-pointer hover:scale-110'/>
            </div>
          </div>

          <div className='bg-zinc-900 p-6 rounded-lg w-3/4 text-white'>
            <img className='w-40 h-40 mb-5' src="https://i.pinimg.com/736x/be/bd/c9/bebdc95609fec9a94cd9a1477f863b17.jpg" alt="" />
            <h2 className='font-bold text-lg'>Pam Beesly</h2>
            <p><strong>Departamento:</strong> Vendas</p>
            <p><strong>Salário:</strong> R$2.000,00</p>
            <p><strong>Email:</strong> recepcao@dundermifflin.com</p>
            <div className='flex justify-center border-t mt-5 pt-4 gap-2'>
              <PencilLine size={24} className='cursor-pointer hover:scale-110' />
              <Trash size={24} className='cursor-pointer hover:scale-110'/>
              <Money size={24} className='cursor-pointer hover:scale-110'/>
            </div>
          </div>

          <div className='bg-zinc-900 p-6 rounded-lg w-3/4 text-white'>
            <img className='w-40 h-40 mb-5' src="https://i.pinimg.com/736x/bd/3a/ba/bd3aba877727be6c2572d96c7e875a4c.jpg" alt="" />
            <h2 className='font-bold text-lg rounded-md'>Stanley Hudson</h2>
            <p><strong>Departamento:</strong> Vendas</p>
            <p><strong>Salário:</strong> R$2.000,00</p>
            <p><strong>Email:</strong> stanley@dundermifflin.com</p>
            <div className='flex justify-center border-t mt-5 pt-4 gap-2'>
              <PencilLine size={24} className='cursor-pointer hover:scale-110' />
              <Trash size={24} className='cursor-pointer hover:scale-110'/>
              <Money size={24} className='cursor-pointer hover:scale-110'/>
            </div>
          </div>

          <div className='bg-zinc-900 p-6 rounded-lg w-3/4 text-white'>
            <img className='w-40 h-40 mb-5' src="https://i.pinimg.com/736x/11/99/ce/1199ce25eca269b9e05699699b093ee2.jpg" alt="" />
            <h2 className='font-bold text-lg rounded-md'>Oscar Nunes</h2>
            <p><strong>Departamento:</strong> Contabilidade</p>
            <p><strong>Salário:</strong> R$3.000,00</p>
            <p><strong>Email:</strong> oscar@dundermifflin.com</p>
            <div className='flex justify-center border-t mt-5 pt-4 gap-2'>
              <PencilLine size={24} className='cursor-pointer hover:scale-110' />
              <Trash size={24} className='cursor-pointer hover:scale-110'/>
              <Money size={24} className='cursor-pointer hover:scale-110'/>
            </div>
          </div>
        </div>

        <div className='flex gap-12 px-32 mt-16 mb-12'>
          <div className='bg-zinc-900 p-6 rounded-lg w-3/4 text-white'>
            <img className='w-40 h-40 mb-5' src="https://i.pinimg.com/736x/61/26/ab/6126ab2a943d29623d7b255cc6c24c94.jpg" alt="" />
            <h2 className='font-bold text-lg rounded-md'>Creed</h2>
            <p><strong>Departamento:</strong> Qualidade</p>
            <p><strong>Salário:</strong> R$5.000,00</p>
            <p><strong>Email:</strong> Creed@dundermifflin.com</p>
            <div className='flex justify-center border-t mt-5 pt-4 gap-2'>
              <PencilLine size={24} className='cursor-pointer hover:scale-110' />
              <Trash size={24} className='cursor-pointer hover:scale-110'/>
              <Money size={24} className='cursor-pointer hover:scale-110'/>
            </div>
          </div>

          <div className='bg-zinc-900 p-6 rounded-lg w-3/4 text-white'>
            <img className='w-40 h-40 mb-5' src="https://i.pinimg.com/736x/8b/44/b3/8b44b3b043187e61beab24abcfc76e49.jpg" alt="" />
            <h2 className='font-bold text-lg rounded-md'>Dwight Schrute</h2>
            <p><strong>Departamento:</strong> Vendas // Assistente <s>do</s> Gerente Regional</p>
            <p><strong>Salário:</strong> R$2.000,00</p>
            <p><strong>Email:</strong> dwight.schrute@dundermifflin.com</p>
            <div className='flex justify-center border-t mt-5 pt-4 gap-2'>
              <PencilLine size={24} className='cursor-pointer hover:scale-110' />
              <Trash size={24} className='cursor-pointer hover:scale-110'/>
              <Money size={24} className='cursor-pointer hover:scale-110'/>
            </div>
          </div>

          <div className='bg-zinc-900 p-6 rounded-lg w-3/4 text-white'>
            <img className='w-40 h-40 mb-5' src="https://i.pinimg.com/736x/6b/52/9a/6b529a9b15603e6d9cb2b016b3514ff5.jpg" alt="" />
            <h2 className='font-bold text-lg rounded-md'>Ryan, o Estagiário</h2>
            <p><strong>Departamento:</strong> Vendas/Estagiário</p>
            <p><strong>Salário:</strong> R$0,00</p>
            <p><strong>Email:</strong> temporario@dundermifflin.com</p>
            <div className='flex justify-center border-t mt-5 pt-4 gap-2'>
              <PencilLine size={24} className='cursor-pointer hover:scale-110' />
              <Trash size={24} className='cursor-pointer hover:scale-110'/>
              <Money size={24} className='cursor-pointer hover:scale-110'/>
            </div>
          </div>

          <div className='bg-zinc-900 p-6 rounded-lg w-3/4 text-white'>
            <img className='w-40 h-40 mb-5' src="https://i.pinimg.com/736x/fe/3d/ff/fe3dff938c853adcdd075db0b91c0796.jpg" alt="" />
            <h2 className='font-bold text-lg rounded-md'>Meredith</h2>
            <p><strong>Departamento:</strong> Compras</p>
            <p><strong>Salário:</strong> R$2.000,00</p>
            <p><strong>Email:</strong> compras@dundermifflin.com</p>
            <div className='flex justify-center border-t mt-5 pt-4 gap-2'>
              <PencilLine size={24} className='cursor-pointer hover:scale-110' />
              <Trash size={24} className='cursor-pointer hover:scale-110'/>
              <Money size={24} className='cursor-pointer hover:scale-110'/>
            </div>
              </div>
          </div>
        </div>
    
    </>
  )
}

export default Colaboradores
