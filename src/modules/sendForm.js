const sendForm = () => {
  const errorMessage = 'Ошибка';
  const loadMessage = 'Идет отправка...';
  const successMessage = 'Отправлено!';
  const forms = document.querySelectorAll('form');

  const statusMessage = document.createElement('div');
  statusMessage.classList.add('status-message');
  statusMessage.style.cssText = `font-size: 16px;
    font-family: 'MuseoSansCyrl_bold',sans-serif;
    color: #333;`;

  document.body.addEventListener('submit', (event) => {
    event.preventDefault();
    let form;

    if (event.target.closest('form')) {
      forms.forEach((elem, index) => {
        if (elem === event.target) {
          form = forms[index];
        }
      });
    }
    if (form.classList.contains('director-form')) {
      return;
    }
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;


    // Собираем данные из калькулятора в объект
    const myonoffswitch = document.getElementById('myonoffswitch');
    const myonoffswitchTwo = document.getElementById('myonoffswitch-two');
    const diamOne = document.getElementById('diam-one');
    const ringsOne = document.getElementById('rings-one');
    const diamTwo = document.getElementById('diam-two');
    const ringsTwo = document.getElementById('rings-two');
    const distance = document.getElementById('distance');
    const calcResult = document.getElementById('calc-result');
    let resultData = {
      typeSeptic: 'Однокамерный',
      diamOne: '-',
      ringsOne: '-',
      diamTwo: '-',
      ringsTwo: '-',
      wellBottom: 'Есть',
      distance: '-',
      calcResult: ''
    };
    if (!myonoffswitch.hasAttribute('checked')) {
      resultData.typeSeptic = 'Двухкамерный';
    }
    resultData.diamOne = diamOne.value;
    resultData.ringsOne = ringsOne.value;
    if (!myonoffswitch.hasAttribute('checked')) {
      resultData.diamTwo = diamTwo.value;
      resultData.ringsTwo = ringsTwo.value;
    }
    if (!myonoffswitchTwo.hasAttribute('checked')) {
      resultData.wellBottom = 'Нет';
    }
    if (distance.value !== '') {
      resultData.distance = distance.value;
    }
    if (calcResult.value !== '') {
      resultData.calcResult = calcResult.value;
    }
    // Собираем данные из поля "Вопрос"
    const questionInput = document.getElementById('question-input');
    let questionData = {
      question: ''
    };
    questionData.question = questionInput.value;

    // Собираем все данные
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    let bodyAll;
    if (form.classList.contains('popup-calc')) {
      bodyAll = Object.assign(body, resultData);
      console.log(1);
    } else if (form.classList.contains('popup-consult')) {
      bodyAll = Object.assign(body, questionData);
      console.log(2);
    } else {
      bodyAll = body;
      console.log(3);
    }

    postData(bodyAll)
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
        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
      })
  });

  const postData = (bodyAll) => {
    return fetch('server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyAll),
      credentials: 'include'
    });
  };

};

export default sendForm;
