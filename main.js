//--回到頂端
$(document).ready(function () {
    $('back-to-top').click(function (e) {
        $('html,body').animate({ scrollTop: 0 });
    });

    //--連結捲動到標題
    $('.nav-link').click(function (e) {
        var link = $(this).attr('href');
        console.log(link);
    });
});