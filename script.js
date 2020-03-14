'use strict';

const popupOpenClose = () => {
  const popup = document.querySelectorAll('.popup');

  const popupCall = document.querySelector('.popup-call');
  const callBtn = document.querySelectorAll('.call-btn');

  const popupDiscount = document.querySelector('.popup-discount');
  const discountBtn = document.querySelectorAll('.discount-btn');

  const popupCheck = document.querySelector('.popup-check');
  const checkBtn = document.querySelector('.check-btn');

  const popupConsult = document.querySelector('.popup-consultation');
  const consultBtn = document.querySelector('.consultation-btn');


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

  consultBtn.addEventListener('click', () => {
    popupConsult.style.display = 'block'
  });

  // Закрываем все модальные акна
  popup.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('.popup-close') || !target.closest('.popup-content')) {
        popupCall.style.display = 'none';
        popupDiscount.style.display = 'none';
        popupCheck.style.display = 'none';
        popupConsult.style.display = 'none'
      }
    });
  });
};
popupOpenClose();




const getCalcSeptic = () => {
  // Переключаем аккордеон по кнопке "Следующий шаг"
  const accordion = document.getElementById('accordion');
  const constructBtn = document.querySelectorAll('.construct-btn');
  const panelHeading = document.querySelectorAll('#accordion>.panel>.panel-heading');
  const panelCollapse = document.querySelectorAll('.panel-collapse');

  const getNextStep = (index) => {
    for (let i = 0; i < panelHeading.length - 1; i++) {
      if (index === i) {
        panelCollapse[i + 1].classList.add('in');
        panelCollapse[i].classList.remove('in');
      }
    }
  };

  accordion.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    target = target.closest('.construct-btn');
    if (target) {
      constructBtn.forEach((elem, index) => {
        if (elem === target) {
          getNextStep(index);
          getCalc();
        }
      });
    }
  });

  // Переключатель "Тип септика"
  const myonoffswitch = document.getElementById('myonoffswitch');
  const myonoffswitch1 = document.getElementById('myonoffswitch-1');

  // Переключатель "Наличие днища"
  const myonoffswitchTwo = document.getElementById('myonoffswitch-two');
  const myonoffswitch2 = document.getElementById('myonoffswitch-2');

  const titleText = document.querySelectorAll('#collapseTwo>.panel-body>.title-text');
  const selectBox = document.querySelectorAll('#collapseTwo>.panel-body>.select-box');
  titleText[1].style.display = 'none';
  selectBox[2].style.display = 'none';
  selectBox[3].style.display = 'none';

  const toggleSwitch = () => {
    myonoffswitch.toggleAttribute('checked');
    if (myonoffswitch.hasAttribute('checked')) {
      titleText[1].style.display = 'none';
      selectBox[2].style.display = 'none';
      selectBox[3].style.display = 'none';
    } else {
      titleText[1].style.display = 'inline-block';
      selectBox[2].style.display = 'inline-block';
      selectBox[3].style.display = 'inline-block';
    }
    getCalc();
  };

  myonoffswitch1.addEventListener('click', toggleSwitch);

  const toggleSwitchTwo = () => {
    myonoffswitchTwo.toggleAttribute('checked');
    getCalc();
  };

  myonoffswitch2.addEventListener('click', toggleSwitchTwo);

  // Рассчет стоимости
  const diamOne = document.getElementById('diam-one');
  const ringsOne = document.getElementById('rings-one');
  const diamTwo = document.getElementById('diam-two');
  const ringsTwo = document.getElementById('rings-two');

  const calcResult = document.getElementById('calc-result');

  const getCalc = () => {
    let result = 10000;

    if (myonoffswitch.hasAttribute('checked')) {
      result = 10000;

      if (diamOne.value === '2 метра') {
        result *= 1.2;
      }

      if (ringsOne.value === '2 штуки') {
        result *= 1.3;
      } else if (ringsOne.value === '3 штуки') {
        result *= 1.5;
      }

      // Наличие днища колодца
      if (myonoffswitchTwo.hasAttribute('checked')) {
        result += 1000;
      }

    } else {
      result = 15000;

      if (diamOne.value === '2 метра') {
        result *= 1.2;
      }

      if (ringsOne.value === '2 штуки') {
        result *= 1.3;
      } else if (ringsOne.value === '3 штуки') {
        result *= 1.5;
      }

      if (diamTwo.value === '2 метра') {
        result *= 1.2;
      }

      if (ringsTwo.value === '2 штуки') {
        result *= 1.3;
      } else if (ringsTwo.value === '3 штуки') {
        result *= 1.5;
      }

      // Наличие днища колодца
      if (myonoffswitchTwo.hasAttribute('checked')) {
        result += 2000;
      }
    }

    calcResult.value = result;

  };

  // const expand = document.querySelectorAll('.expand');

  // let resultData = {};

};
getCalcSeptic();






const getAccordions = () => {
  const panelHeading = document.querySelectorAll('.panel-heading');
  const panelCollapse = document.querySelectorAll('.panel-collapse');

  const toggleAccordion = (index) => {
    for (let i = 0; i < panelCollapse.length; i++) {
      if (index === i) {
        panelCollapse[i].classList.add('in');
      } else {
        panelCollapse[i].classList.remove('in');
      }
    }
  };

  document.body.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    target = target.closest('.panel-heading');
    if (target) {
      panelHeading.forEach((elem, index) => {
        if (elem === target) {
          toggleAccordion(index);
        }
      });
    }
  });
};
getAccordions();







const promotions = () => {
  const addSentenceBtn = document.querySelector('.add-sentence-btn');
  const cardSentence = document.querySelectorAll('.col-md-4');

  addSentenceBtn.addEventListener('click', () => {
    addSentenceBtn.style.display = 'none';
    cardSentence.forEach((item) => {
      if (item.classList.contains('hidden')) {
        item.classList.remove('hidden');
      } else if (item.classList.contains('visible-sm-block')) {
        item.classList.remove('visible-sm-block');
      }
    });
  });

};
promotions();








const sendForm = () => {
  const errorMessage = 'Ошибка';
  const loadMessage = 'Идет отправка...';
  const successMessage = 'Отправлено!';
  const forms = document.querySelectorAll('form');
  const form = document.querySelector('.main-form');

  const statusMessage = document.createElement('div');
  statusMessage.classList.add('status-message');
  statusMessage.style.cssText = `font-size: 16px;
    font-family: 'MuseoSansCyrl_bold',sans-serif;
    color: #333;`;
  // forms[0].appendChild(statusMessage);
  // statusMessage.textContent = loadMessage;

  console.log(123);

  forms.forEach((item) => {
    let form = item;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(event.target);

      form.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      const formData = new FormData(form);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Status network not 200');
          }
          statusMessage.textContent = successMessage;
        })
        .catch(() => {
          statusMessage.textContent = errorMessage;
        })
        .finally(() => {
          const formInput = document.querySelectorAll('input');
          for (let i = 0; i < formInput.length; i++) {
            let input = formInput[i];
            if (form.contains(input)) {
              input.value = '';
            }
          };
        })

    });

  });

  // document.body.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   let form;

  //   console.log(event.target);

  //   if (event.target.closest('form')) {
  //     forms.forEach((elem, index) => {
  //       if (elem === event.target) {
  //         form = forms[index];
  //       }
  //     });
  //   }
  //   form.appendChild(statusMessage);
  //   statusMessage.textContent = loadMessage;

  //   const formData = new FormData(form);
  //   let body = {};
  //   formData.forEach((val, key) => {
  //     body[key] = val;
  //   });

  //   postData(body)
  //     .then((response) => {
  //       if (response.status !== 200) {
  //         throw new Error('Status network not 200');
  //       }
  //       statusMessage.textContent = successMessage;
  //     })
  //     .catch(() => {
  //       statusMessage.textContent = errorMessage;
  //     })
  //     .finally(() => {
  //       const formInput = document.querySelectorAll('input');
  //       for (let i = 0; i < formInput.length; i++) {
  //         let input = formInput[i];
  //         if (form.contains(input)) {
  //           input.value = '';
  //         }
  //       };
  //     })

  // });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'include'
    });
  };

};
sendForm();





const validInput = () => {
  document.body.addEventListener('input', (event) => {
    let target = event.target;

    if (target.placeholder === '+7(___)___-__-__') {
      target.value = target.value.replace(/\+{2,}|[А-Яа-яЁё]|[A-Za-z]|\s/gi, '');
    }
    if (target.placeholder === 'Ваше имя' || target.placeholder === 'Введите свой вопрос') {
      target.value = target.value.replace(/[A-Za-z]/gi, '');
    }
  });
};

validInput();