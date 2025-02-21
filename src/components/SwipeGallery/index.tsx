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

export const SwipeGallery = ({ deck }: SwipeGalleryProps) => {
  const [cards, setCards] = useState<card[]>([]);

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
    console.log(cards);
    console.log(`move to index : ${newActiveElement}`);
    const currentNode = containerRef?.current;
    console.log(currentNode?.childNodes.length);
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
  };

  useEffect(() => {
    if (isDrawing) {
      setIsDrawing(false);
      if (cards.length > 0) {
        move(cards.length - 1);
      }
    }
  }, [cards, isDrawing]);

  const handlePlay = () => {
    setPlayAnimation(true); // Trigger the animation
    setTimeout(() => {
      setPlayAnimation(false);
      setCards((cards) =>
        cards.filter((_: any, i: number) => i !== activeIndex)
      );
      if (cards.length === 1) {
        // play last card
        setActiveIndex(-1);
      }
    }, 500); // Reset after animation completes
  };

  return (
    <div className="gallery">
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
