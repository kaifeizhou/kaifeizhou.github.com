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

      }, 1000)
    }

    autoPlayGRWy()
    /* 头部我的网页动画-end */


    /* 导航栏按钮注册点击事件 */
    $('.nav li').click(function () {
      var navIndex = $(this).addClass('active').siblings().removeClass('active').end().index()
      console.log(navIndex);
      $('.content>ul').eq(navIndex).stop(true).siblings().hide().end().show()

    })



    /* css点击跳转响应的内容 */
    $('.content-css li').click(function () {
      var css_index = $(this).addClass('active').siblings().removeClass('active').end().index()
      console.log(css_index);

      $.get('./md/02-css/css-day0' + css_index + '.md', function (text) {
        /*  document.write(markdownit().render(text)); */

        $(' .content-show-md').html(
          markdownit().render(text)
        )
      });

    })

    $.get('./md/01-html/html.md', function (text) {
      /*  document.write(markdownit().render(text)); */

      $(' .content-show-md').html(
        markdownit().render(text)
      )
    });






  })
})($)