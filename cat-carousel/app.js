let clickCat = function(){
    $('.js-thumb-click').on('click', function(event){
        let image = $(this).find('img').attr('src');
        let altText = $(this).find('img').attr('alt');
        
        $('.hero img').attr('src',image).attr('alt', altText);
    });
}

$(clickCat);
