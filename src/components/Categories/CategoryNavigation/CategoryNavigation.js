import { NavLink } from 'react-router-dom';

const CategoryNavigation = () => {
  return (
    <nav className="navbar">
        <ul>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})} to="/categories/all">All</NavLink></li>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})} to="/categories/Cat">Cats</NavLink></li>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})} to="/categories/Dog">Dogs</NavLink></li>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})} to="/categories/Parrot">Parrots</NavLink></li>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})} to="/categories/Reptile">Reptiles</NavLink></li>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})} to="/categories/Other">Other</NavLink></li>
        </ul>
    </nav>
  );
};

export default CategoryNavigation;