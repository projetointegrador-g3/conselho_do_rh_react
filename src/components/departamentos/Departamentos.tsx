import React from 'react';
import {
  FaShoppingCart,
  FaReceipt,
  FaCheckCircle,
  FaPlus,
  FaTrash,
  FaFolder,
} from 'react-icons/fa';

const Departamentos: React.FC = () => {
  return (
    <div className="p-5 font-sans">
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-xl font-bold m-0">Departamentos</h1>
        <button
          className="bg-transparent border-none cursor-pointer flex items-center text-blue-500 hover:text-blue-700"
          onClick={() => alert('Adicionar novo departamento')}
        >
          <FaPlus />
        </button>
      </div>

      <ul className="list-none p-0">
        <li className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaFolder className="bg-gray-400 text-zin-900" />
              <strong>Vendas</strong>
            </div>
            <button
              className="bg-transparent border-none cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => alert('Excluir departamento: Vendas')}
            >
              <FaTrash />
            </button>
          </div>
        </li>

        <li className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaShoppingCart className="bg-gray-400 text-zin-900" />
              <strong>Compras</strong>
            </div>
            <button
              className="bg-transparent border-none cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => alert('Excluir departamento: Compras')}
            >
              <FaTrash />
            </button>
          </div>
        </li>

        <li className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaReceipt className="bg-gray-400 text-zin-900" />
              <strong>Recepção</strong>
            </div>
            <button
              className="bg-transparent border-none cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => alert('Excluir departamento: Recepção')}
            >
              <FaTrash />
            </button>
          </div>
        </li>

        <li className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="bg-gray-400 text-zin-900" />
              <strong>Qualidade</strong>
            </div>
            <button
              className="bg-transparent border-none cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => alert('Excluir departamento: Qualidade')}
            >
              <FaTrash />
            </button>
          </div>
        </li>

        <li className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaFolder className="bg-gray-400 text-zin-900" />
              <strong>Contabilidade</strong>
            </div>
            <button
              className="bg-transparent border-none cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => alert('Excluir departamento: Contabilidade')}
            >
              <FaTrash />
            </button>
          </div>
        </li>

        <li className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaFolder className="bg-gray-400 text-zin-900" />
              <strong>Atendimento ao Cliente</strong>
            </div>
            <button
              className="bg-transparent border-none cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => alert('Excluir departamento: Atendimento ao Cliente')}
            >
              <FaTrash />
            </button>
          </div>
        </li>

        <li className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaFolder className="bg-gray-400 text-zin-900" />
              <strong>Diretoria</strong>
            </div>
            <button
              className="bg-transparent border-none cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => alert('Excluir departamento: Diretoria')}
            >
              <FaTrash />
            </button>
          </div>
        </li>

        <li className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaFolder className="bg-gray-400 text-zin-900" />
              <strong>Estoque</strong>
            </div>
            <button
              className="bg-transparent border-none cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => alert('Excluir departamento: Estoque')}
            >
              <FaTrash />
            </button>
          </div>
        </li>

        <li className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaFolder className="bg-gray-400 text-zin-900" />
              <strong>Logística</strong>
            </div>
            <button
              className="bg-transparent border-none cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => alert('Excluir departamento: Logística')}
            >
              <FaTrash />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Departamentos;