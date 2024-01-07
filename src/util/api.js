import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com/";
const key='your Key'
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};


export const fetchDataApi=async (url)=>{

const {data}=await axios.get(`${BASE_URL}${url}`,options)
return data

}
