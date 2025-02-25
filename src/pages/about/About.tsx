import { useState } from "react";
import './about.css'
import { AboutUi } from "../../components/ui/AboutUi";


const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 p-6">
      {/* Banner */}
      <section className="border-4 border-yellow-700 flex flex-col rounded-xl overflow-hidden bg-yellow-400 shadow-xl max-w-4xl w-full text-center p-6">
        <header className="py-4 text-3xl font-bold font-mono uppercase text-yellow-900 border-b-4 border-yellow-700">
          🏰  🏰
        </header>
        <p className="p-6 text-lg text-yellow-800 italic">Teste a</p>
      </section>


    <AboutUi />

    </div>
  );
};

export default About;
