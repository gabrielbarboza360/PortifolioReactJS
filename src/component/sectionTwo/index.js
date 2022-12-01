import React from 'react';

import { SectionTwo,} from './style';

import ImgComputador from '../../imagem/computador.png';



export const Sectiontwo = () =>{

   return(
    <SectionTwo>
   
          <h1> Sobre <span className='wavy'>Mim</span></h1>
      
             <img src={ImgComputador} alt='uma figura de computador'/>

          <p>Meu nome é Gabriel, tenho 22 anos. Resolvi buscar a área de TI como minha futura profissão na área do FRONT-END, estou em busca de adquirir conhecimento e pôr em pratica. Otimizando meus estudos e mantendo o foco, venho obtendo bons resultados na assimilação de conteúdo, em breve estarei em busca de ingressar no mercado da programação. Como um bom desenvolvedor! </p>
   
    </SectionTwo>
   )

}


export default Sectiontwo