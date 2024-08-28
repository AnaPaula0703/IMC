/*const não muda*/
let ano = 2024; /*muda
ano = 2025;
ano = "Dois mil e vinte e cinco"*/

/*console.log(`Meu nome é ${primeiroNome} e meu sobrenome é ${sobrenome}`);*/

/* console.log(primeiroNome);
console.log (primeiroNome + " " + sobrenome);
console.log ("meu nome é " + primeiroNome + " e meu sobrenome é " + sobrenome);*/

/*console.log("Minha idade é: ");
console.log(idade);

console.log("O ano atual é: ");
console.log(ano);*/

/*console.log("2"+"2");
/*parseInt transforma texto em número
console.log(parseInt("2")+parseInt("2"));
NaN = Not a Number */


/*Crie um programa que armazena as variáveis, primeiroNome, sobrenome, idade, altura, peso, e calcule o imc e apresente em uma linha de console todas essas informações*/

const primeiroNomePaciente = "Ana";
const sobrenomePaciente = "Carvalho";
const idadePaciente = 16;
let alturaPaciente = 1.60;
let pesoPaciente = 55;

let alturaAoQuadrado = alturaPaciente * alturaPaciente;
let imc = pesoPaciente/alturaAoQuadrado;

console.log(`Paciente ${primeiroNomePaciente} sobrenome é ${sobrenomePaciente}`);

console.log(`Idade do paciente: ${idadePaciente}, altura:${alturaPaciente} e peso: ${pesoPaciente}`);

console.log(`Imc do paciente é ${imc}`);