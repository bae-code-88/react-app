import {NavLink as LinkR} from 'react-router-dom'
import styled  from 'styled-components';
import '../../images/projekt.jpg';
import '../../images/realizacja.jpg';
import '../../images/wnetrza.jpg';


export const HomeHeaderLeftContainer= styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items: center;

width:50%;
height:100%;

@media screen and (max-width:1024px){
    width:75%;
    flex-direction:row;
    justify-content:space-between;
    margin:45% auto 0;
}
@media screen and (max-width:800px){
    width:70%;
    margin:68% auto 0 auto;
}
`;

// LETTERS
export const HomeHeaderLetterP=styled.h1`
position:absolute;
top:-210px;
left:5%;

font-size:900px;
color:#fafafa;

opacity: .2;
animation: fadein linear infinite;
animation-duration: 15s;


@keyframes fadein {
    0%{opacity: .2;}
    29%{opacity:.2;}
    33%{opacity:0}
    90%{opacity:0}
    100%{opacity:.2;}
}

@media screen and (max-width:1600px){
    font-size:770px;
    top:-200px;
}


@media screen and (max-width:1366px){
    top:-170px;
    font-size:630px;
}

@media screen and (max-width:1280px){
    font-size:650px;
}

@media screen and (max-width:1024px){
    display:none;
}
`;

export const HomeHeaderLetterR=styled.h1`
position:absolute;
top:-210px;
left:5%;

font-size:900px;
color:#fafafa;

opacity: 0;
animation: fadein linear  infinite;
animation-duration: 15s;
animation-delay: 5s;

@keyframes fadein {
    0%{opacity: .2;}
    29%{opacity:.2;}
    33%{opacity:0}
    90%{opacity:0}
    100%{opacity:.2;}
}

@media screen and (max-width:1600px){
    font-size:770px;
    top:-200px;
}

@media screen and (max-width:1366px){
    top:-170px;
    font-size:630px;
}
@media screen and (max-width:1280px){
    font-size:650px;
}
@media screen and (max-width:1024px){
    display:none;
}
`;

export const HomeHeaderLetterW=styled.h1`
position:absolute;
top:-210px;
left:0;

font-size:900px;
color:#fafafa;

opacity: 0;

animation: fadein linear  infinite;
animation-duration: 15s;
animation-delay: 10s;

@keyframes fadein {
    0%{opacity: .2;}
    29%{opacity:.2;}
    33%{opacity:0}
    90%{opacity:0}
    100%{opacity:.2;}
}

@media screen and (max-width:1600px){
    font-size:740px;
    top:-170px;
}

@media screen and (max-width:1366px){
    top:-150px;
    font-size:630px;
}

@media screen and (max-width:1280px){
    font-size:650px;
}
@media screen and (max-width:1024px){
    display:none;
}
`;



// TEXT HEADER
export const HomeHeaderTextP=styled.h1`
font-size:7rem;
align-self:flex-start;
align-items: center;
color:#1d1d1b;

z-index:2;
margin-top:160px;
margin-left:20%;
animation: color linear infinite;
animation-duration: 15s;

@keyframes color {
    0%{ color:#1d1d1b;}
    29%{color:#1d1d1b;}
    33%{color:#1d1d1b1a;}
    90%{color:#1d1d1b1a;}
    100%{color:#1d1d1b;}
}
@media screen and (max-width:1600px){
    font-size:5rem;
    margin-top:90px;
}

@media screen and (max-width:1280px){
    font-size:4rem;
}

@media screen and (max-width:1024px){
    align-self:center;
    margin:0;
    font-size:2rem;
}
@media screen and (max-width:640px){
    display:none;
}
`;

export const HomeHeaderTextR=styled.h1`
font-size:7rem;
align-self:flex-start;
align-items: center;
margin-left:20%;
color:#1d1d1b1a;
z-index:2;

animation: color linear infinite;
  animation-duration: 15s;
  animation-delay: 5s;

@keyframes color {
    0%{ color:#1d1d1b;}
    29%{ color:#1d1d1b;}
    33%{color:#1d1d1b1a;}
    90%{color:#1d1d1b1a;}
    100%{color:#1d1d1b;}
}
@media screen and (max-width:1600px){
    font-size:5rem;
}
@media screen and (max-width:1280px){
    font-size:4rem;
}
@media screen and (max-width:1024px){
    align-self:center;

    margin:0;
    font-size:2rem;
}
@media screen and (max-width:640px){
    display:none;
}

`;

export const HomeHeaderTextW=styled.h1`
font-size:7rem;
align-self:flex-start;
align-items: center;
margin-left:20%;
color:#1d1d1b1a;
z-index:2;

animation: color linear infinite;
  animation-duration: 15s;
  animation-delay: 10s;

@keyframes color {
    0%{ color:#1d1d1b;}
    29%{ color:#1d1d1b;}
    33%{color:#1d1d1b1a;}
    90%{color:#1d1d1b1a;}
    100%{color:#1d1d1b;}
}
@media screen and (max-width:1600px){
    font-size:5rem;
}
@media screen and (max-width:1280px){
    font-size:4rem;
}
@media screen and (max-width:1024px){
    align-self:center;
    margin:0;
    font-size:2rem;
}
@media screen and (max-width:640px){
    display:none;
}
`;



// IMAGE
export const HomeHeaderRightContainer= styled.div`
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

export const ImageContainer=styled.div`
position:absolute;
top:0;
right:10%;

width:40%;
height:70%;
box-shadow:40px 30px 20px 5px #f0f1f34d;
overflow:hidden;

@media screen and (max-width:1600px){
   width:39%;
   right:11%;
}

@media screen and (max-width:1366px){
    width:45%;
}

@media screen and (max-width:1280px){
   width:48%;
}

@media screen and (max-width:1024px){
    top:80px;
    right:10%;

    width:80%;
    height:70%;
}
@media screen and (max-width:800px){
    top:80px;
    right:10%;

    width:80%;
    height:50%;
}
@media screen and (max-width:640px){
    width:80%;
    height:70%;
}
@media screen and (max-width:540px){
    width:80%;
    height:50%;
}
`;


export const ImageP=styled.img`
width:100%;
height:100%;

animation:  fadein  linear infinite;
animation-duration: 15s;

@keyframes fadein {
    0%{opacity: 1;}
    29%{opacity:1;}
    33%{opacity:0}
    90%{opacity:0}
    100%{opacity:1;}
}
`;
export const ImageR=styled.img`
width:100%;
background-position:cover;

opacity: 0;
animation:  fadein  linear  infinite;
animation-duration: 15s;
animation-delay: 5s;

@keyframes fadein {
    0%{opacity: 1;}
    29%{opacity:1;}
    33%{opacity:0}
    90%{opacity:0}
    100%{opacity:1;}
}
@media screen and (max-width:540px){
    height:100%;
}
`;
export const ImageW=styled.img`
width:100%;
height:100%;
background-position:cover;

opacity: 0;
animation: fadein linear  infinite;
animation-duration: 15s;
animation-delay: 10s;

@keyframes fadein {
    0%{opacity: 1;}
    29%{opacity:1;}
    33%{opacity:0}
    90%{opacity:0}
    100%{opacity:1;}
}
`;



// ARTICLE

export const HomeArticle=styled.article`
position:absolute;
top:80%;

display:flex;
flex-direction:row;
justify-content:flex-start;
align-items: center;

width:100%;
height:100%;
color: #1d1d1b;

@media screen and (max-width:1024px){
 top:90%;
}
@media screen and (max-width:800px){
    flex-direction:row-reverse;
    top:50%;
}
@media screen and (max-width:640px){
    top:140%;
}
@media screen and (max-width:540px){
    top:60%;
}
`;

export const HomeAside=styled.aside`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
overflow:hidden;

width:50%;
height:100%;

@media screen and (max-width:800px){
   width:100%;
}
@media screen and (max-width:540px){
    display:none;
}
`;

export const HomeManImage=styled.img`
width:80%;
@media screen and (max-width:800px){
   margin-right:-40%;
   width:140%;
}
@media screen and (max-width:640px){
   margin-right:-40%;
   width:110%;
}
`;

export const HomeArticleSection=styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:40%;
height:100%;
@media screen and (max-width:800px){
   width:100%;
   margin-left:10%;
}
`;

export const HomeArticleIntroduction=styled.p`
font size:18px;
color:#a85f3f;
align-self:flex-start;
margin-bottom:20px;
letter-spacing:1px;
`;

export const HomeArticleHeadline=styled.h1`
font-size:30px;
margin-bottom:30px;
color: #1d1d1b;
@media screen and (max-width:768px){
    width:120%;
    margin-left:20%;
}
@media screen and (max-width:767px){
    width:100%;
    margin-left:0;
}

`;

export const HomeArticleText=styled.p`
color: #1d1d1b;
font size:14px;
line-height:30px;
`;


export const HomeButton=styled(LinkR)`
display:flex;
align-self:flex-start;
color:#a85f3f;

width:200px;
padding:50px 0;
text-decoration:none;
transition:.4s ease-in-out;

&:hover{
    width:400px;
}
`;
export const Line =styled.div`
height:100%;
width:20%;
border-bottom:1px solid #a85f3f;
margin-right:30px;
`;

export const ButtonText=styled.p`
font size:14px;
width:80%;
letter-spacing:1px;
`;


// GALLERY
export const HomeGallery=styled.section`
position:absolute;
top:180%;
left:0;

display: flex;
flex-direction:column;
justify-content:center;


height:200%;
width:100%;
overflow-x:hidden;
@media screen and (max-width:800px){
    top:140%;
}
@media screen and (max-width:640px){
    top:260%;
    height:500%;
}
@media screen and (max-width:540px){
    top:150%;
    height:210%;
}
`;

export const HomeGalleryIntroduction=styled.p`
align-self:center;

color:#a85f3f;
letter-spacing:1px;
@media screen and (max-width:540px){
    position:absolute;
    top:3%;
  }

&:nth-child(2){
    font-size:80px;
    font-weight:700;
    margin-bottom:100px;
    color:#1d1d1b;
    @media screen and (max-width:800px){
        margin-bottom:10%;
    }
    @media screen and (max-width:640px){
        font-size:50px;
        margin-bottom:110%;
    }
    @media screen and (max-width:540px){
      position:absolute;
      top:5%;
    }

}
`
export const GalleryStripe=styled.div`
height:110vh;
width:100%;

transform:skewY(-14deg);
background-color:rgb(243, 243, 243);
margin-top:5%;

@media screen and (max-width:800px){
    height:150vh;
}
@media screen and (max-width:540px){
    display:none;
}
`;

export const GalleryImageContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;

position:absolute;
width:100%;

top:15%;
left:0;

&:nth-child(4){
    top:40%;

    @media screen and (max-width:800px){
        top:47%;
    }
    @media screen and (max-width:540px){
        top:37%;
    }
}
@media screen and (max-width:800px){
    top:10%;
    flex-direction:column;
}
`;

export const GalleryImage=styled.img`
z-index:1;
width:35%;
margin:10% 5%;
box-shadow:40px 30px 20px 5px #a0a1a34a;
align-self:flex-center;

&:hover{
    width:36%;
    transition:.4s ease-in-out;
    cursor:pointer; 
 }

@media screen and (max-width:800px){
    width:80%;
    margin:2% 0 0;
}

`;


export const GalleryLine=styled.div`
width:50%;
height:100px;
border-right:1px solid #a85f3f;

margin-top:2%;
@media screen and (max-width:800px){
height:100px;
}
@media screen and (max-width:540px){
display:none;
}
`;
export const HomeGalleryButtonContainer=styled.button`
z-index:1;
width:250px;
height:60px;
align-self:center;

margin-top:2%;
border:1px solid #a85f3f;
background-color:white;

@media screen and (max-width:800px){
    margin-top:5%;
}
@media screen and (max-width:540px){
    position:absolute;
    bottom:25%;
    margin-top:0;
}
`;

export const HomeGalleryButton=styled.a`
font-size:18px;
line-height:60px;
text-align:center;
text-decoration:none;
color:#a85f3f;
`;