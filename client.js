console.log('x')

    $(document).ready(function() {
    $.ajax({
        url: "http://lstr.huahcoding.com/examples.json",
        dataType: "jsonp",
        jsonpCallback: "_testcb",
        cache: false,
        timeout: 5000,
        success: function(data) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('error ' + textStatus + " " + errorThrown);
        }
    });
});
