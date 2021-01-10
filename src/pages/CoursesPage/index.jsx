import React, { useState } from "react";
import {
  CleanSearch,
  CourseCards,
  CoursePageBox,
  CoursePageSearchBox,
  GuaranteeSearch,
  ToggleCoursesIcon,
  ToggleCoursesList,
  ToggleCoursesName,
  ToggleFilterBox,
  ToggleFilterButton,
  ToggleFilterButtonSearch,
  ToggleFilterClose,
  ToggleFilterContainer,
  ToggleFilterFooter,
  ToggleFilterTittle,
} from "./styles";

import Select from "../../components/Select";
import CourseCard from "../../components/CourseCard";

//Icon
import CourseIcon from "../../assets/icons/test-course-icon.svg";
import { ReactComponent as Tick } from "../../assets/icons/check-solid.svg";
import { ReactComponent as Close } from "../../assets/icons/cancel.svg";

//Styles
import {
  Option,
  OptionBox,
  OptionDescription,
  OptionTitle,
  SelectTitle,
  TickIcon,
} from "../../components/Select/styles";
import CourseBottomPopup from "../../components/CourseBottomPopup";
import CoursesForm from "../../components/CoursesForm";

function CoursePage() {

  const selectInfo = [
    {
      courseType: "Направления",
      optionData: [
        {
          title: "Все направления",
        }, {
          title: "Программирование",
        }, {
          title: "Маркетинг",
        },
      ],
    }, {
      courseType: "Тип курса",
      optionData: [
        {
          title: "Факультет",
          description: "от 10 месяцев — максимум теории и практического опыта",
        }, {
          title: "Профессия",
          description: "3-12 месяцев — курсы для быстрого старта",
        }, {
          title: "Короткий курс",
          description: "",
        },
      ],
    }, {
      courseType: "Стоимость",
      optionData: [
        {
          title: "Платный",
          description: "",
        }, {
          title: "Бесплатный",
          description: "",
        },
      ],
    },
  ];

  const allDirections = [
    {
      icon: "https://assets.website-files.com/5f75b134a1a14b83f4e06dfc/5f75b134a1a14b12e5e06e1c_all_courses.svg",
      name: "Все направления",
    }, {
      icon: "https://assets.website-files.com/5f75b134a1a14b83f4e06dfc/5f75b134a1a14b12e5e06e1c_all_courses.svg",
      name: "Программирование",
    }, {
      icon: "https://assets.website-files.com/5f75b134a1a14b83f4e06dfc/5f75b134a1a14b12e5e06e1c_all_courses.svg",
      name: "Маркетинг",
    },
  ];

  const [ selectedDirection, setSelectedDirection ] = useState( "Все направления" );

  const [ isDirectionOpen, setIsDirectionOpen ] = useState( false );

  const [ openOption, setOpenOption ] = useState();

  const [ selectInfoToSearch, setSelectInfoToSearch ] = useState( [] );

  const cardsInfo = [
    {
      type: "Факультет",
      guarantee: "Гарантия трудоустройства",
      name: "Разработка на C#",
      description: "Научитесь разрабатывать веб-сервисы и приложения, используя язык программирования C#",
      icon: CourseIcon,
      duration: "12 месяцев",
      discount: "-50%",
    }, {
      type: "Факультет",
      guarantee: "Гарантия трудоустройства",
      name: "Разработка на C#",
      description: "Научитесь разрабатывать веб-сервисы и приложения, используя язык программирования C#",
      icon: CourseIcon,
      duration: "12 месяцев",
      discount: "-50%",
    }, {
      type: "Факультет",
      guarantee: "Гарантия трудоустройства",
      name: "Разработка на C#",
      description: "Научитесь разрабатывать веб-сервисы и приложения, используя язык программирования C#",
      icon: CourseIcon,
      duration: "12 месяцев",
      discount: "-50%",
    }, {
      type: "Факультет",
      guarantee: "Гарантия трудоустройства",
      name: "Разработка на C#",
      description: "Научитесь разрабатывать веб-сервисы и приложения, используя язык программирования C#",
      icon: CourseIcon,
      duration: "12 месяцев",
      discount: "-50%",
    }, {
      type: "Факультет",
      guarantee: "Гарантия трудоустройства",
      name: "Разработка на C#",
      description: "Научитесь разрабатывать веб-сервисы и приложения, используя язык программирования C#",
      icon: CourseIcon,
      duration: "12 месяцев",
      discount: "-50%",
    }, {
      type: "Факультет",
      guarantee: "Гарантия трудоустройства",
      name: "Разработка на C#",
      description: "Научитесь разрабатывать веб-сервисы и приложения, используя язык программирования C#",
      icon: CourseIcon,
      duration: "12 месяцев",
      discount: "-50%",
    },
  ];

  const [ isToggleFilterOpen, setIsToggleFilterOpen ] = useState( false );

  return (
    <CoursePageBox>
      <CoursePageSearchBox>
        {/*<Select courseType={ selectedDirection }*/ }
        {/*        selectInfoToSearch={ selectedDirection }*/ }
        {/*        setSelectInfoToSearch={ setSelectedDirection }*/ }
        {/*        openOption={ isDirectionOpen }*/ }
        {/*        setOpenOption={ setIsDirectionOpen }*/ }
        {/*        selectIndex={ selectIndex }*/ }
        {/*        optionData={ optionData }*/ }
        {/*        courseSelect*/ }
        {/*/>*/ }
        {
          selectInfo.map( ( { courseType, optionData }, selectIndex ) =>
            <Select 
              key={ selectIndex }
              courseType={ courseType }
              selectInfoToSearch={ selectInfoToSearch }
              setSelectInfoToSearch={ setSelectInfoToSearch }
              openOption={ openOption }
              setOpenOption={ setOpenOption }
              selectIndex={ selectIndex }
              optionData={ optionData }
              courseSelect
            />,
          )
        }

        <GuaranteeSearch chosen={ selectInfoToSearch.includes( "С гарантией трудоустройства" ) }
                         onClick={ () => setSelectInfoToSearch( prevState => prevState.includes( "С гарантией трудоустройства" ) ? [ ...prevState.filter( e => e !== "С гарантией трудоустройства" ) ] : [ ...prevState, "С гарантией трудоустройства" ] ) }>
          С гарантией трудоустройства
        </GuaranteeSearch>

        <CleanSearch clean={ selectInfoToSearch.length === 0 } onClick={ () => setSelectInfoToSearch( '' ) }>
          Сбросить фильтры
        </CleanSearch>
        <ToggleFilterButton onClick={ () => setIsDirectionOpen( !isDirectionOpen ) }>
          { selectedDirection }
        </ToggleFilterButton>
        <ToggleFilterBox isOpen={ isDirectionOpen }>
          <ToggleFilterClose onClick={ () => setIsDirectionOpen( !isDirectionOpen ) }>
            <Close/>
          </ToggleFilterClose>
          <ToggleFilterTittle>
            Выберите направление
          </ToggleFilterTittle>

          { allDirections.map( ( { icon, name } ) =>

            <ToggleCoursesList onClick={ () => {
              setSelectedDirection( name );
              setIsDirectionOpen( !isDirectionOpen );
            } }>
              <ToggleCoursesIcon>
                <img
                  src={ icon }
                  alt="" className="mob-menu-image"/>
              </ToggleCoursesIcon>
              <ToggleCoursesName>{ name }</ToggleCoursesName>
            </ToggleCoursesList>,
          ) }

        </ToggleFilterBox>


        <ToggleFilterButton onClick={ () => setIsToggleFilterOpen( !isToggleFilterOpen ) } filter>
          <span>Фильтры</span>
          <img
            src="https://assets.website-files.com/5f75b134a1a14b83f4e06dfc/5f85586954b3fcd3e8f667be_settings--adjust.svg"
            loading="lazy" alt="" className="image-24"/>
        </ToggleFilterButton>
        <ToggleFilterBox isOpen={ isToggleFilterOpen }>
          <ToggleFilterContainer>
            <ToggleFilterClose onClick={ () => setIsToggleFilterOpen( !isToggleFilterOpen ) }>
              <Close/>
            </ToggleFilterClose>
            <ToggleFilterTittle>
              Фильтры
            </ToggleFilterTittle>

            { selectInfo.map( (
              {
                courseType,
                optionData,
              },
              selectIndex ) =>
              <>
                <SelectTitle>
                  { courseType }
                </SelectTitle>
                <OptionBox last={ selectIndex + 1 === selectInfo.length }>
                  { optionData.map( ( { title, description }, index ) =>
                    <Option key={ index }
                            onClick={
                              () => setSelectInfoToSearch(
                                prevState => !prevState.includes( selectIndex + "," + index ) ?
                                  [ ...prevState, selectIndex + ',' + index ] :
                                  [ ...prevState.filter( e => e !== selectIndex + ',' + index ) ],
                              )
                            }
                    >
                      <TickIcon chosen={ selectInfoToSearch.includes( selectIndex + "," + index ) }>
                        <Tick/>
                      </TickIcon>
                      <div>
                        <OptionTitle>
                          { title }
                        </OptionTitle>
                        <OptionDescription>
                          { description }
                        </OptionDescription>
                      </div>
                    </Option>,
                  ) }
                </OptionBox>
              </>,
            ) }
          </ToggleFilterContainer>
          <ToggleFilterFooter>
            <CleanSearch toggle onClick={ () => setSelectInfoToSearch( '' ) }>
              Сбросить фильтры
            </CleanSearch>
            <ToggleFilterButtonSearch onClick={ () => setIsToggleFilterOpen( !isToggleFilterOpen ) }>
              Применить
            </ToggleFilterButtonSearch>
          </ToggleFilterFooter>
        </ToggleFilterBox>
      </CoursePageSearchBox>

      <CourseCards onClick={ () => setOpenOption() }>
        { cardsInfo.map( ( { type, guarantee, name, description, icon, duration, discount } ) =>
          <CourseCard 
            type={ type }
            guarantee={ guarantee }
            name={ name }
            description={ description }
            icon={ icon }
            duration={ duration }
            discount={ discount }
          />,
        ) }
      </CourseCards>

      <CoursesForm/>

      <CourseBottomPopup/>

    </CoursePageBox>
  );
}

export default CoursePage;