import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"


export const SinkRepair = () => {
    return `
        <div class='headerContainer'>
            <h1 class ='header'>Maude and Merle's Sink Repair</h1>
        </div>

        <div class='bar'>
        </div>

     
        <section class="serviceForm">
        ${ServiceForm()}
        </section>
        
    <div class='serviceContainer'>
        <section class="serviceRequests">
            <h2 class='serviceTitle'>Service Requests</h2>
            ${Requests()}
        </section>
    </div>
    `
}