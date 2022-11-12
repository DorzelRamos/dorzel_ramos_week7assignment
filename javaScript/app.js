$(document).ready(function(){
    //jQuery methods go here
// ---------------------------------------VVVV

    //$("p").css("border", "3px solid black");
    $(".para1").css("border", "3px solid tomato");
    $(".para2").css("border", "3px solid skyblue");
    $("#jqFilter").css("border", "3px solid green");
    $("#jqSelect").css("border", "3px solid orange");
    //$("h2").text("hi");
    //$("h2").hide();
    //$(".otherStuff p:first").css("border", "3px dashed");
    //$(".otherStuff p:even").css("border","3px solid blue");
    //$(".otherStuff p:odd").css("border","3px solid green");
    //$("div > p").css("border","3px solid orange")
    //$("div p").css("border", "3px solid olive");
    //$("div h2").css("border", "3px solid olive");
    //$("p[class=para2]").css("border", "3px solid green");
    //$("p:parent").css("border", "3px solid blue");
    // $("div:has(p[class=para1])").css("border","3px solid pink");
    // $("div h2:first-child").css("border","3px solid black");
    // $("div p:first-child").css("border","3px solid black");
    $("#stuff").children().css("border","3px solid purple");
    $("#stuff").find("#para3").css("border", "3px solid purple");
    //tried using the function above with a class, but it didn't work so I changed it to an id and it worked?


});