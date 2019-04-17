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
      newImg.appendTo('#photo-template');
      list.push(img);
    });
  });

  function filter(check){
    $('#mySelect').change(function(){ 
      var value = $(this).val();
      console.log(value);
  });
    // var dataList = document.querySelectorAll('[data-bird]');option[value=two]
    // $( "option[value]" );
    // console.log();
    // for(var i =0; i < dataList.length; i++) {
    //   var currentDivData = dataList[i].getAttribute('data-bird');
    //   if(check.id === 'all') {
    //     location.reload();
    //   }
    //   if(currentDivData !== check.id) {
    //     dataList[i].classList.add('hide');
    //   } else {
    //     dataList[i].classList.remove('hide');
    //   }
    // }
  }
  filter();





});
