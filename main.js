const shareButton = document.querySelector('.share-button');
const modal = document.querySelector('.pop-over-modal');
const backdrop = modal.querySelector('.pop-over-backdrop');

shareButton.addEventListener('click', () => {
  shareButton.classList.add('active');
  modal.classList.add('active');
});

backdrop.addEventListener('click', () => {
 
  shareButton.classList.remove('active');
  modal.classList.remove('active');
});
