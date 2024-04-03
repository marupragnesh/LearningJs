let btn1 = document.querySelector(".mybutton");

let div = document.querySelector("div");
console.log(div);
let mode = "lightmode";
btn1.addEventListener("click", () => {
  if (mode == "lightmode") {
    mode = "darkmode";
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("white");
    console.log("lightmode");
  } else {
    console.log("darkmode");
    document.querySelector("body").classList.add("white");
    document.querySelector("body").classList.remove("dark");
    mode = "lightmode";
    // div.style.classList(".white");
  }
});
