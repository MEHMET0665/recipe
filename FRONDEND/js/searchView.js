
export const results_container = document.querySelector('.results__list');

export const renderResults = recipeArr => {
    results_container.innerHTML = "";
    recipeArr.forEach(element => {
    const htmlBlock =`
                <li id=${element.id}>
                    <a class="results__link results__link--active" href="#${element.id}">
                        <figure class="results__fig">
                            <img src=${element.image_url} alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${element.title}</h4>
                            <p class="results__author">${element.publisher}</p>
                        </div>
                    </a>
                </li>
                `
                results_container.insertAdjacentHTML("beforeend", htmlBlock);
    })
    
};

