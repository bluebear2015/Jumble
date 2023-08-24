import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js";

var startTime, endTime;

function start() {
    console.log('Starting Game');
    startTime = new Date();
};

function end(foundJumble) {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds 
    var seconds = Math.round(timeDiff);
    console.log(seconds + " seconds");
    Pop.confirm(seconds + " seconds")
    let time = foundJumble.fastestTime
    if (seconds < time) {
        seconds = time
    }
    console.log(time);
}

class JumbleService {

    textAreaJumble(Entry) {
        // let _body = AppState.jumbles.b
        if (Entry == AppState.activeJumble.body) {
            console.log('win');
        } else {
            console.log('loss');
        }
    }
    startGame(jumbleName) {
        let foundJumble = AppState.jumbles.find(j => j.name == jumbleName)
        start(foundJumble)
    }

    endGame(jumbleName) {
        let foundJumble = AppState.jumbles.find(j => j.name == jumbleName)
        end(foundJumble)
    }



    activeJumble(jumbleName) {
        let foundJumble = AppState.jumbles.find(j => j.name == jumbleName)
        console.log(foundJumble, jumbleName);
        // @ts-ignore
        AppState.activeJumble = foundJumble

    }



}

export const jumbleService = new JumbleService()