import { searchMovies } from './api/searchMovies';
import './App.css';
import { FormRicerca } from './components/form_ricerca/FormRicerca';
import { Result } from './components/results/Result'
import { useState } from 'react';

function App() {
  //variabile di stato
  const [results, setResult] = useState(searchMovies());

  const handleClick = (type) => {
    setResult(searchMovies(type));
  }

  return (
    <div className="App">
      {/*si deve usare arrow function quando si deve passare un parametro all' onClick*/}
      <button onClick={() => handleClick("series")}>Cerca serie</button>
      <button onClick={() => handleClick("film")}>Cerca film</button>
      <FormRicerca />
      <Result pages={results.pages} currentPage={results.currentPage} movies={results.movies} />
    </div>
  );
}

export default App;
