
import AnimalCard from '../AnimalCard/AnimalCard';
import './AnimalList.css'; 
// ...

const AnimalList = ({ animals }) => {
  return (
    <div className="animal-list">
      {animals.map((animal, index) => (
        <AnimalCard key={index} animal={animal} />
      ))}
    </div>
  );
};

export default AnimalList;
