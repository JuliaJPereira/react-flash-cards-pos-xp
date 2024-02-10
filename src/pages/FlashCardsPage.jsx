import FlashCard from '../components/FlashCard';
import Header from './../components/Header';
import Main from './../components/Main';
import { allFlashCards } from '../data/allFlashCards';
import FlashCards from '../components/FlashCards';
import Button from '../components/Button';
import { useState } from 'react';
import { helperShuffleArray } from '../helpers/arrayHelpers';
import RadioButton from '../components/RadioButton';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [showTitle, setShowTitle] = useState(false);

  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards);
    setAllCards(shuffledCards);
  }

  function handleRadioShowTitleClick() {
    setShowTitle(true);
  }

  function handleRadioShowDescriptionClick() {
    setShowTitle(false);
  }

  return (
    <>
      <Header>react-flash-cards</Header>
      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            buttonChecked={showTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar título
          </RadioButton>
          <RadioButton
            id="radioButtonShowDescription"
            name="showInfo"
            buttonChecked={!showTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar descrição
          </RadioButton>
        </div>
        <FlashCards>
          {allCards.map(({ id, title, description }) => {
            return (
              <FlashCard
                key={id}
                title={title}
                description={description}
                showFlashCardTitle={showTitle}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
