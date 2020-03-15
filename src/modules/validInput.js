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

export default validInput;
