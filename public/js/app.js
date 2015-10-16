$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "/items"
    }).done(function(itemList){
        var i = 0;
        while(i < itemList.length){
            $(".itemContainer").append("<tr class='listItem'> <td>"+ 
                itemList[i].item.val() +"</td> <td'>"+ 
                itemList[i].qty.val() +"</td> <td> " + 
                itemList[i].price.val() +"</td></tr>"
            );
            i = i + 1;
        }
    });

    $("#submitButton").click(function(){

        var item = $("input#item");
        var price = $("input#price");
        var qty = $("input#quantity");

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

        $(".itemContainer").append("<tr class='listItem'> <td>"+ 
            item.val() +"</td> <td>"+ 
            qty.val() +"</td> <td> " + 
            price.val() +" Php</td></tr>"
        );
    });

    $("#removeButton").click(function(){
        $(".listItem:last").remove();
    });

})
