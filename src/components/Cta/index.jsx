import React from 'react';
import { Main, CtaIcon, CtaHeading } from './style';
import { Container, Heading } from "../../assets/Styles/MainStyle";
import { BtnGroups } from "../Hero/style";
import Icon from '../../assets/icons/lightbulb.svg';
import { Fade } from 'react-awesome-reveal';
import { MainButton } from "../../styles/MainStyle";

const Cta = () => {
    return (
        <Main>
            <Container>
                <div>
                    <CtaIcon>
                        <Fade delay={800} triggerOnce={true}>
                            <img src={Icon} alt="icon"/>
                        </Fade>
                    </CtaIcon>
                    <CtaHeading>
                        <Heading>
                            Выбирай направление и начинай свой путь в IT прямо сейчас
                        </Heading>
                    </CtaHeading>
                    <BtnGroups>
                        <Fade direction="left" delay={700} triggerOnce={true}>
                            <MainButton style={{margin: '20px 12px', backgroundColor: '#00e4e3'}}>Свяжись с нами</MainButton>
                        </Fade>
                        <Fade direction="right" delay={700} triggerOnce={true}>
                            <MainButton style={{backgroundColor: '#5a595f', color: '#fff'}}>Пройди тестирование</MainButton>
                        </Fade>
                    </BtnGroups>
                </div>
            </Container>
        </Main>
    );
}

export default Cta;