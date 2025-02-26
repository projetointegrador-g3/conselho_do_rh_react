import ModalAbout from '../../components/modal/ModalAbout';


const About = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-20 ">

      {/* Banner */}
      <section className="flex gap-2 items-center rounded-xl overflow-hidden bg-white shadow-xl max-w-6xl w-full text-center">
        <header className="py-3 text-3xl font-bold font-mono uppercase text-zinc-900 border-r-1 border-zinc-900 p-5">
          Turma JavaScript 06
        </header>
        <p className="p-3 text-sm text-zinc-900 italic">
        Imagine uma orquestra onde cada instrumento, por mais único e distinto, contribui para uma sinfonia harmoniosa. Assim é o trabalho em equipe e a colaboração: uma fusão de talentos, onde cada nota, cada ideia, compõe uma melodia de sucesso. Quando trabalhamos juntos, tornamo-nos parte de algo maior do que nós mesmos, construímos pontes de confiança e abrimos portas para a inovação. É na união dos esforços que encontramos força, na diversidade das vozes que encontramos a criatividade, e na colaboração que transformamos desafios em conquistas. Juntos, somos imbatíveis
        </p>
      </section>

    <ModalAbout />
    
    </div>
  );
};

export default About;
