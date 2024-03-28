// //calendar index.html
document.addEventListener('DOMContentLoaded', function () {
  const dates = [
    '.APR22',
    '.APR25',
    '.MAY22',
    '.MAY30',
    '.SEP16',
    '.SEP20',
    '.OCT24',
  ];
  const mobs = [
    '.APR22-mob',
    '.APR25-mob',
    '.MAY22-mob',
    '.MAY30-mob',
    '.SEP16-mob',
    '.SEP20-mob',
    '.OCT24-mob',
  ];
  const texts = [
    '.date1',
    '.date2',
    '.date3',
    '.date4',
    '.date5',
    '.date6',
    '.date7',
  ];

  dates.forEach((date, index) => {
    document.querySelector(date).addEventListener('click', function () {
      texts.forEach((text) => {
        document.querySelector(text).style.display = 'none';
      });
      document.querySelector(texts[index]).style.display = 'flex';
    });
  });

  mobs.forEach((mob, index) => {
    document.querySelector(mob).addEventListener('click', function () {
      texts.forEach((text) => {
        document.querySelector(text).style.display = 'none';
      });
      document.querySelector(texts[index]).style.display = 'flex';
    });
  });

  //валидация формы index.html
  document.querySelector('#main_data-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const main_name = document.querySelector('#main_name');
    const main_tel = document.querySelector('#main_tel');
    const main_email = document.querySelector('#main_email');

    const errorName = document.querySelector('.error-name');
    const errorTel = document.querySelector('.error-tel');
    const errorEmail = document.querySelector('.error-email');

    const nameReg = /^(?=.{2,30}$)+[A-Za-zА-Яа-я]+$/;
    const telReg = /^[0-9]{7,11}$/;
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;

    const validName = (value) => nameReg.test(value);
    const validTel = (value) => telReg.test(value);
    const validEmail = (value) => emailReg.test(value);

    if (
      validName(main_name.value) &&
      validTel(main_tel.value) &&
      validEmail(main_email.value)
    ) {
      document.querySelector('.main__form-data').style.display = 'block';
      document.querySelector('.main__form-data').style.fontSize = '2em';
      document.querySelector('.main__form-data').innerText =
        'Заявка успешно отправлена!';
    } else if (!validName(main_name.value)) {
      errorName.textContent =
        'Введите Ваше имя используя толкько буквы русского или латинского алфавита';
    } else if (!validTel(main_tel.value)) {
      errorTel.textContent = 'Ввведите номер телефона в формате 81234567890';
    } else if (!validEmail(main_email.value)) {
      errorEmail.textContent = 'Введите Email в формате : example@ex.com';
    }
  });
});
