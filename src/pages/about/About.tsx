import './about.css'
import { AboutUi } from "../../components/ui/AboutUi";


const About = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-10">

      {/* Banner */}
      <section className="border-2 border-zinc-900 flex flex-col rounded-xl overflow-hidden bg-white shadow-xl max-w-4xl w-full text-center">
        <header className="py-3 text-3xl font-bold font-mono uppercase text-zinc-900 border-b-2 border-zinc-900">
          Turma JavaScript 06
        </header>
        <p className="p-3 text-lg text-zinc-900 italic">Biridin</p>
      </section>
    <AboutUi />
    </div>
  );
};

export default About;
