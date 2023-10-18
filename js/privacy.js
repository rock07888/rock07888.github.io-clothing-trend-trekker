var toggleButton = document.querySelector('.ellipsis-toggle');
var content = document.querySelector('.content');

toggleButton.addEventListener('click', function() {
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    toggleButton.textContent = 'Show more';
  } else {
    content.classList.add('expanded');
    toggleButton.textContent = 'Show less';
  }
});