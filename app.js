$( document ).ready(function() {
 
  $.getJSON( 'page-1.json', function( json ) {
    json.forEach(element => {
      console.log( element.image_url);

      
    });
  });
});
