const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "Yours truly text content here."

container.appendChild(content);

const redText = document.createElement('p');
redText.textContent = "Hey I'm red!"
redText.setAttribute("style", "color: red");

const blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3!"
blueText.setAttribute("style", "color: blue");

container.appendChild(redText);
container.appendChild(blueText)

const someDiv = document.createElement('div');
const attribute = 'border: 1px solid black; background-color: pink'
someDiv.setAttribute('style', attribute);

const a_h1 = document.createElement('h1');
a_h1.textContent = "I'm in a div";

const a_p = document.createElement('p');
a_p.textContent = "ME TOO!";

someDiv.appendChild(a_h1);
someDiv.appendChild(a_p);
container.appendChild(someDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function(e){
    alert(e.target)
    e.target.style.background = "blue";
});