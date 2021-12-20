let countEl = document.getElementById('count');
let saveEl = document.getElementById('save-el'); 


let count = 0;

function increase() {
  count++;
  countEl.innerHTML = count;
}


function save(){
  let countStr = count + ' - ';
  saveEl.innerHTML += countStr;
  countEl.innerHTML = 0;
  count = 0


}




let welcomeEl = document.getElementById('welcome-el');

let name = "Peter Chege Wairimu";
let greeting = "Hello, Welcome to our web page";


welcomeEl.innerHTML = greeting + " " + name + "";

welcomeEl.innerHTML += "!";


