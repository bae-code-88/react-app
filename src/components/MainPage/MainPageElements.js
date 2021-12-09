import styled from "styled-components";

export const MainContainer=styled.div`
position:absolute;
top:180px;
left:0;

height:100%;
width:100%;

display: flex;
flex-direction:column;
justify-content: center;
align-self:center;

@media screen and (max-width:1024px){
   top:100px;
}
@media screen and (max-width:640px){
   top:50px;
}
`;