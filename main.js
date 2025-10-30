let div = document.querySelector('#maDiv');
div.textContent = 'Div text changed';
let button = document.querySelector('#monBouton');
button.innerText = 'Button text changed';

let p = document.createElement('p');
p.textContent = 'this is a paragraph';
div.appendChild(p);

let newButton = document.createElement('button');
newButton.textContent = 'Knock knock';
document.body.append(newButton);
newButton.addEventListener("click", function() {
  alert("Nobody's here! Leave now!")
});

button.addEventListener("click", function(){
  div.style.backgroundColor = getRandomColor();
}
)








function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}