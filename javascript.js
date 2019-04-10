$(document).ready(function(){
    var bereich = $('div.tabs > div');
     
    $('div.tabs ul.navi a').click(function () {
        bereich.hide().filter(this.hash).show();
         
        $('div.tabs ul.navi a').removeClass('selected');
        $(this).addClass('selected');
         
        return false;
    }).filter(':first').click();
});

