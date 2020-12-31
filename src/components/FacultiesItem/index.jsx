import React from 'react';
import { Heading } from "../../assets/Styles/MainStyle";
import {
    FacultiesContent,
    FacultiesEachItem,
    FacultiesItemIcon,
    FacultiesItemIconImage,
    FacultiesItemInner,
    FacultiesItems,
    FacultiesAction, FacultiesDesc
} from '../Faculties/style';
import { BtnGroups, MainButton } from "../../styles/MainStyle";
import { Fade } from 'react-awesome-reveal';

import ComputerIcon from '../../assets/icons/computer.png';
import PaintIcon from '../../assets/icons/paint.png';
import GroupIcon from '../../assets/icons/group.png';
import XRayIcon from '../../assets/icons/x-ray.png';


const items = [
    {
        id: 1,
        icon: ComputerIcon,
        content: 'Programming',
        paragraph: 'Html, CSS, Javascript, PHP, Laravel, Mysql, Android, Java, JavaScript, Python.'
    },
    {
        id: 2,
        icon: PaintIcon,
        content: 'Design',
        paragraph: 'UI/UX дизайн, Adobe Photoshop/Adobe Illustrator/Figma.'
    },
    {
        id: 3,
        icon: GroupIcon,
        content: 'Business',
        paragraph: 'Корпоративная культура, стандарты, мотивация, стимулирование, основы управления персоналом, рекрутмент.'
    },
    {
        id: 4,
        icon: XRayIcon,
        content: 'Languages',
        paragraph: 'Контент-маркетинг, маркетинг влияния, интернет-реклама, Wordpress, Opencart, SEO, SMM.'
    }
]


const FacultiesItem = () => {
    return (
        items.map(item => {
            return (
                <FacultiesItems key={item.id}>
                    <FacultiesEachItem>
                        <FacultiesItemInner>
                            <Fade delay={300} triggerOnce={true}>
                                <FacultiesItemIcon>
                                    <FacultiesItemIconImage>
                                        <img src={item.icon} alt="globe"/>
                                    </FacultiesItemIconImage>
                                </FacultiesItemIcon>
                            </Fade>
                            <Fade delay={500} triggerOnce={true}>
                                <FacultiesContent>
                                    <Heading>
                                        {item.content}
                                    </Heading>
                                    <FacultiesDesc>{item.paragraph}</FacultiesDesc>
                                </FacultiesContent>
                            </Fade>
                        </FacultiesItemInner>
                        <Fade delay={800} triggerOnce={true}>
                            <FacultiesAction>
                                <BtnGroups>
                                    <MainButton style={{padding: '18px 40px'}}>Выбрать</MainButton>
                                </BtnGroups>
                            </FacultiesAction>
                        </Fade>
                    </FacultiesEachItem>
                </FacultiesItems>
            )
        })
)}



export default FacultiesItem;