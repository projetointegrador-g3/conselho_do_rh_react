import React, { useEffect, useState } from 'react';  
import { Printer, PencilLine, Trash} from '@phosphor-icons/react';  
import { colaboradoresData, Colaborador } from './ColaboradoresData';  
import ModalColaborador from '../modal/ModalColaborador';
import ModalEditarColaborador from '../modal/ModalEditarColaborador';

const Colaboradores: React.FC = () => {  

  const [selectedColaborador, setSelectedColaborador] = useState<Colaborador | null>(null);  
  const [isModalOpen, setIsModalOpen] = useState(false);  

  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false); // Novo estado  
    const [colaboradores, setColaboradores] = useState([...colaboradoresData]); 

    useEffect(() => {  
      // Inicializa o estado 'colaboradores' com os dados de 'colaboradoresData' na montagem do componente  
      setColaboradores([...colaboradoresData]);  
  }, []); // O array de dependências vazio garante que isso só rode uma vez (na montagem)  

  const handleSelectColaborador = (colaborador: Colaborador) => {  
    setSelectedColaborador(colaborador);  
    setIsModalOpen(true);  // Abre o modal de impressão  
  };  

  const handleSelectColaboradorEditar = (colaborador: Colaborador) => {  
    setSelectedColaborador(colaborador);  
    setIsEditarModalOpen(true); // Abre o modal de edição  
};  
  

  const handleCloseModal = () => {  
    setIsModalOpen(false);  
  };  

  const handleCloseEditarModal = () => {  
    setIsEditarModalOpen(false);  
};  

const handleSalvarColaborador = (colaboradorAtualizado: Colaborador) => {  
  // Atualiza o array de colaboradores com as novas informações  
  const novosColaboradores = colaboradores.map(colaborador => {  
      if (colaborador.nome === colaboradorAtualizado.nome) { // Encontra o colaborador pelo nome   
          return colaboradorAtualizado;  
      }  
      return colaborador;  
  });  

  setColaboradores(novosColaboradores); // Atualiza o estado com o novo array  
  setIsEditarModalOpen(false); // Fecha o modal de edição  

  // Aqui você também pode precisar atualizar a fonte de dados original (por exemplo, um banco de dados ou API)  
  // com as informações atualizadas do colaborador.  
};  

const handleExcluirColaborador = (colaboradorParaExcluir: Colaborador) => {  
  const confirmarExclusao = window.confirm(  
    `Tem certeza de que deseja excluir o colaborador ${colaboradorParaExcluir.nome}?`  
  );  

  if (confirmarExclusao) {  
    const novosColaboradores = colaboradores.filter(  
      (colaborador) => colaborador.nome !== colaboradorParaExcluir.nome  
    );  
    setColaboradores(novosColaboradores);  

    // Aqui você também deve chamar uma API para excluir o colaborador do banco de dados  
    // ou qualquer outra fonte de dados persistente que você esteja usando.  
  }  
};  


  return (  
    <div>  
      <div className="grid grid-cols-4  gap-12 px-20 mt-20 mb-12 justify-center">  
        {colaboradores.map((colaborador) => (  
          
          <div key={colaborador.nome} className="bg-zinc-900 p-6 rounded-lg text-white hover:scale-105">  
            <img className="w-40 h-40 mb-3 rounded-full mx-auto" src={colaborador.imagem} alt={`Foto de ${colaborador.nome}`} />  
            <h3 className="text-center">{colaborador.nome}</h3>  

            <p><strong>Departamento:</strong> {colaborador.departamento}</p>  
            <p><strong>Salário: R$</strong>{colaborador.salario.toFixed(2)}</p> {/* Assumindo que colaborador.salario já é um número */}  
            <p><strong>Email:</strong> {colaborador.email}</p>  
           
           <div className="flex justify-center border-t mt-4 pt-4 gap-2">  
           <PencilLine  
           size={24}  
           className="cursor-pointer hover:scale-110"  
             onClick={() => handleSelectColaboradorEditar(colaborador)}  
              />  
              <Trash  
                size={24}  
                className="cursor-pointer hover:scale-110"  
                onClick={() => handleExcluirColaborador(colaborador)}  
              />  
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

      {/* Modal de Edição */}  
      {isEditarModalOpen && (  
                <ModalEditarColaborador  
                    colaborador={selectedColaborador}  
                    onClose={handleCloseEditarModal}  
                    onSave={handleSalvarColaborador} // Passa a função para salvar  
                />  
            )}  
    </div>  
  );  
};  

export default Colaboradores;