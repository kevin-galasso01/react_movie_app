import { searchMovies } from './api/searchMovies';
import './App.css';
import {FormRicerca} from './components/form_ricerca/FormRicerca';
import {Result} from './components/results/Result'

function App() {
  const results = searchMovies();
  
  return (
    <div className="App">
      <FormRicerca />
      <Result pages = {results.pages} currentPage = {results.currentPage} movies = {results.movies}/>
    </div>
  );
}

export default App;
