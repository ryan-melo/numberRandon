function teste() {
	const randonNumber = (Math.round(Math.random() * 10));
	return randonNumber
}
let randonNumber = teste()

let xAttempts = 1;

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

console.log(randonNumber)
function handleClick(event) {
	event.preventDefault()
	
	const inputNumber = document.querySelector("#inputNumber");

      if (Number(inputNumber.value) == randonNumber) {
			screen1.classList.add("hide")
			screen2.classList.remove("hide")

			document.querySelector("h2").innerHTML = `Acertou em ${xAttempts} tentativas!`
      } else {
			document.querySelector(".screen1").classList.remove("hide")
			document.querySelector(".screen2").classList.add("hide")
			screen1.querySelector("h3").innerText = `O número não é ${inputNumber.value} tente novamente!`
      }

		inputNumber.value = "";
      xAttempts++;

};

btnTry.addEventListener('click', handleClick);

btnReset.addEventListener("click", () => {
	screen1.classList.remove("hide")
	screen2.classList.add("hide")

	xAttempts = 1;
	randonNumber = teste();

	screen1.querySelector("h3").innerText = ""

	console.clear()
	console.log(randonNumber)
})