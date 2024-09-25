import useLogin from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';


const LoginPage = ({ setIsAuthenticated }) => {
    

    
    const {email, password, handleLogin} = useLogin({ setIsAuthenticated });

    console.log('email', email);
    console.log('password   ', password);
    const navigate = useNavigate();
    const submitForm = async (e) => {
        e.preventDefault();
        console.log('submitting form  0');
        try {
            console.log('submitting form  1');
            await handleLogin(); 
            console.log('submitting form 2');
            navigate('/');     
        } catch (error) {
            console.error('Login failed:', error); 
        }
    
    };
    return (
        <div className='container m-auto max-w-2xl py-24'>
            <h2 className='text-3xl text-center font-semibold mb-6'>Login</h2>
            <input className='border rounded w-full py-2 px-3 mb-2' {...email} />
            <input className='border rounded w-full py-2 px-3 mb-2' {...password} />
            <button  className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline' onClick={submitForm}>Login</button>
        </div>

    )
};
export default LoginPage;