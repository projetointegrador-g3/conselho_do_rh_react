import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AboutPopUp } from '../ui/AboutPopUp';

const teamMembers = [
  { name: "Bruno L.", role: "Dev FullStack TS/JS", image: "https://ik.imagekit.io/grupo03/perfis/Bruno.png?updatedAt=1740534609140", linkedin: "#" },
  { name: "Josadaque", role: "Dev FullStack Java", image: "https://ik.imagekit.io/grupo03/perfis/Josadaque.png?updatedAt=1740534610231", linkedin: "#" },
  { name: "Fernanda", role: "Dev FullStack Web", image: "https://ik.imagekit.io/grupo03/perfis/Fernanda.png?updatedAt=1740534608841", linkedin: "#" },
  { name: "Victor P.", role: "Dev FullStack TS/JS", image: "https://ik.imagekit.io/grupo03/perfis/Victor.png?updatedAt=1740534610684", linkedin: "#" },
  { name: "Beatriz", role: "Dev FullStack React.js", image: "https://ik.imagekit.io/grupo03/perfis/Beatriz.png?updatedAt=1740534608059", linkedin: "#" },
  { name: "Emily D.", role: "Dev FullStack Web", image: "https://ik.imagekit.io/grupo03/perfis/Emily.png?updatedAt=1740535030736", linkedin: "#" },
  { name: "Andressa", role: "Dev FullStack JS", image: "https://ik.imagekit.io/grupo03/perfis/Andressa.png?updatedAt=1740534607718", linkedin: "#" },
];

function Modal() {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1 className='py-2'>Team Members</h1>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            onClick={() => {
              setSelectedMember(member);
              setIsOpen(true);
            }} 
            className='member-card cursor-pointer border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-center'
          >
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto"/>
                <h2 className="text-md font-bold text-center">{member.name}</h2>
                <p className="text-sm text-gray-600 text-center">{member.role}</p>
              <button className='bg-zinc-800 text-zinc-200 p-2 rounded-md hover:scale-105'>Saiba mais</button>
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
              <AboutPopUp />
          </div>
        )}
      </Popup>

    </div>
  );
}

export default Modal;