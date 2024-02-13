document.addEventListener("DOMContentLoaded", function() {
  fetch('/visits')
      .then(response => response.text())
      .then(data => {
          document.getElementById('visitCount').textContent = data;
      });
});
