$( document ).ready(function() {


  function NewImage(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
  }

 
  $.getJSON( 'page-1.json', function( json ) {
    json.forEach(element =>{
        let img = new NewImage(element.image_url, element.title, element.description, element.keyword, element.horns);
        let newImg = $('<img id="dynamic">');
        newImg.attr('src', element.image_url);
        newImg.appendTo('#photo-template')
        console.log(img);
    })
  });
});
