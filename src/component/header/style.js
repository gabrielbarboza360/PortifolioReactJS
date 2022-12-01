import styled from "styled-components";


export const HeaderContainer = styled.div`

width: 100%;
height: 70px;
display: flex;
position: fixed;
z-index: 99;
justify-content: space-between;
background-color: #121214;
border-bottom: 2px solid #340f0f;

`

export const HeaderContainerLogo = styled.div`
       margin-left: 10px;
  
       @media (max-width:960px){
        
        .logo1{
            display: none;
        }
        .logo2{
            margin-top: 15px;
        }

 }

       
    .logo1{
        width: 60px;
        margin-top: 20px;
        margin-left: 120px; 
    }

    .logo2{
        width: 260px;
        
    }

`


export const HeaderNavContainer = styled.nav`
margin-left: 10px;

@media (max-width:960px){
display: none;} 

`

export const HeaderNavUlContainer = styled.ul`
color: white;
display: inline-flex;
list-style: none;
margin-top: 10px;

  li{
    padding: 15px;
  }

  li:hover{
    color: rgb(2, 255, 2);
  }

  li > a {
    font-size: 16pt;
    cursor: pointer;
  }


`

export const HeaderMenuHambg = styled.nav`
@media (max-width:960px){
margin-right: 20px ;
}

`
export const MenuHambgBtn = styled.nav`


        

        @media (max-width:960px){

            border-top: 2px solid;
            width: 30px;
            margin-top: 30px;
            color: #f20954;
            cursor: pointer;
              
             ::after{
               
                content: '';
                display:block;
                width: 30px;
                height: 2px;
                background: currentColor;
                margin-top:5px;
                transition: .3s;
                position: relative;
              }
            
              ::before{
                
                content: '';
                display:block;
                width: 30px;
                height: 2px;
                background: currentColor;
                margin-top:5px;
                transition: .3s;
                position: relative;
              }
            }
    
    
   
}

@media (max-width:960px){
border-top: 2px solid;
width: 30px;
margin-top: 30px;
color: #f20954;
cursor: pointer;
  
 ::after{
   
    content: '';
    display:block;
    width: 30px;
    height: 2px;
    background: currentColor;
    margin-top:5px;
    transition: .3s;
    position: relative;
  }

  ::before{
    
    content: '';
    display:block;
    width: 30px;
    height: 2px;
    background: currentColor;
    margin-top:5px;
    transition: .3s;
    position: relative;
  }
}
`


export const MenuHambgResponsivo = styled.div `
@media (min-width:961px){

display: none;
}

@media (max-width:960px){
    
 background-color: #191B1E;
 margin-top: -50px;
 margin-left: 270px;
 position: fixed;
 z-index: 99;
 left: -330px;
 overflow: hidden;
 width: 350px;
 height: 1200px;
 -webkit-transition: 2s;
 -webkit-transition: 2s;
 transition: all 5s;

 #botaoFechar{
    position: absolute;
    top: 60px;
    font-size: 18pt;
    left: 300px;
    cursor: pointer;
 }


`

export const OpenandClose = styled.div`
&.open{
    display:none;
}

`

export const MenuHumbgTitulo = styled.div`
@media (max-width:960px){
display: block;
 height: 140px;
 margin-top: 120px;
 border-bottom: 1px solid #ffffff1a;

 h1{
    text-align: center;
    text-shadow: 2px 2px 4px black;
    color: #DC0140;
    font-size: 21pt;
 }

 p{
    font-family: Arial, Helvetica, sans-serif; 
    color: #BCBCBC; 
    margin-top: 20px; 
    margin-left: 60px;
    width: 277px; 
    font-size: 13.5pt;
 }

}
`

export const MenuHumbgMenu = styled.ul`
@media (max-width:960px){
    margin-top: 10px;
    height: 210px;
    border-bottom: 1px solid #ffffff1a;

li{
    font-size: 14pt;
    text-transform: uppercase;
    list-style: none;
    padding: 10px;
    color: #C4CFDE;
    cursor: pointer;
}

li:hover{
    color: rgb(9, 245, 9);
}}
`

export const MinhasRedes = styled.div`

   ul>li{
    cursor:pointer;
   }

h1{
    margin-left: 40px;
    color: #BCBCBC;
}

ul{
    display: inline-flex;
    margin-top: 15px;
}
`

