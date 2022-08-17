import { Link } from "react-router-dom";

const DetailsOfAPet = (pet) => {
  return(
    <>
      <h3>{pet.name}</h3>
      <p>Pet counter: {pet.likes} 
        <Link to="#">
          <button className="button">
            <i class="fas fa-heart"></i>
                  Pet
          </button>
        </Link>
      </p>
      <p className="img"><img src={pet.imageURL}/></p>
      <p className="description">{pet.description}</p>
      <div class="pet-info">
          <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
          <Link to="#"><button class="button">Delete</button></Link>
      </div>
    </>
  )
}

export default DetailsOfAPet;