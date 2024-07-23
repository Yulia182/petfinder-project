import "./PetList.css";
import { getAnimals } from "../services/petFinderApiService";
import PetCard from "../components/PetCard";
import Pet from "../models/Pet";
import { useEffect, useState } from "react";

// interface for filters
export interface Filters {
  type: string | null;
  breed: string;
  location: string;
  goodWithCats: boolean | null;
  goodWithDogs: boolean | null;
  goodWithKids: boolean | null;
}

const PetList = () => {
  const [results, setResults] = useState<Pet[]>([]);

  //controlled components
  const [type, setType] = useState<string | null>(null);
  const [breed, setBreed] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [isCheckedCats, setIsCheckedCats] = useState<boolean>(false);
  const [isCheckedDogs, setIsCheckedDogs] = useState<boolean>(false);
  const [isCheckedKids, setIsCheckedKids] = useState<boolean>(false);

  const [filters, setFilters] = useState<Filters>({
    type: type,
    breed: breed,
    location: location,
    goodWithCats: null,
    goodWithDogs: null,
    goodWithKids: null,
  });

  useEffect(() => {
    getAnimals(filters).then((res) => {
      setResults(res);
    });
  }, [filters]); // rerenders every time filters change

  // searchHandler() function to search for pets by filters
  const searchHandler = () => {
    const defaultLocation = "10001"; // NYC
    setFilters({
      type: type,
      breed: breed,
      location: location ? location : defaultLocation,
      goodWithCats: isCheckedCats ? true : null,
      goodWithDogs: isCheckedDogs ? true : null,
      goodWithKids: isCheckedKids ? true : null,
    });
  };
  console.log(filters);
  return (
    <>
      <p>Filters:</p>
      <form>
        <label htmlFor="type">Type:</label>
        <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
          <option value="">Any</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          name="breed"
          id="breed"
          placeholder="Enter full name"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <label htmlFor="location">Postal Code</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="10001"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="goodWithCats">Good with Other Cats</label>
        <input
          type="checkbox"
          name="goodWithCats"
          id="goodWithCats"
          checked={isCheckedCats}
          onChange={(e) => {
            setIsCheckedCats(e.target.checked);
          }}
        />
        <label htmlFor="goodWithDogs">Good with Other Dogs</label>
        <input
          type="checkbox"
          name="goodWithDogs"
          id="goodWithDogs"
          checked={isCheckedDogs}
          onChange={(e) => {
            setIsCheckedDogs(e.target.checked);
          }}
        />
        <label htmlFor="goodWithKids">Good with kids</label>
        <input
          type="checkbox"
          name="goodWithKids"
          id="goodWithKids"
          checked={isCheckedKids}
          onChange={(e) => {
            setIsCheckedKids(e.target.checked);
          }}
        />
        <button type="button" onClick={searchHandler}>
          Search
        </button>
      </form>
      <div className="PetList">
        {results ? (
          results.map((pet) => {
            return <PetCard key={pet.id} pet={pet} />;
          })
        ) : (
          // if no match found
          <div>No pets found that match your criteria.</div>
        )}
        {}
      </div>
    </>
  );
};

export default PetList;
