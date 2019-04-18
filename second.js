$( document ).ready(function() {


  function NewImage(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
  }
  let uniqueArr =[];
  $.getJSON( 'page-2.json', function( json ) {
    json.forEach(element =>{
      if(!uniqueArr.includes(element.keyword)) {
        uniqueArr.push(element.keyword);
      }
      let img = new NewImage(element.image_url, element.title, element.description, element.keyword, element.horns);
      let imgTitle = $(`<h2>${element.title}</h2>`);
      imgTitle.appendTo('#photo-template');
      let newImg = $('<img id="dynamic">');
      newImg.attr('src', element.image_url);
      newImg.attr('alt', element.keyword);
      newImg.appendTo('#photo-template');
      let imgDescription = $(`<p>${element.description}</p>`);
      imgDescription.appendTo('#photo-template');
      // list.push(img);

    });

    uniqueArr.forEach(element => {
      console.log('line 20', element);
      let option = $(`<option value=${element} >${element}</option>`);
      $(option).appendTo('#mySelect');
    });
  });
  $('#mySelect').change(function(){
    var value = $(this).val();
    if(value === 'all') {
      $(`img`).show();
    } else {
      $(`img`).hide();
      $(`img[alt=${value}]`).show();
    }

  });
});
