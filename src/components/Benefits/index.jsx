import React from 'react';
import { BenefitsSection, BenefitsContainer, Row, RowItem, Icon, AboutDesc, IconImg } from './style';
import { Fade } from 'react-awesome-reveal';

import SetSquareIcon from '../../assets/icons/set-square.png';
import TowerIcon from '../../assets/icons/tower.png';
import QualityIcon from '../../assets/icons/quality.png';
import HandshakeIcon from '../../assets/icons/handshake.png';
import ComputerIcon from '../../assets/icons/computer.png';
import CompassIcon from '../../assets/icons/compass.png';


const Benefits = () => {
    return (
        <BenefitsSection>
            <BenefitsContainer>
                <Row>
                    <Fade top delay={500} triggerOnce={true}>
                        <RowItem >
                            <Icon>
                                <IconImg src={ SetSquareIcon } alt="globe"/>
                            </Icon>
                            <AboutDesc>Преподаватели - практики</AboutDesc>
                        </RowItem>
                    </Fade>
                    <Fade bottom delay={700} triggerOnce={true}>
                        <RowItem>
                            <Icon>
                                <IconImg src={ TowerIcon } alt="lightBulb"/>
                            </Icon>
                            <AboutDesc>Преподаватели - практики</AboutDesc>
                    </RowItem>
                    </Fade>
                    <Fade bottom delay={900} triggerOnce={true}>
                        <RowItem>
                            <Icon>
                                <IconImg src={ QualityIcon } alt="loupe"/>
                            </Icon>
                            <AboutDesc>Преподаватели - практики</AboutDesc>
                        </RowItem>
                    </Fade>
                    <Fade bottom delay={500} triggerOnce={true}>
                        <RowItem>
                            <Icon>
                                <IconImg src={ HandshakeIcon } alt="startUp"/>
                            </Icon>
                            <AboutDesc className="about">Преподаватели - практики</AboutDesc>
                        </RowItem>
                    </Fade>
                    <Fade bottom delay={700} triggerOnce={true}>
                        <RowItem>
                            <Icon>
                                <IconImg src={ ComputerIcon } alt="settings"/>
                            </Icon>
                            <AboutDesc>Преподаватели - практики</AboutDesc>
                        </RowItem>
                    </Fade>
                    <Fade bottom delay={900} triggerOnce={true}>
                        <RowItem>
                            <Icon>
                                <IconImg src={ CompassIcon } alt="analysis"/>
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