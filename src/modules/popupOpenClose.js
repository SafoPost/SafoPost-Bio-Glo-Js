const popupOpenClose = () => {
  const popup = document.querySelectorAll('.popup');

  const popupCall = document.querySelector('.popup-call');
  const callBtn = document.querySelectorAll('.call-btn');

  const popupDiscount = document.querySelector('.popup-discount');
  const discountBtn = document.querySelectorAll('.discount-btn');
  const calcForm = document.getElementById('calc-form');

  const popupCheck = document.querySelector('.popup-check');
  const checkBtn = document.querySelector('.check-btn');

  const popupConsult = document.querySelector('.popup-consultation');
  const consultBtn = document.querySelector('.consultation-btn');
  const consultForm = document.getElementById('consult-form');

  const removeMessage = () => {
    const statusMessage = document.querySelector('.status-message')
    if (statusMessage) {
      statusMessage.remove();
    }
  };


  callBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;

      if (target.closest('.construct-btn') || target.closest('.discount-btn')) {
        popupDiscount.style.display = 'block';
        calcForm.classList.add('popup-calc');
      } else if (target.closest('.call-btn')) {
        popupCall.style.display = 'block';
      }
      removeMessage();
    });
  });

  discountBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;

      if (target.closest('.discount-btn')) {
        popupDiscount.style.display = 'block';
      }
      removeMessage();
    });
  });

  checkBtn.addEventListener('click', () => {
    popupCheck.style.display = 'block';
    removeMessage();
  });

  consultBtn.addEventListener('click', () => {
    popupConsult.style.display = 'block';
    consultForm.classList.add('popup-consult');
    removeMessage();
  });

  // Закрываем все модальные акна
  popup.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('.popup-close') || !target.closest('.popup-content')) {
        popupCall.style.display = 'none';
        popupDiscount.style.display = 'none';
        calcForm.classList.remove('popup-calc');
        popupCheck.style.display = 'none';
        popupConsult.style.display = 'none';
        calcForm.classList.remove('popup-consult');
        removeMessage();
      }
    });
  });
};

export default popupOpenClose;