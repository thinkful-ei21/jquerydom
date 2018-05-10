'use strict';
function main(){  
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    const itemName = $('.js-shopping-list-entry').val();
    console.log(itemName);
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
    console.log(htmlText);
    $('.shopping-list').append(htmlText);
    $('.js-shopping-list-entry').val('');
  });
}

$(main);