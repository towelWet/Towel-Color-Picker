$(document).ready(function() {
    $("#colorPicker").spectrum({
        type: "text",
        showInput: true,
        chooseText: "Select",
        cancelText: "Cancel",
        preferredFormat: "hex",
        change: function(color) {
            $("#colorPicker").val(color.toHexString().toUpperCase());
        }
    });

    $('#copyButton').click(function() {
        var color = $('#colorPicker').val();
        navigator.clipboard.writeText(color).then(() => {
            alert('Color copied to clipboard: ' + color);
        });
    });
});
