
import './App.css';
import { useEffect, useState } from "react"
import SearchIcon from "./search.svg"
import { MovieCard } from './movieCard';
// 6b3ad9db
const ApiUrl = "http://www.omdbapi.com?apikey=6b3ad9db"
// const movie1 = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearch] = useState("")


  const searchMovies = async (titel) => {

    // this is going to call our api
    const response = await fetch(`${ApiUrl}&s=${titel}`)
    const data = await response.json();

    setMovies(data.Search);

  }

  useEffect(() => {
    searchMovies("Avatar")
  }, []);
  return (
    <div className="app">

      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder="search your movie here"
          value={searchItem}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchItem)}
        />

      </div>
      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No result</h2>

          </div>
        )
      }



    </div>
  );
}

export default App;
