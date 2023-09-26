class Chronometer {
  constructor() {}

  currentTime = 0;
  intervalId = null;

  start(printTimeCallback) {
    const timeInterval = setInterval(() => {
      this.currentTime++;

      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 1000);

    this.intervalId = timeInterval;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const valueAsString = value.toString();
    return valueAsString.length > 1 ? valueAsString : '0' + value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const twoDigitMinutes = this.computeTwoDigitNumber(minutes);

    const seconds = this.getSeconds();
    const twoDigitSeconds = this.computeTwoDigitNumber(seconds);

    return `${twoDigitMinutes}:${twoDigitSeconds}`;
  }
}
