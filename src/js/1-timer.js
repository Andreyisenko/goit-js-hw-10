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
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

btN.disabled = true;
let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= Date.now()) {
      btN.disabled = true;
      iziToast.show({
        color: 'red',
        position: 'topRight',
        message: 'Please choose a date in the future',
      });
    } else {
      btN.disabled = false;
    }
  },
};
flatpickr(inpT, options);

let isActive = false;
let intervalId = null;
const obj = { days: 0, hours: 0, minutes: 0, seconds: 0 };
const str = JSON.stringify(obj);

btN.addEventListener('click', start);

function start() {
  btN.disabled = true;
  inpT.disabled = true;
  if (isActive) {
    return;
  }

  isActive = true;
  intervalId = setInterval(() => {
    const currentTime = userSelectedDate;
    const deltaTime = currentTime - Date.now();
    const time = convertMs(deltaTime);

    if (JSON.stringify(convertMs(deltaTime)) === str) {
      stop();
    }

    onTick(time);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function onTick({ days, hours, minutes, seconds }) {
  spnDay.textContent = `${addLeadingZero(days)}`;
  spnHours.textContent = `${addLeadingZero(hours)}`;
  spnMinutes.textContent = `${addLeadingZero(minutes)}`;
  spnSeconds.textContent = `${addLeadingZero(seconds)}`;
}

function stop() {
  clearInterval(intervalId);
  isActive = false;
  inpT.disabled = false;
  iziToast.show({
    color: 'green',
    position: 'center',
    message: 'Finish',
    overlayColor: 'rgba(30, 236, 53 0.1)',
  });
}
