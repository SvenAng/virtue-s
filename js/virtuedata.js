/* Implement custom javascript here */
jQuery(document).ready(function () {
    //    Vilket språk i Drupal
    var currentlang = jQuery('html').attr('lang');
    jQuery( ".form-item-field-startdatum-und-0-value2 label" ).empty();
    jQuery( ".form-item-field-startdatum-und-0-show-todate label" ).empty();
    
    if(currentlang == 'sv'){
        jQuery('<p>Insert retrive date</p>').appendTo('.form-item-field-startdatum-und-0-show-todate label');
        jQuery('<p>Retrive date:</p>').appendTo('.form-item-field-startdatum-und-0-value2 label');
        jQuery(".form-item-field-startdatum-und-0-show-todate").append("<div><p>Deploy date: <span class='form-required'>*</span></p></div>");
    }else if(currentlang == 'en'){
        jQuery("#edit-field-fynd-und-form-actions-ief-add-save--4").val('Save');
        jQuery("#edit-field-fynd-und-form-actions-ief-add-save").val('Save');
        
        jQuery('<p>deploy date</p>').appendTo('.form-item-field-startdatum-und-0-show-todate label');
        jQuery('<p>Retrive date:</p>').appendTo('.form-item-field-startdatum-und-0-value2 label');
        jQuery(".form-item-field-startdatum-und-0-show-todate").append("<div><p>Deploy date: <span class='form-required'>*</span></p></div>");
    }else if(currentlang == 'ca'){
        jQuery('<p>Deploy date</p>').appendTo('.form-item-field-startdatum-und-0-show-todate label');
        jQuery('<p>Retrive date:</p>').appendTo('.form-item-field-startdatum-und-0-value2 label');
        jQuery(".form-item-field-startdatum-und-0-show-todate").append("<div><p>Deploy date: <span class='form-required'>*</span></p></div>");
    }else if(currentlang == 'es'){
        jQuery('<p>Deploy date</p>').appendTo('.form-item-field-startdatum-und-0-show-todate label');
        jQuery('<p>Retrive date:</p>').appendTo('.form-item-field-startdatum-und-0-value2 label');
        jQuery(".form-item-field-startdatum-und-0-show-todate").append("<div><p>Deploy date: <span class='form-required'>*</span></p></div>");
    }else if(currentlang == 'de'){
        jQuery('<p>Deploy date</p>').appendTo('.form-item-field-startdatum-und-0-show-todate label');
        jQuery('<p>Retrive date:</p>').appendTo('.form-item-field-startdatum-und-0-value2 label');
        jQuery(".form-item-field-startdatum-und-0-show-todate").append("<div><p>Deploy date: <span class='form-required'>*</span></p></div>");
    }
   // Hamburgare grjer 
    
    jQuery(".c-hamburger").click(function () {
        jQuery('#mobil-navigation').toggleClass('open');
        jQuery('.c-hamburger').toggleClass('is-active');
    });

    jQuery(".scroll-top").click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;

    });

    var offset = 120;
    var duration = 500;

    jQuery('.scroll-top').hide();

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.scroll-top').fadeIn(duration);
        } else {
            jQuery('.scroll-top').fadeOut(duration);
        }
    });
    
//    anchorscroll
    
    jQuery(document).ready(function(){
        jQuery( "a.ankare" ).click(function( event ) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: jQuery($(this).attr("href")).offset().top }, 500);
        });
    });
    
    // Dödar expanded länkarna så att man kan öppna undernavigeringen
    jQuery('.mobil-nav .expanded a').click(function () {

        if (jQuery(this).next().is('ul')) {
            jQuery(this).next().slideToggle();
            return false;
        }

    });
    // timer
    var interval = 1;

    setInterval(function () {
        if (interval == 25) {
            jQuery('#mobil-navigation').removeClass('open');
            jQuery('.c-hamburger').removeClass('is-active');
            interval = 1;
        }
        interval = interval + 1;
        //console.log(interval);
    }, 1000);
    
    jQuery(".fa-search").click(function () {
        jQuery('.searchblock').slideToggle();
    });
    
//    jQuery('button#edit-field-fynd-und-actions-ief-add').text('+');
    

    //    jQuery(this).find('#edit-field-art-und-actions-ief-add').text('Lägg till art');
    //    jQuery(this).find('#edit-field-art-und-form-actions-ief-add-save--2').text('Lägg till art');

});
