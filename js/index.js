let imageUrl

if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'vince-pino.github.io') {
  // If running locally
  imageUrl = window.location.origin + "/assets/images/";
} else {
  // If running on a server (like GitHub Pages)
  imageUrl = window.location.href + "assets/images/";
}

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