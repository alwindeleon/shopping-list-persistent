$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "/items"
    }).done(function(itemList){
        var i = 0;
        while(i < itemList.length){
            $(".itemContainer").append("<div class ='listItem'>"+ itemList[i].item.val() +" "+ itemList[i].qty.val() +" " + itemList[i].price.val() +"</div>");
            i = i + 1;
        }
    });

    $("#submitButton").click(function(){

        var item = $("input#item");
        var price = $("input#quantity");
        var qty = $("input#price");

        // JSON Object
        var JSONObj = {
            "item" : item.val(),
            "qty" : qty.val(),
            "price" : price.val()
        };

        // send JSON Object to server
        $.ajax({
            method: "POST",
            url: "/items",
            data: JSONObj
        })

        $(".itemContainer").append("<div class = 'listItem'>"+ item.val() +" "+ qty.val() +" " + price.val() +"</div>");
    });

})
