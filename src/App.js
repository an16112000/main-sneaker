import MenuSneakers from './LayOut/menuSneaker/MenuSneakers';
import DetailSneaker from './LayOut/detailSneaker/DetailSneaker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './LayOut/home/Home';
import ErrorPage from './LayOut/errorPage/ErrorPage';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:sneakerId/:sneakerSize' element={<DetailSneaker />} errorElement={<ErrorPage />} />
          <Route path='/:typeOfProduct/page/:pageNumber' element={<MenuSneakers />} errorElement={<ErrorPage />} />
        </Routes>

      </div>
      
    </Router>
  );
}

export default App;
