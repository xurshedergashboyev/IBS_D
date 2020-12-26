import React from 'react';
import { GrPhone, GrMail } from 'react-icons/gr';
import {
    MainWrapper,
    SideExtra,
    SideExtraContent,
    SideWrapperInner,
    SideWrapper,
    SideContent,
    SideContentItems,
    SideExtraContentItems, SideExtraSpan, Buttons, SideExtraItems, MainButtons
} from "./style";
import { bool } from 'prop-types';
import { MainButton } from "../../styles/MainStyle";



const Sidebar = ({ open, ...props}) => {

    const isHidden = !!open;



    return (
        <MainWrapper open={open} aria-hidden={!isHidden} {...props}>
            <SideWrapper>
                <SideWrapperInner>
                    <Buttons>
                        <MainButtons>
                            <MainButton style={{marginRight: 20}}>Пополнить счёт</MainButton>
                            <MainButton>Пополнить счёт</MainButton>
                        </MainButtons>
                    </Buttons>

                    <SideContent>
                        <SideContentItems>Подключить тариф</SideContentItems>
                        <SideContentItems>Конструктор связи</SideContentItems>
                        <SideContentItems>Банковская карта</SideContentItems>
                    </SideContent>
                    <SideExtraContent>
                        <SideExtraContentItems>HEllo</SideExtraContentItems>
                        <SideExtraContentItems>HEllo hello</SideExtraContentItems>
                        <SideExtraContentItems>HEllo whats up</SideExtraContentItems>
                        <SideExtraContentItems>HEllo everybody</SideExtraContentItems>
                        <SideExtraContentItems>HEllo guys</SideExtraContentItems>
                        <SideExtraContentItems>HEllo</SideExtraContentItems>
                    </SideExtraContent>
                    <SideExtra>
                        <SideExtraItems>
                            <GrPhone style={{fontSize: 20}}/>
                            <SideExtraSpan>+998 99 999 16 41</SideExtraSpan>
                        </SideExtraItems>
                        <SideExtraItems>
                            <GrMail />
                            <SideExtraSpan>xurshedergashboyev@gmail.com</SideExtraSpan>
                        </SideExtraItems>

                    </SideExtra>
                </SideWrapperInner>
            </SideWrapper>
        </MainWrapper>
    );
}

Sidebar.propTypes = {
    open: bool.isRequired,
}

export default Sidebar;

