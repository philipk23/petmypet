import { Route, Routes } from 'react-router-dom';

import Heather from './components/Heather/Heather';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import CreatePet from './components/CreatePet/CreatePet';
import './App.css';

function App() {
  return (
    <div className="container">
      <Heather/>

      <Routes>
        <Route path="/" element={<Categories/>}/>
        <Route path="/categories/:category" element={<Categories/>}/>
        <Route path="/pets/details/:petId" element={<PetDetails/>}/>
        <Route path="/pets/details/:petId/edit" element={<EditPetDetails/>}/>
        <Route path="/pets/create" element={<CreatePet/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
