import { Client } from "@petfinder/petfinder-js";
import Pet from "../models/Pet";
import { Filters } from "../pages/PetList";

const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;

const client = new Client({ apiKey, secret: apiSecret });

export const getAnimals = (filters: Filters): Promise<Pet[]> => {
  return client.animal
    .search({
      type: filters.type,
      breed: filters.breed,
      location: filters.location,
      good_with_cats: filters.goodWithCats,
      good_with_dogs: filters.goodWithDogs,
      good_with_children: filters.goodWithKids,
      status: "adoptable",
      page: 1,
      limit: 10,
    })
    .then(function (res) {
      console.log(res.data.animals);
      return res.data.animals;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// export const getAnimalsByFilter = ():Promise<Pet[]> => {
//   return client.animal.search({
//     type:
//   })
// }
