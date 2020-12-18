const shopping_list = document.querySelector('.shopping__list');

export const addShopping = item => {
    console.log(item)
    shopping_list.innerHTML="";
    const markup = `
    <li class="shopping__item" data-itemid=${item.id}>
        <div class="results__data">
            <a class="results__link" id=${item.id} href="#${item.id}">
                <p class="shopping__description">${item.title}</p>
            </a>
            ${item.ingredients.map(element => {         
            return `
                <div class="shopping__count">
                    <input type="number" value=${element.quantity} step="1">
                    <p>${element.unit}</p>
                    <p class="shopping__description">${element.description}</p>
                </div>
                `        
                }).join('')
            }
        </div>
        <button class="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li>

    `;
    shopping_list.insertAdjacentHTML('beforeend', markup);
};


