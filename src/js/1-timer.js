import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inpT = document.querySelector('#datetime-picker');
const btN = document.querySelector('button[data-start]');
const spnDay = document.querySelector('span[data-days]');
const spnHours = document.querySelector('span[data-hours]');
const spnMinutes = document.querySelector('span[data-minutes]');
const spnSeconds = document.querySelector('span[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}

let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < Date.now()) {
      iziToast.show({
        color: 'red',
        position: 'topRight',
        message: 'Please choose a date in the future',
      });
    }
  },
};
flatpickr(inpT, options);
// btN.addEventListener('click', handleClick);

// function handleClick(event) {
  // console.log(spnDay.textContent);
  // console.log(spnHours.textContent);
  // console.log(spnMinutes.textContent);
  // console.log(spnSeconds.textContent);
// }
// class Timer {
//   constructor({ onTick }) {
//     this.isActive = false;
//     this.onTick = onTick;
//     this.intervalId = null;
//   }

//    start() {
//     if (this.isActive) {
//       return;
//     }

//     const starTime = Date.now();
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - starTime;
//       const time = convertMs(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId)
//     this.isActive = false;
//   }

//   pad(value){
//     return String(value).padStart(2, "0")
//   }
// }
// const timer = new Timer({
//   onTick: updateClockFase,
// });

// btN.addEventListener('click', timer.start.bind(timer));

// function updateClockFase({ days, hours, minutes, seconds }) {
//   spnDay.textContent = `${days}`;
//   spnHours.textContent = `${hours}`;
//   spnMinutes.textContent = `${minutes}`;
//   spnSeconds.textContent = `${seconds}`;
// }
// // updateClockFase()






let isActive = false;
let intervalId = null;
btN.addEventListener('click', start);


function start() {
    if (isActive) {
      return;
    }

    const starTime = Date.now();
    isActive = true;
    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - starTime;
      const time = convertMs(deltaTime);

      onTick(time);
    }, 1000);
  }

  function pad(value) {
    return String(value).padStart(2, "0")
  }
  function onTick({ days, hours, minutes, seconds }) {
    spnDay.textContent = `${days}`;
    spnHours.textContent = `${hours}`;
    spnMinutes.textContent = `${minutes}`;
    spnSeconds.textContent = `${seconds}`;
  }
  
  function stop() {
    clearInterval(intervalId)
    isActive = false;
  }