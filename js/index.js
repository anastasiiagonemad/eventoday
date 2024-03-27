//timer for buytickets.html
document.addEventListener('DOMContentLoaded', function () {
  const newLocal = 4;
  const newLocal_1 = 1;

  const deadline = new Date(2024, newLocal, newLocal_1);

  let timerId = null;

  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }

  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, [
      'минута',
      'минуты',
      'минут',
    ]);
    $seconds.dataset.title = declensionNum(seconds, [
      'секунда',
      'секунды',
      'секунд',
    ]);
  }
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');

  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});

//open sposor description in sronsor.html
const open1 = document.querySelector('.open1');
const open2 = document.querySelector('.open2');
const open3 = document.querySelector('.open3');
const close = document.querySelectorAll('.close');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');

open1.addEventListener('click', () => {
  text1.classList.add('active');
  open1.style.display = 'none';
});

open2.addEventListener('click', () => {
  text2.classList.add('active');
  open2.style.display = 'none';
});

open3.addEventListener('click', () => {
  text3.classList.add('active');
  open3.style.display = 'none';
});

close.forEach((btn) => {
  btn.addEventListener('click', () => {
    text1.classList.remove('active');
    text2.classList.remove('active');
    text3.classList.remove('active');
    open1.style.display = 'block';
    open2.style.display = 'block';
    open3.style.display = 'block';
  });
});
