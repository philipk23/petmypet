const url = 'http://localhost:5000/pets';

export const getAll = (category = '') => {

  let petsUrl = url + ((category && category !== 'all') ? `?category=${category}` : '');

  return fetch(petsUrl)
          .then(res => res.json())
          .catch(error => console.log(error))
}

export const getOne = (petId) => {
  let petUrl = `${url}/${petId}`;

  return fetch(petUrl)
          .then(res => res.json())
          .catch(err => console.log(err));
}