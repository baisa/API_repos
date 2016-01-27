$( "#button" ).click(function(e) {
  var name = $('#name').val();
  $.ajax( "https://api.github.com/users/" + name + "/repos")
  .done(function(json){
    for(var i=0;i<json.length;i++) {
      $("#repos").append("<li>" + json[i].name + "</li>");
    }
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "complete" );
  });
});