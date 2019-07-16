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

    /* 标题的swiper-start */
    var mySwiper1 = new Swiper('#swiper2', {
      autoplay: true,
      speed: 1000,
      direction: 'vertical',
      loop: true, // 循环模式选项

    })
    /* swiper-end */


    /* 轮播图的swiper-start */
    var mySwiper1 = new Swiper('#swiper1', {
      autoplay: true,
      speed: 300,
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true,
      },

    })
    /* swiper-end */

    /* 导航栏按钮注册点击事件 */
    $('.nav li').click(function () {
      var navIndex = $(this).addClass('active').siblings().removeClass('active').end().index()
      console.log(navIndex);
      $('.content>ul').eq(navIndex).stop(true).siblings().hide().end().show()

    })


    /* css点击跳转响应的内容 */
    $('.content-css li').click(function () {
     var css_index=  $(this).addClass('active').siblings().removeClass('active').end().index()
console.log(css_index);

     $.get('./md/02-css/css-day0'+css_index+'.md', function (text) {
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