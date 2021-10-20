import './App.css';
import {FormRicerca} from './components/form_ricerca/FormRicerca';
import {Result} from './components/results/Result'

function App() {
  const results = {
    movies: [],
    pages : 10,
    currentPage: 1
  }

  return (
    <div className="App">
      <FormRicerca />
      <Result pages = {results.pages} currentPage = {results.currentPage} movies = {results.movies}/>
    </div>
  );
}

export default App;
