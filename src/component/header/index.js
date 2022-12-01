import React from 'react';
import {useState} from 'react';

//Component
import {HeaderContainer,
    HeaderContainerLogo,
    HeaderNavContainer,
    HeaderNavUlContainer,
    HeaderMenuHambg,
    MenuHambgBtn,
    MenuHambgResponsivo,
    MenuHumbgTitulo,
    MenuHumbgMenu,
    OpenandClose,
    MinhasRedes,
   } from './style';



//Imagem
 import Logo from '../../imagem/logo1.png'; 
 import Logo2 from '../../imagem/logo.png'; 
 import facebook1 from '../../imagem/facebook.png';
 import inst from '../../imagem/inst.png';
 import linkedin from '../../imagem/in.png';
 import git from '../../imagem/git.png';
 

 // functions

  
const Header =  () => {

    const [openMenu,setOpenMenu] = useState();

    const handleOpen=()=>{
        setOpenMenu(!openMenu);
        console.log(openMenu);
    }


    const scrollSobre = () => {
       window.scroll(0,950);
      }

      const scrollProjetos = () => {
        window.scroll(0,1600);
       }

        const scrollEducaçao = () => {
       window.scroll(0,2500);
      }

      const scrollEducaçaoMobile = () => {
        window.scroll(0,3200);
       }

       const scrollCertificados = () => {
       window.scroll(0,3200);
      }

      const scrollCertificadosMobile = () => {
        window.scroll(0,4600);
       }
 
    return(

  
       
            <HeaderContainer>

                <HeaderContainerLogo>
                      <img src={Logo} alt="meu logo do site" className='logo1'  />
                      <img src={Logo2} alt="meu logo do site" className='logo2' />
                </HeaderContainerLogo>


                    <HeaderNavContainer>
                        <HeaderNavUlContainer>
                            <li id="header_sobre2"><a onClick={scrollSobre}> Sobre </a></li>
                            <li id="header_projetos2"><a onClick={scrollProjetos}> Projetos </a></li>
                            <li id="header_educa2"><a onClick={scrollEducaçao}>Educação</a></li>
                            <li id="header_certificado2"><a onClick={scrollCertificados}> Certificados </a></li>
                        </HeaderNavUlContainer>
                                    
                        </HeaderNavContainer>


                        <HeaderMenuHambg>
                            {openMenu  != true ? <MenuHambgBtn onClick={handleOpen}></MenuHambgBtn> : ''}
                                
                                <OpenandClose id="botaoAbrir" className={openMenu != true ? 'open' : ''} >
                        <MenuHambgResponsivo>
                             <span id="botaoFechar" onClick={handleOpen}>❌</span>
                                    <MenuHumbgTitulo>
                                        <h1>Gabriel Barboza</h1>
                                        <p> Focado em aprender tecnologias voltado para o Front-End!</p>

                                    </MenuHumbgTitulo>
                                     
                                     <MenuHumbgMenu>
                                              <li className="header_sobre"><a onClick={scrollSobre}> Sobre </a></li>
                                              <li className="header_projetos"><a onClick={scrollProjetos}> Projetos</a></li>
                                              <li className="header_educa"><a onClick={scrollEducaçaoMobile }> Educação</a></li>
                                              <li  className="header_certificado"><a onClick={scrollCertificadosMobile}> Certificados </a></li>
                                     </MenuHumbgMenu>

                                     <MinhasRedes>
                                        <h1>Minhas Reades</h1>
                                        <ul>
                                        <li ><a><img src={facebook1} width='70px'/></a></li>
                                        <li><a><img src={inst} width='70px'/></a></li>
                                        <li><a><img src={git} width='70px'/></a></li>
                                        <li><a><img src={linkedin} width='70px'/></a></li>
                                        </ul>
                                     </MinhasRedes>
                               
                             </MenuHambgResponsivo>
                             </OpenandClose>
                        </HeaderMenuHambg>
            </HeaderContainer>


      
    )
}


export default Header