import React, { useState } from "react";
import { BlogPageCards, BlogPageNavbar, BlogPageNavBox, BlogPageStyled } from "./styles";
import BlogCard from "../../components/BlogCard";
import { PaginationBox, PaginationItom } from "../ForumPage/styles";
import { ReactComponent as ArrowLeft } from "../../assets/icons/chevron-left-solid.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/chevron-right-solid.svg";
import BlogBottomPopup from "../../components/BlogBottomPopup";

const BlogsPage = () => {

  const navsText = [
    {
      name: "Все статьи",
    }, {
      name: "Программирование",
    }, {
      name: "Маркетинг",
    }, {
      name: "Дизайн",
    }, {
      name: "Управление",
    }, {
      name: "Истории студентов",
    }, {
      name: "GeekUniversity",
    },
  ];

  const [ chosenNav, setChosenNav ] = useState( "Все статьи" );

  const blogCardData = [
    {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/post/2481/image/medium-5aa12d5b455b126f3b58f76c3489e4ed.png",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/post/2481/image/medium-5aa12d5b455b126f3b58f76c3489e4ed.png",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/post/2481/image/medium-5aa12d5b455b126f3b58f76c3489e4ed.png",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/post/2481/image/medium-5aa12d5b455b126f3b58f76c3489e4ed.png",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/post/2481/image/medium-5aa12d5b455b126f3b58f76c3489e4ed.png",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/post/2481/image/medium-5aa12d5b455b126f3b58f76c3489e4ed.png",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/post/2481/image/medium-5aa12d5b455b126f3b58f76c3489e4ed.png",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    },
  ];

  return (
    <BlogPageStyled>
      <BlogPageNavbar>
        { navsText.map( ( { name } ) =>
          <BlogPageNavBox active={ name === chosenNav }
                          onClick={ () => setChosenNav( name ) }
          >
            { name }
          </BlogPageNavBox>,
        ) }
      </BlogPageNavbar>
      <BlogPageCards>
        { blogCardData.map( ( {
                                posterImg,
                                title,
                                description,
                                date,
                                view,
                                comment,
                              } ) =>
          <BlogCard posterImg={ posterImg }
                    title={ title }
                    description={ description }
                    date={ date }
                    view={ view }
                    comment={ comment }/>,
        ) }
      </BlogPageCards>
      <PaginationBox>
        <PaginationItom arrow>
          <ArrowLeft/>
        </PaginationItom>
        <PaginationItom active>
          1
        </PaginationItom>
        <PaginationItom>
          2
        </PaginationItom>
        <PaginationItom disable>
          ...
        </PaginationItom>
        <PaginationItom>
          5
        </PaginationItom>
        <PaginationItom disable>
          ...
        </PaginationItom>
        <PaginationItom>
          10
        </PaginationItom>
        <PaginationItom arrow>
          <ArrowRight/>
        </PaginationItom>
      </PaginationBox>
      <BlogBottomPopup/>
    </BlogPageStyled>
  );
};

export default BlogsPage;