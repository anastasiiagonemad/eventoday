//open sponsor description in partner.html

document.addEventListener('DOMContentLoaded', function () {
  const openButtons = document.querySelectorAll('.open');
  const closeButtons = document.querySelectorAll('.close');
  const descriptions = document.querySelectorAll('.container-text');

  openButtons.forEach((openButton, index) => {
    openButton.addEventListener('click', () => {
      descriptions.forEach((description) => {
        description.classList.remove('active');
      });
      descriptions[index].classList.add('active');
      openButtons.forEach((button) => (button.style.display = 'none'));
    });
  });

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      descriptions.forEach((description) => {
        description.classList.remove('active');
      });
      openButtons.forEach((button) => (button.style.display = 'block'));
    });
  });
});
