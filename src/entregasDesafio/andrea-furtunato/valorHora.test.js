// Importações no topo do arquivo
const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");
const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");

describe("calcularValorPorHora", () => {
  test("Deve retornar dado o salario 1412 retorna 9 por hora", () => {
    const rendaMensal = 1412;
    const resultado = calcularValorPorHora(rendaMensal);
    expect(resultado).toEqual(9);
  });
});

describe("valorProjeto", () => {
  test("Deve calcular corretamente o valor do projeto para o pacote básico", () => {
    const horasProjeto = 40;
    const valorHora = 50;
    const pacote = "pacote_basico";
    const taxaPacote = 1.1;

    const valorEsperado = horasProjeto * valorHora * taxaPacote;

    const resultado = calcularValorDoProjeto(horasProjeto, valorHora, pacote);

    expect(resultado).toEqual(valorEsperado);
  });
});
