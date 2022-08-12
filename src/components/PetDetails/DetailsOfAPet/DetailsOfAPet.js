import { Link } from "react-router-dom";

const DetailsOfAPet = (pet) => {
  return(
    <>
      <h3>{pet.name}</h3>
      <p>Pet counter: {pet.likes} <a href="#"><button className="button"><i class="fas fa-heart"></i>
                  Pet</button></a>
      </p>
      <p className="img"><img src={pet.imageURL}/></p>
      <p className="description">{pet.description}</p>
    </>
  )
}

export default DetailsOfAPet;