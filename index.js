const firstTemplate = document.getElementById('first-template');
const secondTemplate = document.getElementById('second-template');
const thirdTemplate = document.getElementById('third-template');
const fourthTemplate = document.getElementById('fourth-template');
const fifthTemplate = document.getElementById('fifth-template');
const firstFlex = document.querySelector('.question-1');
const secondFlex = document.querySelector('.question-2');
const thirdFlex = document.querySelector('.question-3');
const fourthFlex = document.querySelector('.question-4');
const fifthFlex = document.querySelector('.question-5');
let firstParagraph = undefined;
let secondParagraph = undefined;
let thirdParagraph = undefined;
let fourthParagraph = undefined;
let fifthParagraph = undefined;
const firstCross = document.getElementById('first-cross');
const secondCross = document.getElementById('second-cross');
const thirdCross = document.getElementById('third-cross');
const fourthCross = document.getElementById('fourth-cross');
const fifthCross = document.getElementById('fifth-cross');

const render = () => {
  const addTemplate = document.importNode(firstTemplate.content, true);
  if (!firstParagraph) {
    firstCross.classList.add('cross-transition');
    firstCross.classList.remove('cross_transition');
    firstParagraph = addTemplate.querySelector('.paragraph-1');
    firstFlex.append(firstParagraph);
    behavior: 'smooth';
  } else {
    firstCross.classList.add('cross_transition');
    firstParagraph.remove();
    firstParagraph = false;
  }
  firstCross.classList.remove('cross-transition');
};

const secondRender = () => {
  const templateTwo = document.importNode(secondTemplate.content, true);
  if (!secondParagraph) {
    secondCross.classList.remove('cross_transition');
    secondCross.classList.add('cross-transition');
    secondParagraph = templateTwo.querySelector('.paragraph-2');
    secondFlex.append(secondParagraph);
  } else {
    secondCross.classList.add('cross_transition');
    secondParagraph.remove();
    secondParagraph = false;
  }
  secondCross.classList.remove('cross-transition');
};

const thirdRender = () => {
  const templateThree = document.importNode(thirdTemplate.content, true);
  if (!thirdParagraph) {
    thirdParagraph = templateThree.querySelector('.paragraph-3');
    thirdFlex.append(thirdParagraph);
  } else {
    thirdParagraph.remove();
    thirdParagraph = false;
  }
};

const fourthRender = () => {
  const templatefour = document.importNode(fourthTemplate.content, true);
  if (!fourthParagraph) {
    fourthCross.classList.add('cross-transition');
    fourthCross.classList.remove('cross_transition');
    fourthParagraph = templatefour.querySelector('.paragraph-4');
    fourthFlex.append(fourthParagraph);
  } else {
    fourthParagraph.remove();
    fourthParagraph = false;
  }
  fourthCross.classList.remove('cross-transition');
};

const fifthRender = () => {
  const templatefive = document.importNode(fifthTemplate.content, true);
  if (!fifthParagraph) {
    fifthCross.classList.add('cross-transition');
    fifthCross.classList.remove('cross_transition');
    fifthParagraph = templatefive.querySelector('.paragraph-5');
    fifthFlex.append(fifthParagraph);
  } else {
    fifthParagraph.remove();
    fifthParagraph = false;
  }
  fifthCross.classList.remove('cross-transition');
};

// firstClarity.addEventListener('click', bodyHandler);
// exit.addEventListener('click', exitHandler);

firstFlex.addEventListener('click', render);

secondFlex.addEventListener('click', secondRender);

thirdFlex.addEventListener('click', thirdRender);

fourthFlex.addEventListener('click', fourthRender);

fifthFlex.addEventListener('click', fifthRender);
