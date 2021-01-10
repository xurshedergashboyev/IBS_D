import React, { useState } from "react";
import WebinarCard from "../../components/WebinarCard";
import { BesideMainCard, WebinarNavbar, WebinarNavbarNav, WebinarPageStyled } from "./styles";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const WebinarsPage = () => {

  let secondCard = {};
  const webinarCards = [
    {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    }, {
      posterImg: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    },
  ];
  const [ activeNav, setActiveNav ] = useState( "all" );

  const width  = useWindowDimensions().width;

  return (
    <WebinarPageStyled>
      <WebinarNavbar>
        <WebinarNavbarNav onClick={ () => setActiveNav( "all" ) } active={ activeNav === "all" }>
          Все вебинары・1576
        </WebinarNavbarNav>
        <WebinarNavbarNav onClick={ () => setActiveNav( "my" ) } active={ activeNav === "my" }>
          Участвую
        </WebinarNavbarNav>
      </WebinarNavbar>
      { webinarCards.map(
        ( {
            posterImg,
            tillWebinar,
            date,
            title,
            author,
            numberOfPeople,
            numberOfComments,
            numberOfLikes,
          }, index ) => {

          if ( index === 0 ) {
            return ( <WebinarCard
              mainFirstCard
              posterImg={ posterImg }
              tillWebinar={ tillWebinar }
              date={ date }
              title={ title }
              author={ author }
              numberOfPeople={ numberOfPeople }
              numberOfComments={ numberOfComments }
              numberOfLikes={ numberOfLikes }
            /> );
          } else if ( index === 1 && width > 1024) {
            secondCard = {
              posterImg: posterImg,
              tillWebinar: tillWebinar,
              date: date,
              title: title,
              author: author,
              numberOfPeople: numberOfPeople,
              numberOfComments: numberOfComments,
              numberOfLikes: numberOfLikes,
            };
          } else if ( index === 2 && width > 1024 ) {

            return (
              <BesideMainCard>
                <WebinarCard
                  fullWidth
                  posterImg={ secondCard.posterImg }
                  tillWebinar={ secondCard.tillWebinar }
                  date={ secondCard.date }
                  title={ secondCard.title }
                  author={ secondCard.author }
                  numberOfPeople={ secondCard.numberOfPeople }
                  numberOfComments={ secondCard.numberOfComments }
                  numberOfLikes={ secondCard.numberOfLikes }
                />
                <WebinarCard
                  fullWidth
                  posterImg={ posterImg }
                  tillWebinar={ tillWebinar }
                  date={ date }
                  title={ title }
                  author={ author }
                  numberOfPeople={ numberOfPeople }
                  numberOfComments={ numberOfComments }
                  numberOfLikes={ numberOfLikes }
                />
              </BesideMainCard>
            );
          } else {
            return (
              <WebinarCard
                posterImg={ posterImg }
                tillWebinar={ tillWebinar }
                date={ date }
                title={ title }
                author={ author }
                numberOfPeople={ numberOfPeople }
                numberOfComments={ numberOfComments }
                numberOfLikes={ numberOfLikes }
              />
            );
          }
        },
      ) }
    </WebinarPageStyled>
  );
};

export default WebinarsPage;