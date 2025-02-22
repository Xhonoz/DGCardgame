import { SwipeGallery } from "./components/SwipeGallery";
import { card } from "./components/types";
const cards: card[] = [
  {
    name: "Thumber",
    description:
      "force a player to throw a thumber on the next throw (outside C1)",
    image: "/images/thumb.jpg",
    type: "attack",
  },
  {
    name: "Shield",
    description: "The next card you play can not be canceled or redirected",
    image: "/images/shield.jpg",
    type: "defense",
  },
  {
    name: "Shield",
    description: "The next card you play can not be canceled or redirected",
    image: "/images/shield.jpg",
    type: "defense",
  },
  {
    name: "Shield",
    description: "The next card you play can not be canceled or redirected",
    image: "/images/shield.jpg",
    type: "defense",
  },
  {
    name: "Cancel shot",
    description: "Cancel a shot",
    image: "/images/cancel-throw.webp",
    type: "special",
  },
  {
    name: "Cancel shot",
    description: "Cancel a shot",
    image: "/images/cancel-throw.webp",
    type: "special",
  },
  {
    name: "Cancel shot",
    description: "Cancel a shot",
    image: "/images/cancel-throw.webp",
    type: "special",
  },
  {
    name: "Cancel card",
    description: "Cancel a card played on you",
    image: "/images/cancel-card.webp",
    type: "defense",
  },
  {
    name: "Cancel card",
    description: "Cancel a card played on you",
    image: "/images/cancel-card.webp",
    type: "defense",
  },
  {
    name: "Swap lie",
    description: "After all tee shots: Choose two players, swap their lies",
    image: "/images/swap.jpg",
    type: "special",
  },
  {
    name: "Swap lie",
    description: "After all tee shots: Choose two players, swap their lies",
    image: "/images/swap.jpg",
    type: "special",
  },
  {
    name: "lefty",
    description:
      "force a player to play the next hole with their none dominant hand",
    image: "/images/lefty.jpg",
    type: "attack",
  },
  {
    name: "lefty",
    description:
      "force a player to play the next hole with their none dominant hand",
    image: "/images/lefty.jpg",
    type: "attack",
  },
  {
    name: "Reposition lie",
    description:
      "reposition a players lie by 10 or less meters in any direction (including T shots)",
    image: "/images/cheate.jpg",
    type: "special",
  },
  {
    name: "Uno Reverse",
    description:
      "If a player played a card on you, you play that card on them instead",
    image: "/images/reverse.webp",
    type: "defense",
  },
  {
    name: "No choice",
    description:
      "force a player to play with only one disc of your choice (from their bag)",
    image: "/images/no-choice.jpg",
    type: "attack",
  },
  {
    name: "No choice",
    description:
      "force a player to play with only one disc of your choice (from their bag)",
    image: "/images/no-choice.jpg",
    type: "attack",
  },
  {
    name: "Best shot",
    description: "You play best shot on the next shot",
    image: "/images/self-five.jpg",
    type: "support",
  },
  {
    name: "Worst shot",
    description:
      "Choose a player, that player plays worst shot on the next shot",
    image: "/images/worst-shot.jpg",
    type: "attack",
  },
  {
    name: "Best shot",
    description: "You play best shot on the next shot",
    image: "/images/self-five.jpg",
    type: "support",
  },
  {
    name: "Worst shot",
    description:
      "Choose a player, that player plays worst shot on the next shot",
    image: "/images/worst-shot.jpg",
    type: "attack",
  },
  {
    name: "Roller",
    description:
      "Force a player to throw a roller on their next shot (outside C1)",
    image: "/images/rollin.jpg",
    type: "attack",
  },
  {
    name: "Scooby dooby doo!",
    description: "Force a player to throw a scoober on their next shot",
    image: "/images/scooby.jpg",
    type: "attack",
  },
  {
    name: "Tomahawk",
    description: "Force a player to throw a Tomahawk on their next shot",
    image: "/images/tomahawk.webp",
    type: "attack",
  },
  {
    name: "Grenade",
    description: "Force a player to throw a Grenade on their next shot",
    image: "/images/grenade.webp",
    type: "attack",
  },
  {
    name: "Turbo boost",
    description:
      "Force a player to throw a Turbo put on their next put (Inside C1)",
    image: "/images/turbo.webp",
    type: "attack",
  },
  {
    name: "Stop hitting yourself",
    description: "Force a player to play a red card on them self if possible",
    image: "/images/hitting.gif",
    type: "attack",
  },
  {
    name: "Stop hitting yourself",
    description: "Force a player to play a red card on themself if possible",
    image: "/images/hitting.gif",
    type: "attack",
  },
  {
    name: "Forced aid",
    description: "Force a player to play a green card on you if possible",
    image: "/images/aid.png",
    type: "attack",
  },
  {
    name: "Metal hit",
    description: "On the next shot, a metal hit counts as a make",
    image: "/images/metal.jpg",
    type: "support",
  },
  {
    name: "Throw to self",
    description:
      "On the next throw, you can attempt to catch your disc before it hits the ground, if you succeed the throw does not add to your total throws andour new lie is where you caught the disc, if you don't suceed play from where the disc end up",
    image: "/images/throw-to-self.png",
    type: "support",
  },
  {
    name: "Team up",
    description: "Choose a player, you two play best of doubles",
    image: "/images/teamup.gif",
    type: "support",
  },
  {
    name: "Flogcsid",
    description:
      "Choose a player, that player plays the hole in reverse (tee off within 3 meters of the basket, and you finish the hole when the disc comes to rest on the teepad)",
    image: "/images/michael-jackson-dancing.gif",
    type: "special",
  },
  {
    name: "High risk High reward",
    description:
      "On alle shots on the next hole you must throw the disc upside down, at the end of the your score if cut in half (rounded up)",
    image: "/images/risk.jpg",
    type: "support",
  },
  {
    name: "Bet on yourself",
    description: "Before tee: if you bidrie the next hole, draw 2 cards",
    image: "/images/Allin.jpg",
    type: "support",
  },
  {
    name: "Double it and give it to the next person",
    description:
      "When someone plays a red card on you add another red card from your hand and play them both on a third person",
    image: "/images/money.jpg",
    type: "defense",
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
