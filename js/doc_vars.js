const shapeName = document.getElementById('shape-name');
const shape = document.getElementById('select-shape');
const initUnits = document.getElementById('initial-unit');
const finalUnits = document.getElementById('final-unit');

const blockSide1 = document.getElementById('block-side1');
const inputSide1 = document.getElementById('shape__input-side1');

const blockSide2 = document.getElementById('block-side2');
const inputSide2 = document.getElementById('shape__input-side2');

const blockSide3 = document.getElementById('block-side3');
const inputSide3 = document.getElementById('shape__input-side3');


const blockRadius = document.getElementById('block-radius');
const inputRadius = document.getElementById('shape__input-radius');

const btnCalc = document.getElementById('btn-culculate');


const imageContainer = document.querySelector('.shape-image__container');
const shapeImage = document.getElementById('shape-image');

const resultsArray = [];

let count = 0;

const searchInputContainer = document.querySelector('.search-panel-container');

const searchPanel = document.querySelector('.search-panel-modal');
const searchInput = document.getElementById('search-input');