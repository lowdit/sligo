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
    var suffix = (match[2] || '').trim();
    if (suffix && !/^[×x%€$kK]?$/.test(suffix)) return null;
    return { number: Number(match[1].replace(',', '.')), suffix: match[2] || '' };
  }

  function animateStat(element) {
    if (element.dataset.sligoStatAnimated === 'true') return;
    var raw = element.dataset.statValue || '';
    var value = parseNumeric(raw);
    var strong = element.querySelector('strong');
    if (!strong) return;

    if (!value || !isFinite(value.number)) {
      strong.textContent = raw;
      element.dataset.sligoStatAnimated = 'true';
      return;
    }

    element.dataset.sligoStatAnimated = 'true';

    var start = 0;
    var end = value.number;
    var duration = Math.min(2200, Math.max(1100, Math.abs(end) * 120));
    var started = performance.now();
    var decimals = Math.abs(end % 1) > 0 ? 1 : 0;

    strong.textContent = (decimals ? start.toFixed(1) : '0') + value.suffix;

    function frame(now) {
      var progress = Math.min((now - started) / duration, 1);
      var eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      var current = start + (end - start) * eased;
      var formatted = decimals
        ? current.toFixed(1).replace('.', ',')
        : String(Math.round(current));
      strong.textContent = formatted + value.suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function animateStatsInSlide(slide) {
    if (!slide) return;
    slide.querySelectorAll('.sligo-stat').forEach(function (stat) {
      if (stat.classList.contains('fragment') && !stat.classList.contains('visible')) return;
      animateStat(stat);
    });
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

  var READER_QUERY = '(max-width: 900px)';

  function bootReader(root) {
    document.body.classList.add('sligo-reader');
    root.querySelectorAll('.slides section[data-background-color]').forEach(function (slide) {
      slide.style.backgroundColor = slide.dataset.backgroundColor;
    });
    initQuiz(root);
    root.querySelectorAll('.sligo-stat').forEach(animateStat);
  }

  function boot() {
    var root = document.querySelector('.deck1');
    if (!root) return;

    addListFragments(root);

    if (window.matchMedia && window.matchMedia(READER_QUERY).matches) {
      bootReader(root);
      return;
    }

    if (typeof Reveal === 'undefined') return;

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

    deck.on('slidechanged', function (event) {
      animateStatsInSlide(event.currentSlide);
    });

    deck.initialize({
      slideNumber: true,
      mouseWheel: true,
      touch: true,
      embedded: false
    }).then(function () {
      initQuiz(root);
      var current = root.querySelector('.slides section.present');
      animateStatsInSlide(current);
    });
  }

  if (window.matchMedia) {
    var readerMedia = window.matchMedia(READER_QUERY);
    var onReaderChange = function (event) {
      var reader = document.body.classList.contains('sligo-reader');
      if (event.matches !== reader) window.location.reload();
    };
    if (readerMedia.addEventListener) {
      readerMedia.addEventListener('change', onReaderChange);
    } else if (readerMedia.addListener) {
      readerMedia.addListener(onReaderChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
}());
