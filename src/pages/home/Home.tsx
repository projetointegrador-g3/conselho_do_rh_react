import 'bootstrap/dist/css/bootstrap.min.css';
import MusicPlayer from '../../lib/MusicPlayer';

const Home: React.FC = () => {
  return (
    <>
      <div className='bg_container'>


        {/* Vídeo de fundo */}
        <video autoPlay loop muted className='background_video'>
          <source src='https://ik.imagekit.io/emy/The%20Office/dunder_mifflin.mp4?updatedAt=1740520093402' type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        {/* Conteúdo centralizado */}
        <div className='content rounded-lg p-13 my-10'>
          <h1 className='text_title_home'>
          Sua Jornada, Nossos Prêmios
          </h1>
          <p className='text-lg'>
            Com a <strong>Desk Dundies</strong>, você poupa o esforço do seu RH e impulsiona eficiência em todo processo, 
            recrutando com agilidade e usando métodos estruturados para selecionar com responsabilidade.
          </p>
        </div>

        {/* Música de fundo */}
        <div className='ml-370'>  
          <MusicPlayer/>
        </div>
      </div>
    </>
  );
};

export default Home;
