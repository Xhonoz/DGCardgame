import { useState, useRef, useEffect } from "react";

import { Button } from "../Button";
import { Counter } from "../Counter";

import { useUpdateActiveIndex } from "./hooks/useUpdateActiveIndex";
import { useKeysEvents } from "./hooks/useKeyEvents";
import { Card } from "../Card";

import "./index.scss";
import { card } from "../types";

const increaseIndex = (index: number, size: number) =>
  Math.min(index + 1, size - 1);

const decreaseIndex = (index: number) => Math.max(0, index - 1);

interface SwipeGalleryProps {
  deck: card[];
}

type Action = {
  type: string;
  card: card;
};

export const SwipeGallery = ({ deck }: SwipeGalleryProps) => {
  const [cards, setCards] = useState<card[]>([]);
  const [actionStack, setActionStack] = useState<Action[]>([]);

  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const scrollActiveIndex = useUpdateActiveIndex(containerRef);

  useEffect(() => {
    if (cards.length !== 0) {
      setActiveIndex(scrollActiveIndex);
    }
  }, [scrollActiveIndex]);

  const move = (newActiveElement: number) => {
    const currentNode = containerRef?.current;
    if (!currentNode) {
      return;
    }

    const dataContainer = currentNode.getBoundingClientRect();
    setActiveIndex(newActiveElement);

    currentNode.scrollTo({
      left: newActiveElement * dataContainer.width,
      behavior: "smooth",
    });
  };

  useKeysEvents((key) => {
    if (key === "ArrowLeft") {
      move(decreaseIndex(activeIndex));
    }
    if (key === "ArrowRight") {
      move(increaseIndex(activeIndex, cards.length));
    }
  });

  const [playAnimation, setPlayAnimation] = useState(false);

  const handleDraw = () => {
    setIsDrawing(true);
    const newCard = deck[Math.floor(Math.random() * deck.length)];
    setCards((prevCards) => [...prevCards, newCard]);
    setActionStack((prevStack) => [
      ...prevStack,
      {
        type: "draw",
        card: newCard,
      },
    ]);
  };

  useEffect(() => {
    console.log(cards);
    if (isDrawing) {
      setIsDrawing(false);
      if (cards.length > 0) {
        move(cards.length - 1);
      }
    }
  }, [cards, isDrawing]);

  const undoAction = () => {
    if (actionStack.length > 0) {
      const lastAction = actionStack[actionStack.length - 1];
      if (lastAction.type === "draw") {
        setCards((cards) => {
          // Find the index of the first card with the given name
          const indexToRemove = cards.findIndex(
            (card) => card.name === lastAction.card.name
          );

          // If the card is found, remove it
          if (indexToRemove !== -1) {
            return [
              ...cards.slice(0, indexToRemove), // All cards before the one to remove
              ...cards.slice(indexToRemove + 1), // All cards after the one to remove
            ];
          }

          // If the card is not found, return the original array
          return cards;
        });

        if (cards.length === 1) {
          // play last card
          setActiveIndex(-1);
        }
      }
      if (lastAction.type === "play") {
        setCards((prevCards) => [...prevCards, lastAction.card]);
      }
      setActionStack((prevStack) => prevStack.slice(0, -1)); // Remove the last action
    }
  };

  const handlePlay = () => {
    setPlayAnimation(true); // Trigger the animation
    const playedCard = cards[activeIndex];
    setTimeout(() => {
      setPlayAnimation(false);
      setCards((cards) =>
        cards.filter((_: any, i: number) => i !== activeIndex)
      );
      if (cards.length === 1) {
        // play last card
        setActiveIndex(-1);
      }
    }, 500);
    setActionStack((prevStack) => [
      ...prevStack,
      {
        type: "play",
        card: playedCard,
      },
    ]); // Reset after animation completes
  };

  return (
    <div className="gallery">
      <div>
        <Button
          className="undoButton"
          onClick={() => {
            undoAction();
          }}
        >
          Undo
        </Button>
      </div>
      <div className="gallery-container" ref={containerRef}>
        {cards.map((card, index) => (
          <div key={index} className="gallery-container-item">
            <Card
              card={{
                name: card.name,
                description: card.description,
                image: card.image,
                type: card.type,
              }}
              playAnimation={playAnimation}
            ></Card>
          </div>
        ))}
      </div>
      <div className="buttonSection">
        <Button
          className="playButton"
          onClick={() => {
            handlePlay();
          }}
        >
          Play
        </Button>{" "}
        <Button
          className="drawButton"
          onClick={() => {
            handleDraw();
          }}
        >
          draw
        </Button>
      </div>
      <div className="navigation">
        <Button
          iconName="arrow-left"
          disabled={activeIndex <= 0}
          onClick={() => move(decreaseIndex(activeIndex))}
        />
        <Counter activeIndex={activeIndex + 1} size={cards.length} />
        <Button
          iconName="arrow-right"
          disabled={activeIndex === cards.length - 1}
          onClick={() => move(increaseIndex(activeIndex, cards.length))}
        />
      </div>
    </div>
  );
};
