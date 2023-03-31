import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function DropdownMenu() {
  // Estado para controlar si el menú desplegable está visible o no
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Función para alternar la visibilidad del menú desplegable
  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }
  const router = useRouter()
  const handleLogout =async ()=>{
    const response = await axios.post('/api/login/logout')
    console.log(response)
  } 

  return (
    <div className="relative">
      <img
        id="avatarButton"
        type="button"
        onClick={toggleDropdown}
        className="relative right-0 object-contain w-10 h-10 rounded-full cursor-pointer"
        src="/logo.png"
        alt="User dropdown"
      />
      <div
        id="userDropdown"
        className={`${
          dropdownVisible ? "block" : "hidden"
        } z-10 bg-white divide-y relative divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className=" px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2
               hover:bg-gray-100
                dark:hover:bg-gray-600
                 dark:hover:text-white"
              onClick={router.push('/settings')}
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm
             text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600
              dark:text-gray-200 dark:hover:text-white"
            onClick={handleLogout}
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
