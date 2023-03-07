import { getWalkers, getWalkerCities, getCities } from "./database.js"

const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

// The function need the walker information, so define a parameter
const filterWalkerCitiesByWalker = (walker) => {
    const assignments = []
     for (const assignment of walkerCities) {
        if (assignment.walkerId === walker.id) {
            assignments.push(assignment)
        }
    }
// After the loop is done, return the assignments array
return assignments
}
const assignedCityNames = (assignments) => {
    let cityNames = []

    for (const walkerCityAssignment of assignments) {
        for (const city of cities) {

            if (city.id === walkerCityAssignment.cityId) {
                cityNames.push(city.name)
            }
        }
    }
    return cityNames.join(" and ")
}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
        The target of a click event is the most specific HTML element
        that was clicked by the user.
        */
       const itemClicked = clickEvent.target
    
      if (itemClicked.id.startsWith("walker")) {
          
          
          const [,walkerId] = itemClicked.id.split("--")
          
          
          for (const walkerObject of walkers) {
                   if (walkerObject.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walkerObject)
                    const cities = assignedCityNames(assignments)  
                    
                    window.alert(`${walkerObject.name} services ${cities}`)
                    }
                }
            }
            }
    
)



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walkerObject of walkers) {
        walkerHTML += `<li id="walker--${walkerObject.id}">${walkerObject.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

