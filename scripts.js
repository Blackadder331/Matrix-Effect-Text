// Single item only

// const letters = "ABCDEFGHIJKLMNOPQRSTUBWXYZ123456789";
// let interval = null;

// document.querySelector("h1").onmouseover = event => {
//     let iterations = 0;

//     clearInterval(interval);

//     interval = setInterval(() => {
//         event.target.innerText = event.target.innerText.split("")
//         .map((letter, index) => {
//             if(index < iterations) {
//                 return event.target.dataset.value[index];
//             }
          
//             return letters[Math.floor(Math.random() * 33)]
  
//         })
//         .join("");
//         if (iterations >= event.target.dataset.value.length){
//             clearInterval(interval);
//         } 

//         iterations += 1 / 3; 
//     }, 60);

// }



// Works on all h1s now instead of 1

const h1Elements = document.querySelectorAll("h1");
const letters = "ABCDEFGHIJKLMNOPQRSTUBWXYZ123456789";
let interval = null;

h1Elements.forEach(h1 => {
    h1.onmouseover = event => {
        let iterations = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if(index < iterations) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 33)]
            })
            .join("");
            if (iterations >= event.target.dataset.value.length){
                clearInterval(interval);
            } 

            iterations += 1 / 3; 
        }, 60);
    }
});