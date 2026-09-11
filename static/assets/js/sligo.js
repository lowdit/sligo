/* Sligo Alpha runtime: Reveal reste le moteur, Sligo ne fait que traduire quelques intentions. */
(function () {
  function addListFragments(root) {
    root.querySelectorAll('.sligo-auto-fragments > ul > li, .sligo-auto-fragments > ol > li').forEach(function (item) {
      item.classList.add('fragment');
    });
  }

  function parseNumeric(value) {
    var match = String(value).match(/^(-?\d+(?:[.,]\d+)?)(.*)$/);
    if (!match) return null;
    return { number: Number(match[1].replace(',', '.')), suffix: match[2] || '' };
  }

  function animateStat(element) {
    if (element.dataset.sligoStatAnimated === 'true') return;
    var value = parseNumeric(element.dataset.statValue || '');
    if (!value || !isFinite(value.number)) return;
    element.dataset.sligoStatAnimated = 'true';
    var strong = element.querySelector('strong');
    if (!strong) return;

    var start = 0;
    var end = value.number;
    var duration = 550;
    var started = performance.now();

    function frame(now) {
      var progress = Math.min((now - started) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = start + (end - start) * eased;
      var formatted = Math.abs(end % 1) > 0 ? current.toFixed(1).replace('.', ',') : Math.round(current);
      strong.textContent = formatted + value.suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function initQuiz(root) {
    root.querySelectorAll('.sligo-quiz').forEach(function (quiz) {
      if (quiz.dataset.sligoQuizReady === 'true') return;
      quiz.dataset.sligoQuizReady = 'true';
      var choices = Array.prototype.slice.call(quiz.querySelectorAll('.sligo-quiz__choice'));
      var feedback = quiz.querySelector('.sligo-quiz__feedback');

      choices.forEach(function (button) {
        button.addEventListener('click', function () {
          if (choices.some(function (item) { return item.disabled; })) return;
          var correct = button.dataset.correct === 'true';
          button.classList.add(correct ? 'is-correct' : 'is-wrong');
          button.setAttribute('aria-pressed', 'true');
          var explanation = button.dataset.explanation;
          choices.forEach(function (item) { item.disabled = true; });
          if (feedback) {
            feedback.hidden = false;
            feedback.textContent = correct ? 'Bonne réponse.' : 'Pas cette fois.';
            if (explanation) feedback.textContent += ' ' + explanation;
          }
        });
      });
    });
  }

  function boot() {
    var root = document.querySelector('.deck1');
    if (!root || typeof Reveal === 'undefined') return;

    addListFragments(root);

    var deck = new Reveal(root, {
      controls: false,
      hash: true,
      progress: false,
      backgroundTransition: 'fade',
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
    });

    deck.on('fragmentshown', function (event) {
      var stat = event.fragment && event.fragment.closest('.sligo-stat');
      if (stat) animateStat(stat);
    });

    deck.initialize({
      slideNumber: true,
      mouseWheel: true,
      touch: true,
      embedded: false
    }).then(function () {
      initQuiz(root);
      root.querySelectorAll('.sligo-stat.visible').forEach(animateStat);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
}());
