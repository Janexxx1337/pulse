$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            speed: 800,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron_left.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron_right.png"></button>',
         

            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            });
            
      });

      (function($) {
        $(function() {
          
          $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
              .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
              .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          });
          
        });
        })(jQuery);

        $('.catalog-item__link').each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        });


        $('.catalog-item__back').each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        })

        //modal 

        $('[data-modal=consultation]').on('click', function(){
          $('.overlay, #consultation').fadeIn('slow');
        });
          $('.modal__close').on('click', function(){
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
          });
       

        $('.button_mini').each(function(i) {
            $(this).on('click', function() {
              $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
              $('.overlay, #order').fadeIn('slow');
            })
          });
       

         
          function validateForms(form){
            $(form).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: {
                        required: "????????????????????, ?????????????? ???????? ??????",
                        minlength: jQuery.validator.format("?????????????? {0} ??????????????!")
                      },
                    phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
                    email: {
                      required: "????????????????????, ?????????????? ???????? ??????????",
                      email: "?????????????????????? ???????????? ?????????? ??????????"
                    }
                }
            });
        };
    
        validateForms('#consultation-form');
        validateForms('#consultation form');
        validateForms('#order form');

        $('input[name=phone]').mask("+7 (999) 999-9999");