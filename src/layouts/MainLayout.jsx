import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
const MainLayout = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
    </div>
  );
};

export default MainLayout;
