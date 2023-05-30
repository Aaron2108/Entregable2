export const KelvinToCelsius = (tempK) => {
    return `${(tempK - 273.15).toFixed(1)}°C`
}

export const KelvinToFahrenheit = (tempK) => {
    return `${((tempK - 273.15)*(9/15) + 32).toFixed(1)}°F`
}