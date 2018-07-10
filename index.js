function getQuote (){
    $.ajax({
        url: 'http://talaikis.com/api/quotes/random/'
    }).done(function (data) {
        var author = data.author;
        var quote = data.quote;
        $('#author').html("- "+ author);
        $('#quote').html("\""+ quote +"\"");
        $("#tweet").attr("href", "http://twitter.com/intent/tweet?hashtags=Serge&related=freecodecamp&text="+quote+" -"+author+" ");
    })
}

window.onload = function() {
    var button = $('#change-color')[0];
    var items = $('.color');
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var body = $('body')[0];
    getQuote();
    button.onclick = function () {
        getQuote();
        var color = colors[Math.floor(Math.random() * colors.length - 1)];
        body.style.backgroundColor = color;
        for (var j = 0; j < items.length; j++) {
            if (items[j].tagName === 'H1' || items[j].tagName === 'H2') {
                items[j].style.color = color;
            } else {
                items[j].style.backgroundColor = color;
            }
        }
    }
}