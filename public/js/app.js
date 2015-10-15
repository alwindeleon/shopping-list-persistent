$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "/items"
        success: function(itemList){
            var i = 0;
            while(i < itemList.length){
                $("body").append("<div>"+ itemList[i].item.val() +" "+ itemList[i].qty.val() +" " + itemList[i].price.val() +"</div>");
                i = i + 1;
            }
        }
    })

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

        $("body").append("<div>"+ item.val() +" "+ qty.val() +" " + price.val() +"</div>");
    });
})
