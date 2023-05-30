import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'

function App() {
    
    const [weatherInfo, setweatherInfo] = useState(null)

    const success = (pos)=>{
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude
        const API_KEY = "7701e055314c34cfccaab681685fe0e8"

        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

        axios.get(URL)
        .then(({data})=> setweatherInfo(data))
        .catch((err)=> console.log(err))
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success)
    }, [])
    

  return (
    <main className=' bg-[url("/img/background.jpg")] min-h-screen bg-cover  text-black flex justify-center items-center font-principal-font p-2'>

      <Weather weatherInfo={weatherInfo} />
    </main>
  )
}

export default App
