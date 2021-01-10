import React, { useState } from "react";
import { BottomPopupStyled, ButtonPopup, CancelButton, ImgGadgets, TextsBox } from "./styles";
//img
import Gadgets from "../../assets/images/presents.png";

//icon
import { ReactComponent as CancelIcon } from "../../assets/icons/cancelSmall.svg";

const CourseBottomPopup = () => {

  const [ isOpenToggle, setIsOpenToggle ] = useState( true );
  return (
    <BottomPopupStyled isOpen={isOpenToggle}>
      <span>
        <TextsBox>
          <h1>
            Выиграйте подарки за покупку
          </h1>
          <p>
            Чем раньше оплатите, тем больше шансов!
          </p>
        </TextsBox>
        <ImgGadgets src={ Gadgets } alt="gadgets"/>
        <ButtonPopup>Подробнее</ButtonPopup>
        <CancelButton onClick={ () => setIsOpenToggle( !isOpenToggle ) }>
          <CancelIcon/>
        </CancelButton>
      </span>
    </BottomPopupStyled>
  );
};

export default CourseBottomPopup;