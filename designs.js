// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var colorPicker=$("#colorPicker").val();
function makeGrid() {
    const height = $('#inputHeight').val();
    const width = $('#inputWeight').val();

    $('#pixelCanvas').children().remove();

    for (var i = 0; i <= height; i++) {
        $('#pixelCanvas').append('<tr></tr>');
        console.log(height);

    }

    for (var j = 0; j <= width; j++) {
        $('tr').append('<td></td>');
        console.log(width);
    }
    $('#pixelCanvas').style.backgroundColor = "blue";
}
// $('#sizePicker').on('click',makeGrid());
var submit;
submit = $('input[type="submit"]');
submit.click(function (event) {
    event.preventDefault();
    makeGrid();
    
    console.log(colorPicker);
});



