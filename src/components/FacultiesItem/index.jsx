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

import ComputerIcon from '../../assets/icons/computer.png'
import PaintIcon from '../../assets/icons/paint.png'
import ErrorIcon from '../../assets/icons/error-404.png'
import CubeIcon from '../../assets/icons/cube.png'


const items = [
    {
        id: 1,
        icon: ComputerIcon,
        content: 'Программирование',
        paragraph: 'Html, CSS, Javascript, PHP, Laravel, Mysql, Android, Java, JavaScript, Python.'
    },
    {
        id: 2,
        icon: PaintIcon,
        content: 'Дизайн',
        paragraph: 'UI/UX дизайн, Adobe Photoshop/Adobe Illustrator/Figma.'
    },
    {
        id: 3,
        icon: ErrorIcon,
        content: 'HR-менеджмент',
        paragraph: 'Корпоративная культура, стандарты, мотивация, стимулирование, основы управления персоналом, рекрутмент.'
    },
    {
        id: 4,
        icon: CubeIcon,
        content: 'Digital-маркетинг',
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
                            <FacultiesItemIcon>
                                <FacultiesItemIconImage>
                                    <img src={item.icon} alt="globe"/>
                                </FacultiesItemIconImage>
                            </FacultiesItemIcon>
                            <FacultiesContent>
                                <Heading>
                                    {item.content}
                                </Heading>
                                <FacultiesDesc>{item.paragraph}</FacultiesDesc>
                            </FacultiesContent>
                        </FacultiesItemInner>
                        <FacultiesAction>
                            <BtnGroups>
                                <MainButton style={{padding: '15px 30px'}}>Выбрать</MainButton>
                            </BtnGroups>
                        </FacultiesAction>
                    </FacultiesEachItem>
                </FacultiesItems>
            )
        })
)}



export default FacultiesItem;