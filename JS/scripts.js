function exe0(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    // mostra o resultado
     alert(`A média das notas é ${media.toFixed(1)}`)
}


function pesquisaSatisfacao() {
    let nota // guarda as notas
    let cont = 1
    let contS = 0
    let contI = 0
    let med
    let tot = 0
    while (cont <= 10){
        nota = Number(prompt(`Informe a nota do participante ${cont}`))
        if (nota < 0 || nota > 10){
            alert("nota inválida")
            continue //volta para o inicio do loop
        }
        cont++
        tot = tot + nota
        if (nota <= 5){
            contI++
        }
        else if(nota >= 8){
            contS++
        }
    }
    med = tot / 10
    alert(`Existe ${contS} pessoas com notas satisfeitas`)
    alert(`Existe ${contI} pessoas com notas insatisfeitas`)
    alert("A media da turma é: " + med)
}

function faixaEtaria() {
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0, cont = 1
    let idade, porc1, porc2

    while (cont <= 8){
        idade = Number(prompt(`Informe a idade do participante ${cont}`))
        

        if (idade >= 0 && idade <= 15){
            faixa1++
        }
        else if(idade >= 16 && idade <= 30){
            faixa2++
        }
        else if(idade >= 31 && idade <= 45){
            faixa3++
        }
        else if(idade >= 46 && idade <= 60){
            faixa4++
        }
        else if(idade > 60 && idade < 120){
            faixa5++
        }
        else{
            alert("idade inválida!!")
            continue
        }

        cont++
    }
    
    porc1 = (faixa1 / 8) * 100
    porc2 = (faixa2 / 8) * 100

    alert("Existem " + faixa1 + " pessoas na faixa 1 \n" + 
          "Existem " + faixa2 + " pessoas na faixa 2 \n" +
          "Existem " + faixa3 + " pessoas na faixa 3 \n" +
          "Existem " + faixa4 + " pessoas na faixa 4 \n" +
          "Existem " + faixa5 + " pessoas na faixa 5 \n")
    alert(" A porcentagem de pessoas que estão na faixa 1 é: " + porc1 +"\n"+
          " A porcentagem de pessoas que estão na faixa 1 é: " + porc1 +"\n")


}

function ex1() {
    let a, b, c, d, aux, cont = 0, contG = 0


    while(contG <= 5){
        a = Number(prompt("Informe o valor de A: "))
        b = Number(prompt("Informe o valor de B: "))
        c = Number(prompt("Informe o valor de C: "))
        d = Number(prompt("Informe o valor de D: "))
    
        alert(`Ordem Digitada ${a} ${b} ${c} ${d}`)
        while(cont <= 3){
            if (a > b) {
                aux = a; a = b; b = aux
            }
            if (b > c) {
                aux = b; b = c; c = aux
            }
            if (c > d) {
                aux = c; c = d; d = aux
            }
            cont++
            
        }
        alert(`Ordem crescente ${a} ${b} ${c} ${d} Ordem decrescente ${d} ${c} ${b} ${a}`)
    }

  
}

function ex2() {
    let preco = 5.0
    let qtde = 120
    const disp = 200
    let lucro
    let aux = ""
    let maiorL = 0
    let maiorP = 0
    let maiorQ = 0

    while(preco >= 1.00){

        if (lucro > maiorL){
            maiorL = lucro
        }
        if (preco > maiorP){
            maiorP = preco
        }
        if (qtde > maiorQ){
            maiorQ = qtde
        }
        lucro = (preco * qtde) - disp
        aux = aux + (`preço do ingresso: ${preco} - quantidade vendida: ${qtde} - despesa: ${disp} -  lucro: ${lucro} \n`)
        qtde = qtde + 26
        preco = preco - 0.5
    }
    alert(aux)
    alert(maiorL)
    alert(maiorP)                           
    alert(maiorQ)
}

function tabuada(){
    let num

    num = Number(prompt("Digite um número: "))

    for(let cont = 0; cont <=10; cont++){
       alert(num + " x " + cont + " = " + (cont*num))
    }
}
function tabuada2(){
    
    for(let c1 = 1; c1 < 11; c1++){
        for(let c2 = 0; c2 <= 10;c2++){
            console.log(`${c1} x ${c2} = ${c1*c2}`)
            if(c2 == 10){
                console.log('---------------------')
            }
        }
        }
}

function ex7() {
    let idade, altura, peso;
    let countIdade50 = 0;
    let somaAltura = 0;
    let countAltura = 0;
    let countPeso40 = 0;

    for (let i = 1; i <= 5; i++) {
    idade = parseInt(prompt(`Pessoa ${i} - Digite a idade:`));
    altura = parseFloat(prompt(`Pessoa ${i} - Digite a altura (em metros):`));
    peso = parseFloat(prompt(`Pessoa ${i} - Digite o peso (em kg):`));

    if (idade > 50) countIdade50++;
    if (idade >= 10 && idade <= 20) {
        somaAltura += altura;
        countAltura++;
    }
    if (peso < 40) countPeso40++;
    }

    let mediaAltura = countAltura > 0 ? somaAltura / countAltura : 0;
    let percPeso40 = (countPeso40 / 5) * 100;

    console.log(`Pessoas com idade > 50 anos: ${countIdade50}`);
    console.log(`Média de altura (10 a 20 anos): ${mediaAltura.toFixed(2)} m`);
    console.log(`% com peso < 40 kg: ${percPeso40.toFixed(2)}%`);

}
function ex8() {
    let idade, peso, altura, olhos, cabelo;
    let countIdadePeso = 0;
    let somaIdadeAltura = 0;
    let countAltura = 0;
    let countAzul = 0;
    let countRuivoNaoAzul = 0;

    for (let i = 1; i <= 6; i++) {
        idade = parseInt(prompt(`Pessoa ${i} - Idade:`));
        peso = parseFloat(prompt(`Pessoa ${i} - Peso (kg):`));
        altura = parseFloat(prompt(`Pessoa ${i} - Altura (m):`));
        olhos = prompt(`Pessoa ${i} - Cor dos olhos (A/P/V/C):`).toUpperCase();
        cabelo = prompt(`Pessoa ${i} - Cor dos cabelos (P/C/L/R):`).toUpperCase();

        if (idade > 50 && peso < 60) countIdadePeso++;
            if (altura < 1.5) {
                somaIdadeAltura += idade;
                countAltura++;
            }
        if (olhos === 'A') countAzul++;
            if (cabelo === 'R' && olhos !== 'A') countRuivoNaoAzul++;
    }

    let mediaIdade = countAltura > 0 ? somaIdadeAltura / countAltura : 0;
    let percOlhosAzuis = (countAzul / 6) * 100;

    console.log(`Pessoas com idade > 50 e peso < 60 kg: ${countIdadePeso}`);
    console.log(`Média de idade (altura < 1.5 m): ${mediaIdade.toFixed(2)}`);
    console.log(`% com olhos azuis: ${percOlhosAzuis.toFixed(2)}%`);
    console.log(`Pessoas ruivas sem olhos azuis: ${countRuivoNaoAzul}`);

}
function ex9() {
let somaIdade = 0;
let countPesoAltura = 0;
let countIdadeAltura = 0;

for (let i = 1; i <= 10; i++) {
  let idade = parseInt(prompt(`Pessoa ${i} - Idade:`));
  let peso = parseFloat(prompt(`Pessoa ${i} - Peso (kg):`));
  let altura = parseFloat(prompt(`Pessoa ${i} - Altura (m):`));

  somaIdade += idade;

  if (peso > 90 && altura < 1.5) countPesoAltura++;
  if (idade >= 10 && idade <= 30 && altura > 1.9) countIdadeAltura++;
}

let mediaIdade = somaIdade / 10;
let percIdadeAltura = (countIdadeAltura / 10) * 100;

console.log(`Média das idades: ${mediaIdade.toFixed(2)}`);
console.log(`Pessoas com peso > 90 kg e altura < 1.5 m: ${countPesoAltura}`);
console.log(`% com idade 10-30 anos e altura > 1.9 m: ${percIdadeAltura.toFixed(2)}%`);


}
function ex10(){
     let somaPares = 0;
  let somaPrimos = 0;

  for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Digite o ${i}º número:`));

    if (num % 2 === 0) {
      somaPares += num;
    }

    // Verifica se é primo (dentro da mesma função)
    let primo = num > 1;
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {
      somaPrimos += num;
    }
  }

  console.log(`Soma dos números pares: ${somaPares}`);
  console.log(`Soma dos números primos: ${somaPrimos}`);
}