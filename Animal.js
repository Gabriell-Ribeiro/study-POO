// Herança

// Porém que herança mais usado em casos específicos
// Acaba que a Composição é mais limpo e tals

// Ex: possui uma classe mãe, e então essa classe pode ter classes filhar que então herdam os métodos e atributos da classe mãe
class Animal {
    constructor(nome, idade, preco) {
        this.nome = nome
        this.idade = idade
        this.preco = preco
    }

    QuantidadeDePets() {
        return 10
    }

    MetodoQualquer() {
        console.log("Isso faz parte da classse mãe")
    }
}

// Cada filho que herda da classe mãe, esse filho pode ter suas próprias características, então você pode acessar somente nessa classe filho
// e também os métodos da classe mãe podem ser modificadas na classe de heranlça
class Cachorro extends Animal {
    // Também posso criar o próprio constructor a classe filho utilizando o super para que não perca as informações da classe mãe
    constructor(nome, idade, preco, raca, peso) {
        super(nome, idade, preco) // reutiliza o código da class mãe
        this.raca = raca
        this.peso = peso
    }

    Latir() {
        console.log("AuAu!")
    }

    QuantidadeDePets() {
        console.log("dogeada 24324")
    }

    MetodoQualquer() {
        console.log("teste teste")
        // super faz referência ao método da classe mãe
        super.MetodoQualquer()
        console.log("Aqui é a classe cachorro")
    }
}

// class Pato extends Animal {

// }

var dog = new Cachorro("Dogão", 1, 2222, "dashhund", "10kg")
dog.Latir()
dog.QuantidadeDePets()
dog.MetodoQualquer()
console.log(dog.idade)

// var patin = new Pato("pataoo", 2, 3333)
// console.log(patin.QuantidadeDePets())

// Também pode aumentar as herança (porém que isso não muito legal, "melhor" seria usar só a classe mãe e filhas)
class PastorAlemão extends Cachorro {

}

class PastorAlemãoMacho extends PastorAlemão {

}
