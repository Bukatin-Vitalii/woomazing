(function ($)
  { "use strict"
  

/*STICKY MENU*/
const navbar = document.getElementById("navbar")

window.onscroll = function() {
    if(window.pageYOffset > navbar.offsetTop){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

/* MOB MENU */

let menuBtn = document.querySelector('.mobmenu-btn');
let menu = document.querySelector('.mobmenu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


/* SLICK SLIDER OFFER */
$('.single-item').slick({
    arrows:false,
    dots:true
});
/* SLICK SLIDER DREAM TEAM */
$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear'
  });
/* MODAL */

const btnOpen = document.getElementById('open-modal');
const modal = document.getElementById('wrapper-modal');
const btnClose = document.getElementById('close-modal');

const overlay = document.getElementById('overlay');

btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal(){
    modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);

/* VALIDATE */

$('.button-form').on('click', function(e) {
    e.preventDefault();
    $(this).parent('form').submit();
  })
  
  $.validator.addMethod('regex', function(value, element, regexp){
      let regExsp = new RegExp(regexp);
      return regExsp.test(value);
  }, 'Please check your input')
  
  function valEll(el){
   el.validate({
      rules: {
        firstName : {
          required : true,
          regex: "[A-Za-z]{1,32}"
        },
        mail : {
          required : true,
          email : true,
        },
        phoneNumber : {
          required : true,
          minlength : 5,
          maxlength : 15,
          regex: "[0-9]+"
        }
      },
      messages :{
        firstName : {
          required : 'This field is required',
          regexp: 'Incorrect name (A - z)',
        },
        mail : {
          required : 'This field is required',
          regexp : 'Incorrect email',
        },
        phoneNumber : {
          required : 'This field is required',
          regexp: 'Incorrect phone number (+3 0 000...)',
        }
      },
      submitHandler: function(form) {
        $('#preloader-active').fadeIn();
        let $form = $(form);
        let $formId = $(form).attr('id');
        switch ($formId) {
          case 'modal-book':
            $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize()
                })
                .done(function() {
                    console.log('Success');
                })
                .fail(function() {
                    console.log('Fail');
                })
                .always(function() {
                    setTimeout(function() {
                        $form.trigger('reset');
                        $('.modal-window__content').fadeOut();
                    }, 1000);
                    setTimeout(function() {
                      $('.modal-window__success').fadeIn();
                    }, 1000);
                    setTimeout(function() {
                      $('.wrapper-modal').fadeOut();
                    }, 3000);
                });
            break;
        }
        return false;
    }
  })
  };
  $('.form-val').each( function() {
    valEll($(this));
  })
})(jQuery);

/*SCROLL TO SECTION*/
function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}
const scrollDown = document.getElementById('scrollDown')
const scrollDown2 = document.getElementById('scrollDown2')
const scrollDown3 = document.getElementById('scrollDown3')
const sectionNewCollection = document.getElementById('new-collection')

scrollDown.addEventListener('click', () => {
  scrollTo(sectionNewCollection);
})
scrollDown2.addEventListener('click', () => {
  scrollTo(sectionNewCollection);
})
scrollDown3.addEventListener('click', () => {
  scrollTo(sectionNewCollection);
})
