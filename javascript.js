<<<<<<< HEAD
$("tab-list").each(function(){
    var $this   = $(this);
    var $tab    = $this.find("li.active");
    var $link   = $tab.find("a");
    var $panel  = $($link.attr("href"));

    $this.on("click", ".tab-control", function(e){
        e.preventDefault();
        var $link = $(this);
        var id  = this.hash;

        if (id && !$link.is(".active")){
            $panel.removeClass("active");
            $tab.removeClass("active");

            $panel = $(id).addClass("active");
            $tab = $link.parent().addClass("active");
        }
    });
=======
$("tab-list").each(function(){
    var $this   = $(this);
    var $tab    = $this.find("li.active");
    var $link   = $tab.find("a");
    var $panel  = $($link.attr("href"));

    $this.on("click", ".tab-control", function(e){
        e.preventDefault();
        var $link = $(this);
        var id  = this.hash;

        if (id && !$link.is(".active")){
            $panel.removeClass("active");
            $tab.removeClass("active");

            $panel = $(id).addClass("active");
            $tab = $link.parent().addClass("active");
        }
    });
>>>>>>> 702d21d33e4715b4e634510affa5b80f6ceae75b
});