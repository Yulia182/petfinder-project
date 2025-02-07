import "./PetCard.css";
import Pet from "../models/Pet";
import noImg from "../assets/no-img.png";
import { Link } from "react-router-dom";

interface Props {
  pet: Pet;
}

const PetCard = ({ pet }: Props) => {
  return (
    <div className="PetCard">
      {pet.primary_photo_cropped?.small ? (
        <img src={pet.primary_photo_cropped.small} alt="pet-image" />
      ) : (
        <img src={noImg} alt="image-holder"></img>
      )}
      <p>
        <Link to={`/${pet.id}`}>{pet.name}</Link>
      </p>
      <p>{pet.species}</p>
      <p>
        {pet.breeds.primary}
        {pet.breeds.secondary === null ? "" : `/${pet.breeds.secondary}`}
      </p>
      <p>{pet.size}</p>
      <p>{pet.age}</p>
      <p>
        {pet.contact.address.city}, {pet.contact.address.postcode}
      </p>
    </div>
  );
};

export default PetCard;
