$(document).ready(function(){
    let $button = $("#btnSubmit");
    $button.click(function(e){
        e.preventDefault();
        // alert($("#text").val());

        $("div").append($(`<h2>${$("#text").val()}</h2>`));
        $("h2").mouseover(function() {
            $(this).css("background-color", "red");
        })
    })
    // this.css({

    // })

    $("#text").on("keyup", function () {
        if ($("#text").val() === ""){
            $("#btnSubmit").atrr("disabled", true);
        } else {
            $("#btnSubmit").atrr("disabled", false);
        }
    });

    $("body").append($("<div></div>"));
});