
 function main(){
  $(".thumbnail").on(click, function(event){
    const imgSrc = $(this).find('img').att('src');
    const imgAlt = $(this).find('img').att('alt');
    $('.hero img').attr('src', imgSrc).attr('alt',imgAlt);
  });
}
  $(main);
