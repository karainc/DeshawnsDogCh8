import { getPets } from "./database.js"
import { getWalkers } from "./database.js"


document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("pet")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [,petPrimaryKey] = itemClicked.id.split("--")

            let matchingPet= null
            for (const pet of pets) {
                if (parseInt(petPrimaryKey)===pet.id) {
                    matchingPet= pet
                }
               }
             //find the related walker object assigned to pet// 
            let matchingWalker = null
                for (const walker of walkers) {
                    if (matchingPet.walkerId === walker.id) {
                        matchingWalker = walker
                    }
                }


            window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)

        }
    }
)
              


const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

