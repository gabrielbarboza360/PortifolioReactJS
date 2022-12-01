import React from 'react';
import { useState } from 'react';
import { SectionFour,Habilidades,Header,Body,Containerbody, Container,Skill} from './style';
import curriculopng from '../../imagem/curriculo.png';






export const Sectionfour = () => {

     
 const [open, setOpenMenu] = useState();

     const  Close= () =>{
           setOpenMenu(false)
       }

       const Open = () =>{
            setOpenMenu(true)
       }


    return(
        <>

            <SectionFour>

            <h1> Educaç<span className='wavy'>ão</span></h1>
            <img src={curriculopng}/>
        
             <Habilidades >
                   <Header>
                      <div id='formacao' onClick={Close} className= {open != true ? 'true ' : ''}>Formação</div>
                      <div id='skills' onClick={Open} className= {open != true ? '' : 'false'}>Skills</div>
                   </Header>
             
             {open != true ? (<Containerbody>
                   <Body>
                      
                        <h1 >Universidade Estácio de Sá</h1>
                        <h2>Analise e desenvolvimento de sistema (cursando)</h2>
                        <h3>Ensino Superior</h3>
                       
                  </Body>

                  <Body>
                        
                        <h1 >Dio Bootcamp</h1>
                        <h2> React JS (34hrs)</h2>
                        <h2>Javascript (38hrs)</h2>
                        <h3>Curso Extra</h3>
                      
                  </Body>

                  <Body>
                       
                        <h1 >Udemy</h1>
                        <h2>Javascript/Jquery/Ajax/Json - (19hrs)</h2>
                        <h3>Curso Extra</h3>
                       
                  </Body>

                  <Body>
                      
                         <h1 >Bradesco</h1>
                        <h2>Javascript(20hrs)</h2>
                        <h3>Curso Extra</h3>
                        
                  </Body>

                  <Body>
                       
                        <h1 >Estudonauta</h1>
                        <h2>Javascript (40hrs)</h2>
                        <h3>Curso Extra</h3>
                       
                  </Body>

                   <Body>
                        
                        <h1 >Estudonauta</h1>
                        <h2>Html/CSS - (120hrs)</h2>
                        <h3>Curso Extra</h3>
                        
                  </Body>

            </Containerbody>
        ) : ( <Skill>
            <div className="row">
            <div className="col-md-6 ">
            <Container >
                <h1>HTML</h1>
               </Container>
               <Container>
                <h1>CSS</h1>
                </Container>
                <Container>
                <h1>Bootstrap</h1>
                </Container>
                <Container>
                <h1>React</h1>
                </Container>
                </div>
                <div className="col-md-6 ">
               <Container>
                <h1>Javascript</h1>
                </Container>
               <Container>
                <h1 >jquery</h1>
                </Container>
               <Container>
                <h1>Ajax</h1>
                </Container>
                <Container>
                <h1>Json</h1>
                </Container>
                </div>
                </div>
               
        </Skill>)}
            
        </Habilidades>
              



        


 
            </SectionFour>

        </>
    )
}

export default Sectionfour;