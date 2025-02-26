import React, { useState, useEffect } from 'react';  


interface CampoEditavelProps {  
    label: string;  
    value: any;  
    type: string;  
    onSave: (newValue: any) => void;  
}  

const CampoEditavel: React.FC<CampoEditavelProps> = ({ label, value, type, onSave }) => {  
  const [isEditing, setIsEditing] = useState(false);  
  const [newValue, setNewValue] = useState(value);  

  useEffect(() => {  
      setNewValue(value); // Garante que o valor seja atualizado quando a prop 'value' mudar  
  }, [value]);  

  const handleDoubleClick = () => {  
      setIsEditing(true);  
  };  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
      setNewValue(e.target.value);  
  };  

  const handleSave = () => {  
      onSave(newValue);  
      setIsEditing(false);  
  };  

  const handleCancel = () => {  
      setNewValue(value); // Reverte para o valor original  
      setIsEditing(false);  
  };  

  return (  
      <div className="mb-4">  
          <label className="block text-white text-sm font-bold mb-2">{label}:</label>  
          {isEditing ? (  
              <div className="flex items-center">  
                  <input  
                      type={type}  
                      value={newValue}  
                      onChange={handleChange}  
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"  
                  />  
                  <button  
                      onClick={handleSave}  
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"  
                  >  
                      Salvar  
                  </button>  
                  <button  
                      onClick={handleCancel}  
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
                  >  
                      Cancelar  
                  </button>  
              </div>  
          ) : (  
              <span  
                  onDoubleClick={handleDoubleClick}  
                  className="text-white cursor-pointer"  
              >  
                  {value}  
              </span>  
          )}  
      </div>  
  );  
};  

export default CampoEditavel;  