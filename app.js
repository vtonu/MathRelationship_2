CSS.registerProperty({
  name: '--p',
  syntax: '<integer>',
  initialValue: 0,
  inherits: true,
});

$(document).ready(function () {
  var progressBar = $('.progress-bar .progress');
  var counter = $('.counter');
  var completionText = $('#completion-text');
  var loader = $('.loader');

  function counterInit(fValue, lValue) {
    var counterValue = parseInt(counter.text());

    if (counterValue >= fValue && counterValue <= lValue) {
      counter.text(counterValue + 1);

      // Calculate percentage progress
      var percentage = ((counterValue - fValue + 1) / (lValue - fValue)) * 100;
      progressBar.css('width', percentage + '%');

      // Update the loader's data-year attribute
      loader.attr('data-year', counterValue);

      // Update the year element
      $('#year').text(counterValue);

      setTimeout(function () {
        counterInit(fValue, lValue);
      }, 20);
    } else if (counterValue > lValue) {
      completionText.text('COMPLETE');
      completionText.show();
      progressBar.addClass('complete');
    }
  }

  counterInit(1998, 2023);
});
