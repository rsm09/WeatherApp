import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function Searchbox({updateInfo}){

    let [city,setCity] = useState("")

    let API_URL = "http://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "1943fc9fd7f01d12f5706d3b88ed5fa9";

    let getWeatherInfo = async ()=>{
         try{
       
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let weatherInfo = await response.json();
            let info ={
                name : weatherInfo.name,
                temp : weatherInfo.main.temp,
                tempMin : weatherInfo.main.temp_min,
                tempMax : weatherInfo.main.temp_max,
                humidity:weatherInfo.main.humidity,
                feelsLike:weatherInfo.main.feels_like,
                weather :weatherInfo.weather[0].description
            }
            return info;
        }catch(err){
            throw err;
     } 
    }
  

    function handleChange(event){
        setCity(event.target.value)
    }

    let handleSubmit = async (event)=>{
        try {
        
                event.preventDefault();
                setCity("")
                let newInfo = await getWeatherInfo();
                updateInfo(newInfo)
            }
         catch (err) {
            console.log("city not exist");
        }
    }
   

    return <div>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>
        </form>
    </div>
}
