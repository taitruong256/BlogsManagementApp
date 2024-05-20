$(document).ready(() => {
    $('#heart-btn').click(() => {
        if ($('#heart-btn').attr('class') == 'bi bi-heart-fill') {
            $('#heart-btn').attr('class', 'bi bi-heart');
        } else {
            $('#heart-btn').attr('class', 'bi bi-heart-fill');
        }
    })
    $("#cmt").click(function () {
        
    })
})