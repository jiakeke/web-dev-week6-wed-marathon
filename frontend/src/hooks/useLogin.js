import useField from './useField';

const useLogin = () => {
  const username = useField('text');
  const password = useField('password');

  const handleLogin = async () => {
    try{
        const response = await axios.post('/api/login/', {
          username: username.value,
          password: password.value,
        });

        if(response.status === 200) {
          localStorage.setItem('token', response.data.access);
          localStorage.setItem('refresh', response.data.refresh);
          window.location.replace('/');
        }else{
            console.error('Error logging in');  
        }

    } catch (error) {
        console.error("Error during login:", error);
    }
  };

  return {
    username,
    password,
    handleLogin,
  };
}

export default useLogin;