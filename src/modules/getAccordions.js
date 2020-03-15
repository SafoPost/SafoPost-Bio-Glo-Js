const getAccordions = () => {
  const panelHeading = document.querySelectorAll('.panel-heading');
  const panelCollapse = document.querySelectorAll('.panel-collapse');
  const accordion = document.getElementById('accordion');
  const accordionTwo = document.getElementById('accordion-two');

  const toggleAccordion = (index) => {
    for (let i = 0; i < panelCollapse.length; i++) {
      if (index === i) {
        panelCollapse[i].classList.add('in');
      } else {
        panelCollapse[i].classList.remove('in');
      }
    }
  };

  accordion.addEventListener('click', (event) => {
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

  accordionTwo.addEventListener('click', (event) => {
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

export default getAccordions;