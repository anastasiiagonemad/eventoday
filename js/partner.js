//open sponsor description in partner.html

document.addEventListener('DOMContentLoaded', function () {
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
});
