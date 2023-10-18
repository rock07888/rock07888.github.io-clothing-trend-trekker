var toggleButton = document.querySelector('.service-ellipsis-toggle');
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

const fileInput = document.getElementById('my-file');
const fileLabel = document.getElementById('file-label');

fileInput.addEventListener('change', function() {
  if (fileInput.files.length > 0) {
    fileLabel.innerText = fileInput.files[0].name;
  } else {
    fileLabel.innerText = '選擇檔案';
  }
});