import React, { useState } from "react";
import axios from "axios";
import { uploadFile } from "@/firebase/fbConfigProductos";

const crearProductos = ({ categorias }) => {
  const options = categorias.map((categoria) => (
    <option key={categoria.idCategoria} value={categoria.idCategoria}>
      {categoria.categoryName}
    </option>
  ));
  const [file, setFile]=useState("")
  const [producto, setProducto] = useState({
    nombreProducto:"",
    precioProducto:'',
    descripcionProducto:'',
    idCategoria:'',
    productoURL:''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await uploadFile(file);
    const productData = {
      ...producto,
      productoURL: result,
    };
    const res = await axios.post("/api/products/productosApi", productData);
    console.log(res);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <section className="flex justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className=" text-center font-bold leading-tight tracking-tight md:text-lg text-gray-900  dark:text-white">
            Crear producto
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2">
              <div>
                <label className="text-black font-bold uppercase p-4">
                  Nombre del producto
                </label>
                <input
                  placeholder="ej.Collar"
                  className="w-lg border rounded-md hover:blue"
                  onChange={(e) => setProducto({ ...producto, nombreProducto: e.target.value })}
                ></input>
              </div>
              <div>
                <label className="text-black font-bold uppercase p-6 ">
                  precio del producto
                </label>
                <input
                  placeholder="ej.Collar"
                  className="w-lg border rounded-md hover:blue"
                  onChange={(e) => setProducto({ ...producto, precioProducto: e.target.value })}
                ></input>
              </div>
            </div>
            <div className="text-center">
              <label className="text-black font-bold uppercase p-6">
                descripcion
              </label>
            </div>
            <div className="flex justify-center">
              <textarea
                placeholder="descripcion"
                className="text-center w-lg border rounded-md hover:blue"
                onChange={(e) => setProducto({ ...producto, descripcionProducto: e.target.value })}
              ></textarea>
            </div>
            <div className="text-center">
              <label className="text-black font-bold uppercase p-6">
                Insertar imagen del producto
              </label>
            </div>
            <div>
              <input type="file" className="p-2" onChange={handleFileChange}></input>
            </div>
            <div>
              <select className="w-full"  onChange={(e) => setProducto({ ...producto, idCategoria: e.target.value })}>{options}</select>
            </div>
            <button className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center">
              guardar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async (context) => {
  const { data: categorias } = await axios.get(
    "http://localhost:3000/api/categorias/categoriasApi"
  );
  return {
    props: {
      categorias,
    },
  };
};
export default crearProductos;
