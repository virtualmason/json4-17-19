$( document ).ready(function() {


  function NewImage(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
  }
  var list = [];

  $.getJSON( 'page-1.json', function( json ) {
    json.forEach(element =>{
      let img = new NewImage(element.image_url, element.title, element.description, element.keyword, element.horns);
      let newImg = $('<img id="dynamic">');
      newImg.attr('src', element.image_url);
      newImg.attr('alt', element.keyword);
      newImg.appendTo('#photo-template');
      list.push(img);

    });
  });

  $('#mySelect').change(function(){
    var value = $(this).val();
        $(`img`).hide();
        $(`img[alt=${value}]`).show();
  });
});
