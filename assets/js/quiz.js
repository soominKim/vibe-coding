// Interactive multiple-choice quizzes: reveal correctness + explanation on answer.
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    var quizzes = document.querySelectorAll('.quiz');
    quizzes.forEach(function (quiz) {
      var answer = (quiz.getAttribute('data-answer') || '').trim();
      var opts = quiz.querySelectorAll('.quiz-opt');
      var explain = quiz.querySelector('.quiz-explain');
      var verdict = quiz.querySelector('.quiz-verdict');
      opts.forEach(function (opt) {
        opt.addEventListener('click', function () {
          if (quiz.classList.contains('answered')) return;
          quiz.classList.add('answered');
          var choice = (opt.getAttribute('data-choice') || '').trim();
          var isCorrect = choice === answer;
          opts.forEach(function (o) {
            o.disabled = true;
            var c = (o.getAttribute('data-choice') || '').trim();
            var mark = document.createElement('span');
            mark.className = 'quiz-mark';
            if (c === answer) {
              o.classList.add('is-correct');
              mark.textContent = '정답 ✓';
              o.appendChild(mark);
            } else if (o === opt) {
              o.classList.add('is-wrong');
              mark.textContent = '✗';
              o.appendChild(mark);
            }
          });
          if (verdict) {
            if (isCorrect) {
              verdict.textContent = '정답입니다! ✓';
              verdict.classList.add('ok');
            } else {
              verdict.textContent = '아쉬워요. 정답은 ' + answer + '예요.';
              verdict.classList.add('no');
            }
          }
          if (explain) explain.hidden = false;
        });
      });
    });
  });
})();
