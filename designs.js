// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    const height = $('#inputHeight').val();
    const width = $('#inputWeight').val();
    var colorPicker = $("#colorPicker").val();

    $('#pixelCanvas').children().remove();

    for (var i = 0; i <= height; i++) {
        $('#pixelCanvas').append('<tr></tr>');
        console.log(height);

    }

    for (var j = 0; j <= width; j++) {
        $('tr').append('<td></td>');
        console.log(width);
    }
    // $('#pixelCanvas')
    $('tr').css("background-color", colorPicker);
}
// $('#sizePicker').on('click',makeGrid());
var submit;
submit = $('input[type="submit"]');
submit.click(function (event) {
    event.preventDefault();
    makeGrid();
});
// submit.click(function (event) {
//     event.preventDefault();
//     $('#pixelCanvas')
// });



