import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const forM = document.querySelector('.form');
let delay;
forM.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  let tot = event.currentTarget.elements.state.value === 'fulfilled';
  delay = event.currentTarget.delay.value;

  event.preventDefault();
  const promis = new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (tot) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        rejected(`❌ Rejected promise in ${delay}ms`);
      }
    }, `${delay}`);
  });
  forM.reset();
  promis
    .then(value => {
      iziToast.show({
        color: 'rgba(86, 216, 248, 0.9)',
        position: 'center',
        message: value,
      });
    })
    .catch(error => {
      iziToast.show({
        color: 'rgba(202, 90, 156, 0.9)',
        position: 'center',
        message: error,
      });
    });
}
