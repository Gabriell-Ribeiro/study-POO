// Composição no javascript

// exemplo abaixo somente uma representação

// pode se dizer que essas classes seriam componentes
// esses componentes podem ser reutilizados com facilidade
class Leitor {
    Ler(caminho) {
        return "Conteúdo do arquivo"
    }
}

class Escritor {
    Escrever(arquivo, conteudo) {
        console.log("Conteúdo escrito")
    }
}

class Criador {
    Criar(nome) {
        console.log("Arquivo criado")
    }
}

class CriadorDePDF {
    Criar() {
        console.log("Criando PDF...")
    }
}

class Destruidor {
    Deletar(nome) {
        console.log("Deletando arquivo")
    }
}

class ManipuladorDeArquivos {
    constructor(nome) {
        this.arquivo = nome
        this.leitor = new Leitor()
        this.escritor = new Escritor()
        this.criador = new Criador()
        this.destruidor = new Destruidor()
    }
}

class GerenciadorDeUsuarios {
    constructor() {
        this.criador = new CriadorDePDF()
        this.escritor = new Escritor()
    }

    SalvarListaDeUsuarios(lista) {
        this.criador.Criar("usuarios.txt")
        this.escritor.escritor("usuarios.txt", lista)
    }
}

var manipulador = new ManipuladorDeArquivos("meuarquivo.txt")

manipulador.leitor.Ler()
manipulador.escritor.Escrever()
manipulador.criador.Criar()
manipulador.destruidor.Deletar()

var usuarios = new GerenciadorDeUsuarios()

usuarios.SalvarListaDeUsuarios("Gabriel")