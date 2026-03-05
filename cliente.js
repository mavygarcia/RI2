function Cliente(nome, telefone, endereco, email) {
    this.nome = nome
    this.telefone = telefone
    this.endereco = endereco
    this.email = email

    this.getNome = function () {
        return this.nome
    }
    this.setNome = function (nome) {
        this.nome = nome

    }
    this.getTelefone = function () {
        return this.telefone
    }
    this.setTelefone = function (telefone) {
        this.telefone = telefone
    }
    this.getEndereco = function () {
        return this.endereco
    }
    this.setEndereco = function (endereco) {
        this.endereco = endereco
    }
    this.getEmail = function () {
        return this.email
    }
    this.setEmail = function (email) {
        this.email = email
    }
    this.getNomeMaiusculo = function () {
        return this.nome.toUpperCase()
    }

    this.getNomeMinusculo = function () {
        return this.nome.toLowerCase()
    }

    this.getEmailMaiusculo = function () {
        return this.email.toUpperCase()
    }

    this.getEmailMinusculo = function () {
        return this.email.toLowerCase()
    }
    this.descricao = function () {
        return `Informações do Cliente:\nNome: ${this.nome}\nEmail: ${this.email}\n${this.telefone.descricao()}\n${this.endereco.descricao()}`;
    }

}

function Telefone(ddd, numero) {
    this.ddd = ddd
    this.numero = numero

    this.getDdd = function () {
        return this.ddd
    }
    this.setDdd = function (ddd) {
        this.ddd = ddd
    }
    this.getNumero = function () {
        return this.numero
    }
    this.setNumero = function (numero) {
        this.numero = numero
    }
    this.getDddMaiusculo = function () {
        return this.ddd.toUpperCase()
    }

    this.getDddMinusculo = function () {
        return this.ddd.toLowerCase()
    }

    this.getNumeroMaiusculo = function () {
        return this.numero.toUpperCase()
    }

    this.getNumeroMinusculo = function () {
        return this.numero.toLowerCase()
    }
    this.descricao = function () {
        return `Telefone:\nDDD: ${this.ddd}\nNúmero: ${this.numero}`;
    }
}


function Endereco(rua, numeroEnd, bairro, cidade) {
    this.rua = rua
    this.numeroEnd = numeroEnd
    this.bairro = bairro
    this.cidade = cidade

    this.getRua = function () {
        return this.rua
    }
    this.setRua = function (rua) {
        this.rua = rua
    }
    this.getNumeroEnd = function () {
        return this.numeroEnd
    }
    this.setNumeroEnd = function (numeroEnd) {
        this.numeroEnd = numeroEnd
    }
    this.getBairro = function () {
        return this.bairro
    }
    this.setBairro = function (bairro) {
        this.bairro = bairro
    }
    this.getCidade = function () {
        return this.cidade
    }
    this.setCidade = function (cidade) {
        this.cidade = cidade
    }
    this.getRuaMaiusculo = function () {
        return this.rua.toUpperCase()
    }

    this.getRuaMinusculo = function () {
        return this.rua.toLowerCase()
    }

    this.getCidadeMaiusculo = function () {
        return this.cidade.toUpperCase()
    }
    this.getCidadeMinusculo = function () {
        return this.cidade.toLowerCase()
    }

    this.descricao = function () {
        return `Endereço:\nRua: ${this.rua}\nNúmero: ${this.numeroEnd}\nCidade: ${this.cidade}\nBairro: ${this.bairro}`;
    }
};


function ordenacaoCliente(listaClientes) {
    return listaClientes.sort(function (a, b) {
        return a.nome.localeCompare(b.nome)
    })
}

let telefone1 = new Telefone('21', '913026239')
let endereco1 = new Endereco('Rua V', '50', 'Capyvara', 'Niteroi')
let cliente1 = new Cliente('Michele', telefone1, endereco1, 'michele@email.com')

let telefone2 = new Telefone('21', '974299245')
let endereco2 = new Endereco('Rua V', '20', 'Capyvara', 'Niteroi')
let cliente2 = new Cliente('Mavy', telefone2, endereco2, 'mavy@email.com')

let clientes = [cliente1, cliente2]

let clientesOrdenados = ordenacaoCliente(clientes)

console.log('============= DADOS DOS CLIENTES ==============')
clientesOrdenados.forEach(function (cliente) {
    console.log(cliente.descricao())
    console.log('===========================\n')
})





