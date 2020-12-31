import React, {useState} from 'react';
import {
    WrapperInner,
    Lead,
    HeroSection,
    HeroTitle,
    HeroBoth,
    FormSection,
    FormSectionText,
    FormSectionTitle,
    FormSectionDesc,
    Form,
    FormInput,
    FirstSpan,
    SecondSpan,
    ThirdSpan,
    FourthSpan
} from "./style";

import { Container } from '../../assets/Styles/MainStyle';
import { MainButton } from "../../styles/MainStyle";
import Reward from "react-rewards";
import NumberFormat from 'react-number-format';
import Select from 'react-select';
import Typist from 'react-typist'

const options = [
    { value: 'frontend development', label: 'Frontend Development' },
    { value: 'backend development', label: 'Backend Development' },
    { value: 'Android development', label: 'Android Development' }
];

const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 1000
}


export const Hero = () => {
    const [ active, setActive ] = useState(false);
    let reward
    const handleClick = () => {
        setActive(!active)
        reward.rewardMe()
    }

    return (
        <WrapperInner>
            <Lead>
                <Container>
                    <HeroBoth>
                        <HeroSection>
                            <HeroTitle>
                                <Typist cursor={cursor}>
                                    <FirstSpan> Приготовься изменить свое будущее </FirstSpan>
                                    <Typist.Backspace count={8} delay={2000} />
                                    <SecondSpan> interest </SecondSpan>
                                    <Typist.Backspace count={9} delay={2000} />
                                    <ThirdSpan> future </ThirdSpan>
                                    <Typist.Backspace count={9} delay={2000} />
                                    <FourthSpan> anything </FourthSpan>
                                </Typist>
                            </HeroTitle>
                            <MainButton>Читать дальше</MainButton>
                        </HeroSection>
                        <FormSection>
                            <FormSectionText>
                                <FormSectionTitle>
                                    Curriculum Vitae
                                </FormSectionTitle>
                                <FormSectionDesc>
                                    Daler Zakirov
                                </FormSectionDesc>
                            </FormSectionText>
                            <Form>
                                <FormInput type="text" required placeholder="Name"/>
                                <NumberFormat format="+998 (##) ###-##-##" allowEmptyFormatting mask="_" className="number-format" />
                                <FormInput type="email" required placeholder="Email (optional)" className="message" />
                                <Select options={options} className="select" />
                                <Reward
                                    ref={ref => {
                                        reward = ref;
                                    }}
                                    type="confetti"
                                    config = {{
                                        spread: 100,
                                        lifetime: 250,
                                        startVelocity: 35,
                                        elementCount: 100,
                                        colors: ['#ffbf2b', '#fff', '#000']
                                    }}
                                >
                                    <MainButton disabled style={{marginTop: 10, padding: '15px 62px'}} onClick={ handleClick }>{!active
                                        ?   'Submit'
                                        :   'Submitted'
                                    }
                                    </MainButton>
                                </Reward>
                            </Form>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                 role="decorative" aria-hidden="true" viewBox="0 0 133.9 97.5" overflow="visible"
                                 className="Intro__svg">
                                <defs>
                                    <pattern x="-257.8" y="-219" width="8" height="8" patternUnits="userSpaceOnUse"
                                             id="dot-pattern" viewBox="0 -8 8 8" overflow="visible">
                                        <rect y="-8" width="8" height="8" fill="none" />
                                        <circle cx="4.3" cy="-4" r=".7" fill="var(--color-dark)"
                                                stroke="var(--color-dark)" strokeMiterlimit="10" />
                                    </pattern>
                                </defs>
                                <pattern id="SVGID_1_" xlinkHref="#dot-pattern"
                                         patternTransform="translate(-1.3637 4.2113)" />
                                <rect width="100" height="60" fill="url(#SVGID_1_)" />
                            </svg>
                        </FormSection>
                    </HeroBoth>
                </Container>
            </Lead>
        </WrapperInner>
    );
}

export default Hero


