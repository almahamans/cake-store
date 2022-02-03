$(document).ready(function(){
    //hide and show sections
$("#sec2").click(function(){
$(".menu-list").toggle();
$(".form-style").hide();
$(".btn-style").hide();
$(".clear").hide();
$('#bill-div').hide();
$("#sec1").css("height","80px");
$("#sec2").css("height","300px");
});
$("#sec1").click(function(){
    $(".form-style").show();
    $(".btn-style").show();
    $(".menu-list").hide();
    $(".clear").show();
    $('#bill-div').show();
    $("#sec1").css("height","300px");
    $("#sec2").css("height","80px");
    });
//diff divs shows or hide based on selected radio buttons
$("#r1").click(function(){
$("#size-div").show();
$(".cubcake-salary").hide();
});
$("#r2").click(function(){
    $(".cubcake-salary").show();
    $("#size-div").hide();
    });
//calculate bill 
$(".a").click(function(){
    let total =0;
$(".a:checked").each(function(){
    total += parseInt($(this).val());
});
    $('#bill-div').html(total);
});
//clear bill
$(".clear").click(function(){
$('#bill-div').html(0);
$("input[type=radio]").prop("checked", false);
$("input[type=checkbox]").prop("checked", false);
});

    
});