const imageUrl = window.location.origin + "/assets/images/";
const icon = document.querySelectorAll('.icon');

icon.forEach((iconEl) => {
  iconEl.addEventListener('click', () => {
    // Close other elements
    const allIcons = document.querySelectorAll('.icon');
    allIcons.forEach((otherIcon) => {
      if (otherIcon !== iconEl) {
        otherIcon.src = `${imageUrl}icon-plus.svg`;
        const otherQA = otherIcon.closest('.qa');
        const otherAnswer = otherQA.querySelector('.answer');
        otherAnswer.classList.add('hide');
      }
    });

    // Open/close the clicked element
    if (iconEl.src === `${imageUrl}icon-plus.svg`) {
      iconEl.src = `${imageUrl}icon-minus.svg`;
      const qa = iconEl.closest('.qa');
      const answer = qa.querySelector('.answer');
      answer.classList.remove('hide');
    } else {
      iconEl.src = `${imageUrl}icon-plus.svg`;
      const qa = iconEl.closest('.qa');
      const answer = qa.querySelector('.answer');
      answer.classList.add('hide');
    }
  });
});