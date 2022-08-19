import { useParams } from "react-router-dom";
import DetailsOfAPet from './DetailsOfAPet/DetailsOfAPet';

const PetDetails = () => {
  const { petId } = useParams();

  return (
    <section className="detailsOtherPet">
        <DetailsOfAPet key={petId} id={petId}/>
    </section>
  )
}

export default PetDetails;