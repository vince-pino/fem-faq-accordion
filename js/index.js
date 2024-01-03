const imageUrl = window.location.origin + "/assets/images/";
const summary = document.querySelectorAll('summary');

summary.forEach((summaryEl) => {
  summaryEl.addEventListener('click', () => {
    // Close other elements
    const allSummaries = document.querySelectorAll('summary');
    allSummaries.forEach((otherSummary) => {
      if (otherSummary !== summaryEl) {
        const otherQa = otherSummary.closest('.qa');
        const imgUrl = otherQa.querySelector('img');
        imgUrl.src = `${imageUrl}icon-plus.svg`;
        otherQa.open = false;
      }
    });

    const qa = summaryEl.closest('.qa');
    const imgUrl = qa.querySelector('img');
    if (imgUrl.src === `${imageUrl}icon-plus.svg`) {
      imgUrl.src = `${imageUrl}icon-minus.svg`;
    }
    else {
      imgUrl.src = `${imageUrl}icon-plus.svg`;
    }
  });
});