$( document ).ready(function() {

  let uniqueArr =[];
  $.getJSON( 'page-1.json', function( json ) {
    json.forEach(element =>{
      if(!uniqueArr.includes(element.keyword)) {
        uniqueArr.push(element.keyword);
      }
    
      console.log('img form handlebars', element.image_url);
      let source   = document.getElementById('entry-template').innerHTML;
      let template = Handlebars.compile(source);
      let context = {id: element.keyword,title: element.keyword, description: element.description, image:element.image_url, alt:element.keyword};
      let html    = template(context);
      $('body').append(html);

    });

    uniqueArr.forEach(element => {
      console.log('line 20', element);
      let option = $(`<option value=${element} >${element}</option>`);
      $(option).appendTo('#mySelect');
    });
  });
  $('#mySelect').change(function(){
    let value = $(this).val();
    if(value === 'all') {
      $(`img`).show();
      $(`h2`).show();
      $(`p`).show();
    } else {
      $(`img`).hide();
      $(`h2`).hide();
      $(`p`).hide();
      $(`img[alt=${value}]`).show();
      $(`h2[id=${value}]`).show();
      $(`p[id=${value}]`).show();
    }

  });
 
});
