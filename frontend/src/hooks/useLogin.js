import useField from './useField';
import axios from 'axios';

const useLogin = ({ setIsAuthenticated }) => {
  const email = useField('text');
  const password = useField('password');

  const handleLogin = async () => {
    try{
        const response = await axios.post('/api/users/login/', {
            email: email.value,
          password: password.value,
        }); 
        console.log("ssss",response.status);
        if(response.status === 200) {
            console.log(response.data.token)
          localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
        //   window.location.replace('/');
        }else{
            console.error('Error logging in');  
        }

    } catch (error) {
        console.error("Error during login:", error);
    }
  };

  return {
    email,
    password,
    handleLogin,
  };
}

export default useLogin;