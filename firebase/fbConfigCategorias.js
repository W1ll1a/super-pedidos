
import { initializeApp } from "firebase/app";
import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyD-ZJv0BmjNgV5zY4JyHlpflUGb3BP8DtI",
  authDomain: "drop-zone-db585.firebaseapp.com",
  projectId: "drop-zone-db585",
  storageBucket: "drop-zone-db585.appspot.com",
  messagingSenderId: "841400866986",
  appId: "1:841400866986:web:4d0408320ec1fad75d98d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)
//Aqui vamos a subir imagen al firebase y retorna url. tipo string
export async function uploadFile(file){
    const storageRef=ref(storage,"categorias/"+ v4())
     await uploadBytes(storageRef, file)
     const url = await getDownloadURL(storageRef)
     console.log(url)
     return url
   
}