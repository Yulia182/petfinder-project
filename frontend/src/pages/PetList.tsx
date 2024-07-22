import "./PetList.css";
import { getAnimals } from "../services/petFinderApiService";
import PetCard from "../components/PetCard";
import Pet from "../models/Pet";
import { useEffect, useState } from "react";

const PetList = () => {
  const [results, setResults] = useState<Pet[]>([]);

  useEffect(() => {
    getAnimals().then((res) => {
      setResults(res);
    });
  }, []);
  return (
    <div className="PetList">
      {results.map((pet) => {
        return <PetCard key={pet.id} pet={pet} />;
      })}
    </div>
  );
};

export default PetList;
