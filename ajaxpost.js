/* Send postdata to url via AJAX */
function ajaxpost(postdata,url){
      $.ajax({
            url: url,
            type: "POST",
            data : postdata,
            success:function(result){
                // Actions to do in case of success

            },
            error:function(XMLHttpRequest,textStatus, errorThrown){
                // Actions to do in case of error
            }
      })
      return false;
} 
