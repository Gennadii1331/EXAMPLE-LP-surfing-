import './carusel.scss';

$(function() {
    let slider = $('.slider'),
        slideWidth = $('.slider-box').outerWidth(),
        slideCount = $('.slider__item').length,
        prev = $('.prev'),
        next = $('.next'),
        animateTime = 1000,
        course = 1,
        margin = - slideWidth;
        let sec = $('.secondRow');
        let frst = $('.firstRow');
        let i = 0;
    $('.slider__item:last').clone().prependTo('.slider');
    $('.slider__item').eq(1).clone().appendTo('.slider');
    $('.slider').css('margin-left', -slideWidth);
    sec.text(slideCount);
    frst.text(1+i);


    function animate(){
        if (margin===-slideCount*slideWidth-slideWidth){
            slider.css({'marginLeft':-slideWidth});
            margin=-slideWidth*2;
        }else if(margin===0 && course===-1){
            slider.css({'marginLeft':-slideWidth*slideCount});
            margin=-slideWidth*slideCount+slideWidth;
        }else{
            margin = margin - slideWidth*(course);
        }
        slider.animate({'marginLeft':margin},animateTime);

    }

    prev.click(function() {
        if (slider.is(':animated')) { return false; }
        let course2 = course;
        course = -1;
        animate();
        course = course2 ;
        i--;
        if(i < 0) i = slideCount - 1;
        sec.text(slideCount);
        frst.text(1+i);


    });
    next.click(function() {
        if (slider.is(':animated')) { return false; }
        let course2 = course;
        course = 1;
        animate();
        course = course2 ;
        i++;
        if (i >= slideCount) i = 0;
        sec.text(slideCount);
        frst.text(1+i);

    });
    setInterval(function() {
        animate();
        i++;
        if (i >= slideCount) i = 0;
        sec.text(slideCount);
        frst.text(1+i);
    }, 4000);
});




