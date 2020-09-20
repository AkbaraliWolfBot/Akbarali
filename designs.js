// Selecting color and size inputs

var height, width, color;
$(document).ready(function() {
    $("#sizePicker").submit(function(event) {
        event.preventDefault();
        height = $("#inputHeight").val();
        width = $("#inputWidth").val();
        makeGrid(height, width);
        console.log("height = " + height + " and width = " + width);

    })
});
// When size is submitted by the user, call makeGrid()


function makeGrid(x, y) {
    $("tr").remove();
    // Your code goes here!
    for (var i = 1; i <= x; i++) {
        $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
        for (var j = 1; j <= y; j++) {
            $("#table" + i).append("<td></td>");
        }
    }
    // add color to cell 
    $("td").click(function(element) {
        color = $("#colorPicker").val();
        $(event.target).css("background-color", color);
    });
}
