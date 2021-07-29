$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Student", "Researcher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Researcher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $('.contact-form').submit((e)=>{
        e.preventDefault();
    });

    $('.send-msg').click(()=>{
        $fullname = $('.fullname').val();
        $email = $('.email-input').val();
        $subject = $('.subject').val();
        $message = $('.message').val();
        $('.send-msg').text("Sending...");
        $('.contact-form').addClass("disable");

        $.ajax({
            url: "message.php",
            type: "POST",
            data: "email="+$email+"&subject="+$subject+"&message="+$message,
            success: function(data){
                $errorBox = $('.error-box');
                $('.send-msg').text("Send message");
                $('.contact-form').removeClass("disable");
                if(data == "success"){
                    $fullname = $('.fullname').val("");
                    $email = $('.email-input').val("");
                    $subject = $('.subject').val("");
                    $message = $('.message').val("");
                    $errorBox.html("Your message has been sent!");
                    $errorBox.addClass("success");
                    setTimeout(()=>{
                        $errorBox.html("");
                        $errorBox.removeClass("success");
                    }, 5000);
                }else{
                    $errorBox.removeClass("success");
                    $errorBox.html("<span>* </span>" + data);
                }
            }
        });
    });
});