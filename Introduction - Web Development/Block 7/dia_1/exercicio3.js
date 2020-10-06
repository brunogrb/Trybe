const clicks = document.getElementById('count-click');
let clickCount = 0;

clicks.addEventListener('click', () => {
  clickCount += 1;
  document.getElementById('clickCount').innerHTML = clickCount;
});

