const popupOpenClose = () => {
  const popupCall = document.querySelector('.popup-call');
  const popup = document.querySelectorAll('.popup');
  const callBtn = document.querySelectorAll('.call-btn');
  const popupDiscount = document.querySelector('.popup-discount');
  const discountBtn = document.querySelectorAll('.discount-btn');
  const popupCheck = document.querySelector('.popup-check');
  const checkBtn = document.querySelector('.check-btn');


  callBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;

      if (target.closest('.construct-btn') || target.closest('.discount-btn')) {
        popupDiscount.style.display = 'block';
      } else if (target.closest('.call-btn')) {
        popupCall.style.display = 'block';
      }
    });
  });

  discountBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;

      if (target.closest('.discount-btn')) {
        popupDiscount.style.display = 'block';
      }
    });
  });

  checkBtn.addEventListener('click', () => {
    popupCheck.style.display = 'block'
  });

  popup.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('.popup-close') || !target.closest('.popup-content')) {
        popupCall.style.display = 'none';
        popupDiscount.style.display = 'none';
        popupCheck.style.display = 'none';
      }
    });
  });
};

export default popupOpenClose;