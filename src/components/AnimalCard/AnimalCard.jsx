
import './AnimalCard.css'; 

const AnimalCard = ({ animal }) => {
  return (
    <div className="animal-card">
      <h2>{animal.name}</h2>
      <p>Species: {animal.species}</p>
      <p>Habitat: {animal.habitat}</p>
      <p>Lifespan: {animal.lifespan} years</p>
      <p>Diet: {animal.diet}</p>
      <ul>
        {animal.funFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <span role="img" aria-label="Emoji">
        {animal.emoji}
      </span>
    </div>
  );
};

export default AnimalCard;

