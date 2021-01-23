
/* Send data to url in AJAX using GET method */
function ajax(url,divtohappen,effect = "fadein") {
    $.ajax({
        url: url,
        cache:false,
        success:function(html){
            $(divtohappen).empty();
            $(divtohappen).append(html);
            if(effect == "direct") {$(divtohappen).show();}
            if(effect == "fadein") {
                $(divtohappen).css("opacity",0);
                $(divtohappen).show();
                $(divtohappen).fadeTo('500',1);
            }
        },
        error:function(XMLHttpRequest,textStatus, errorThrown){
            $("divtohappen").append("Erreur lors du chagement de la page");
        }
    })
}
/*
Utilisation:

ajaxget(pathtofile+"?var1=", "#mydiv");
This command will load pathtofile via AJAX sending data and display the result in #mydiv using fadeout/fadin method

This code need Jquery to work
*/
