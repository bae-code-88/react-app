import {ImageReal, ImagesContainer, ImageBox} from "./RealizationElements";


const RealizationCard =({images})=>{
    const indexImage=images.map(image=><ImageBox key={images}><ImageReal src={image}></ImageReal></ImageBox>)
    return(
        <>
        <ImagesContainer>
        {indexImage}
        </ImagesContainer>
        </>
    )
}

export default RealizationCard;

