document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    menu.classList.toggle('open');
    var expanded = menu.classList.contains('open');
    btn.setAttribute('aria-expanded', expanded);
  });
});
