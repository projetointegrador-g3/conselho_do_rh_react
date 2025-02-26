import React, { useState, useEffect } from 'react';  
import { PencilSimpleLine } from '@phosphor-icons/react';  

interface CampoEditavelProps {  
  label: string;  
  value: any;  
  type: string;  
  onSave: (newValue: any) => void;  
}  

const CampoEditavel: React.FC<CampoEditavelProps> = ({ label, value, type, onSave }) => {  
  const [editing, setEditing] = useState(false);  
  const [newValue, setNewValue] = useState(value);  

  // Mantém newValue sincronizado com value quando o value é alterado externamente  
  useEffect(() => {  
    setNewValue(value);  
  }, [value]);  

  const handleSave = () => {  
    onSave(newValue);  
    setEditing(false);  
  };  

  return (  
    <div className="flex items-center mb-2">  
      <strong className="mr-2">{label}:</strong>  
      {editing ? (  
        <>  
          <input  
            type={type}  
            value={newValue}  
            onChange={(e) => setNewValue(type === 'number' ? Number(e.target.value) : e.target.value)}  
            className="border rounded py-1 px-2 mr-2"  
          />  
          <button  
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"  
            onClick={handleSave}  
          >  
            Salvar  
          </button>  
          <button  
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"  
            onClick={() => {  
              setNewValue(value); // Reverte para o valor original  
              setEditing(false);  
            }}  
          >  
            Cancelar  
          </button>  
        </>  
      ) : (  
        <>  
          <span>{type === 'number' ? (typeof value === 'number' ? value.toFixed(2) : '0.00') : value}</span>  
          <button  
            className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"  
            onClick={() => setEditing(true)}  
          >  
            <PencilSimpleLine size={16} />  
          </button>  
        </>  
      )}  
    </div>  
  );  
};  

export default CampoEditavel;