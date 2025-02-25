import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className='content text-white rounded-lg p-13 my-10'>
          <h1 className='text_title_home'>
            Inovação na atração de talentos
          </h1>
          <p className=''>
            Com a CDR, você poupa o esforço do seu RH e impulsiona eficiência em todo processo, 
            recrutando com agilidade e usando métodos estruturados para selecionar com responsabilidade.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
