import React from 'react';
import {
    TeamSection,
    TeamHeader,
    TeamInner,
    TeamMember,
    TeamAllMembers,
    TeamMemberImage,
    TeamMemberAvatar,
    TeamMemberName,
    TeamMemberDesc
} from "./style";
import { Heading, Container } from "../../assets/Styles/MainStyle";
import { HeadingDesc } from "../../assets/Styles/MainStyle";
import SettingsIcon from '../../assets/icons/settings.svg'
import LoupeIcon from '../../assets/icons/loupe.svg'
import AnalysisIcon from '../../assets/icons/analysis.svg'

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
                        <TeamMember>
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
                        </TeamMember>
                        <TeamMember>
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
                        </TeamMember>
                        <TeamMember>
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
                        </TeamMember>
                    </TeamAllMembers>
                </TeamInner>
            </Container>
        </TeamSection>


    );
}

export default Team;