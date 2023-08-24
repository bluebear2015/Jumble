import { AppState } from "../AppState.js"


export class Jumble {
    constructor(data) {
        // this.id = generateId()
        this.name = data.name
        this.body = data.body
        // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
        this.fastestTime = null
        this.startTime = null
        this.endTime = null
    }

    get ListTemplate() {
        return `
        <div class ="d-flex justify-content-evenly"> 
        <div onClick="app.JumbleController.activeJumble('${this.name}')" class="btn elevation-5 m-2 col-4"> 
        <div>${this.name}</div> 
        <h2>${this.body}</h2>
        </div>
        </div>`
    }

    get activeListTemplate() {
        return `
<div  class="col-4 elevation-5 border border-dark">
  <div class="text-center text-bold">
    <div>
    ${this.name}
<h3>${this.body} </h3>
    </div>
    <div class="pt-2">
                <textarea class="w-100" name="jumbleBody" id="jumbleBody" cols="30" rows="10"></textarea>
              </div>
    <button onClick="app.JumbleController.textAreaJumble('${this.name}')"> Submit </button>
  </div>
  
</div>`
    }
}