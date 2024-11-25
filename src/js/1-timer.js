// console.log("Timer");
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inpT = document.querySelector('#datetime-picker');
const btN = document.querySelector("button[data-start]")
const spnDay = document.querySelector("span[data-days]")
const spnHours = document.querySelector("span[data-hours]")
const spnMinutes = document.querySelector("span[data-minutes]")
const spnSeconds = document.querySelector("span[data-seconds]")

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
      alert('Please choose a date in the future');
    }
  },
};
flatpickr(inpT, options);
btN.addEventListener("click", handleClick)

function handleClick() {
    console.log("tot");
    console.log(spnDay.textContent);
    console.log(spnHours.textContent);
    console.log(spnMinutes.textContent);
    console.log(spnSeconds.textContent);
    
}