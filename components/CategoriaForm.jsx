import React, { useState } from "react";
import { uploadFile } from "@/firebase/fbConfigCategorias";
import axios from "axios";
import { getDownloadURL } from "firebase/storage";

const CategoriaForm = () => {
  const [file, setFile] = useState("");

  const [categoria, setCategoria] = useState({
    categoryName: "",
    categoryDescription: "",
    categoryURL: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await uploadFile(file);
    const categoryData = {
      ...categoria,
      categoryURL: result,
    };
    const res = await axios.post("/api/categorias/categoriasApi", categoryData);
    console.log(res);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoria((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <section className="flex justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Crear categoria
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label>Nombre categoria</label>
                <input
                  placeholder="categoria"
                  name="categoryName"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label>descripcion categoria</label>
              <textarea
                placeholder="categoria"
                name="categoryDescription"
                onChange={handleChange}
                className="w-full"
              ></textarea>
            </div>
            <div>
              <label>imagen categoria</label>
              <input
                type="file"
                name="categoryURL"
                onChange={handleFileChange}
              ></input>
            </div>

            <button
              className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="submit"
            >
              guardar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CategoriaForm;
