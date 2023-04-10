import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "@/hooks/users";
import { useUserEmail } from "@/hooks/userEmail";
import { useUserPicture } from "@/hooks/userPicture";

function DropdownMenu(usuario) {
  // Estado para controlar si el menú desplegable está visible o no
const [dropdownVisible, setDropdownVisible] = useState(false);

  // Función para alternar la visibilidad del menú desplegable
  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }
  const user = useUser();
  const userEmail = useUserEmail();
  const profilePicture = useUserPicture()


  const router =useRouter()

  const handleLogout =async (e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('/api/login/logout')
      console.log(response)
      router.reload()
    } catch (error) {
      console.log(error)
    }

  } 
 


  return (
    <div className="relative">
      <img
        id="avatarButton"
        type="button"
        onClick={toggleDropdown}
        className="relative right-0 object-contain w-10 h-10 rounded-full cursor-pointer"
        src={profilePicture}
        alt="User dropdown"
      />
      <div
        id="userDropdown"
        className={`${
          dropdownVisible ? "block" : "hidden"
        } z-10 bg-white divide-y absolute right-0 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className=" px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{user}</div>
          <div className="font-medium truncate">{userEmail}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <b
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </b>
          </li>
          <li>
            <Link href='/settings'>
            <b
              className="block px-4 py-2
               hover:bg-gray-100
                dark:hover:bg-gray-600
                 dark:hover:text-white"
              
            >
              Settings
            </b>
            </Link>
          </li>
          <li>
            <b
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </b>
          </li>
        </ul>
        <div className="py-1">
          <b
            href="#"
            className="block px-4 py-2 text-sm
             text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600
              dark:text-gray-200 dark:hover:text-white"
            onClick={handleLogout}

          >
            Sign out
          </b>
        </div>
      </div>
    </div>
  );
}



export default DropdownMenu;
