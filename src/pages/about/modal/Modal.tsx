import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Modal.css'; // Estilos personalizados para o modal

const teamMembers = [
  { name: "Bruno", role: "Backend Developer", image: "https://via.placeholder.com/150", description: "Especialista em APIs e bancos de dados." },
  { name: "Josa", role: "Desenvolvedora", image: "https://via.placeholder.com/150", description: "Especialista em Frontend e UI/UX." },
  { name: "Fe", role: "Designer", image: "https://via.placeholder.com/150", description: "Apaixonado por design minimalista." },
  { name: "Victor", role: "Gerente de Projetos", image: "https://via.placeholder.com/150", description: "Líder focada em agilidade e inovação." },
  { name: "Bia", role: "Backend Developer", image: "https://via.placeholder.com/150", description: "Especialista em APIs e bancos de dados." },
  { name: "Emily", role: "Backend Developer", image: "https://via.placeholder.com/150", description: "Especialista em APIs e bancos de dados." },
  { name: "Andressa", role: "Backend Developer", image: "https://via.placeholder.com/150", description: "Especialista em APIs e bancos de dados." },
];

function Modal() {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Team Members</h1>
      <div className="flex flex-wrap gap-4">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            onClick={() => {
              setSelectedMember(member);
              setIsOpen(true);
            }} 
            className='member-card cursor-pointer border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all'
          >
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto"/>
            <h2 className="text-lg font-bold text-center">{member.name}</h2>
            <p className="text-sm text-gray-600 text-center">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Modal separado */}
      <Popup open={isOpen} onClose={() => setIsOpen(false)} modal>
        {selectedMember && (
          <div className="modal bg-white p-6 rounded-lg shadow-lg text-center">
            <button className="absolute top-2 right-2 text-gray-500 text-xl" onClick={() => setIsOpen(false)}>&times;</button>
            <img src={selectedMember.image} alt={selectedMember.name} className="w-24 h-24 rounded-full mx-auto border-4 border-yellow-800 mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-900">{selectedMember.name}</h3>
            <p className="text-yellow-700 italic">{selectedMember.role}</p>
            <p className="mt-4 text-gray-800">{selectedMember.description}</p>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default Modal;