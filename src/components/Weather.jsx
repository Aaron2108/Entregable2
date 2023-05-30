import { useState } from "react"
import { KelvinToCelsius, KelvinToFahrenheit } from "../utils/temp"

const Weather = ({weatherInfo}) => {
      
      const [isCelsius, setIsCelsius] = useState(true)
      const toggleIsCelsius = () =>{
          setIsCelsius(!isCelsius)
      }
      
  return (
    <section className="text-center grid gap-6 ">
      <h2 className="font-bold text-2xl">{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>

      <section className="grid gap-4 sm:grid-cols-[1fr_auto]">

        {/* Seccion arriba */}
        <article className="bg-white/70  opacity-75 p-2 rounded-3xl grid grid-cols-2 items-center">
            <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>

            <span className="text-5xl">{isCelsius ? KelvinToCelsius(weatherInfo?.main.temp) : KelvinToFahrenheit(weatherInfo?.main.temp)} </span>
            <div>
              <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
            </div>
          </article>

        {/* Seccion abajo */}
          <section className="bg-white/70 p-2 py-6 opacity-75 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center ">
              <article className="flex gap-2 sm:items-center">
                <div>
                  </div>
                  <img src="/img/wind.png" alt="" />
                <span>{weatherInfo?.wind.speed}m/s</span>
              </article>

              <article className="flex gap-2 sm:items-center">
                <div>
                  <img src="/img/humidity.png" alt="" />
                  </div>
                <span>{weatherInfo?.main.humidity}%</span>
              </article>

              <article className="flex gap-2 sm:items-center">
                <div>
                  <img src="/img/pressure.png" alt="" />
                  </div>
                <span>1{weatherInfo?.main.pressure}hPa</span>
              </article>
          </section>
      </section>
       <div className="flex justify-center">
       <button className="bg-slate-50 text-blue-400 w-40 h-8 rounded-full  text-center flex  items-center justify-center   shadow-lg shadow-blue-500/50	 " onClick={toggleIsCelsius}>Change F / C</button>
       </div>
    </section>
  )
}
export default Weather