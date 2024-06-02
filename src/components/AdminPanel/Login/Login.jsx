import axios from 'axios';
import { useContext, useState } from "react";
import { AuthContext } from '../../../pages/Page';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  let [error, setError] = useState(false);
  let { setLoggedIn } = useContext(AuthContext);
  let navigate = useNavigate();


  async function handleSubmitLogin(e) {
    e.preventDefault();
    const formData = {
      "email": e.target.email.value,
      "password": e.target.password.value
    };

    await axios.post("http://localhost:3005/login", formData)
      .then(res => {
        setLoggedIn(true);
        navigate("/admin/home");
      })
      .catch(error => {
        setError(true);
        console.error('Error:', error);
      });
  }

  return (
    <div className=" bg-gray-100 h-screen w-screen">
      <div className="flex h-[450px] w-[350px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-1 flex-col bg-white justify-center px-6 py-12 lg:px-8 *:font-sans rounded-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.group-ucs.com/assets/images/logo/UCS-LOGO.jpg"
            alt="Your Company"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmitLogin}>
            <div>
              <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-left font-medium leading-6 text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm duration-300 hover:bg-[#969696] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>


        </div>
        {error &&
          <div className="mt-2 text-sm text-red-500">
            Wrong email or password , Try Again
          </div>
        }
      </div>
    </div>
  )
}
