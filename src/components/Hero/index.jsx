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
} from "./style";

import { Container } from '../../assets/Styles/MainStyle';
import Typical from 'react-typical';
import { MainButton } from "../../styles/MainStyle";
import Reward from "react-rewards";



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
                                <Typical
                                    steps={['Приготовься изменить свое будущее', 4000, 'Приготовься изменить свое интересов', 4000]}
                                    loop={Infinity}
                                    wrapper="h5"
                                />
                            </HeroTitle>
                            <div className="all">
                                <div className="secondary">
                                  <span className="span">
                                    <span>Читать дальше</span>
                                  </span>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 66">
                                    <path
                                          d="M139.13 20.345c-2.878-5.344-7.084-8.871-12.98-9.911a275.339 275.339 0 00-5.045-.854c-3.809-.6-7.698-.863-11.415-1.835-9.05-2.367-18.01-5.17-27.352-5.976-5.8-.5-11.62-1.179-17.45-.448-3.828.48-37.478.177-48.203 6.424C5.959 13.992 1.765 29.37 1.296 32.578c-.771 5.261-.031 10.298 2.175 15.09.23.5.567.972.94 1.368 3.544 3.785 7.388 7.092 12.274 8.865 5.284 1.913 10.722 2.793 16.28 3.297 4.067.37 8.157.657 12.163 1.849 4.924 1.462 10.02 2.195 15.158 1.882 4.544-.28 9.073-.863 13.61-1.313.012.135 7.193-.164 10.774-.322 5.236-.23 10.386-1.119 15.241-3.08 5.293-2.138 10.74-3.541 16.23-4.853 1.656-.398 3.325-.75 4.95-1.257 1.78-.553 3.627-1.043 5.247-1.95 2.818-1.575 5.484-3.447 8.21-5.201.446-.286.89-.581 1.3-.919.89-.73 1.975-1.332 2.585-2.27 1.105-1.698 1.953-3.585 2.852-5.42 1.805-3.68 2.34-7.519.854-11.435a55.217 55.217 0 00-3.009-6.564z"
                                          stroke="#ffbf2b" strokeWidth="2"
                                    />
                                  </svg>
                                </div>
                            </div>
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
                                        colors: ['#ffbf2b', '#000', '#fff']
                                    }}
                                >
                                    <MainButton style={{marginTop: 10}} onClick={ handleClick }>{!active
                                        ?   'Submitted'
                                        :   'Submit'
                                    }
                                    </MainButton>
                                </Reward>
                                <FormInput type="text" required placeholder="Xurshed Ergashbayev"/>
                                <FormInput type="text" required placeholder="Xurshed Ergashbayev"/>
                                <FormInput type="text" required placeholder="Xurshed Ergashbayev" className="message"/>
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

export default Hero;


