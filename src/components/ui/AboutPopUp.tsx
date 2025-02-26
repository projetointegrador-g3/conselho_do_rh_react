import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const members = [
  { name: "Bruno", role: "Scrum Master", image: "https://ik.imagekit.io/grupo03/perfis/Bruno.png?updatedAt=1740534609140", linkedin: "#" },
  { name: "Josadaque", role: "Mestre do BackEnd", image: "https://ik.imagekit.io/grupo03/perfis/Josadaque.png?updatedAt=1740534610231", linkedin: "#" },
  { name: "Fernanda", role: "UI/UX Designer", image: "https://ik.imagekit.io/grupo03/perfis/Fernanda.png?updatedAt=1740534608841", linkedin: "#" },
  { name: "Victor", role: "Gerente de Projetos", image: "https://ik.imagekit.io/grupo03/perfis/Victor.png?updatedAt=1740534610684", linkedin: "#" },
  { name: "Beatriz", role: "Backend Developer", image: "https://ik.imagekit.io/grupo03/perfis/Beatriz.png?updatedAt=1740534608059", linkedin: "#" },
  { name: "Emily", role: "Frontend Developer", image: "https://ik.imagekit.io/grupo03/perfis/Emily.png?updatedAt=1740535030736", linkedin: "#" },
  { name: "Andressa", role: "Full Stack Developer", image: "https://ik.imagekit.io/grupo03/perfis/Andressa.png?updatedAt=1740534607718", linkedin: "#" },
];

export const AboutPopUp = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <div className='flex flex-col gap-6 mt-6 items-center'>
      <h2 className="text-3xl font-bold text-zinc-900 mb-15">Nossa equipe</h2>

      {/* Primeira linha: 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {members.slice(0, 4).map((member, index) => (
          <div key={index} className="bg-zinc-900 w-full p-6 rounded-lg shadow-lg text-center text-white">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-white italic">{member.role}</p>

            <div className='flex justify-center border-t mt-5 pt-4 gap-2'>
              <button className='cursor-pointer hover:scale-110 flex items-center gap-2 text-white' 
                onClick={() => setSelectedMember(member)}
                >
                Veja mais <Plus size={24} color="white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Segunda linha: 3 cards centralizados */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {members.slice(4).map((member, index) => (
          <div key={index} className="bg-zinc-900 w-full p-6 rounded-lg shadow-lg text-center text-white">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-white italic">{member.role}</p>
            
            <div className='flex justify-center border-t mt-5 pt-4 gap-2'>
              <button className='cursor-pointer hover:scale-110 flex items-center gap-2 text-white' 
                onClick={() => setSelectedMember(member)}
                >
                Veja mais <Plus size={24} color="white" />
              </button>
            </div>
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
