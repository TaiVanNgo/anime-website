import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Popular from './Components/Popular';
import AnimeItem from './Components/AnimeItem';
import HomePage from './Components/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/anime/:id' element={<AnimeItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
