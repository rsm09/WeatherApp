import Searchbox from "./Searchbox"
import Infobox from "./Infobox"
import { useState } from "react"
export default function Weatherapp(){

    let [wInfo, setwInfo]= useState({})

    function updateInfo(result){
        setwInfo(result)
    }
    return<div>
        <h2>Weather App</h2>
        <Searchbox updateInfo={updateInfo}></Searchbox>
        <br></br>
     <Infobox info={wInfo}></Infobox>
    </div>
}