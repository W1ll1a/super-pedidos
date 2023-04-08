import { React, useState } from 'react'
import DatePicker from "tailwind-datepicker-react";
import Link from "next/link";
import axios from 'axios';
import moment from 'moment'
import { uploadFile } from '@/firebase/fbConfigProfile';





const register = () => {
    /*const [selectedDate, setSelectedDate] = useState();*/
    const [show, setShow] = useState();
    const [selected, setSelected]=useState()
    const [file, setFile] = useState('')
    const [registro, setRegistro]=useState({
        firstName:"",
        lastName:"",
        emailAdress:"",
        userName:"",
        password:"",
        birthDate:"",
        profilePicture:""

    })
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
    
    const handleChange = ({target:{name,value}}) => {
      setRegistro({...registro,[name]:value});
    };
    const dateHandleChange = (newValue) => {
        setSelected(newValue);
      };
    
 
    const options = {
        maxDate: new Date("2004-01-01"),
        minDate: new Date("1980-01-01"),
        clearBtn: true,
        autoHide: true,
        todayBtn: false,
        defaultDate: "",
        language: "es",
      };
      const handleSubmit = async(e) =>{
        e.preventDefault()
        const image = await uploadFile(file);
        const registerData = {
          ...registro,
          profilePicture: image,
          birthDate:selected
        }
        const res =await axios.post('/api/register/registerApi', registerData)
        
      }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <span className="flex items-center text-2xl font-semibold mb-16 text-gray-900 dark:text-white">
        <img src="/logo.png" alt="logo" />
      </span>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit}
            
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-3 px-4 mb-3 leading-tight"
                  id="firstName"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  // pattern="/^(?!\s)[a-zA-Z]+(?<!\s)$"
                  // pattern="[^' ']+"
                  // pattern="[A-Za-z]+"
                  
                  title="Please enter a valid name | No symbols, numbers, or spaces"
                  minLength="3"
                  required
                  placeholder="Jane"
                  
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="appearance-none block w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-3 px-4 mb-3 leading-tight"
                  placeholder="Doe"
                  onChange={handleChange}

                  minLength="2"
                  
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                name="emailAdress"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                onChange={handleChange}
                
                // pattern="^[a-zA-Z]+[a-zA-Z0-9_-]*@([a-zA-Z0-9]+){1}(\.[a-zA-Z0-9]+){1,2}"
                pattern="^[a-zA-Z]+[a-zA-Z0-9_-]*@([a-zA-Z0-9]+){1}(\.[a-zA-Z]+){1,2}"
                minLength="3"
                required
              />
            </div>
            <div>
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                name="userName"
                id="username"
                placeholder="FluffyPancakes"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}
                minLength="3"
                maxLength="12"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}
                pattern="[a-zA-Z0-9]{1,16}"
                minLength="8"
                required
              />
            </div>
            <div>
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                Birthdate
              </label>
              <DatePicker
                name="birthDate"
                show = {show}
                value= {moment(selected).format('YYYY-MM-DD')}
                setShow = {(state) => setShow(state)}
                options={options}
                classNames="relative"
                onChange={dateHandleChange}
              />
            </div>
            <label className='block uppercase tracking-wide text-black text-xs font-bold mb-2'>
               Agregue una imagen de perfil</label>
               <input type="file" className="p-2" onChange={handleFileChange}>
                
               </input>
            <button
              type="submit"
              className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Create Account
            </button>
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="./login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Log in
              </Link>
              <div className="text-center mt-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  {"< "}Back to Home
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}



export default register