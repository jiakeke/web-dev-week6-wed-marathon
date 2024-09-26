import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const MainLayout = ({isAuthenticated
  ,setIsAuthenticated}) => {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}/>
      <Outlet />
      <ToastContainer />
    </>
  );
};
export default MainLayout;
