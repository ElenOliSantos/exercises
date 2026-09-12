const name = prompt("Qual seu nome?");

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
}
else {
    console.log("É impar!")
    alert("É impar!")
}

