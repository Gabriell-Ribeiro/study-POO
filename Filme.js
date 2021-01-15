class Filme {
    constructor(titulo,ano,genero,diretor,duracao) {
        this.titulo = titulo,
        this.ano = ano,
        this.genero = genero,
        this.diretor = diretor,
        this.duracao = duracao,
        this.atores = []
    }

    Reproduzir() {
        console.log("reproduzindo")
    }

    Pausa() {
        console.log("pausando")
    }

    Avancar() {
        console.log("avançar")
    }

    Fechar() {
        console.log("fechar")
    }

    Ficha() {
        console.log(`Título: ${this.titulo}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`diretor: ${this.diretor}`)
        this.Fechar()
    }

}
// O que é This?
// Cara que representa o objeto

// Aqui faz uma copia da classe filme, e guardando na variavel vingadores
var vingadores = new Filme("Paraunae", 2010, "acao", "PEdro", 2444)
vingadores.Ficha()
// console.log(vingadores.titulo)
// console.log(vingadores.diretor)