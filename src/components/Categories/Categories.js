import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as petsService from '../../services/petsService';
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import PetCard from "../PetCard/PetCard";

export default function Categories() {
  const { category } = useParams();

  const [pets, setPets] = useState([]);
  
  useEffect(() => {
      petsService.getAll(category)
        .then(res => setPets(res))
  }, [category]);

    return (
      <section className="dashboard">
      <h1>Dashboard</h1>
      <CategoryNavigation/>
      <ul className="other-pets-list">
        {pets.map(x => 
          <PetCard key={x.id} {...x}/>  
        )}
      </ul>
      </section>
    )
  
};