import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import TopMovies from './components/TopMovies/TopMovies';
import TrendingMovies from './components/TrendingMovies/Trending';
import NewRelease from './components/NewRelease/NewRelease';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <TopMovies />
      <TrendingMovies />
      <NewRelease />
      <Footer />
    </div>
  );
}

export default App;
