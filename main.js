const name = prompt("Qual seu nome?")

if (name) {
    console.log (`Seja bem vindo(a), ${name}`)
    alert(`Seja bem vindo(a), ${name}`)
} else {
    console.log("Nenhum nome foi digitado.")
    alert("Nenhum nome foi digitado")
}

let age = prompt("Qual sua idade?");

if (age >=18) {
    console.log(`Você é maior de idade, ${name}`)
    alert(`Você é maior de idade, ${name}`)
}
else {
    console.log(`Você é menor de idade, ${name}`)
    alert(`Você é menor de idade, ${name}`)
}

let num_one = Number(prompt("Digite o primeiro número:"))
let num_two = Number(prompt("Digite o segundo número:"))

let soma = num_one + num_two
    console.log(`O resultado em soma será: ${soma}`)
    alert(`O resultado em soma será: ${soma}`)

let sub = num_one - num_two
    console.log(`O resultado em subtração será: ${sub}`)
    alert(`O resultado em subtração será: ${sub}`)

let mult = num_one * num_two
    console.log (`O resultado em multiplicação será: ${mult}`)
    alert(`O resultado em multiplicação será: ${mult}`)

let div = num_one / num_two
    console.log (`O resultado em divisão será: ${div}`)
    alert(`O resultado em divisão será: ${div}`)

let number = Number(prompt("Digite um número e diremos se ele é ímpar ou par:"))

if (number % 2 === 0) {
    console.log("É par!")
    alert("É par!")    
} else {
    console.log("É impar!")
    alert("É impar!")
}

let nota = Number(prompt("Digite sua nota:"))

if (nota >= 5) {
    console.log("Você está aprovado!");
    alert("Você está aprovado!")
} else if (nota <= 4) {  
    console.log("Você está de recuperação!")
    alert("Você está de recuperação!")
} else {
    console.log("Você está reprovado!")
    alert("Você está reprovado!")
}

let price = Number(prompt("Digite o valor do produto que deseja:"))
let quant = Number(prompt("Digite a quantidade do produto"))

let total = price * quant

if (total <= 100) {
    console.log (`O total: R$${total}. Sem desconto para esse valor.`)
    alert(`O total: R$${total}. Sem desconto para esse valor.`)
} else if (total <=200) {
    console.log (`O total: R$${total}. 10% de desconto. Parabéns!`)
    alert(`O total: R$${total}. 10% de desconto. Parabéns!`)
} else if (total <=350) {
    console.log (`O total: R$${total}. 20% de desconto. Parabéns!`)
    alert (`O total: ${total}. 20% de desconto. Parabéns!`)
} else {
    console.log(`O total deu: R$${total}. 30% de desconto. Parabéns!`)
    alert(`O total: R$${total}. 30% de desconto. Parabéns!`)
}

let number_one = Number(prompt("Digite o primeiro número:"))
let number_two = Number(prompt("Digite o segundo número:"))
let operador = (prompt("Digite um operador para essa conta(+,-,*,/):"))


if (operador == "+") {
let mais = number_one + number_two
    console.log (`O resultado é:${mais}`)
    alert(`O resultado é: ${mais}`)
} 
else if (operador == "-"){
let menos = number_one - number_two
    console.log (`O resultado é: ${menos}`)
    alert(`O resultado é: ${menos}`)
} 
else if(operador == "*") {
    let multiplicação = number_one * number_two
    console.log(`O resultado é: ${multiplicação}`)
    alert(`O resultado é: ${multiplicação}`)
} 
else if (operador == "/") {
    let divisão = number_one / number_two
    console.log (`O resultado é: ${divisão}`)
    alert(`O resultado é: ${divisão}`)
} else {
    console.log("Valor inválido!")
    alert("Valor inválido!")
}

const ano = Number(prompt("Digite o seu ano de nascimento:"))
const atual = new Date().getFullYear()

const iddaprox = atual - ano

if(iddaprox >= 18) {
    console.log (`Você tem aproximadamente ${iddaprox} anos. Parabéns! Você pode tirar a carteira de motorista.`)
    alert (`Você tem aproximadamente ${iddaprox} anos. Parabéns! Você pode tirar a carteira de motorista.`)
} else {
    console.log(`Você tem aproximadamente ${iddaprox} anos. Infelizmente, você não tem idade para tirar carteira de motorista.`);
    alert (`Você tem aproximadamente ${iddaprox} anos. Infelizmente, você não tem idade para tirar carteira de motorista.`);
}

let graus = Number(prompt("Digite a temperatura no momento (apenas números):"))

if(graus >= 25) {
    console.log("Está quente!")
    alert("Está quente!")
} else if (graus >= 20) {
    console.log ("Está na temperatura ideal!")
    alert("Está na temperatura ideal!")
} else if (graus <= 1918) {
    console.log ("Está frio!")
    alert("Está frio!")
} else {
    console.log("Valor inválido!")
    alert("Valor inválido!")
}

let n1 = Number(prompt("Digite o primeiro número:"))
let n2 = Number(prompt("Digite o segundo número:"))
let n3 = Number(prompt("Digite o terceiro número:"))

let maior

if (n1 > n2 && n1 > n2){
    maior = n1
    
} else if (n2 > n1 && n2 > n3) {
    maior = n1

} else { 
    maior = n3
}

    console.log (`O maior número é: ${maior}`)
    alert (`O maior número é: ${maior}`)
