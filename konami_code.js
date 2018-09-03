const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const init = () => {

let index = 0

const main = document.body 

main.addEventListener('keydown', (event) => { 


  for (key in codes) {
      const key = event.key

      if (key === codes[index]) {
        index++

        if (index === codes.length) {
          index = 0;
          return alert("Cheat code activated!")
        }
        return console.log("correct")
      }

      else {
        index = 0
        return console.log("incorrect")
      }
    }
    })
  }