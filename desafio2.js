"use strict";
// Como podemos melhorar o esse código usando TS? 
var Emprego;
(function (Emprego) {
    Emprego[Emprego["Atriz"] = 0] = "Atriz";
    Emprego[Emprego["Padeiro"] = 1] = "Padeiro";
})(Emprego || (Emprego = {}));
let pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Emprego.Atriz
};
let pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Emprego.Padeiro
};
let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Emprego.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Emprego.Padeiro
};
