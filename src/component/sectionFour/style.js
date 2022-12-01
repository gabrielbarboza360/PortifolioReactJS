import styled from "styled-components";


export const SectionFour = styled.section`

   width: 100%;
   height: 1660px;
   background-color: #000002;

   @media(max-width:960px){
        height: 1700px;
    }

    @media (max-width: 416px){
            height: 1700px;
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
            width: 80px; 
            display: block; 
            margin: auto; 
            margin-top: 40px;
        }
        .wavy{
            text-decoration: underline wavy #EB0245;
           }
       

`

export const Habilidades = styled.div`
display: block;
   margin: auto;
   margin-top: 100px;
   width: 850px;
   height: 120
   0px;
   background-color: #2A2D34;
            

   @media(max-width:960px){
    margin-top: 50px;
    width: 400px;
    height: 75%;
   }

   @media(max-width:416px){
    margin-top: 50px;
    width: 300px;
    height: 1200px;
   }


`

export const Header = styled.div`

display: inline-flex;
   background-color: #646872;
   width: 100%;
   height: 60px;
   font-size: 16pt;
   color:white;
   font-weight: bold;


#formacao{
padding: 15px;
}

#skills{
    padding: 15px;
}

.true{
    background-color: #2A2D34;
  
}

.false{
    background-color: #2A2D34;

}


`

export const Containerbody = styled.div`
@media(min-width:501px){
    color: white;
    text-align: center;

    grid-template-columns: repeat(1, 1.5fr);
    display: grid;
    margin-left: auto;
    margin-right: auto;
    width:70%;
    grid-column-gap: 16px;
    grid-row-gap: 2em;
    grid-template-columns: 1;
    padding: 50px;}

@media(max-width:500px){
    color: white;
    text-align: center;

    grid-template-columns: repeat(1, 1.5fr);
    display: grid;
    
    grid-column-gap: 16px;
    grid-row-gap: 2em;
    grid-template-columns: 1;
    padding: 50px;
 }
`




export const Body = styled.div`
box-shadow: 2px 2px 4px black;
border-radius: 4px;
display: block;
background-color: #1E2124;

h1{
    font-size: 1.4rem;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 10px;
    text-shadow: 2px 2px 4px black;
  }

  h2{
    font-size: 1.2rem;
    text-shadow: 2px 2px 4px black;
    padding-bottom: 10px;
    color: #7C838E;
  }

  h3{
    color: #FF014F;
  }

`

export const Skill = styled.div`
grid-template-columns: 1;
display: block;
margin: 40px;
margin: 10px auto 0px auto;
width: 100%;
text-align: cetert;
padding: 10px;
color: #FF014F;

`

export const Container = styled.div`
box-shadow: 2px 2px 4px black;
border-radius: 4px;
display: block;
background-color: #1E2124;
margin: 6px;

h1{
    font-size: 1.4rem;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 10px;
    text-shadow: 2px 2px 4px black;
    color:#FF014F;
}


`

