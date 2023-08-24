import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { jumbleService } from "../services/JumbleService.js";
import { setHTML } from "../utils/Writer.js";


function drawWords() {
    let word = AppState.jumbles
    let content = ''
    word.forEach(w => content += w.ListTemplate)
    console.log(word);
    setHTML('jumbles', content)
}

export class JumbleController {


    constructor() {
        drawWords()
        // AppState.on('activeJumble', this.drawActiveJumble)
        this.drawActiveJumble()
    }

    activeJumble(jumbleName) {
        console.log(jumbleName);
        jumbleService.activeJumble(jumbleName)
        this.drawActiveJumble(jumbleName)
    }


    drawActiveJumble(jumbleName) {
        let active = AppState.activeJumble
        let act = active?.activeListTemplate
        setHTML('active', act)
        this.startGame(jumbleName)
    }
    startGame(jumbleName) {
        jumbleService.startGame(jumbleName)
    }

    endGame(jumbleName) {
        jumbleService.endGame(jumbleName)
    }

    textAreaJumble(jumbleName) {
        let textAreaElem = document.querySelector('textarea')
        let Entry = textAreaElem?.value
        jumbleService.textAreaJumble(Entry)
        this.endGame(jumbleName)
    }
}