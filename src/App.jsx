import AnimalList from './components/AnimalList/AnimalList';
import animals from './components/data/animals';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <h1>Animal Database</h1>
      <AnimalList animals={animals} />
    </div>
  );
};

export default App;
