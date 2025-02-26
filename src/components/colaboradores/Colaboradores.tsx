import React, { useState } from 'react';  
import { Printer, PencilLine, Trash, Money } from '@phosphor-icons/react';  
import { colaboradoresData, Colaborador } from './ColaboradoresData';  
import './Colaboradores.css';  
import ModalColaborador from '../modalcolaborador/ModalColaborador';  

const Colaboradores: React.FC = () => {  
  const [selectedColaborador, setSelectedColaborador] = useState<Colaborador | null>(null);  
  const [isModalOpen, setIsModalOpen] = useState(false);  

  const handleSelectColaborador = (colaborador: Colaborador) => {  
    console.log("handleSelectColaborador foi chamada com:", colaborador);  
    setSelectedColaborador(colaborador);  
    setIsModalOpen(true);  
  };  

  const handleCloseModal = () => {  
    setIsModalOpen(false);  
  };  

  return (  
    <div className="fundoCol">  
      <div className="flex flex-wrap gap-12 px-32 mt-32 mb-12 justify-center">  
        {colaboradoresData.map((colaborador) => (  
          <div key={colaborador.nome} className="bg-zinc-900 p-6 rounded-lg w-full max-w-sm text-white">  
            <img className="w-40 h-40 mb-5 rounded-full mx-auto" src={colaborador.imagem} alt={`Foto de ${colaborador.nome}`} />  
            <h2 className="font-bold text-lg text-center">{colaborador.nome}</h2>  
            <p><strong>Departamento:</strong> {colaborador.departamento}</p>  
            <p><strong>Salário: R$</strong>{colaborador.salario.toFixed(2)}</p> {/* Assumindo que colaborador.salario já é um número */}  
            <p><strong>Email:</strong> {colaborador.email}</p>  
            <div className="flex justify-center border-t mt-5 pt-4 gap-2">  
              <PencilLine size={24} className="cursor-pointer hover:scale-110" />  
              <Trash size={24} className="cursor-pointer hover:scale-110" />  
              <Money size={24} className="cursor-pointer hover:scale-110" />  
              <Printer  
                size={24}  
                className="cursor-pointer hover:scale-110"  
                onClick={() => handleSelectColaborador(colaborador)}  
              />  
            </div>  
          </div>  
        ))}  
      </div>  

      {/* Modal */}  
      {isModalOpen && (  
        <ModalColaborador colaborador={selectedColaborador} onClose={handleCloseModal} />  
      )}  
    </div>  
  );  
};  

export default Colaboradores;