(function ($) {
  $(function () {

    /* 点击更换背景图片-start */
    $('.colorBg a').click(function () {
      $('body').css({
        'background-image': 'url("' + $(this).attr('data-src') + '")',
        'background-color': $(this).attr('data-color')
      })
    })

    /* 点击更换背景图片-end */

    /* 头部我的网页动画 */

    function autoPlayGRWy() {
      var grwy_index = 0;
      $('.no-swiper-slide').eq(0).clone(true).appendTo($('.no-swiper-wrapper'))
      setInterval(function () {
        grwy_index++
        $('.no-swiper-wrapper').animate({
          left: -grwy_index * $('.no-swiper-slide').eq(1).width(),
        })
        if (grwy_index == $('.no-swiper-slide').length) {
          grwy_index = 0
          $('.no-swiper-wrapper').stop(true).css({
            left: -grwy_index * $('.no-swiper-slide').eq(1).width(),
          })
        }

      }, 3000)
    }

    autoPlayGRWy()
    /* 头部我的网页动画-end */


    






  })
})($)