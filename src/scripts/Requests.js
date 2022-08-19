import { getRequests } from "./dataAccess.js"


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

    let html = `<li>Service request ${request.description}
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