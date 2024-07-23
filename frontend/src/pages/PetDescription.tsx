import { useParams } from "react-router-dom";
import { getAnimalById } from "../services/petFinderApiService";
import "./PetDescription.css";
import { useEffect, useState } from "react";
import Pet from "../models/Pet";

const PetDescription = () => {
  const { id } = useParams<string>();
  const [petDetails, setPetDetails] = useState<Pet | undefined>();

  useEffect(() => {
    getAnimalById(id!).then((res) => {
      setPetDetails(res);
      console.log(petDetails);
    });
  }, [id]);

  return (
    <div className="PetDescription">
      <img src={petDetails?.primary_photo_cropped?.small} alt="" />
      <p>{petDetails?.name}</p>
      <p>{petDetails?.gender}</p>
      <p>{petDetails?.description}</p>
      <p>
        Character:{" "}
        {petDetails?.tags.map((tag, index) => {
          return (
            <span key={index}>
              {tag}
              {index === petDetails.tags.length - 1 ? "." : ", "}
            </span>
          );
        })}
      </p>
      <p>Size: {petDetails?.size}</p>
      <p>
        Breeds: {petDetails?.breeds.primary}
        {petDetails?.breeds.secondary === null
          ? ""
          : `/${petDetails?.breeds.secondary}`}
      </p>
      <p>
        Environmet: {petDetails?.environment.cats ? "cats, " : ""}
        {petDetails?.environment.dogs ? "dogs, " : ""}
        {petDetails?.environment.children ? "children." : ""}
      </p>
      <p>Status: {petDetails?.status}</p>
      <p>
        Contact information: {petDetails?.contact.email}{" "}
        {petDetails?.contact.phone}
      </p>
      <p>
        Address: {petDetails?.contact.address.address1}{" "}
        {petDetails?.contact.address.city} {petDetails?.contact.address.state}
      </p>
      {/* map through array of photos if that array is not empty */}
      <section className="photo-array">
        {petDetails?.photos && petDetails?.photos.length > 0
          ? petDetails?.photos.map((photo, index) => (
              <img key={index} src={photo.small} alt="" />
            ))
          : "No additional pictures available."}
      </section>
    </div>
  );
};

export default PetDescription;
