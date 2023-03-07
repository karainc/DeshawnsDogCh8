// import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

// const allOfTheWalkers = getWalkers()
const cityList = getCities()


export const CityList = () => {
    let citiesHTML = "<ul>"
    
    for (const cities of cityList) {
        citiesHTML += `<li>${cities.name}</li>`
    }
    
    
    
    
    citiesHTML += "</ul>"
    
    return citiesHTML
}
