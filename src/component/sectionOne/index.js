import React from 'react';

import {SectionOne,ContainerImg,ContainerButton,Button} from './style';



import ImgFundo from '../../imagem/fundo.jpg';

export const Sectionone  = () => {

    return(

        <SectionOne>
                                      
                    <h1>Gabriel Barboza</h1>   
                    <ContainerButton>
                        <Button className='Textobotao'>Quem sou Eu ?</Button>    
                    </ContainerButton>               
         <ContainerImg>
         
         <img src={ImgFundo} alt='plano de fundo com imagem de um pc' />
         </ContainerImg>

        </SectionOne>
    )


}


export default Sectionone


