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
} from '../Faculties/style'


import GlobeIcon from '../../assets/icons/globe.svg'
import SettingsIcon from '../../assets/icons/settings.svg'
import StartUpIcon from '../../assets/icons/startup.svg'
import LightBulbIcon from '../../assets/icons/lightbulb.svg'
import LoupeIcon from '../../assets/icons/loupe.svg'
import {BtnGroups, MainButton} from "../../styles/MainStyle";

const items = [
    {
        id: 1,
        icon: GlobeIcon,
        content: 'Программирование',
        paragraph: 'Html, CSS, Javascript, PHP, Laravel, Mysql, Android, Java, JavaScript, Python.'
    },
    {
        id: 2,
        icon: LoupeIcon,
        content: 'Дизайн',
        paragraph: 'UI/UX дизайн, Adobe Photoshop/Adobe Illustrator/Figma.'
    },
    {
        id: 3,
        icon: LightBulbIcon,
        content: 'HR-менеджмент',
        paragraph: 'Корпоративная культура, стандарты, мотивация, стимулирование, основы управления персоналом, рекрутмент.'
    },
    {
        id: 4,
        icon: StartUpIcon,
        content: 'Digital-маркетинг',
        paragraph: 'Контент-маркетинг, маркетинг влияния, интернет-реклама, Wordpress, Opencart, SEO, SMM.'
    },
    {
        id: 5,
        icon: SettingsIcon,
        content: 'Project management',
        paragraph: 'Стандарты управления проектами, процессы и области знания жизненного цикла проекта и особенностях управления проектами в IT.'
    },


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
                                <MainButton>Выбрать</MainButton>
                            </BtnGroups>
                        </FacultiesAction>
                    </FacultiesEachItem>
                </FacultiesItems>
            )
        })
)}



export default FacultiesItem;