const sample = arr => arr[Math.floor(Math.random() * arr.length)];

function setupColors() {
  const colors = ['teal', 'reddish', 'light-blue', 'blueish-purple', 'purple'];

  let shapes = document.getElementsByClassName('shape');


  for (let shape of shapes) {
    shape.classList.add(`bg-${sample(colors)}`);
  }
}

function setupRectangles() {
  let rectangles = document.getElementsByClassName('rectangle');

  for (let rectangle of rectangles) {
    rectangle.style.width = `${sample([10, 15, 20, 25])}rem`;
  }
}

function hide(button, elementId) {
  let element = document.getElementById(elementId);
  if (element !== null && typeof element !== 'undefined') {
    if (element.style.display === 'none') {
      element.style.display = 'block';
      button.innerText = 'Hide';
    } else {
      element.style.display = 'none';
      button.innerText = 'Show';
    }
  }
}

function hideAll() {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    if (button.innerText === 'Hide') {      
      button.click();
    }
  }

  document.getElementById('hideAll').style.display = 'none';
  document.getElementById('showAll').style.display = 'inline-block';
}

function showAll() {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    if (button.innerText === 'Show') {
      button.click();
    } 
  }
  document.getElementById('showAll').style.display = 'none';
  document.getElementById('hideAll').style.display = 'inline-block';
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function showWelcomeMessage() {
  document.body.classList.add('backdrop');
  document.getElementById('welcomeMessage').style.display = 'block';
}

function closeWelcomeMessage() {
  document.body.classList.remove('backdrop');
  document.getElementById('welcomeMessage').style.display = 'none';
}

function storeNoShowWelcomeAgain(checkbox) {
  let noShowWelcomeAgain;
  noShowWelcomeAgain = checkbox.checked;
  localStorage.setItem('noShowWelcomeAgain', JSON.stringify(noShowWelcomeAgain));
}

function checkNoShowWelcomeAgain() {
  if (typeof localStorage.getItem('noShowWelcomeAgain') !== 'undefined' 
      && localStorage.getItem('noShowWelcomeAgain') !== null) {
    let noShowWelcomeAgain = JSON.parse(localStorage.getItem('noShowWelcomeAgain'));
    document.getElementById('no-show-again').checked = noShowWelcomeAgain;
    if (noShowWelcomeAgain) {
      closeWelcomeMessage();
    } else {
      showWelcomeMessage();
    }
  } else {
    showWelcomeMessage();
  }
}