import axios from "axios";

export const getNames= async() =>{
  return await axios.get(`$ {process.env.REACT_APP_API}`);
}

export const createName= async(name)=>{
  return await axios.get(`$ {process.env.REACT_APP_API}`,name);
}