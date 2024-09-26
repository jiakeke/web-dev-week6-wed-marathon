import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import SignupComponent from './components/Signup';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );
  // Add New Job

  const addJob = async (newJob) => {
    if(isAuthenticated){
      const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(newJob),
      
    });
    }else{
      navigate('/login');   
    }
    
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {

    if(isAuthenticated){
      const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    }
    else{
      navigate('/login');   
    }
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    if(isAuthenticated){
      const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(job),
    });   
    }else{
      navigate('/login');   
    }
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated} />}>
        <Route index element={<HomePage isAuthenticated={isAuthenticated} />} />
        <Route path='/jobs' element={<JobsPage  isAuthenticated={isAuthenticated} />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}  />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob}  />}
          loader={jobLoader}
        />
        <Route
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob}  />}
          loader={jobLoader}
        />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/signup' element={<SignupComponent 
          setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path='/login' element={<LoginPage 
          setIsAuthenticated={setIsAuthenticated} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
