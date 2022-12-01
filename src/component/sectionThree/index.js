import React from 'react';

import { SectionThree, 
    ContainerSection, 
    ContainerProjeto,
    ContainerImg,
    ContainerText,
    } from './style';

import cardapio from "../../imagem/cardapio.png";
import ecommerce from "../../imagem/ecommerce.png";             
import previsaodotempo from "../../imagem/previsaodotempo.png"; 
import portifolio from "../../imagem/portifolio.png";

export const Sectionthree = () =>{

   return(
  <>
    <SectionThree>
      <h1>Projetos</h1>
            <ContainerSection>
                
                <ContainerProjeto>
                    <div className='projeto'><a  href=" https://gabrielbarboza360.github.io/Cardapio/index.html" target="_blank">
                    <ContainerImg> 
                            <img src={cardapio} alt='Imagem de um site de cardapio'/>
                        </ContainerImg>

                        <ContainerText>
                            <h1 >Cardápio de Açaí</h1>
                            <h2 > - HTML/CSS/JS</h2>
                            <h3>- Criaçao de um ecommerce Básico,fazendo direcionamento para ifood</h3>
                        </ContainerText>
                        </a></div>
    
                </ContainerProjeto>
                
                
                <ContainerProjeto>
                    <div className='projeto'>
                    <a  href=" https://gabrielbarboza360.github.io/e_commerce_airsoft/index.html" target="_blank">
                        <ContainerImg> 
                            <img src={ecommerce} alt='Imagem de um site de vendas'/>
                        </ContainerImg>

                        <ContainerText>
                            <h1 >E-commerce de Airsoft</h1>
                            <h2 > - HTML/CSS/JS</h2>
                            <h3>- Criaçao de um ecommerce, Praticando Javascript</h3>
                        </ContainerText> </a></div>
                </ContainerProjeto> 

                <ContainerProjeto>
                <div className='projeto'>
                <a  href="https://gabrielbarboza360.github.io/WeatherForecast/index.html" target="_blank">
                        <ContainerImg> 
                            <img src={previsaodotempo} alt='Imagem de previsao do tempo'/>
                        </ContainerImg>

                        <ContainerText>
                            <h1 >Previsão do Tempo</h1>
                            <h2 > - HTML/CSS/JS/API/AJAX</h2>
                            <h3>- Colocando em prática APIS</h3>
                        </ContainerText>
                       </a> </div>
                </ContainerProjeto>

                <ContainerProjeto>
                <div className='projeto'><a  href=" https://gabrielbarboza360.github.io/Portifolio/index.html" target="_blank">
                        <ContainerImg> 
                            <img src={portifolio} alt='Imagem do meu portifolio'/>
                        </ContainerImg>

                        <ContainerText>
                            <h1 >Meu Portifólio</h1>
                            <h2 > - HTML/CSS/JS</h2>
                            <h3>- Meu primeiro portifolio sem biblioteca e FrameWork </h3>
                        </ContainerText>
                        </a></div>
                </ContainerProjeto>


            </ContainerSection>
    </SectionThree>

</>
   )

}

export default Sectionthree