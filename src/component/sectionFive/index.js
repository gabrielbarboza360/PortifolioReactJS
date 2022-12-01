import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import {SectionFive,} from './style.js';

//certificados

import certificadoDio from "../../imagem/CertificadoReact.png";
import certificadoJsDio from "../../imagem/CertificadoJavascript.png";
import certificadoUdemy from "../../imagem/CertificadoUdemy.jpg";
import certificadoBradesco from "../../imagem/CertificadoBradesco.png";
import certificadoEstudonautaJs from "../../imagem/CertificadoEstudonautaJs.png";
import certificadoHtml1 from "../../imagem/CertificadoHtml.png";
import certificadoHtml2 from "../../imagem/CertificadoHtml2.png";
import certificadoHtml3 from "../../imagem/CertificadoHtml3.png";



function Sectionfive() {
  return (

<SectionFive>
    <h1>Certificados</h1>
<Carousel variant="">
      <Carousel.Item>
        <img
          className="img"
          src={certificadoDio}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={certificadoUdemy}
          alt="Second slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={certificadoJsDio}
          alt="Second slide"
        />
     
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="img"
          src={certificadoBradesco}
          alt="Third slide"
        />
      
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="img"
          src={certificadoEstudonautaJs}
          alt=""
        />
    
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="img"
          src={certificadoHtml1}
          alt=""
        />
    
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="img"
          src={certificadoHtml2}
          alt=""
        />
    
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="img"
          src={certificadoHtml3}
          alt=""
        />
      
      </Carousel.Item>

    </Carousel>
 </SectionFive>
  );
}

export default Sectionfive;