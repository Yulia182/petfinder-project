import "./Home.css";
import { useState } from "react";
import {
  getRandomCatFact,
  getRandomDogFact,
} from "../services/randomFactsApis";
import { Link } from "react-router-dom";

const Home = () => {
  const [dogFact, setDogFact] = useState<string>("");
  const [catFact, setCatFact] = useState<string>("");
  const [isDogFactVisible, setIsDogFactVisible] = useState<boolean>(true);

  const getRandomDogFactOnClick = () => {
    getRandomDogFact().then((res) => {
      setDogFact(res);
      setIsDogFactVisible(true);
      console.log(res);
    });
  };

  const getRandomCatFactOnClick = () => {
    getRandomCatFact().then((res) => {
      setCatFact(res);
      setIsDogFactVisible(false);
      console.log(res);
    });
  };

  return (
    <div className="Home">
      <h2>
        Welcome to PawFinder—where finding your perfect furry companion is just
        a click away. My website is dedicated to matching loving families with
        pets in need, ensuring every adoption is a joyful experience. Explore
        the website to meet adorable pets and find your new best friend today!
      </h2>
      <h3>Click below to learn random facts about your favorite Pet!</h3>
      <button onClick={getRandomDogFactOnClick}>
        Get a random fact about dog
      </button>
      <button onClick={getRandomCatFactOnClick}>Random cat fact</button>

      {isDogFactVisible ? <p>{dogFact}</p> : <p>{catFact}</p>}

      <h3>Find your next friend!</h3>
      <div>
        <Link to="/petSearch">Search by filter</Link>
      </div>
      <div>
        <Link to="/petQuiz">
          Take a quiz to find the best match for yourself!
        </Link>
      </div>
    </div>
  );
};

export default Home;
