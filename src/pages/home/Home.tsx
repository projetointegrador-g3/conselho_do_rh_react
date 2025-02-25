import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { images } from '../../data/images';

const Home: React.FC = () => {
  return (
    <div className='bg_container'>

      <Carousel indicators={false} controls={false} interval={1000} className='carousel'>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className='d-block w-100 bg_image'
              style={{ backgroundImage: `url(${image})` }} />
          </Carousel.Item>
        ))}
      </Carousel> 

          <div className='content'>
            <h1 className='text_title_home'>
            Inovação na atração de talentos
            </h1>
            <p className=''>
            Com a CDR, você poupa o esforço do seu RH e impulsiona eficiência em todo processo, 
            recrutando com agilidade e usando métodos estruturados para selecionar com responsabilidade.
            </p>
          </div>
    </div>
  );
};

export default Home;
