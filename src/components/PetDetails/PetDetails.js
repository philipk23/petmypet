import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as petsService from '../../services/petsService';
import DetailsOfAPet from './DetailsOfAPet/DetailsOfAPet';

const PetDetails = () => {
  const { petId } = useParams();

  const [pet, setPet] = useState();

  useEffect(() => {
    petsService.getOne(petId)
      .then(res => setPet(res))
  }, [petId]);

  return (
    <section className="detailsOtherPet">
        <DetailsOfAPet key={petId} {...pet}/>
    </section>
  )
}

export default PetDetails;