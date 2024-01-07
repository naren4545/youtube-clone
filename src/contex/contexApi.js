import React,{createContext,useEffect,useState} from "react";
import { fetchDataApi } from "../util/api";

export const Context=createContext()

const AppContex=(props)=>{
const [loading,setLoading]=useState(false)
const [searchResult,setSearchResult]=useState(false)
const [selectCategaries,setSelectCategaries]=useState('New')
const [mobileMenu,setMobilemenu]=useState(false)
useEffect(()=>{
console.log('hi')
fetchSlectedCategoryData(selectCategaries)
},[selectCategaries])

const fetchSlectedCategoryData=(query)=>{
setLoading(true)
fetchDataApi(`search/?q=${query}`).then(({contents})=>{
    console.log(contents)
    setSearchResult(contents)
    setLoading(false)
})

}


return <Context.Provider value={{loading,
setLoading,
searchResult,
setSearchResult,
selectCategaries,
setSelectCategaries,
mobileMenu,
setMobilemenu}

}>{props.children}</Context.Provider>

}

export default AppContex