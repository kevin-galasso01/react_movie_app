import './App.css';
import FormRicerca from './components/form_ricerca/FormRicerca';
import Result from './components/results/Result'
import Pages from './components/pages/Pages'

function App() {
  return (
    <div className="App">
      <FormRicerca />
      <Result/>
      <Pages />
    </div>
  );
}

export default App;
