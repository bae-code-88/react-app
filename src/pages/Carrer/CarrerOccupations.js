import {useState} from 'react';
import{
CarrerArticleBox,
CarrerTitle,
CarrerIntroduction,
CarrerButtonBox,
CarrerArrow,
} from './CarrerElements';

const occupations=[
 {id:1,
 title:'Asystent projektanta',
 intro:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',},
 {id:2,
 title:'Projektant wnętrz',
 intro:' Dururur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',},
 {id:3,
 title:'Menager Projektu',
 intro:' Dururur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',},
]


const Occupations=()=>{
 const [isTextOpen, setTextOpen]=useState(1);


 function handleTextOpen(id) {
          console.log(id, isTextOpen);
          setTextOpen({ isTextOpen: id });
     }


const occupationList=occupations.map((item)=>(
  <CarrerArticleBox key={item.id}>
     <CarrerTitle>{item.title}</CarrerTitle>
     <CarrerIntroduction>{item.intro}{item.id}</CarrerIntroduction>
          <CarrerButtonBox 
          id={item.id}
          isTextOpen={isTextOpen}
          onClick={()=>handleTextOpen(item.id)}>
     <CarrerArrow></CarrerArrow>
          </CarrerButtonBox>
</CarrerArticleBox>
))

return(
<>
{occupationList}
</>
)
}

export default Occupations;