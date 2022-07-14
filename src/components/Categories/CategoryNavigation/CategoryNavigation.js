import { NavLink } from 'react-router-dom';

const CategoryNavigation = () => {
  return (
    <nav className="navbar">
        <ul>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})} to="/categories/all">All</NavLink></li>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})}  to="/categories/cats">Cats</NavLink></li>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})}  to="/categories/dogs">Dogs</NavLink></li>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})}  to="/categories/parrots">Parrots</NavLink></li>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})}  to="/categories/reptiles">Reptiles</NavLink></li>
            <li><NavLink style={({ isActive }) => ({background: isActive ? 'lightgreen' : undefined})}  to="/categories/other">Other</NavLink></li>
        </ul>
    </nav>
  );
};

export default CategoryNavigation;