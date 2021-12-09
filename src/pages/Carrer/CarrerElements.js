import styled from "styled-components";
import { IoIosArrowDown } from 'react-icons/io';

//HEADER 
export const CarrerHeader=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:80vh;

display:flex;
flex-direction:row;
justify-content:center;
align-items: center;
`;

export const CarrerHeaderLeftContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-self: center;

height:100%;
width:40%;
`;

export const CarrerHeaderLetter=styled.h1`
position:absolute;
top:-200px;
left:-2%;

font-size:990px;
color:#fafafa;

@media screen and (max-width:1600px){
    font-size:770px;
    top:-150px;
}


@media screen and (max-width:1366px){
    top:-130px;
    font-size:630px;
}

@media screen and (max-width:1280px){
    font-size:650px;
}

@media screen and (max-width:1024px){
    display:none;
}
`;

export const CarrerHeaderIntroduction=styled.h1`
position:absolute;
top:30%;
left:10%;

font-size:7rem;
align-self:center;
justify-content:center;
color:#1d1d1b;

z-index:1;


@media screen and (max-width:1600px){
    font-size:5rem;
  
}
@media screen and (max-width:1280px){
    font-size:4rem;
}
@media screen and (max-width:1024px){
    top:130%;
    font-size:3rem;
}
@media screen and (max-width:800px){
    top:65%;}

@media screen and (max-width:640px){
    top:120%;}

@media screen and (max-width:360px){
    top:50%;}
`;

export const CarrerHeaderText=styled.p`
position:absolute;
top:55%;
left:10%;

z-index:1;
width:35%;
font-size:20px;
line-height:30px;

@media screen and (max-width:1366px){
    font-size:18px;
}
@media screen and (max-width:1280px){
    width:28%;
}

@media screen and (max-width:1024px){
    width:55%;
    top:115vh;
}
@media screen and (max-width:800px){
    width:80%;
    top:75%;
}
@media screen and (max-width:640px){
    width:80%;
    top:150%;
}

@media screen and (max-width:360px){
    top:65%;
    font-size:16px}
`;

export const CarrerHeaderRightContainer=styled.div`
display:flex;
justify-content:center;
align-items: center;

width:50%;
height:100%;
overflow:hidden;

@media screen and (max-width:1280px){
    width:100%
 }
`;

export const CarrerImageContainer=styled.div`
position:absolute;
top:0;
right:10%;
z-index:2;

width:40%;
height:100%;

box-shadow:40px 30px 20px 5px #f0f1f34d;
overflow:hidden;

@media screen and (max-width:1600px){
   width:39%;
   right:11%;
}

@media screen and (max-width:1366px){
    width:46%;
}

@media screen and (max-width:1280px){
   width:48%;
}

@media screen and (max-width:1024px){
    top:80px;
    right:13%;

    width:75%;
    height:100%;
}
@media screen and (max-width:800px){
    top:80px;
    right:10%;

    width:80%;
    height:50%;
}
@media screen and (max-width:640px){
    width:80%;
    height:110%;
    top:0;
}
@media screen and (max-width:540px){
    width:80%;
    height:50%;
}
`;

export const CarrerHeaderImage=styled.img`
width:100%;
height:100%;
`;

//Section

export const CarrerSection=styled.div`
position:absolute;
top:100vh;
left:0;
width:100%;
height:150vh;

display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
`;

export const CarrerSectionIntroduction=styled.p`
position:absolute;
top:0;
left:10%;
font-size:18px;
color:#a85f3f;
text-transform:uppercase;
letter-spacing:2px;
`;
export const CarrerArticleBox=styled.article`
position:aboslute;
display:flex;
flex-direcion:row;

justify-content:space-between;
align-items:flex-start;


width:80%;
height:20%;
margin-top:7rem;
border-bottom:1px solid #1f1f1f;`


export const CarrerTitle=styled.h1`
font-size:2.3rem;
font-weight:600;
font-family:usual, sans-serif;
color:#1d1d1a;`;

export const CarrerIntroduction=styled.p`
font-size:16px;
line-height:30px;
width:50%;`;

export const CarrerButtonBox=styled.button`
display:flex;
justify-content:center;
align-items:center;

width:50px;
height:50px;
background-color:transparent;
border:2px solid #a85f3f;
border-radius:50%;
color:#a85f3f;
cursor:pointer;
transition:.4s ease-in-out;
transform: ${({isTextOpen, id })=>( isTextOpen === id ? 'rotate(180deg)':'rotate(0deg)')};
`;

export const CarrerArrow=styled(IoIosArrowDown)`
color:#a85f3f;
width:30px;
height:30px;
`;