import { Client } from "@petfinder/petfinder-js";
import Pet from "../models/Pet";

const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;

const client = new Client({ apiKey, secret: apiSecret });

export const getAnimals = (): Promise<Pet[]> => {
  return client.animal
    .search({
      // type: "Dog",
      // breed: "Bernedoodle",
      page: 1,
      limit: 2,
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
