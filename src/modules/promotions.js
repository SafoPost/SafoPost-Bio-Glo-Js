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

export default promotions;