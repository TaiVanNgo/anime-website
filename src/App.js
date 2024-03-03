import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimeItem from './Components/AnimeItem';
import HomePage from './Components/HomePage';
import CharacterGallery from './Components/CharacterGallery';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/anime/:id' element={<AnimeItem />} />
        <Route path='/anime/:id/character/:characterID' element={<CharacterGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
