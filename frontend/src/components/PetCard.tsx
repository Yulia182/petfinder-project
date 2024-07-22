import "./PetCard.css";
import Pet from "../models/Pet";
import noImg from "../assets/no-img.png";

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
      <p>{pet.name}</p>
      <p>{pet.species}</p>
      <p>
        {pet.breeds.primary}/{pet.breeds.secondary}
      </p>
      <p>{pet.size}</p>
      <p>{pet.age}</p>
    </div>
  );
};

export default PetCard;
