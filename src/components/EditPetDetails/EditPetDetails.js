import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as petsService from '../../services/petsService';

import InputError from '../Shared/InputError/InputError';

const EditPetDetails = () => {
  const [ pet, setPet ] = useState({});
  const [ errorMessage, setErrorMessage ] = useState('');
  const navigate = useNavigate();

  let petId = useParams().petId;

  useEffect(() => {
    petsService.getOne(petId)
                .then(res => setPet(res));
  },[petId])

  const onDescriptionSaveSubmit = (e) => {
    e.preventDefault();

    let updatedPet = {...pet, description: e.target.description.value};

    petsService.update(petId, updatedPet)
      .then(res => {
        navigate(`/pets/details/${petId}`)
      })
  }

  const onDescriptionChangeHandler = (e) => {

    if (e.target.value.length < 10) {
      setErrorMessage('Description too short');
    }else {
      setErrorMessage('');
    }
  }
 
  return (
    <section className="detailsMyPet">
        <h3>{pet.name}</h3>
        <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
        <p className="img"><img src={pet.imageURL} /></p>
        <form onSubmit={onDescriptionSaveSubmit}>
            <textarea type="text" name="description" onBlur={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
            <InputError>{errorMessage}</InputError>
            <button className="button"> Save</button>
        </form>
    </section>
  );
}

export default EditPetDetails;