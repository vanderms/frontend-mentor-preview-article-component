const share = document.querySelector('.share');
const shareButton = document.querySelector('.share-button');
const popover = document.querySelector('.pop-over');


shareButton.addEventListener('click', () => {
  shareButton.classList.toggle('active');
  popover.classList.toggle('active');
});

window.addEventListener('click', e => {
  if (!isInside(e.target, share)) {
    shareButton.classList.remove('active');
    popover.classList.remove('active');
  }
});

function isInside(elem, target) {
  return elem && (elem === target || isInside(elem.parentNode, target));
}
