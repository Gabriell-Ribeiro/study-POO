class Roleta {
    constructor(num) {
        this.dado = num
    }

    Rolar() {
        console.log(`Número do dado: ${this.Sorteando(1, this.dado)}`)
    }

    Sorteando(min, max) {
        return Math.floor(Math.random() * max + min)
    }
}

var d6 = new Roleta(6)
var d12 = new Roleta(12)
d6.Rolar()
d12.Rolar()

// console.log(Math.floor(Math.random() * 6 + 1))