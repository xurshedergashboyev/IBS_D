import React from 'react';
import { BenefitsSection, BenefitsContainer, Row, RowItem, Icon, AboutDesc, IconImg } from './style';
import { Fade } from 'react-awesome-reveal';

import GlobeIcon from '../../assets/icons/globe.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import AnalysisIcon from '../../assets/icons/analysis.svg';
import StartUpIcon from '../../assets/icons/startup.svg';
import LightBulbIcon from '../../assets/icons/lightbulb.svg';
import LoupeIcon from '../../assets/icons/loupe.svg';


const Benefits = () => {
    return (
        <BenefitsSection>
            <BenefitsContainer>
                <Row>
                    <Fade top delay={500} triggerOnce={true}>
                        <RowItem >
                            <Icon>
                                <IconImg src={GlobeIcon} alt="globe"/>
                            </Icon>
                            <AboutDesc>Преподаватели - практики</AboutDesc>
                        </RowItem>
                    </Fade>
                    <Fade bottom delay={700} triggerOnce={true}>
                        <RowItem>
                            <Icon>
                                <IconImg src={LightBulbIcon} alt="lightBulb"/>
                            </Icon>
                            <AboutDesc>Преподаватели - практики</AboutDesc>
                    </RowItem>
                    </Fade>
                    <Fade bottom delay={900} triggerOnce={true}>
                        <RowItem>
                            <Icon>
                                <IconImg src={LoupeIcon} alt="loupe"/>
                            </Icon>
                            <AboutDesc>Преподаватели - практики</AboutDesc>
                        </RowItem>
                    </Fade>
                    <Fade bottom delay={500} triggerOnce={true}>
                        <RowItem>
                            <Icon>
                                <IconImg src={StartUpIcon} alt="startUp"/>
                            </Icon>
                            <AboutDesc className="about">Преподаватели - практики</AboutDesc>
                        </RowItem>
                    </Fade>
                    <Fade bottom delay={700} triggerOnce={true}>
                        <RowItem>
                            <Icon>
                                <IconImg src={SettingsIcon} alt="settings"/>
                            </Icon>
                            <AboutDesc>Преподаватели - практики</AboutDesc>
                        </RowItem>
                    </Fade>
                    <Fade bottom delay={900} triggerOnce={true}>
                        <RowItem>
                            <Icon>
                                <IconImg src={AnalysisIcon} alt="analysis"/>
                            </Icon>
                            <AboutDesc>Преподаватели - практики</AboutDesc>
                        </RowItem>
                    </Fade>
                </Row>
            </BenefitsContainer>
        </BenefitsSection>
    );
}

export default Benefits;