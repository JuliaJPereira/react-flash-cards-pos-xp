import FlashCard from '../components/FlashCard';
import Header from './../components/Header';
import Main from './../components/Main';
import { allFlashCards } from '../data/allFlashCards';
import FlashCards from '../components/FlashCards';
import Button from '../components/Button';
import { useState } from 'react';
import { helperShuffleArray } from '../helpers/arrayHelpers';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards);
    setAllCards(shuffledCards);
  }
  return (
    <>
      <Header>react-flash-cards</Header>
      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
        </div>
        <FlashCards>
          {allCards.map(({ id, title, description }) => {
            return (
              <FlashCard key={id} title={title} description={description} />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
