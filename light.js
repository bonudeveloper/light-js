let images = ["/images/off.jpg", 
"/images/on.jpg"];
let imgOn = document.querySelector("img");
let imgOff = document.querySelector("img");
let i = 0;
function changeImage () {
    i++;
    if(i%2==0) {
        
      //  this.src="images/on.jpg";
      imgOff.setAttribute("src", "./images/on.jpg");
    }else {
      //  this.src = "images/off.jpg"; 
       imgOff.setAttribute("src", "./images/off.jpg");
    }
}
imgOff.addEventListener("click", changeImage);
// function change() {
//   imgOff.addEventListener("click", () => {
//     imgOff.setAttribute("src", "./images/on.jpg");
//   });
// }

// if (change()) {
//     imgOff.setAttribute("src", "./images/off.jpg");
// }

