import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const nameField = useField("text");
  const emailField = useField("email");
  const passwordField = useField("password");
  const password2Field = useField("password");
  const phone_numberField = useField("text");
  const genderField = useField("text");
  const date_of_birthField = useField("date");
  const membership_statusField = useField("text");
  const { signup } = useSignup(setIsAuthenticated);

  const handleSubmit = () => {
    if (passwordField.value !== password2Field.value) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      name: nameField.value,
      email: emailField.value,
      password: passwordField.value,
      phone_number: phone_numberField.value,
      gender: genderField.value,
      date_of_birth: date_of_birthField.value,
      membership_status: membership_statusField.value
    };

    signup(newUser).then((user) => {
      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        setIsAuthenticated(true);
      }
    });
  };

  return (
    <div className='container m-auto max-w-2xl py-24'>
      <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
        <form>
            <h2 className='text-3xl text-center font-semibold mb-6'>Signup</h2>
            <label className='block text-gray-700 font-bold mb-2'>
                Name:
                <input className='border rounded w-full py-2 px-3 mb-2' {...nameField} />
            </label>
            <br />
            <label className='block text-gray-700 font-bold mb-2'>
                Email:
                <input className='border rounded w-full py-2 px-3 mb-2' {...emailField} />
            </label>
            <br />
            <label className='block text-gray-700 font-bold mb-2'>
                Password:
                <input className='border rounded w-full py-2 px-3 mb-2' {...passwordField} />
            </label>
            <br />
            <label className='block text-gray-700 font-bold mb-2'>
                Confirm Password:
                <input className='border rounded w-full py-2 px-3 mb-2' {...password2Field} />
            </label>
            <br />
            <label className='block text-gray-700 font-bold mb-2'>
                Phone Number:
                <input className='border rounded w-full py-2 px-3 mb-2' {...phone_numberField} />
            </label>
            <br />
            <label className='block text-gray-700 font-bold mb-2'>
                Gender:
                <select className='border rounded w-full py-2 px-3' {...genderField}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
            </label>
            <br />
            <label className='block text-gray-700 font-bold mb-2'>
                Date of Birth:
                <input className='border rounded w-full py-2 px-3 mb-2' {...date_of_birthField} />
            </label>
            <br />
            <label className='block text-gray-700 font-bold mb-2'>
                Membership Status:
                <input className='border rounded w-full py-2 px-3 mb-2' {...membership_statusField} />
            </label>
            <br />
            <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline' onClick={handleSubmit}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
