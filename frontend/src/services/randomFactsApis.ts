import axios from "axios";
const dogFactUrl = "https://dog-api.kinduff.com//api/facts";
const catFactUrl = "https://meowfacts.herokuapp.com/";

export const getRandomDogFact = (): Promise<any> => {
  return axios
    .get(dogFactUrl)
    .then((res) => res.data.facts)
    .catch((err) => console.log(err));
};

export const getRandomCatFact = (): Promise<any> => {
  return axios
    .get(catFactUrl)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => console.log(err));
};
