import { SwipeGallery } from "./components/SwipeGallery";
import { card } from "./components/types";
const cards: card[] = [
  {
    name: "Thumber",
    description:
      "force a player to throw a thumber on the next throw (outside C1)",
    image: "/images/01.jpg",
    type: "attack",
  },
  {
    name: "Shield",
    description: "The next you play can not be canceled or redirected",
    image: "/images/02.jpg",
    type: "special",
  },
  {
    name: "Cancel shot",
    description: "Cancel a shot",
    image: "/images/03.jpg",
    type: "attack",
  },
  {
    name: "Cancel card",
    description: "Cancel a card",
    image: "/images/04.jpg",
    type: "defense",
  },
  {
    name: "Swap lie",
    description: "Choose two opponents, swap their lies",
    image: "/images/05.jpg",
    type: "special",
  },
  {
    name: "lefty",
    description: "force a player to play the next hole lefty",
    image: "/images/06.jpg",
    type: "attack",
  },
];

function App() {
  return (
    <div className="container">
      <SwipeGallery deck={cards} />
    </div>
  );
}

export default App;
