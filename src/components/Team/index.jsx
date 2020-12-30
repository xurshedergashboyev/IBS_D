import React from 'react';
import {
    TeamSection,
    TeamHeader,
    TeamInner,
    TeamAllMembers,
    TeamMemberImage,
    TeamMemberAvatar,
    TeamMemberName,
    TeamMemberDesc,
    TeamBack
} from "./style";
import { Heading, Container } from "../../assets/Styles/MainStyle";
import { HeadingDesc } from "../../assets/Styles/MainStyle";
import SettingsIcon from '../../assets/icons/settings.svg';
import LoupeIcon from '../../assets/icons/loupe.svg';
import AnalysisIcon from '../../assets/icons/analysis.svg';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Fade } from 'react-awesome-reveal';

const  Team = () => {
    return (
        <TeamSection>
            <Container>
                <TeamInner>
                    <TeamBack>
                        <TeamHeader>
                            <Heading style={{
                                marginTop: 0,
                                marginBottom: 0,
                                marginRight: 20
                            }}>
                                Наши преподаватели
                            </Heading>
                            <HeadingDesc>
                                Настоящие профессионалы
                                <br />
                                с большим теоретическим и практическим опытом
                            </HeadingDesc>
                        </TeamHeader>
                        <TeamAllMembers>
                            <Flippy
                                flipOnHover={true}
                                flipOnClick={false}
                                flipDirection="horizontal"
                            >
                                <Fade delay={500} bottom triggerOnce={false}>
                                    <FrontSide className="team-member">
                                        <TeamMemberImage>
                                            <TeamMemberAvatar src={SettingsIcon} alt=""/>
                                        </TeamMemberImage>
                                        <TeamMemberName>
                                            Daler Zakirov
                                        </TeamMemberName>
                                        <TeamMemberDesc>
                                            Full-stack Developer
                                            <br />
                                            (Javascript)
                                        </TeamMemberDesc>
                                    </FrontSide>
                                    <BackSide className="team-member">
                                        Hello
                                    </BackSide>
                                </Fade>
                            </Flippy>
                            <Flippy
                                flipOnHover={true}
                                flipOnClick={false}
                                flipDirection="horizontal"
                            >
                                <Fade delay={600} bottom triggerOnce={false}>
                                    <FrontSide className="team-member">
                                        <TeamMemberImage>
                                            <TeamMemberAvatar src={AnalysisIcon} alt=""/>
                                        </TeamMemberImage>
                                        <TeamMemberName>
                                            Daler Zakirov
                                        </TeamMemberName>
                                        <TeamMemberDesc>
                                            Full-stack Developer
                                            <br />
                                            (Javascript)
                                        </TeamMemberDesc>
                                    </FrontSide>
                                    <BackSide className="team-member">
                                        Hello
                                    </BackSide>
                                </Fade>
                            </Flippy>
                            <Flippy
                                flipOnHover={true}
                                flipOnClick={false}
                                flipDirection="horizontal" //
                            >
                                <Fade delay={700} bottom triggerOnce={false}>
                                    <FrontSide className="team-member">
                                        <TeamMemberImage>
                                            <TeamMemberAvatar src={LoupeIcon} alt=""/>
                                        </TeamMemberImage>
                                        <TeamMemberName>
                                            Daler Zakirov
                                        </TeamMemberName>
                                        <TeamMemberDesc>
                                            Full-stack Developer
                                            <br />
                                            (Javascript)
                                        </TeamMemberDesc>
                                    </FrontSide>
                                    <BackSide className="team-member">
                                        Hello
                                    </BackSide>
                                </Fade>
                            </Flippy>
                        </TeamAllMembers>
                    </TeamBack>
                </TeamInner>
            </Container>
        </TeamSection>
    );
}

export default Team;