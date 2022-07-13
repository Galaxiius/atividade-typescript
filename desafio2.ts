// Como podemos melhorar o esse código usando TS? 

enum Emprego {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Emprego
}

let pessoa1: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Emprego.Atriz
};

let pessoa2: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Emprego.Padeiro
};

let pessoa3: Pessoa = {
    nome: 'laura',
    idade: 32,
    profissao: Emprego.Atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Emprego.Padeiro
}