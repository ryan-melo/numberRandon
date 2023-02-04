// CONSTS

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector('#inputNumber')

function creatrandonNumber() {
   const randonNumber = Math.round(Math.random() * 100)
   return randonNumber
}

let randonNumber = creatrandonNumber()
let xAttempts = 1
let key = 0
console.log("randon = " + randonNumber)

// EVENTOS 
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', reset)

function handleClick(event) {
   event.preventDefault()

   if (Number(inputNumber.value) == randonNumber) {
      screen1.classList.add('hide')
      screen2.classList.remove('hide')

		key++

		document.addEventListener('keyup', keyUp)
		
		if (xAttempts === 1) {
			document.querySelector('h2').innerHTML = `Acertou em ${xAttempts} tentativa!`
		} else {
			document.querySelector('h2').innerHTML = `Acertou em ${xAttempts} tentativas!`
		};
      
   };
	
	if (inputNumber.value == "") {
		screen1.querySelector('h3').innerText = `Digite um valor!`
	} else {
		if (inputNumber.value > randonNumber) {
			screen1.querySelector('h3').innerHTML = `Errou! <br/> O número é MENOR que ${inputNumber.value}!`
		} else if (inputNumber.value < randonNumber) {
			screen1.querySelector('h3').innerHTML = `Errou! <br/> O número é MAIOR que ${inputNumber.value}!`
		};
		xAttempts++
	};

   inputNumber.value = '';
};

function reset() {
   screen1.classList.remove('hide')
   screen2.classList.add('hide')

   xAttempts = 1
   randonNumber = creatrandonNumber()

   screen1.querySelector('h3').innerText = ''

   console.clear()
   console.log("O novo número é " + randonNumber)
	document.removeEventListener("keyup", keyUp)
};

function keyUp(e) {
	++key

	if (e.code == 'Enter' && key == 3) {
		console.log(key)
		reset()
		key = 0
		document.removeEventListener("keyup", keyUp)
	}
	inputNumber.value = ''
};
