import styled from 'styled-components';


export const SectionTwo = styled.section`

width: 100%;
height: 640px;
background-color: rgb(0, 0, 0);

@media (max-width: 416px){
        height: 840px;
   
}

   h1{
    color: white;
    text-shadow: 2px 2px 4px black;
    text-align: center;
    font-size: 2.5rem;
    font-family: 'personalizada';
    padding-top: 40px;
   }

   img{
    width: 120px; 
    display: block; 
    margin-left: 200px; 

   }

   p{
    display: block;
    font-size: 1.5rem;
    margin-top: -50px;
    color: white;
    text-shadow: 2px 2px 4px black;
    text-align: center;
    text-indent: 20px;
    text-align: justify;
    padding-left: 370px;
    padding-right: 170px;
   }

   .wavy{
    text-decoration: underline wavy #EB0245;
   }

   @media(max-width:960px){
    img{ 
        position: relative;
    
        width: 90px;
        
        top: -60px;
      
        margin-left: 60px;
       
  } 
  
  h1{
    font-size: 2.5rem;
    color: white;
    display: block;
    margin: auto;
    text-shadow: 2px 2px 4px black;
    text-align: center;
    text-indent: 50px;
   
  }

  p{
    padding-left: 20px;
    padding-right: 20px;

  }
  }



`

