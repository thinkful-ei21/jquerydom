'use strict';
function main(){
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    const itemName = $('.js-shopping-list-entry').val();

    const htmlText = `<li>
      <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
    </li>`;

    $('.shopping-list').append(htmlText);
    $('.js-shopping-list-entry').val('');
  });

  //delete
  $('.shopping-list').on('click','.shopping-item-delete', function(event){
    $(this).closest('li').remove();
    console.log('stuff');
  });

  //check and uncheck
  $('.shopping-list').on('click','.shopping-item-toggle', function(event){    
    console.log($(this).closest('li').children('.shopping-item'));
    $(this).closest('li').children('span').toggleClass('shopping-item__checked');
  });
}

$(main);
