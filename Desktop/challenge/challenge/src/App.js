
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Component/Navbar"
import Footer from "./Component/Footer"
import MovieList from './Component/MovieList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
