$(function(){
    // navbar-top
    $('.navbar-nav li a').on('click', function(){
        $('.navbar-nav li a').removeClass('active-1');
        $(this).addClass('active-1');
    })

    $(".fa-search").on('click',function(){
        $(".nav-item .content").toggleClass("active-search");
        $('.content input').toggleClass("pr-45px");
    });
   
    
    //  nav-tabs 
    $('#nav-tab a').on('click',function(){
        $('#nav-tab a').removeClass('active-tab');
        $('.circles').removeClass('active-1');
        $(this).addClass('active-tab');
        if($(this).has('.active-tab')){
            $(this).children().addClass('active-1');
        }
    })
    $('#nav-tab-2 a').on('click',function(){
        $('#nav-tab-2 a').removeClass('active-tab-2');
        $(this).addClass('active-tab-2');
    })



  
   
    

    

    // Button for smoothly-down
    $('#smoothly-down').on('click', function(e){
        e.preventDefault();
        let selector = $(this).attr('href');
        let h = $(selector);
        $('html, body').animate({
        scrollTop: h.offset().top -200
        }, 400);
    });

     // Play Youtube Video

     $('.play-video-1').on('click',function(){
        $('.play-video-1').addClass('display-none');
        let $video = $('#video-1'),
        src = $video.attr('src');
        $video.attr('src', src + '&autoplay=1');
    })

    $('.play-video-2').on('click',function(){
        $('.play-video-2').addClass('display-none');

        let $video = $('#video-2'),
        src = $video.attr('src');
        $video.attr('src', src + '&autoplay=1');
    })

     // Watch Founder

    $('.watch-founder, .show-likes, .show-check, .show-price').hover(function(){
        $(this).removeClass('opacity-0');
    }, function(){
        $(this).addClass('opacity-0');
    });


    // isotope , masonry , Project Title navbar
    if($('.grid').length){
        let $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-item',
                gutter: 30
            }
        })
        $('.my-nav-2 ul li, select').on('click',  function(){

            let data = $(this).attr('data-name');
            $grid.isotope({
                filter: data
            })

            if($('.isotope-1').length){
                $('.my-nav-2 ul li').removeClass('active-1');
                $(this).addClass('active-1');
            }
            else if($('.isotope-2').length){
                $('.my-nav-2 ul li').removeClass('active');
                $(this).addClass('active');
            }
            else if($('.isotope-3').length){
                let value = $(this).val();
                $grid.isotope({
                    filter: value
                })

                
            }
        })

       

        $('lelect').ready(function(){
            // let data = $(this).attr('data-name');
            let value = $(this).val();

            $grid .isotope({
                filter: value
            })

            $('.list-large').click(function(){
                $(this).addClass('border-primary active-1');
                $('.list-view').removeClass('border-primary active-1');
                $('.grid-item').addClass('w-xl-32 w-lg-48 w-sm-100 w-23');
                if($('.new-item').length){
                    $grid.isotope({
                        filter: value
                    })
                }
            })
    
            $('.list-view').click(function(){
                $(this).addClass('border-primary active-1');
                $('.list-large').removeClass('border-primary active-1');
                $('.grid-item').removeClass('w-xl-32 w-lg-48 w-sm-100 w-23');
                if($('.new-item').length){
                    $grid.isotope({
                        filter: value
                    })
                }
            })
        })

        
        let all  = $('.grid-item').length;
        let branding = $('.branding').length;
        let fraphicDesign = $('.fraphic-design').length;
        let print = $('.print').length;
        let webDesign = $('.web-design').length;
        let photography = $('.photography').length;
    
        $('.navbar-nav').find("li:first span:not(.text-dark)").text(all);
        $('.navbar-nav').find("li + li:first span:not(.text-dark)").text(branding);
        $('.navbar-nav').find("li + li + li:first span:not(.text-dark)").text(fraphicDesign);
        $('.navbar-nav').find("li + li + li + li:first span:not(.text-dark)").text( print);
        $('.navbar-nav').find("li + li + li + li + li:first span:not(.text-dark)").text( webDesign);
        $('.navbar-nav').find("li:last span:not(.text-dark)").text( photography);
    }
    // list-view
       


        

    
    // show-filter
    $('.show-filter').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('border-primary color-primary');
        $('.show-search').removeClass('border-primary color-primary');

        $('.filter-slide-down').slideToggle('slow');
        $('.search-slide-down').slideUp('slow');
    })


     // show-search
    $('.show-search').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('border-primary color-primary');
        $('.show-filter').removeClass('border-primary color-primary');
        $('.show-cart').removeClass('border-primary color-primary');


        $('.search-slide-down').slideToggle('slow');
        $('.filter-slide-down').slideUp('slow');
        $('.show-mini-cart').slideUp('slow');
    })

   
    

   
   

    

    
    if($('.carousel-1').length){
        // section Reklame
        $('.owl-carousel').owlCarousel({
            loop:true,
            autoWidth:true,
            items:5
        })
    }else if($('.carousel-2').length){
        let prev_icon = '<div class="ff-roboto-slab font-weight-bold fs-sm-10 mb-0 text-uppercase fs-24 text-white">Previous Project<div><div class="text-left  text-white"><i class="fas fa-long-arrow-alt-left"></i><div>';
        let next_icon = '<div class="ff-roboto-slab font-weight-bold fs-sm-10 mb-0 text-uppercase fs-24 text-white">next Project<div><div class="text-right text-white"><i class="fas fa-long-arrow-alt-right"></i><div>';
        $('.owl-nav:hidden .owl-prev:hidden span:hidden').text();
        $('.owl-carousel').owlCarousel({
            loop:true,
            nav: true,
            dots:false,
            items:2,
            navText: [
                prev_icon,
                next_icon
            ],
            autoplay:true,
            autoplayTimeout:5000,
        })
    }else if($('.carousel-3').length){
        $('.owl-carousel').owlCarousel({
            items: 1,
            dots: true
        });

        let i = 1;
        $('.owl-dot span:not(:last)').each(function(){
            $(this).append(i).css("padding", "4px 13px")
            i++;
        })
        $('.owl-dot span:last').addClass('fas fa-angle-double-right py-2')
    }

    // tooltip
    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover'
    })

    // validate
    $.validator.setDefaults({
        highlight: function(element){
            $(element)
            .closest('.form-control')
            .addClass('has-error');
        },
        unhighlight: function(element){
            $(element)
            .closest('.form-control')
            .removeClass('has-error');
        }
    });
    $('.form-control-plaintext').validate({
        rules:{
            name:{
                minlength: 3,
                lettersonly: true
            },
            email:{
                required: true,
                email: true
            },
            textarea:{ 
                minlength: 5
            },
            use_type: {
                required: true
            }
        }
    });
    $('.form-control-plaintext-2').validate({
        rules:{
            email:{
                required: true,
                email: true
            }
        }
    })

})