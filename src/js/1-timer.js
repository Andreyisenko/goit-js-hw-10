// console.log("Timer");
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inpT = document.querySelector('#datetime-picker');
// console.log(inpT);
let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    console.log(userSelectedDate);
  },
};

flatpickr(inpT, options);

// inpT.addEventListener('input', handleInput);

// function handleInput(event) {
//   // console.log(event.target.value);
// }
