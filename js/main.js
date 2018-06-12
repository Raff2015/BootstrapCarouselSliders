//Slider #1 Settings
$(document).ready(function(){
    // Activate the Carousel, but pause it from the start
    //$("#myCarousel").carousel("pause");
 $("#myCarousel").carousel({interval: 1000 }); //Slider interval speed


    // Click on the button to start sliding
    $("#myBtn").click(function(){
        $("#myCarousel").carousel("cycle"); //Start(cycle) of slides Button
    });

    // Click on the button to stop sliding
    $("#myBtn2").click(function(){
        $("#myCarousel").carousel("pause"); //For pause Button
    });

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);//Item from thr Carousel Indicators
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);//Item from thr Carousel Indicators
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);//Item from thr Carousel Indicators
    });
});
//End of Slider #1 Settings



//Slider #2 Settings
$(document).ready(function(){
    // Activate the Carousel, but pause it from the start
    //$("#myCarousel").carousel("pause");
 $("#myCarousel2").carousel({interval: 2000 }); //Slider interval speed


    // Click on the button to start sliding
    $("#myBtn3").click(function(){
        $("#myCarousel2").carousel("cycle"); //Start(cycle) of slides Button
    });

    // Click on the button to stop sliding
    $("#myBtn4").click(function(){
        $("#myCarousel2").carousel("pause"); //For pause Button
     });

    // Enable Carousel Indicators
    $(".item4").click(function(){
        $("#myCarousel2").carousel(0);//Item from thr Carousel Indicators
    });
    $(".item5").click(function(){
        $("#myCarousel2").carousel(1);//Item from thr Carousel Indicators
    });
    $(".item6").click(function(){
        $("#myCarousel2").carousel(2);//Item from thr Carousel Indicators
    });
});
    //Slider #3 Settings
    $(document).ready(function(){
        // Activate the Carousel, but pause it from the start
        //$("#myCarousel").carousel("pause");
     $("#myCarousel3").carousel({interval: 100 }); //Slider interval speed


        // Click on the button to start sliding
        $("#myBtn5").click(function(){
            $("#myCarousel3").carousel("cycle"); //Start(cycle) of slides Button
        });

        // Click on the button to stop sliding
        $("#myBtn6").click(function(){
            $("#myCarousel3").carousel("pause"); //For pause Button
         });

        // Enable Carousel Indicators
        $(".item7").click(function(){
            $("#myCarousel3").carousel(0); //Item from thr Carousel Indicators
        });
        $(".item8").click(function(){
            $("#myCarousel3").carousel(1); //Item from thr Carousel Indicators
        });
        $(".item9").click(function(){
            $("#myCarousel3").carousel(2); //Item from thr Carousel Indicators
        });

});
    // Enable Carousel Controls for ALL SLIDERS
    $(".carousel-control-prev").click(function(){
        $($(this).attr('href')).carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $($(this).attr('href')).carousel("next");

});
