import React from "react";


const Adresses = () => {

  return (
    <div id="container" className="py-10 mx-auto px-96 ">
      <form className="border shadow-lg bg-white max-w-4xl px-10 py-6 rounded-lg" action="action"
      >
      <div className="text-center font-bold text-2xl">
        <h1> Agregar direcciones de envio</h1>
      </div>
      
        <div className="grid gap-1 font-bold">
        <label id="nombreComplet" className="text-start">
            Nombre completo
          </label>
          <input
            id="nombreCompletoInput"
            type="text"
            name="completeNameIn"
            placeholder="John Alexander Doe Doe"
            className="border rounded-lg max-w-sm"
           
          />
          <label id="NumeroTelefono" className="text-start">
            Numero de telefono
          </label>
          <input
            id="numeroTelefonoInput"
            name="numeroTelefonoIn"
            placeHolder="9464-8122"
            className="border rounded-lg max-w-sm focus:ring-blue-700"
           
          />
          <label id="cityName" className="text-start">
            Nombre de la ciudad
          </label>
          <input
            id="cityNameInput"
            name="cityNameIn"
            placeholder="e.g(Tegucigalpa)"
            className="border rounded-lg max-w-sm"
           
          />
          <label id="departamento" className="text-start">
            Departamento
          </label>
          <select id='departamentoSelect' name='departSelect'className="font-light border rounded-lg max-w-sm " >
            <option value='atlantida'>Atlantida</option>
            <option value='colon'>Colón</option>
            <option value='comayagua'>Comayagua</option>
            <option value='copan'>Copán</option>
            <option value='cortes'>Cortés</option>
            <option value = 'choluteca'>Choluteca</option>
            <option value ='elParaiso'>El paraíso</option>
            <option value = 'franciscoMorazan'>Francisco Morazan</option>
            <option values = 'graciasADios'>Gracias a Dios</option>
            <option value ='intibuca'>Intibucá</option>
            <option value='islasDeBahia'>Islas de la bahía</option>
            <option value='laPaz'>La paz</option>
            <option value='lempira'>Lempira</option>
            <option value='ocotepeque'>Ocotepeque</option>
            <option value='olancho'>Olancho</option>
            <option value='santaBarbara'>Santa Barbara</option>
            <option value='valle'>Valle</option>
            <option value = 'yoro'>Yoro</option>
          </select>
          <label id="direccion" className="text-start">
            Dirección
          </label>
          <input
            id="direccionInput"
            name="direccionIn"
            placeHolder="Nombre de la calle"
            className="border rounded-lg max-w-sm focus:ring-blue-700"
           
          />
          <input
            id="direccionDetailInput"
            name="direccionDetailnIn"
            placeHolder="Depto. unidad,edificio,piso etc."
            className="border rounded-lg max-w-sm focus:ring-blue-700"
           
          />
          <div className="text-center ">
            <button className="border rounded-lg " type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default Adresses;
