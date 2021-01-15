class ProdutoParaLoja {
    constructor() {
        this.titulo = "",
        this.preco = "",
        this.peso = "",
        this.imagem = ""
        this.quantidade = ""
    }  

    Comprar() {
        console.log("comprar")
    }
}

class CarrinhoDeComprasParaLoja {
    constructor() {
        this.titulo = "",
        this.quantidade = "",
        this.preco = "",
        this.peso = "",
        this.formadepagar = "",
        this.imagem = ""
    }

    FinalizarComprar() {
        console.log("compra")
    }
    RemoverDoCarrinho() {
        console.log("remover")
    }
    AumentarQuantidade() {
        console.log("aumentar")
    }
    CalcularFrete() {
        console.log("calcular")
    }
}

class ComidaParaSistemaDeCardapio {
    constructor() {
        this.titulo = "",
        this.preco = "",
        this.imagem = "",
        this.ingredientes = ""
    }

    PedirComida() {
        console.log("pedir")
    }
    AdicionarAcompanhamento() {
        console.log("suco")
    }
}

class PersonagemParaJogoRpg {
    constructor() {
        this.nome = "",
        this.classe = "",
        this.habilidades = ""
        this.nivel = ""
    }

    Andar() {
        console.log("andar")
    }
    Correr() {
        console.log("corre")
    }
    Pular() {
        console.log("pula")
    }
    Atacar() {
        console.log("ataca")
    }
    Defender() {
        console.log("defende")
    }
    AbrirInventario() {
        console.log("inventario")
    }
    ColetarItens() {
        console.log("coletar")
    }
}

class CarroParaSistemaDeAluguelDeCarros {
    constructor() {
        this.modelo = "",
        this.montadora = "",
        this.potencia = "",
        this.combustivel = ""
        this.preço = ""
    }

    Alugar() {
        console.log("aluga")
    }
    FormaDoPagamento() {
        console.log("paga")
    }
    Desalugar() {
        console.log("devolve")
    }
}

class UsuarioParaRedeSocial {
    constructor() {
        this.nome = ""
        this.sobrenome = ""
        this.dadanascimento = ""
        this.email = ""
        this.senha = ""
    }

    CriarConta() {
        console.log("criar")
    }
    ConfirmarEmail() {
        console.log("confirmacao")
    }
    Login() {
        console.log("logar")
    }
    CriarPublicacao() {
        console.log("comp")
    }
    CurtirPublicacao() {
        console.log("curti")
    }
    AdicionarPessoa() {
        console.log("adicionar")
    }
    ConversarComPessoa() {
        console.log("dawdaw")
    }
    FazerPesquisa() {
        console.log("fazer pesquisa")
    }
    ColocarFoto() {
        console.log("foto")
    }
    AdiconarInformacaoPessoal() {
        console.log("addInfo")
    }
}

class VideoParaServicoDeStreaming {
    constructor() {
        this.titulo = ""
        this.canal = ""
        this.duracao = ""
        this.qualidade = ""
        this.thumb = ""
        this.descricao = ""
    }
    
    Iniciar() {
        console.log("inciar")
    }
    Avancar() {
        console.log("pulando")
    }
    Retroceder() {
        console.log("volta")
    }
    Pausa() {
        console.log("pausa")
    }
    Fechar() {
        console.log("fechar")
    }
    MudarQualidade() {
        console.log("qualidade")
    }
}

class AlunoParaSistemaDeGestaoEscolar {
    constructor() {
        this.nome = "",
        this.serie = "",
        this.idade = "",
        this.notas = ""
        this.matricula = ""
    }
    
    
}