$(document).ready(function ()
{
    var htmlString = "";
    var div = $("#divBox");
    $("#btn").click(function ()
    {
        $.ajax({
            url: "PersonMaker",
            type: "POST",
            success: function (data)
            {
                htmlString = htmlString.concat("<tr><td>" + data + "</td></tr>");
                div.html(htmlString);
            }
        });
    });

    $("#subbtn").click(function ()
    {
        var age = $("#alder").val();
        var name = $("#tekst").val();
        var person = {age: age, name: "" + name};
        $.ajax({
            url: "PersonCreator",
            type: "POST",
            data: person.toString(),
            success: function (data)
            {
                alert(name + " er nu addet til listen på serveren!");
            }
        });
    });


});