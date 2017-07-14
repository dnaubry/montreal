import $ from 'jquery';

var Portfolio = (function() {
  var init = function() {
    const $portfolioImgs = $('.portfolio-works img');
    const $portfolioBtns = $('.portfolio-button');
    const $portfolioBtnsMore = $('.portfolio-button--more');
    const tagged = {};
    let currentImgSet = 'all';

    $portfolioImgs.each(function() {
      const img = this;
      var tag = $(this).data('tag');

      if (tag) {
        if (tagged[tag] === undefined) {
          tagged[tag] = [];
        }
        tagged[tag].push(img);
      }
    });

    $portfolioBtns.click(function() {
      $(this).addClass('button--active')
        .siblings().removeClass('button--active');
      $portfolioImgs.removeClass('portfolio-img--is-visible portfolio-img--wide');

      if (this.id !== 'all') {
        currentImgSet = this.id;
        $portfolioImgs.filter(tagged[this.id]).filter(function(index) {
          return index < 4;
        }).addClass('portfolio-img--is-visible')
          .first().addClass('portfolio-img--wide');
      } else {
        currentImgSet = 'all';
        $portfolioImgs.filter(function(index) {
          return index < 4;
        }).addClass('portfolio-img--is-visible')
        .first().addClass('portfolio-img--wide');
      }
      $portfolioBtnsMore.attr('disabled', false);
    });

    $portfolioBtnsMore.click(function() {
      if (currentImgSet !== 'all') {
        $portfolioImgs.filter(tagged[currentImgSet]).addClass('portfolio-img--is-visible');
      } else {
        $portfolioImgs.addClass('portfolio-img--is-visible');
      }
      $portfolioBtnsMore.attr('disabled', true);
    });
  }

  return {
    init: init
  }
})();

export default Portfolio;
