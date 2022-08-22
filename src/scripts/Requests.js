import { getRequests, getPlumbers, sendRequest, sendCompletions } from "./dataAccess.js"


//* The function you write will convert each service 
    //* request object into HTML representations. 
    //* Since it is wrapped with a <ul> element, 
    //* make each one an <li> element 
    //* showing only the description of the request to start.

//* The function should define 1 parameter 
    //* (value will be each object in the array)
//* The description of the service request should 
    //* be interpolated inside the <li> HTML representation.
//* The function should return the HTML representation.
const serviceRequests = (request) => {
    const plumbers = getPlumbers()

    let html = `<li>Service request ${request.description}
    <select class="plumbers" id="plumbers">
    <option value="">Choose</option>
        ${
            plumbers.map(
                plumber => {
                    return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                }
            ).join("")
        }
    </select>
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>`
    
    return html
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
    <ul>
        ${
            requests.map(serviceRequests).join("")
        }
    </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = {requestId: requestId, plumberId: plumberId, date_created: Date.now()}

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

            sendCompletions(completion)
                
        }
    }
)