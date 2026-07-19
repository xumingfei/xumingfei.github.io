document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('article-container');
  if (!container) return;

  var POPUP_IMG = '/img/avatar.png';
  var TIP_TEXT = '💡 喜欢这篇文章？点击打赏';

  var tip = document.createElement('div');
  tip.className = 'post-bottom-tip';
  tip.innerHTML = TIP_TEXT;

  tip.addEventListener('click', function () {
    var mask = document.createElement('div');
    mask.className = 'img-popup-mask';
    mask.innerHTML = '<img src="' + POPUP_IMG + '" alt="popup">';
    mask.addEventListener('click', function () {
      mask.classList.remove('show');
      setTimeout(function () {
        if (mask.parentNode) mask.parentNode.removeChild(mask);
      }, 250);
    });
    document.body.appendChild(mask);
    requestAnimationFrame(function () {
      mask.classList.add('show');
    });
  });

  container.appendChild(tip);
});
