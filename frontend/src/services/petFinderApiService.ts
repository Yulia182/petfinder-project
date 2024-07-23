import { Client } from "@petfinder/petfinder-js";
import Pet from "../models/Pet";
import { Filters } from "../pages/PetList";

const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;

const client = new Client({ apiKey, secret: apiSecret });

export const getAnimals = (filters: Filters): Promise<Pet[]> => {
  const defaultLocation = "10001"; //10001 - default location NYC
  const location = filters.location ? filters.location : defaultLocation;
  return client.animal
    .search({
      type: filters.type,
      breed: filters.breed,
      location: location,
      good_with_cats: filters.goodWithCats,
      good_with_dogs: filters.goodWithDogs,
      good_with_children: filters.goodWithKids,
      status: "adoptable",
      distance: 50, // within 50 miles distance
      page: 1,
      limit: 3,
    })
    .then(function (res) {
      console.log(res.data.animals);
      return res.data.animals;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// display animal by id
export const getAnimalById = (id: string): Promise<Pet> => {
  return client.animal
    .show(Number(id))
    .then((res) => {
      console.log(res.data.animal);
      return res.data.animal;
    })
    .catch((err) => console.log(err));
};
// export const getAnimalsByFilter = ():Promise<Pet[]> => {
//   return client.animal.search({
//     type:
//   })
// }
