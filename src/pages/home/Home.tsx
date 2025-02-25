import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

// Array com Imgs
const images = [
  'https://ik.imagekit.io/n0nz1jfh6/Comes%20e%20bebes/Torta%20de%20maçã.jpeg?updatedAt=1737559633455',
  'https://ik.imagekit.io/n0nz1jfh6/Comes%20e%20bebes/Brigadeiro.jpeg?updatedAt=1737559633078',
  'https://ik.imagekit.io/n0nz1jfh6/Comes%20e%20bebes/Pizza%20Marguerita.jpeg?updatedAt=1737559633363',
  'https://ik.imagekit.io/n0nz1jfh6/Comes%20e%20bebes/Frango%20assado%20com%20batatas.jpeg?updatedAt=1737559632917',
  'https://ik.imagekit.io/n0nz1jfh6/Comes%20e%20bebes/Salada%20Caesar.jpeg?updatedAt=1737559632957'
];

const Home = () => {
  return (
    <>
       <div className="bg-container">
      <Carousel indicators={false} controls={false} interval={1000} className="carousel">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="d-block w-100 bg-image"
              style={{ backgroundImage: `url(${image})` }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="content">
        <h1>Bem-vindo à minha aplicação</h1>
        <p>Esta é a página inicial.</p>
      </div>
      
    </div>    
    </>
  )
}

export default Home

