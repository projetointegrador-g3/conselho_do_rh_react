import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { images } from '../../data/images';

const Home: React.FC = () => {
  return (
    <div className='bg_container'>

      {/* Vídeo de fundo */}
      <video autoPlay loop muted className='background-video'>
        <source src='' type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Conteúdo centralizado */}
      <div className='content'>
        <h1 className='text_title_home'>
          Inovação na atração de talentos
        </h1>
        <p>
          Com a CDR, você poupa o esforço do seu RH e impulsiona eficiência em todo processo, 
          recrutando com agilidade e usando métodos estruturados para selecionar com responsabilidade.
        </p>
      </div>
    </div>
  );
};

export default Home;
