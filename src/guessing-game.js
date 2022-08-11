class GuessingGame {
    // prop = gameMin;
    // prop = gameMax;
    // prop = gameGuess;
    
    constructor() {
        this.gameMin = 0;
        this.gameMax = 0;
        // this.num = num;
        this.gameGuess = 0;
    }

   

    setRange(min, max) {
        this.gameMin = min;
        this.gameMax = max;
    //    return this.guess(gameMin, gameMax)
    }

    guess() {
        console.log(this.gameMax)
        this.gameGuess =  Math.ceil((this.gameMin -(-this.gameMax))/2);
return this.gameGuess;
    }

    lower() {
        this.gameMax = this.gameGuess;
    }

    greater() {
        this.gameMin = this.gameGuess;
    }
}

module.exports = GuessingGame;
