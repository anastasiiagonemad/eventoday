//calendar index.html
document.addEventListener('DOMContentLoaded', function () {
  const date1 = document.querySelector('.APR22');
  const mob1 = document.querySelector('.APR22-mob');

  const date2 = document.querySelector('.APR25');
  const mob2 = document.querySelector('.APR25-mob');

  const date3 = document.querySelector('.MAY22');
  const mob3 = document.querySelector('.MAY22-mob');

  const date4 = document.querySelector('.MAY30');
  const mob4 = document.querySelector('.MAY30-mob');

  const date5 = document.querySelector('.SEP16');
  const mob5 = document.querySelector('.SEP16-mob');

  const date6 = document.querySelector('.SEP20');
  const mob6 = document.querySelector('.SEP20-mob');

  const date7 = document.querySelector('.OCT24');
  const mob7 = document.querySelector('.OCT24-mob');

  const text1 = document.querySelector('.date1');
  const text2 = document.querySelector('.date2');
  const text3 = document.querySelector('.date3');
  const text4 = document.querySelector('.date4');
  const text5 = document.querySelector('.date5');
  const text6 = document.querySelector('.date6');
  const text7 = document.querySelector('.date7');

  date1.addEventListener('click', () => {
    text1.style.display = 'flex';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
  });
  date2.addEventListener('click', () => {
    text2.style.display = 'flex';
    text1.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
  });

  date3.addEventListener('click', () => {
    text3.style.display = 'flex';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
  });

  date4.addEventListener('click', () => {
    text4.style.display = 'flex';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
  });

  date5.addEventListener('click', () => {
    text4.style.display = 'none';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text5.style.display = 'flex';
    text6.style.display = 'none';
    text7.style.display = 'none';
  });

  date6.addEventListener('click', () => {
    text4.style.display = 'none';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'flex';
    text7.style.display = 'none';
  });

  date7.addEventListener('click', () => {
    text4.style.display = 'none';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'flex';
  });

  mob1.addEventListener('click', () => {
    text1.style.display = 'flex';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
  });
  mob2.addEventListener('click', () => {
    text2.style.display = 'flex';
    text1.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
  });

  mob3.addEventListener('click', () => {
    text3.style.display = 'flex';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
  });

  mob4.addEventListener('click', () => {
    text4.style.display = 'flex';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
  });

  mob5.addEventListener('click', () => {
    text4.style.display = 'none';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text5.style.display = 'flex';
    text6.style.display = 'none';
    text7.style.display = 'none';
  });

  mob6.addEventListener('click', () => {
    text4.style.display = 'none';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'flex';
    text7.style.display = 'none';
  });

  mob7.addEventListener('click', () => {
    text4.style.display = 'none';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'flex';
  });
});
