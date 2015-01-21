// INITIALIZE FOUNDATION ON DOCUMENT LOAD //
$(document).foundation();

// AUTOCLOSE THE NAV ON LINK SELECT //
$(".off-canvas-list a").on("click.toggleCanvas", function(){
$(".exit-off-canvas").click();
});