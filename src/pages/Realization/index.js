import { useTranslation } from "react-i18next";
import { useState } from "react";
import imgrel from "../../images/imgrel.png";
import {
  RealizationHeader,
  RealizationHeaderLeftContainer,
  RealizationHeaderLetter,
  RealizationHeaderIntroduction,
  RealizationHeaderText,
  RealizationHeaderRightContainer,
  ImageContainer,
  Image,
  RealizationSection,
  RealizationSectionIntroduction,
  RealizationButtonContainer,
  RealizationButton,
} from "./RealizationElements";

import proj1 from "../../images/proj1.png";
import proj2 from "../../images/proj2.png";
import proj3 from "../../images/proj3.png";
import proj4 from "../../images/proj4.png";

import RealizationCard from "./RealizationCard";

const imagesAll = [proj1, proj2, proj3, proj4, imgrel, proj1];
const imagesPriv = [proj1, proj2, proj3, proj1];
const imagesCom = [proj4, imgrel];

const Realization = () => {
  const { t } = useTranslation();
  const [isActive, setActive] = useState("all");

  return (
    <>
      <RealizationHeader>
        <RealizationHeaderLeftContainer>
          <RealizationHeaderLetter>R</RealizationHeaderLetter>
          <RealizationHeaderIntroduction>
            {t("Realizacje")}
          </RealizationHeaderIntroduction>
          <RealizationHeaderText>{t("Realizacjetxt")}</RealizationHeaderText>
        </RealizationHeaderLeftContainer>
        <RealizationHeaderRightContainer>
          <ImageContainer>
            <Image src={imgrel}></Image>
          </ImageContainer>
        </RealizationHeaderRightContainer>
      </RealizationHeader>
      <RealizationSection>
        <RealizationSectionIntroduction>
          Projekty
        </RealizationSectionIntroduction>

        <RealizationButtonContainer>
          <RealizationButton
            isActive={isActive}
            name="all"
            onClick={() => setActive("all")}
          >
            Wszystkie
          </RealizationButton>
          <RealizationButton
            isActive={isActive}
            name="private"
            onClick={() => setActive("private")}
          >
            Prywatne
          </RealizationButton>
          <RealizationButton
            isActive={isActive}
            name="commercial"
            onClick={() => setActive("commercial")}
          >
            Komercyjne
          </RealizationButton>
        </RealizationButtonContainer>

        {isActive === "all" && (
          <RealizationCard images={imagesAll} name="all"></RealizationCard>
        )}
        {isActive === "private" && (
          <RealizationCard images={imagesPriv} name="private"></RealizationCard>
        )}
        {isActive === "commercial" && (
          <RealizationCard
            images={imagesCom}
            name="commercial"
          ></RealizationCard>
        )}
      </RealizationSection>
    </>
  );
};

export default Realization;
