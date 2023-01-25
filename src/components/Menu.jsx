import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        trending polls
      </NavLink>
      <NavLink to="yourpolls">Your Polls</NavLink>
      <NavLink to="createpoll">Create Polls</NavLink>
    </nav>
  );
};

export default Menu;
