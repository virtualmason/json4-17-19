$( document ).ready(function() {
 
  $.getJSON( 'page-1.json', function( json ) {
    json.forEach(element =>{
        let newImg = $('<img id="dynamic">');
        newImg.attr('src', element.image_url);
        newImg.appendTo('#photo-template')
    })
  });
});
