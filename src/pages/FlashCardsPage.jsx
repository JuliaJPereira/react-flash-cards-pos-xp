import FlashCard from '../components/FlashCard';
import Header from './../components/Header';
import Main from './../components/Main';
import { allFlashCards } from '../data/allFlashCards';

export default function FlashCardsPage() {
  return (
    <>
      <Header>react-flash-cards</Header>
      <Main>
        <FlashCard />
        <FlashCard title="React" description="Biblioteca para Front-End" />
      </Main>
    </>
  );
}
