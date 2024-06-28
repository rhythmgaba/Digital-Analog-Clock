class Clock {
    constructor() {}

    getCurrentTime() {}
}

class DigitalClock extends Clock {
    constructor() {
        super();
        this.button = document.getElementById("digital-button");
        this.timeElement = document.getElementById("digital-time");
        this.button.onclick = this.showTime.bind(this);
    }

    getCurrentTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours < 12 ? "AM" : "PM";
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }

    showTime() {
        this.timeElement.textContent = `Digital Time: ${this.getCurrentTime()}`;
    }
}

class AnalogClock extends Clock {
    constructor() {
        super();
        this.button = document.getElementById("analog-button");
        this.timeElement = document.getElementById("analog-time");
        this.button.onclick = this.showTime.bind(this);
    }

    getCurrentTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        return `Hour Hand at ${hours * 30}deg\nMinute Hand at ${minutes * 6}deg\nSecond Hand at ${seconds * 6}deg`;
    }

    showTime() {
        this.timeElement.textContent = `Analog Time: \n${this.getCurrentTime()}`;
    }
}

let digitalClock = new DigitalClock();
let analogClock = new AnalogClock();