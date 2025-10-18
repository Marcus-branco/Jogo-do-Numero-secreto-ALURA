alert('Boas vindas ao jogo do número secreto');
let difficulty1 = 10
let difficulty2 = 100
let difficulty3 = 1000
let userDifficulty = prompt("Escolha uma dificuldade de 1 a 3, sendo 1 mais fácil e 3 mais difícil")

userDifficulty = userDifficulty > 2 ? difficulty3 : (userDifficulty == 1 ? difficulty1 : difficulty2);
let difficulty = userDifficulty
let secretNumber = parseInt(Math.random() * difficulty + 1);
console.log(secretNumber);
let guess;
let try = 0;


while (guess != secretNumber) {
    try++;
    guess = prompt(`Escolha um número entre 1 e ${difficulty}`);
    if (guess == secretNumber) {
        break
    } else {
            let wordLesserBigger = guess > secretNumber ? 'menor' : 'maior'
            alert(`O número secreto é ${wordLesserBigger} que ${guess}`);
            console.log(`Tentativa ${try} - nº ${guess}`)
    }
}
let wordTry = try > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto! [${secretNumber}] em ${try} ${wordTry}.`);
console.log(`Isso aí! Você descobriu o número secreto! [${secretNumber}] em ${try} ${wordTry}.`)
