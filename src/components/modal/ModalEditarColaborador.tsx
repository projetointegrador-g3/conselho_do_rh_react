import React, { useState, useEffect } from 'react';  
import { Colaborador } from '../colaboradores/ColaboradoresData';  
import CampoEditavel from './CampoEditavel';  


interface ModalEditarColaboradorProps {  
    colaborador: Colaborador | null;  
    onClose: () => void;  
    onSave: (colaboradorAtualizado: Colaborador) => void;  
}  

const ModalEditarColaborador: React.FC<ModalEditarColaboradorProps> = ({ colaborador, onClose, onSave }) => {  
    const [colaboradorEditavel, setColaboradorEditavel] = useState<Colaborador | null>(null);  

    useEffect(() => {  
        // Certifique-se de que o colaborador não é nulo antes de definir o estado  
        if (colaborador) {  
            setColaboradorEditavel({ ...colaborador }); // Cria uma cópia para não modificar o original diretamente  
        }  
    }, [colaborador]);  

    const handleSalvarCampo = (campo: keyof Colaborador, newValue: any) => {  
        if (colaboradorEditavel) {  
            setColaboradorEditavel({ ...colaboradorEditavel, [campo]: newValue });  
        }  
    };  

    const handleSalvarColaborador = () => {  
        if (colaboradorEditavel) {  
            onSave(colaboradorEditavel);  
        }  
    };  

    if (!colaboradorEditavel) {  
        return null; // Ou um indicador de carregamento, se preferir  
    }  

    return (  
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center">  
            <div className="bg-zinc-900 p-3 rounded-lg shadow-md w-96 border border-neutral-900">  
                <h2 className="text-2xl font-semibold text-white mb-4 pl-10">Editar Colaborador</h2>  

                <img  
                    src={colaboradorEditavel.imagem}  
                    alt={`Imagem de ${colaboradorEditavel.nome}`}  
                    className="rounded-full w-32 h-32 mb-4"  
                    onError={(e: any) => {  
                        e.target.onerror = null;  
                        e.target.src = "URL_DA_IMAGEM_PADRAO";  
                    }}  
                />  
         
                <span className="  
                        truncate   
                        overflow-hidden   
                        whitespace-nowrap   
                        inline-block   
                        w-full  
                    " > 
                <CampoEditavel  
                    label="URL da Imagem"  
                    value={colaboradorEditavel.imagem}  
                    type="url" 
                    
                    onSave={(newValue) => handleSalvarCampo("imagem", newValue)}  
                />   
              </span>
               
                <CampoEditavel  
                    label="Nome"  
                    value={colaboradorEditavel.nome}  
                    type="text"  
                    onSave={(newValue) => handleSalvarCampo("nome", newValue)}  
                />  
                <CampoEditavel  
                    label="Departamento"  
                    value={colaboradorEditavel.departamento}  
                    type="text"  
                    onSave={(newValue) => handleSalvarCampo("departamento", newValue)}  
                />  
                <CampoEditavel  
                    label="Salário"  
                    value={colaboradorEditavel.salario}  
                    type="number"  
                    onSave={(newValue) => handleSalvarCampo("salario", parseFloat(newValue))}  
                />  
                <CampoEditavel  
                    label="Email"  
                    value={colaboradorEditavel.email}  
                    type="email"  
                    onSave={(newValue) => handleSalvarCampo("email", newValue)}  
                />  

                <div className="flex justify-center">  
                    <button  
                        className="text-white font-bold px-4 py-2 mx-2 rounded 
                         bg-neutral-950 hover:bg-zinc-600 shadow-2xl shadow-gray-950"  
                        onClick={handleSalvarColaborador}  
                    >  
                        Salvar  
                    </button>  
                    <button  
                        className="bg-neutral-800 hover:bg-neutral-950 text-white font-bold py-2 px-4 mx-2
                        rounded shadow-2xl shadow-gray-950"  
                        onClick={onClose}  
                    >  
                        Cancelar  
                    </button>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default ModalEditarColaborador;  