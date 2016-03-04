$(document).ready(function ()
{
    var quoter = function ()
    {
        console.log("prøver at få quote!");
        var QUOTE;

        $.ajax({
            url: "Quoter",
            type: "POST",
            success: function (data)
            {
                $("#divBox").html(data.toString());
            }
        });
        
    };
    $("#john").click(function ()
    {
         setTimeout(quoter(), 2000);
    });

});


