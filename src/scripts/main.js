import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"
import { fetchPlumbers } from "./dataAccess.js"
import { fetchCompletions } from "./dataAccess.js"


export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchPlumbers())
    .then(()=>fetchCompletions())
    .then(
            () => {
                mainContainer.innerHTML = SinkRepair()
            }
        )
}

render()

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)