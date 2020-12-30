import React from 'react';
import { GrPhone, GrMail } from 'react-icons/gr';
import { FaTelegram, FaInstagram, FaTwitter, FaFacebook} from "react-icons/all";
import {
    MainWrapper,
    SideExtra,
    SideExtraContent,
    SideWrapperInner,
    SideWrapper,
    SideContent,
    SideContentItems,
    SideExtraContentItems,
    SideExtraSpan,
    Buttons,
    SideExtraItems,
    MainButtons,
    SideSocials
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
                            <MainButton style={{marginRight: 20, backgroundColor: '#8aff8d'}}>Пополнить счёт</MainButton>
                            <MainButton style={{backgroundColor: '#8aff8d'}}>Пополнить счёт</MainButton>
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
                            <GrMail style={{fontSize: 20}}/>
                            <SideExtraSpan>xurshedergashboyev@gmail.com</SideExtraSpan>
                        </SideExtraItems>
                    </SideExtra>
                    <SideSocials>
                        <FaFacebook className="social-icon"/>
                        <FaInstagram className="social-icon"/>
                        <FaTwitter className="social-icon"/>
                        <FaTelegram className="social-icon"/>
                    </SideSocials>
                </SideWrapperInner>
            </SideWrapper>
        </MainWrapper>
    );
}

Sidebar.propTypes = {
    open: bool.isRequired,
}

export default Sidebar;

