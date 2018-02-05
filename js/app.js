
$(document).ready(function(){
  

    $(".boJ").hover(
        function() {
            $(this).css('background-color', '#C8E')
        }, function() {
            $(this).css('background-color', '')
        });

        $(".boD").hover(
            function() {
                $(this).css('background-color', '#F99')
            }, function() {
                $(this).css('background-color', '')
            });
            $(".boT").hover(
                function() {
                    $(this).css('background-color', '#FF9')
                }, function() {
                    $(this).css('background-color', '')
                });
    




  

$("#posaoToggle").click(function(){
    $("#posao").toggle();
    $("#saradnici").hide();
    $("#kontakt").hide();
});

$("#saradniciToggle").click(function(){
    $("#saradnici").toggle();
    $("#posao").hide();
    $("#kontakt").hide();
});

$("#kontaktToggle").click(function(){
    $("#kontakt").toggle();
    $("#posao").hide();
    $("#saradnici").hide();
});

});


