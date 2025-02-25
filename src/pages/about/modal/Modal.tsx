import { useState } from "react";

const teamMembers = [
	{ name: "Bruno", role: "Backend Developeraa", image: "https://via.placeholder.com/150", description: "Especialista em APIs e bancos de dados." },
	{ name: "Josa", role: "Desenvolvedora", image: "https://via.placeholder.com/150", description: "Especialista em Frontend e UI/UX." },
	{ name: "Fe", role: "Designer", image: "https://via.placeholder.com/150", description: "Apaixonado por design minimalista." },
	{ name: "Victor", role: "Gerente de Projetos", image: "https://via.placeholder.com/150", description: "Líder focada em agilidade e inovação." },
	{ name: "Bia", role: "Backend Developer", image: "https://via.placeholder.com/150", description: "Especialista em APIs e bancos de dados." },
	{ name: "Emily ", role: "Backend Developera", image: "https://via.placeholder.com/150", description: "Especialista em APIs e bancos de dados." },
	{ name: "Andressa", role: "Backend Developeraa", image: "https://via.placeholder.com/150", description: "Especialista em APIs e bancos de dados." },
  
  ];

const Modal = () => {
	const [selectedMember, setSelectedMember] = useState(null);
  return (
	<>
	 {/* Modal */}
	 {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-700 text-xl"
              onClick={() => setSelectedMember(null)}
            >
              &times;
            </button>
            <img src={selectedMember.image} alt={selectedMember.name} className="w-24 h-24 rounded-full mx-auto border-4 border-yellow-800 mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-900">{selectedMember.name}</h3>
            <p className="text-yellow-700 italic">{selectedMember.role}</p>
            <p className="mt-4 text-gray-800">{selectedMember.description}</p>
          </div>
        </div>
      )}
	</>
  )
}

export default Modal;
