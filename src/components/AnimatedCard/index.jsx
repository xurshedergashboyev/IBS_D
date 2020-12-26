import React, { useEffect, useCallback, useState } from "react";
import "./style.css";

const cardItems = [
    {
        id: 1,
        title: "Добро пожаловать 1",
        copy:
            "Добро пожаловать в мою новую академию, основанную по мировым стандартам обучения, где вы можете отучиться самым актуальным профессиям и сможете трудоустроиться гораздо быстрее, чем через традиционное высшее образование."
    },
    {
        id: 2,
        title: "Добро пожаловать 2",
        copy: 'Добро пожаловать в мою новую академию, основанную по мировым стандартам обучения, где вы можете отучиться самым актуальным профессиям и сможете трудоустроиться гораздо быстрее, чем через традиционное высшее образование.'
    },
    {
        id: 3,
        title: "Добро пожаловать 3",
        copy: 'Добро пожаловать в мою новую академию, основанную по мировым стандартам обучения, где вы можете отучиться самым актуальным профессиям и сможете трудоустроиться гораздо быстрее, чем через традиционное высшее образование.'
    },
    {
        id: 4,
        title: "Добро пожаловать 4",
        copy: "Добро пожаловать в мою новую академию, основанную по мировым стандартам обучения, где вы можете отучиться самым актуальным профессиям и сможете трудоустроиться гораздо быстрее, чем через традиционное высшее образование."
    }
];

function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
        return "active";
    } else if (indexes.nextIndex === cardIndex) {
        return "next";
    } else if (indexes.previousIndex === cardIndex) {
        return "prev";
    }
    return "inactive";
}

const CardCarousel = () => {
    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1
    });

    const handleCardTransition = useCallback(() => {
        if (indexes.currentIndex >= cardItems.length - 1) {
            setIndexes({
                previousIndex: cardItems.length - 1,
                currentIndex: 0,
                nextIndex: 1
            });
        } else {
            setIndexes(prevState => ({
                previousIndex: prevState.currentIndex,
                currentIndex: prevState.currentIndex + 1,
                nextIndex:
                    prevState.currentIndex + 2 === cardItems.length
                        ? 0
                        : prevState.currentIndex + 2
            }));
        }
    }, [indexes.currentIndex]);

    useEffect(() => {
        const transitionInterval = setInterval(() => {
            handleCardTransition();
        }, 6000);

        return () => clearInterval(transitionInterval);
    }, [handleCardTransition, indexes]);

    return (
        <div className="main">
            <div className="container">
                <ul className="card-carousel">
                    {cardItems.map((card, index) => (
                        <li
                            key={card.id}
                            className={`card ${determineClasses(indexes, index)}`}
                        >
                            <div>
                                <h1>{card.title}</h1>
                                <p>{card.copy}</p>
                            </div>
                            <img src="https://ba.uz/wp-content/themes/landing/images/bobir.png" alt=""/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default CardCarousel;
