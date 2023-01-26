import { NavLink } from 'react-router-dom';
import { BiTrendingUp } from 'react-icons/bi';
import { IoCreateOutline } from 'react-icons/io5';
import { BiPoll } from 'react-icons/bi';
const Menu = () => {
  return (
    <nav className="page-links">
      <NavLink
        style={({ isActive }) => (isActive ? { color: 'white' } : {})}
        className="page-link"
        to="."
        end
      >
        <BiTrendingUp size={30} />
        <p>Trending polls</p>
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? { color: 'white' } : {})}
        className="page-link"
        to="yourpolls"
      >
        <IoCreateOutline size={30} />
        <p>Your Polls</p>
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? { color: 'white' } : {})}
        className="page-link"
        to="createpoll"
      >
        <BiPoll size={30} />
        <p>Create Polls</p>
      </NavLink>
    </nav>
  );
};

export default Menu;
