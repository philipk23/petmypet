import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as petsService from '../../services/petsService';
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import Pet from "../Pet/Pet";

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
          <Pet key={x.id} {...x}/>  
        )}
      </ul>
      </section>
    )
  
};