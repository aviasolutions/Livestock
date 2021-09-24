$('.search-link .search-img').click(function(e) {
  $(this).hide();
  $(this).siblings().show();
  $(this).parent().toggleClass('active-search');
  $('.site-header').toggleClass('active-search-header');
  $(this).closest('.search-wrap').siblings('.search-bar--header').slideToggle();
  $(this).closest('.search-wrap').siblings('.search-bar--header').toggleClass('serch-box');
  $("input[name='q']").focus();
});
$('.search-link .search-img-hover').click(function(e) {
  $(this).hide();
  $(this).siblings().show();
  $(this).parent().toggleClass('active-search');
  $('.site-header').toggleClass('active-search-header');
  $(this).closest('.search-wrap').siblings('.search-bar--header').slideToggle();
  $(this).closest('.search-wrap').siblings('.search-bar--header').toggleClass('serch-box');
  $("input[name='q']").focus();
});

function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

equalheight = function(container) {
  var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      $el,
      topPosition = 0;
  $(container).each(function() {
    $el = $(this);
    $($el).height('auto')
    topPostion = $el.position().top;
    if (currentRowStart != topPostion) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
}

$(window).resize(function() {
  equalheight('.fploop');
});
$(window).load(function() {
  equalheight('.fploop');
});

// /*---------Product thumbnails--------*/
// $('#thumbnails a').click(function() {
//   var newImage = $(this).attr('data-id');
//   $('#main-product-image img[data-image-id="' + newImage + '"]').show().siblings().hide();
//   return false;
// });

/*---------Product thumbnails--------*/
$('#thumbnails a').click(function() {
  var newImage = $(this).find('img').attr('data-image-id');
  $('.product-single__photo-wrapper .product-single__photo[data-image-id="'+newImage+'"]').show().siblings().hide();
  if($(this).parents('#thumbnails').hasClass('video__image')){
    $('.product-single__photo-wrapper .product-single__photo[data-image-id="'+newImage+'"]').get(0).play();
  }
  else{
    if($('video.product-single__photo').length > 0){
      $('video.product-single__photo').get(0).pause();
    }
  }
  return false;
});

$('.product-thumbnails').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  vertical: true,
  verticalSwiping: true,
});
$('.contact-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button class="slick-prev slick-arrow"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49995 15.5L9.26245 13.7375L3.53745 8L9.26245 2.2625L7.49995 0.5L-5.02467e-05 8L7.49995 15.5Z" fill="black"></path></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50005 0.5L0.737549 2.2625L6.46255 8L0.737549 13.7375L2.50005 15.5L10 8L2.50005 0.5Z" fill="black"></path></svg></button>',
});

$('.collection-slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
});

$('#mobile-gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var current_slide_index = nextSlide ;
  if(parseInt($('#mobile-gallery .product-single__photo-wrapper.video__slide').last().attr('data-slick-index')) == current_slide_index ){
    $('#mobile-gallery .product-single__photo-wrapper.video__slide').last().find('video').get(0).play();
  }
  else{
    if($('#mobile-gallery .product-single__photo-wrapper.video__slide').last().find('video').length > 0){
      $('#mobile-gallery .product-single__photo-wrapper.video__slide').last().find('video').get(0).pause();
    }
  }
});

$('#mobile-gallery').slick({
  arrows: false,
  dots: true,
  adaptiveHeight: true
});

$(".accordion_example3").smk_Accordion({
  showIcon: true,
  closeAble: true //boolean
});


$(document).ready(function() {
  //blog page product hover effect
  $(".animate_element").prev('.grid__item').addClass("manage");
  $(".animate_element").next('.grid__item').addClass("clear");

  $(".blog_release_loop").click(function() {
    //alert("dd");

    //         var space = window.innerHeight - $('.wrapper').offset().top +  $('.wrapper').outerHeight();
    //         console.log(space)

    //         var space2 = (window.innerHeight - $(this).offset().top +  $(this).outerHeight()) ;
    //         console.log(space2);

    var actualH = $(this).offset().top - 156;
    //console.log('actualH----' + actualH);

    $(this).find('.blog_release_onhover').css('top', actualH + 'px');

    var widthrelease = $(window).width();

    var leftoffset = $(this).offset().left;
    var loopwidth = $(this).width() / 2;
    var arrowleft = loopwidth + leftoffset;

    var p = $(".blog_release_grid_wrap");
    var position = p.offset();
    var strleft = position.left;

    //console.log(loopwidth+'----'+leftoffset);

    var finalpos = strleft - leftoffset;
    loopwidth = loopwidth / 2;
    leftoffset = -leftoffset;
    widthrelease = widthrelease - 60;
    //$(this).find(".traingle_arrow").css("left",arrowleft);  
    $(this).find(".blog_release_onhover").css("width", widthrelease);
    $(this).find(".blog_release_onhover").css("left", finalpos);
    var height_hideelement = $(this).find(".blog_release_onhover").height();

    $(this).find('.traingle_arrow').slideToggle(500);
    $(this).siblings().find('.traingle_arrow').slideUp(500);


    $(this).find(".blog_release_onhover").slideToggle(500);

    $(this).find(".blog_release_onhover").toggleClass("show");
    if ($(window).width() < 591) {
      $(this).siblings().find(".blog_release_onhover").slideUp(500);

    } else {
      $(this).siblings().find(".blog_release_onhover").fadeOut(500);

    }
    $(this).siblings().find(".blog_release_onhover").removeClass("show");
    var display = $(this).find(".blog_release_onhover").attr("class");
    //console.log(display);

    if (display.includes('show')) {
      // $(this).nextAll('.animate_element').first().css("height",height_hideelement);
      $(this).nextAll('.animate_element').first().slideDown(1000);
      $(this).nextAll('.animate_element').first().nextAll('.animate_element').slideUp(500);
      $(this).nextAll('.animate_element').first().prevAll('.animate_element').slideUp(500);

    } else {
      $(this).nextAll('.animate_element').first().slideUp(500);
    }
    $("div.mce_inline_error").remove();
    $("#mce-success-response").hide();
    $("input.mce_inline_error").css("border", "1px solid #ABB0B2");
  });
  $(".blog_release_onhover").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

  $('.blog_release_grid_wrap article').click(function(e) {
    //         e.preventDefault();
    e.stopPropagation();
  });
});
$(document).ready(function() {
  //=============
  var winwid = $(window).width();
  if (winwid >= 1680 && winwid < 1905) // for width 1680
  {
    setTimeout(function() {
      var hight = 2437;
      $("#packery").height(hight + "px");
      var clickcount = 2;
      var hieght2 = 0;
      $("#loadmore").click(function() {
        if (clickcount < 10) {
          hieght2 = Number(hight) * Number(clickcount);
        } else {
          //console.log('tet ');
          var hight1 = 812;
          hieght2 = Number(hieght2) + Number(hight1);
        }
        clickcount++;
        if (clickcount == 3) {
          $("#loadmore").hide();
        }
        //console.log(hieght2 + '--' + winwid + ' 1680-' + clickcount);
        $("#packery").height(hieght2 + "px");

      });
      //console.log('load =  ' + hight);
    }, 500);
  } else if (winwid >= 1905) // for width 1920
  {
    setTimeout(function() {
      var hight = 2437;
      $("#packery").height(hight + "px");
      var clickcount = 2;
      var hieght2 = 0;
      $("#loadmore").click(function() {
        if (clickcount < 9) {
          hieght2 = Number(hight) * Number(clickcount);
        } else {
          hieght2 = hieght2 + 415;
        }
        clickcount++;
        if (clickcount == 3) {
          $("#loadmore").hide();
        }
        //console.log(hieght2 + '- ' + winwid + '=1920--' + clickcount);
        $("#packery").height(hieght2 + "px");

      });
      //console.log('load =  ' + hight);
    }, 500);
  } else {
    setTimeout(function() {
      var hight = 2437;
      $("#packery").height(hight + "px");
      var clickcount = 2;
      $("#loadmore").click(function() {
        var hieght2 = Number(hight) * Number(clickcount);
        $("#packery").height(hieght2 + "px");
        clickcount++;
        if (clickcount == 3) {
          $("#loadmore").hide();
        }
        //console.log('---' + clickcount);
      });
      //console.log('load =  ' + hight);
    }, 500);
  }
});

$(document).ready(function() {
  $('#packery').packery({
    // options
    itemSelector: '.item',
    gutter: 10
  });

  $('.notify_btn').click(function() {
    $("#blog_release_popup").show();
    var attrtitle = $(this).attr("data-title");
    var attraction = $(this).attr("data-action");
    //console.log(attraction);
    $('#mce-MMERGE1').val(attrtitle);
    $("#mc_embed_signup form").attr("action", attraction);
  });

  $(".btn_raffle").click(function() {
    var hrefVal = $(this).find('a').attr("href");
    window.open(hrefVal, "_blank");
  });
  $(".btn_buy").click(function() {
    var hrefVal = $(this).find('a').attr("href");
    window.open(hrefVal, '_self');
  });
  $('.blogul.social-icons li').click(function() {
    var hrefVal = $(this).find('a').attr("href");
    window.open(hrefVal, '', 'width=500,height=400');
    return false;
  });

  $('#blog_release_popup_iner #mc-embedded-subscribe').click(function() {
    $('#mc-embedded-subscribe-form').submit();
  });

  $(".blog_release_popup_close").click(function() {
    $(this).parents("#blog_release_popup").hide();
  });

  var parent = $('.blog_popup_close');
  parent.click(function(event) {
    if (event.target === this) {
      $(this).hide();
    }

  });

  $(".blogReleaseClose").click(function() {
    $(this).parent(".blog_release_onhover").slideUp(1000);
    $(this).parent(".blog_release_onhover").removeClass('show');
    $(this).parent().parent().find(".traingle_arrow").slideToggle(1000);
    $(this).parents(".blog_release_loop").nextAll('.animate_element').first().slideUp(1000);
  });

  $('body.blog-release').click(function() {
    if ($(".blog_release_onhover.show").length > 0) {
      $(".blog_release_onhover").slideUp(1000);
      $(".blog_release_onhover").removeClass('show');
      $(".blog_release_loop").nextAll('.animate_element').first().slideUp(1000);
    }
  });

  $(document).keydown(function(e) {
    // ESCAPE key pressed
    if ($(".blog_release_onhover.show").length > 0) {
      if (e.keyCode == 27) {
        $(".blog_release_onhover").slideUp(1000);
        $(".blog_release_onhover").removeClass('show');
        $(".blog_release_loop").nextAll('.animate_element').first().slideUp(1000);
      }
    }
  });

});
jQuery('.selected-currency').text(Currency.currentCurrency);
setTimeout(function() {
  var curllen = $("#currency_picker").find('option').length;
  var curvval = $("#currency_picker").val();

  var arrVal = [];
  var arrname = [];

  for (k = 0; k < curllen; k++) {
    var curVal = $("#currency_picker option:eq(" + k + ")").val();
    if (curVal != 'CAD') {
      arrname.push(curVal);
    }

    //console.log(arrname);
    $("#currency_picker").val(curVal);
    $("#currency_picker").change();

    var money = $("#ProductPrice .money").text();
    arrVal.push(money);
    var money1 = money.substring(0, 1);
    var money2 = money.substring(1, money.length);
    var money21 = money2.split(" ")[0].replace(",", "");
    var money22 = money2.split(" ")[1];

    if (curVal == "USD") {
      var money221 = "USD";
    } else if (curVal == "CAD") {
      var money221 = "";
    } else {
      var money221 = "";
    }
    if (money22 != 'CAD') {
      $("#currencies_list").append("<span>" + money1 + Math.round(Number(money21)) + " " + money221 + "</span>");
    }

  }
  //console.log(arrVal);
  //console.log(arrname);
  $("#currency_picker").val(curvval);
  $("#currency_picker").change();
}, 1000);


$(window).on('load',function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });


  var refreshCartInterval = setInterval(function(){
    if($('.sq-add-to-cart-container.handle-clicks').length > 0){
      refreshCart();
      //console.log(" interval ended");
      clearInterval(refreshCartInterval); // interval ended
    }
  }, 500);

  var changeSezzlePlacement = setInterval(function(){ 
    if($('#shopify-section-product-template .sezzle-shopify-info-button').length > 0){
      sezzlePlacement();
      clearInterval(changeSezzlePlacement); // interval ended
    }
  }, 500);
  
  
});

function sezzlePlacement(){
  setTimeout(function() {
    var detachedSezzle = $('.sezzle-shopify-info-button').detach();
    setTimeout(function() {
      $('.sezzle--wrapper').html(detachedSezzle);
    },100);
  },100);
}

function refreshCart(){
  //console.log('function Called')
  //  ---------------------- start: on the click of add to cart on collection page ------------
  $('.sq-add-to-cart-container.handle-clicks').on('click',function(){
    //console.log('clicked');
    setTimeout(function() {
      //console.log('clicked settime out inner');
      $.getJSON('/cart.js', function (cart, textStatus) {
        $('.cart-link__bubble').html(cart.item_count);
      });
    },1000);
  })
  //  ---------------------- end: on the click of add to cart on collection page ------------
}

$(document).ready(function() {
  // fixed the no. of child link
  var liItems = Number($("#noOfItems").text());
  var liItemsf = Number($("#noOfItemsf").text());
  var liItemsapp = Number($("#noMenuItemApparel").text());
  //drop-1
  var d = 0;
  var drop1len = $(".drop-1").length;
  //console.log('--->' + drop1len);
  for (d = 0; d < drop1len; d++) {

    var wrapEveryN = function(n, elements, wrapper) {
      for (var i = 0; i < elements.length; i += n) {
        elements.slice(i, i + n).wrapAll(wrapper);
      }
    }
    wrapEveryN(liItems, $(".drop-1:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
  }
  //drop-2
  var drop1len = $(".drop-2").length;
  for (d = 0; d < drop1len; d++) {

    var wrapEveryN = function(n, elements, wrapper) {
      for (var i = 0; i < elements.length; i += n) {
        elements.slice(i, i + n).wrapAll(wrapper);
      }
    }
    wrapEveryN(liItems, $(".drop-2:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
  }
  //drop-3
  var drop1len = $(".drop-3").length;
  for (d = 0; d < drop1len; d++) {

    var wrapEveryN = function(n, elements, wrapper) {
      for (var i = 0; i < elements.length; i += n) {
        elements.slice(i, i + n).wrapAll(wrapper);
      }
    }
    wrapEveryN(liItems, $(".drop-3:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
  }

  //====== for footware ====
  var liItemsf = Number($("#noOfItemsf").text());

  var str1 = $('ul.main-nav li').hasClass('nav--Footwear2');
  var str2 = $('ul.main-nav li').hasClass('nav--Footwear1');
  var str3 = $('ul.main-nav li').hasClass('nav--Footwear');

  var footerClass = '';
  var apparelClass = '';
  if (str1 == true) {
    footerClass = '.nav--Footwear2';
  }
  if (str2 == true) {
    footerClass = '.nav--Footwear1';
  }
  if (str3 == true) {
    footerClass = '.nav--Footwear';
  }

  //console.log('---' + footerClass);

  //drop-1 for footwear 
  var drop1len = $(footerClass + " .drop-1").length;
  for (d = 0; d < drop1len; d++) {

    var wrapEveryN = function(n, elements, wrapper) {
      for (var i = 0; i < elements.length; i += n) {
        elements.slice(i, i + n).wrapAll(wrapper);
      }
    }
    wrapEveryN(liItemsf + 2 - 2, $(footerClass + " .drop-1:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
  }
  //drop-2
  var drop1len = $(footerClass + " .drop-2").length;
  for (d = 0; d < drop1len; d++) {

    var wrapEveryN = function(n, elements, wrapper) {
      for (var i = 0; i < elements.length; i += n) {
        elements.slice(i, i + n).wrapAll(wrapper);
      }
    }
    wrapEveryN(liItemsf + 2 - 2, $(footerClass + " .drop-2:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
  }
  //drop-3
  var drop1len = $(footerClass + " .drop-3").length;
  for (d = 0; d < drop1len; d++) {

    var wrapEveryN = function(n, elements, wrapper) {
      for (var i = 0; i < elements.length; i += n) {
        elements.slice(i, i + n).wrapAll(wrapper);
      }
    }
    wrapEveryN(liItemsf + 2 - 2, $(footerClass + " .drop-3:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
  }

  //============for Apparel ========== 
  //drop-1
  //       var liItemsApparel = Number($("#noMenuItemApparel").text());
  if ($('ul.main-nav li.nav--Apparel').length > 0) {
    var apparel = $('ul.main-nav li').hasClass('nav--Apparel');
    var apparelClass = '';
    if (apparel == true) {
      apparelClass = '.nav--Apparel';
    }
    var drop1len = $(apparelClass + " .drop-1").length;
    for (d = 0; d < drop1len; d++) {

      var wrapEveryN = function(n, elements, wrapper) {
        for (var i = 0; i < elements.length; i += n) {
          elements.slice(i, i + n).wrapAll(wrapper);
          $(apparelClass + " .drop-1 .granditen-wrap").each(function() {
            if ($(this).html() == "") {
              $(this).addClass('hide');
            }
          })
        }
      }
      wrapEveryN(liItemsapp, $(apparelClass + " .drop-1:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
    }

    //drop-2
    var drop1len = $(apparelClass + " .drop-2").length;
    for (d = 0; d < drop1len; d++) {

      var wrapEveryN = function(n, elements, wrapper) {
        for (var i = 0; i < elements.length; i += n) {
          elements.slice(i, i + n).wrapAll(wrapper);
        }
      }
      wrapEveryN(liItemsapp, $(apparelClass + " .drop-2:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
    }
    //drop-3
    var drop1len = $(apparelClass + " .drop-3").length;
    for (d = 0; d < drop1len; d++) {

      var wrapEveryN = function(n, elements, wrapper) {
        for (var i = 0; i < elements.length; i += n) {
          elements.slice(i, i + n).wrapAll(wrapper);
        }
      }
      wrapEveryN(liItemsapp, $(apparelClass + " .drop-3:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
    }

  }
  //============for sale ========== 


  var liItemsSale = Number($("#noOfItemSale").text());
  var sale2 = $('ul.main-nav li').hasClass('nav--Sale1');
  var sale1 = $('ul.main-nav li').hasClass('nav--Sale');
  var saleClass = '';
  if (sale1 == true) {
    saleClass = '.nav--Sale';
  }
  if (sale2 == true) {
    saleClass = '.nav--Sale1';
  }
  //drop-1        
  var drop1len = $(saleClass + " .drop-1").length;
  for (d = 0; d < drop1len; d++) {

    var wrapEveryN = function(n, elements, wrapper) {
      for (var i = 0; i < elements.length; i += n) {
        elements.slice(i, i + n).wrapAll(wrapper);
      }
    }
    wrapEveryN(liItemsSale, $(saleClass + " .drop-1:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
  }
  //drop-2
  var drop1len = $(saleClass + " .drop-2").length;
  for (d = 0; d < drop1len; d++) {

    var wrapEveryN = function(n, elements, wrapper) {
      for (var i = 0; i < elements.length; i += n) {
        elements.slice(i, i + n).wrapAll(wrapper);
      }
    }
    wrapEveryN(liItemsSale, $(saleClass + " .drop-2:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
  }
  //drop-3
  var drop1len = $(saleClass + " .drop-3").length;
  for (d = 0; d < drop1len; d++) {

    var wrapEveryN = function(n, elements, wrapper) {
      for (var i = 0; i < elements.length; i += n) {
        elements.slice(i, i + n).wrapAll(wrapper);
      }
    }
    wrapEveryN(liItemsSale, $(saleClass + " .drop-3:eq(" + d + ") .grand-child-nav li"), '<div class="granditen-wrap"></div>');
  }
  //============

  //======= for the text height ===
  $('#packery .item.large').hover(function() {
    var hts = $(this).find('.hover-bar span.single').height();
    //console.log('--' + hts);
    if (hts < 30) {
      //console.log('-< 30 single-' + hts);
      $(this).find('.hover-bar .hover-btn').addClass('right');
    }
  })
  $('#packery .item.medium').hover(function() {
    var hts = $(this).find('.hover-bar span.single').height();
    if (hts < 30) {
      $(this).find('.hover-bar .hover-btn').addClass('right');
    }
  })
  //-----------------
  $('#packery .item.small .first-cls').hover(function() {
    var hts1 = $(this).find('.hover-bar span.double').height();
    if (hts1 < 30) {
      //console.log($(this).find('span').attr('class') + ' double = ' + hts1);
      $(this).find('.hover-bar .hover-btn').addClass('right');
    }
  })

  $('#packery .item.small .second-cls').hover(function() {
    var hts2 = $(this).find('.hover-bar span.two').height();
    //console.log('  two==' + hts2);
    if (hts2 < 30) {
      $(this).find('.hover-bar .hover-btn').addClass('right');
    }
  })

  //====== ===== ====== ====== =====
  var highest1 = -Infinity;
  $('#packery li').each(function() {
    var ht1 = $(this).find('img').height();
    highest1 = Math.max(highest1, parseFloat(ht1));
  });
  //$('#packery').find('li.item').css('height',highest1+'px');

  // ====== ===== Start: For Blog Page Collection ====== ===== //
  var highestx = -Infinity;
  $('.content-block__no-padding .grid__item').each(function() {
    var ht1 = $(this).height();
    highestx = Math.max(highestx, parseFloat(ht1));
  });
  $('.content-block__no-padding .grid__item').css('height', highestx + 'px');

  // ====== ===== End: For Blog Page Collection ====== ===== //

  //       check if there is more than 2 granditen-wrap
  var last_child;
  var whole_wrapper;
  $('header .site-nav .site-nav__item').each(function() {
    $(this).find('.child-nav .drop-1 .grand-child-nav > .granditen-wrap').each(function() {
      if ($(this).find('.granditen-wrap').length == 2) {
        //           	console.log('hiiii=====', $(this).parents('.site-nav__dropdown').attr('class'));
        last_child = $(this).find('.granditen-wrap').eq(1).detach();
        //console.log('======', last_child);
        whole_wrapper = last_child.insertAfter($(this));
        whole_wrapper.wrapAll('<div class="granditen-wrap"></div>');
      }
    })
  });
  //       p = $( "p" ).detach();

});
//=========== Mobile Navigation ===========
$(document).ready(function() {
  $(".mobile-nav li").click(function() {
    var click_menu = $(this).find("a.mobile-nav__link").text();
    if (click_menu.indexOf("Brands") != -1) {
      $(this).toggleClass("brands-menu");
    }
  });

  if ($('.child-product').length > 0) {
    var m = $('.child-product')[1].outerHTML;
    $('.child-nav li a').each(function() {
      if ($(this).text() == 'Footwear') {
        $(this).after(m);
      }
    });
  }

  $('.nav--Category .child-nav').next(".child-product").hide();
  var tot_width = $(".site-inner-sub").width();
  var first_col = $(".child-nav").width();
  var second_col = $(".grand-child-nav").width();
  var third_col = tot_width - (first_col + second_col);

  $(".grand-child-product").width(third_col);
  var a_text;
  $(".child-nav li a").hover(function() {
    a_text = $(this).text();
    if (a_text == 'Apparel') {
      $(this).parent().addClass("apparel-li");
      //$(".apparel-li").parent().find(".child-product").hide();
      $(".child-nav").find(".child-product").hide();
    }
    $(this).parents(".site-nav__dropdown").addClass(a_text + "-onHover");
  }, function() {
    $(this).parents(".site-nav__dropdown").removeClass(a_text + "-onHover");
    $(this).parent().removeClass("apparel-li");
    $(".child-nav").find(".child-product").show();
  });
  $(".grand-child-nav li a").hover(function() {
    $(".child-nav").find(".child-product").hide();
  }, function() {
    $(".child-nav").find(".child-product").hide();
  });

  $(".grand-child-product").hover(function() {
    $(this).parent().parent().find(".child-product").hide();
    //$(".child-nav").find(".child-product").hide();
  }, function() {
    $(this).parent().parent().find(".child-product").hide();
  });

  if ($('.header-wrapper').hasClass('promotext')) {
    $('body').addClass('promofound');
  }
  //==============

  
});

$(window).on('load',function(e){
  $('.header-main-inner li.site-nav--is-megamenu').on('mouseenter',function(e){
    $('body').addClass('mega_menu-active');
    //console.log('test')
  });
  $('.header-main-inner li.site-nav--is-megamenu').on('mouseleave',function(e){
    $('body').removeClass('mega_menu-active');
    //console.log('test leave')
  });
})



// Set the date we're counting down to
var date = $('.ctm_date').val();
var time = $('.ctm_time').val();
var final_date = date + ' ' + time
var countDownDate = new Date(final_date).getTime();

// Update the count down every 1 second


 

var x = setInterval(function() {

  // Get today's date and time
//   var now = new Date().getTime();
  
  function checkTime(offset){
      d = new Date();
      utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      nd = new Date(utc + (3600000*offset));
      return nd;
    }
    function calcTime(offset) {
      var nd = checkTime(offset);
      var day_no = nd.getDay();
      var curr_time = nd.getHours();
      var curr_min = nd.getMinutes();
// 	  console.log('Current day is '+day_no+' & current time '+curr_time+' hr ' + curr_min + ' minutes'+ ' '+nd.getTime());
      var time = nd.getTime();
      return time
    }

var now = calcTime('-8')
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  if(days < 10){
   days = '0'+days;
  }
  if(hours < 10){
    hours= '0'+ hours;
  }
  if(minutes < 10){
    minutes= '0'+ minutes;
  }
  if(seconds < 10){
    seconds= '0'+ seconds;
  }
  if($("#countDown_timer").length > 0){
    document.getElementById("countDown_timer").innerHTML = "<p><span>" + days + "</span>" + "<label>days</label></p>" + "<p><span>" + hours + "</span>" + "<label>hours</label></p>" + "<p><span>" + minutes + "</span>" + "<label>Mins</label></p>" + "<p><span>" + seconds + "</span>" + "<label>Secs</label></p>";
  }
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown_timer").innerHTML = "EXPIRED";
  }
}, 1000);

// End for product variant




  $(window).on('load',function(){
  
    $('.cd-modal-action a:not(.released-true):not(.ctm_raffle_btn)').on('click',function(e){
      e.preventDefault();
      var id = $(this).attr('href');
      $('.article.article-item .modal-container').removeClass('active_model');
      $(id+'.modal-container').addClass('active_model');
    })
    
    $('a.view_btn').on('click',function(e){
      e.preventDefault();
      $(this).closest('.feature_row_half').find('.modal-container').addClass('active_model');
    })
    
    $('.modal-container .modal-close').on('click',function(e){
      e.preventDefault();
      $(this).closest('.modal-container').removeClass('active_model');
    })
    
    $('.cd-modal-action a.released-true:not(.ctm_raffle_btn)').on('click touchstart',function(e){
      e.preventDefault();
      if(e.type == "click"){
        var href = $(this).attr('href');
        window.location.href = href;
      }else if(e.type == "touchstart"){
        var href = $(this).attr('href');
        window.location.href = href;
      }
    })
    
  });

$('.cd-modal-action a.ctm_raffle_btn').on('click',function(e){
  e.preventDefault();
  var url = $(this).attr('href');
  window.location.href = url;
  return false;
})


//===========end of  Mobile Navigation ===========

//     $(window).resize(function () {
//    var widthrelease = $(window).width(); 
//    var leftoffset =  $(".blog_release_loop").offset().left;
//         var loopwidth =  $(".blog_release_loop").width()/2;
//         var arrowleft = loopwidth + leftoffset; 

//         var p = $( ".blog_release_grid_wrap" );
// 		var position = p.offset();
//         var strleft = position.left;

//        var p = $( ".blog_release_grid_wrap" );
// 		var position = p.offset();
//         var strleft = position.left;

//         //console.log(loopwidth+'----'+leftoffset);

//         var finalpos = leftoffset - strleft;
//         loopwidth=loopwidth/2;   
// //         leftoffset = -leftoffset;
//         widthrelease = widthrelease - 60;
//         //$(this).find(".traingle_arrow").css("left",arrowleft);  
//         $(".blog_release_loop").find(".blog_release_onhover").css("width",widthrelease);
//         $(".blog_release_loop").find(".blog_release_onhover").css("left",finalpos);
//         var height_hideelement = $(".blog_release_loop").find(".blog_release_onhover").height(); 

// });
$(document).on('click', function (e) {
  if ($(e.target).closest(".modal").length === 0 && 
      $(e.target).closest(".cd-modal-action").length === 0 && 
      $(e.target).closest(".article__featured-image").length === 0 && 
      $(e.target).closest(".ctm_pop_open").length === 0 &&
     $(e.target).closest('.view-store-inventory-btn').length === 0&&
     $(e.target).closest('.modal-close').length === 0) {
    $(".modal-close").trigger('click');
  }
});
$('.article__featured-image a').on('click',function(e){
  $(this).closest('.article-item').find('.cd-modal-action a').trigger('click');
});