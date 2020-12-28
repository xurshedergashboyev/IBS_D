import React from 'react';
import {
    TeamSection,
    TeamHeader,
    TeamInner,
    TeamAllMembers,
    TeamMemberImage,
    TeamMemberAvatar,
    TeamMemberName,
    TeamMemberDesc
} from "./style";
import { Heading, Container } from "../../assets/Styles/MainStyle";
import { HeadingDesc } from "../../assets/Styles/MainStyle";
import SettingsIcon from '../../assets/icons/settings.svg';
import LoupeIcon from '../../assets/icons/loupe.svg';
import AnalysisIcon from '../../assets/icons/analysis.svg';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const  Team = () => {
    return (
        <TeamSection>
            <Container>
                <TeamInner>
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
                        </Flippy>
                        <Flippy
                            flipOnHover={true}
                            flipOnClick={false}
                            flipDirection="horizontal"
                        >
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
                        </Flippy>
                        <Flippy
                            flipOnHover={true}
                            flipOnClick={false}
                            flipDirection="horizontal" //
                        >
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
                        </Flippy>


                    </TeamAllMembers>
                </TeamInner>
            </Container>
        </TeamSection>


    );
}

export default Team;