document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('myBtn');
  const modal = document.getElementById('myModal');

  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  document.getElementsByClassName('close')[0].addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

const btnOpen1 = document.querySelector('.select-btn1');
btnOpen1.addEventListener('click', () => {
  document.querySelector('.select1').style.display = 'block';
});

const btnOpen2 = document.querySelector('.select-btn2');
btnOpen2.addEventListener('click', () => {
  document.querySelector('.select2').style.display = 'block';
});

const btnOpen3 = document.querySelector('.select-btn3');
btnOpen3.addEventListener('click', () => {
  document.querySelector('.select3').style.display = 'block';
});

const btnOpen4 = document.querySelector('.select-btn4');
btnOpen4.addEventListener('click', () => {
  document.querySelector('.select4').style.display = 'block';
});
