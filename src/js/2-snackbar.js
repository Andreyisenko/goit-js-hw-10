// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

const btN = document.querySelector('button');
// console.log(btN);
const forM = document.querySelector(".form")
// console.log(forM);

// const inpT = document.querySelector('[name=delay]');

// const inpTful = document.querySelector('[value=fulfilled]');

// const inpTrej = document.querySelector('[value=rejected]');

forM.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    console.log(event);
    console.log("ok");
    
}

