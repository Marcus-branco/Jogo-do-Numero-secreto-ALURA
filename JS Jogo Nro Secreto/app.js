 
//Variáveis, alert() e prompt()
alert('Boas vindas ao jogo do número secreto');
let dificuldade1 = 10
let dificuldade2 = 100
let dificuldade3 = 1000
let dificuldadeUsuario = prompt("Escolha uma dificuldade entre 1 a 3, sendo 1 mais fácil e 3 mais difícil")
//Exibe msg na tela
//  Uma variável é um espaço na memória do computador, onde guardamos informações que vamos usar mais tarde.
dificuldadeUsuario = dificuldadeUsuario > 2 ? dificuldade3 : (dificuldadeUsuario == 1 ? dificuldade1 : dificuldade2);
let dificuldade = dificuldadeUsuario
let numeroSecreto = parseInt(Math.random() * dificuldade + 1); // let Armazena info numa variável
console.log(numeroSecreto);
let chute;
let tentativas = 0;

    //While -> Enquanto chute não for igual ao N.S
while (chute != numeroSecreto) {
    //tentativas = tentativas + 1;
    tentativas++;
    //Usamos prompt() para perguntar algo ao usuário(Caixa tipo alerta).
    chute = prompt(`Escolha um número entre 1 e ${dificuldade}`); //promptInput no formato de alerta
    //se o chute for igual NS
    if (chute == numeroSecreto) {
        //o If verifica uma iteração: verdadeira executa uma ordem, e falsa executa o else
        break //Quebra a repetição ou ordem
    } else {
            let palavraMaiorMenor = chute > numeroSecreto ? 'menor' : 'maior'
            alert(`O número secreto é ${palavraMaiorMenor} que ${chute}`);
            console.log(`Tentativa ${tentativas} - nº ${chute}`)
        //if (chute > numeroSecreto) {
        //    alert(`O número secreto é menor que ${chute}`);
        //} else {
        //    alert(`O número secreto é maior que ${chute}`);
        //}
    }
}
//Operador ternário = tentativas > 1 ? 'se sim' : 'se não'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto! [${numeroSecreto}] em ${tentativas} ${palavraTentativa}.`);
console.log(`Isso aí! Você descobriu o número secreto! [${numeroSecreto}] em ${tentativas} ${palavraTentativa}.`)

//if (tentativas > 1){
    //Usar crases {``} permite utilizar variáveis no meio das strings usando %{variável}.
//    alert(`Isso aí! Você descobriu o número secreto! [${numeroSecreto}] em ${tentativas} ${palavraTentativa}.`); 
//} else {
//    alert(`Você acertou  o número secreto com uma tentativa!`)
//}