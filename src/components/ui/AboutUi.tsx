import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const members = [
  { name: "Josa", role: "Mestre do BackEnd", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Bruno", role: "Frontend Developer", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Fe", role: "UI/UX Designer", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Victor", role: "Gerente de Projetos", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Bia", role: "Backend Developer", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Emily", role: "Frontend Developer", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Andressa", role: "Full Stack Developer", image: "https://via.placeholder.com/150", linkedin: "#" },
];

export const AboutUi = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <div className='flex flex-col gap-6 mt-6 items-center'>
      <h2 className="text-2xl font-bold text-yellow-900">Nosso Time</h2>

      {/* Primeira linha: 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {members.slice(0, 4).map((member, index) => (
          <div key={index} className="bg-red-600 w-full p-6 rounded-lg shadow-lg text-center">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-yellow-200 italic">{member.role}</p>
            <button 
              className='bg-blue-600 mt-3 px-4 py-2 text-white rounded-md hover:bg-blue-700 transition'
              onClick={() => setSelectedMember(member)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>

      {/* Segunda linha: 3 cards centralizados */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {members.slice(4).map((member, index) => (
          <div key={index} className="bg-red-600 w-full p-6 rounded-lg shadow-lg text-center">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-yellow-200 italic">{member.role}</p>
            <button 
              className='bg-blue-600 mt-3 px-4 py-2 text-white rounded-md hover:bg-blue-700 transition'
              onClick={() => setSelectedMember(member)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedMember && (
        <Popup open={!!selectedMember} closeOnDocumentClick onClose={() => setSelectedMember(null)}>
          <div className="modal bg-white p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
            <button className="close text-2xl absolute top-2 right-4" onClick={() => setSelectedMember(null)}>&times;</button>
            <img src={selectedMember.image} alt={selectedMember.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
            <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
            <p className="text-gray-700">{selectedMember.role}</p>
            <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 mt-3 px-4 py-2 text-white rounded-md hover:bg-blue-700 transition">
                Ir para o Linkedin
              </button>
            </a>
          </div>
        </Popup>
      )}
    </div>
  );
};
