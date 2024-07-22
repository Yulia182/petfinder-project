import "./Home.css";
import { useEffect, useState } from "react";
import Pet from "../models/Pet";
import {
  getRandomCatFact,
  getRandomDogFact,
} from "../services/randomFactsApis";
import { getAnimals } from "../services/petFinderApiService";
import PetCard from "../components/PetCard";

const Home = () => {
  const [results, setResults] = useState<Pet[]>([]);
  const [dogFact, setDogFact] = useState<string>("np");
  const [catFact, setCatFact] = useState<string>("");

  useEffect(() => {
    getAnimals().then((res) => {
      setResults(res);
    });
  }, []);

  const getRandomFactOnClick = () => {
    getRandomDogFact().then((res) => {
      setDogFact(res);
      console.log(res);
    });
  };

  const getRandomCatFactOnClick = () => {
    getRandomCatFact().then((res) => {
      setCatFact(res);
      console.log(res);
    });
  };
  return (
    <div className="Home">
      {results.map((pet) => (
        <PetCard key={pet.id} />
      ))}
      <button onClick={getRandomFactOnClick}>
        Get a random fact about dog
      </button>
      <p>{dogFact}</p>
      <button onClick={getRandomCatFactOnClick}>Random cat fact</button>
      <p>{catFact}</p>
    </div>
  );
};

export default Home;
