import React, { useRef, useCallback } from 'react';  
import { useReactToPrint } from 'react-to-print';  
import { Colaborador } from '../colaboradores/ColaboradoresData';  
import { Printer } from '@phosphor-icons/react';  
import '../../index.css'

interface ModalProps {  
  colaborador: Colaborador | null;  
  onClose: () => void;  
}  

const ModalColaborador: React.FC<ModalProps> = ({ colaborador, onClose }) => {  
  const contentRef = useRef<HTMLDivElement>(null);  

  // Funções para calcular INSS e IRRF (mesmo código de antes)  
  const calcularINSS = (salarioBruto: number): number => {  
    const salario = salarioBruto;  
    let aliquotaINSS: number;  
    let valorINSS: number;  

    if (salario <= 1412.00) {  
      aliquotaINSS = 0.075;  
    } else if (salario <= 2666.68) {  
      aliquotaINSS = 0.09;  
    } else if (salario <= 4000.03) {  
      aliquotaINSS = 0.12;  
    } else {  
      aliquotaINSS = 0.14;  
    }  

    valorINSS = salario * aliquotaINSS;  
    return valorINSS;  
  };  

  const calcularIRRF = (salarioBruto: number, valorINSS: number): number => {  
    const salario = salarioBruto;  
    const baseCalculo = salario - valorINSS;  
    let aliquotaIRRF: number;  
    let deducaoIRRF: number;  

    if (baseCalculo <= 2259.20) {  
      aliquotaIRRF = 0;  
      deducaoIRRF = 0;  
    } else if (baseCalculo <= 2826.65) {  
      aliquotaIRRF = 0.075;  
      deducaoIRRF = 169.44;  
    } else if (baseCalculo <= 3751.05) {  
      aliquotaIRRF = 0.15;  
      deducaoIRRF = 381.44;  
    } else if (baseCalculo <= 4664.68) {  
      aliquotaIRRF = 0.225;  
      deducaoIRRF = 662.77;  
    } else {  
      aliquotaIRRF = 0.275;  
      deducaoIRRF = 896.00;  
    }  

    const valorIRRF = baseCalculo * aliquotaIRRF - deducaoIRRF;  
    return valorIRRF;  
  };  


  const valorINSS = colaborador ? calcularINSS(colaborador.salario) : 0;  
  const valorIRRF = colaborador ? calcularIRRF(colaborador.salario, valorINSS) : 0;  
  const salarioLiquido = colaborador ? colaborador.salario - valorINSS - valorIRRF : 0;  

  const handlePrint = useReactToPrint({  
    contentRef: contentRef,  
  });  

  const handlePrintClick = useCallback(() => {  
    handlePrint(); // Use a função handlePrint retornada por useReactToPrint  
  }, [handlePrint]);  

  if (!colaborador) {  
    return null;  
  }  

  return (  
    <div className="fixed inset-0  bg-opacity-50 overflow-y-auto h-full w-full">  
      <div className=" text-amber-50 relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-zinc-900">  
        <div  
          className="container mx-auto py-8 px-6 border border-gray-300 rounded-lg flex"  
          ref={contentRef}  
        >  
          {/* Coluna da Imagem */}  
          <div className="w-1/3 mr-4">  
            <img  
              src={colaborador.imagem}  
              alt=""  
              className="rounded-full w-full mb-4"  
            />  
          </div>  

          {/* Coluna das Informações */}  
          <div className="w-2/3">  
            <h2 className="text-2xl font-semibold mb-4">{colaborador.nome}</h2>  
            <p className="mb-2">  
              <strong>Departamento:</strong> {colaborador.departamento}  
            </p>  
            <p className="mb-2">  
              <strong>Salário Bruto:</strong> R$ {colaborador.salario ? colaborador.salario.toFixed(2) : '0.00'}  
            </p>  
            <p className="mb-2">  
              <strong>INSS:</strong> R$ {valorINSS.toFixed(2)}  
            </p>  
            <p className="mb-2">  
              <strong>IRRF:</strong> R$ {valorIRRF.toFixed(2)}  
            </p>  
            <p className="mb-2">  
              <strong>Salário Líquido:</strong> R$ {salarioLiquido.toFixed(2)}  
            </p>  
            <p className="mb-2">  
              <strong>Email:</strong> {colaborador.email}  
            </p>  

            {/* Botões alinhados à direita */}  
            <div className="flex gap-3 text-right mt-6 mr-6">  
              <button  
                className="border-zinc-300 border hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded mr-2"  
                onClick={handlePrintClick}  
              >  
                <Printer size={20} className="inline-block mr-2 align-middle" />  
                Imprimir  
              </button>  
              <button  
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"  
                onClick={onClose}  
              >  
                Fechar  
              </button>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ModalColaborador;