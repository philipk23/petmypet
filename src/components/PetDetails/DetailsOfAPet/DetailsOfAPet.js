import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as petsService from '../../../services/petsService';

const DetailsOfAPet = ({
  id
}) => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    petsService.getOne(id)
      .then(res => setPet(res))
  }, [id]);

  const onPetButtonClickHandler = () => {
    let incrementedLikes = Number(pet.likes) + 1;

    petsService.pet(pet.id, incrementedLikes)
      .then(updatedPet => {
        setPet(updatedPet);
      })

  }

  return(
    <>
      <h3>{pet.name}</h3>
      <p>Pet counter: {pet.likes} 
          <button className="button" onClick={onPetButtonClickHandler}>
            <i class="fas fa-heart"></i>
                  Pet
          </button>
      </p>
      <p className="img"><img src={pet.imageURL} alt=""/></p>
      <p className="description">{pet.description}</p>
      <div className="pet-info">
          <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
          <Link to="#"><button class="button">Delete</button></Link>
      </div>
    </>
  )
}

export default DetailsOfAPet;