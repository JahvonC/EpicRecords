import './App.css';
import ArtistPane from './components/ArtistPane';
import Bar from './components/Bar';
import ControlledCarousel from './components/Carousel';

import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <ControlledCarousel/>
    <Bar/>
    <ArtistPane/>
     </>
  );
}

export default App;
