const modal = document.getElementById('myModal');
const btn = document.getElementById('modal_btn');
btn.onclick = function () {
  modal.style.display = 'block';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
