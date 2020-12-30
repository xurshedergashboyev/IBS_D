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
import ErrorIcon from '../../assets/icons/error-404.png';
import TowerIcon from '../../assets/icons/tower.png';


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
        icon: ErrorIcon,
        content: 'Business',
        paragraph: 'Корпоративная культура, стандарты, мотивация, стимулирование, основы управления персоналом, рекрутмент.'
    },
    {
        id: 4,
        icon: TowerIcon,
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
                            <Fade delay={500} triggerOnce={false}>
                                <FacultiesItemIcon>
                                    <FacultiesItemIconImage>
                                        <img src={item.icon} alt="globe"/>
                                    </FacultiesItemIconImage>
                                </FacultiesItemIcon>
                            </Fade>
                            <Fade delay={1000} triggerOnce={false}>
                                <FacultiesContent>
                                    <Heading>
                                        {item.content}
                                    </Heading>
                                    <FacultiesDesc>{item.paragraph}</FacultiesDesc>
                                </FacultiesContent>
                            </Fade>
                        </FacultiesItemInner>
                        <Fade delay={1500} triggerOnce={false}>
                            <FacultiesAction>
                                <BtnGroups>
                                    <MainButton style={{padding: '18px 40px', backgroundColor: '#8aff8d'}}>Выбрать</MainButton>
                                </BtnGroups>
                            </FacultiesAction>
                        </Fade>
                    </FacultiesEachItem>
                </FacultiesItems>
            )
        })
)}



export default FacultiesItem;