import getData from "./getData.js";

const getCard = function(dataCard) {
    const li = document.createElement('li');
    li.classList.add('card');

    switch (this) {
        case 'video':
            li.classList.add('card-video') 
            li.innerHTML = `
            <a href="${dataCard.link}" class="card-link">
                <figure>
                    <img src="${dataCard.preview}" alt="${dataCard.description}" class="card-video-img">
                    <figcaption>${dataCard.description}</figcaption>
                </figure> 
            </a>`
        break;
        case 'photo':
            li.classList.add('card-img')
            li.innerHTML = `<img src="${dataCard.link}" alt="${dataCard.description}" class="card-photo-items">`
            break;
        case 'goods':
            li.classList.add('card-product')
            li.innerHTML = `
            <article class="product">
                <img src="${dataCard.picture}" alt="" class="product-img">
                <h2 class="product-title">${dataCard.name}</h2>
                <div class="product-wrapper-buy">
                    <p class="product-price">${dataCard.price}</p>
                    <button class="product-btn-buy">
                        <svg class="product-cart-logo">
                            <use xlink:href="#add"/>
                        </svg>
                    </button>
                </div>
            </article>`
            break;
        default:
            li.innerHTML = 'No data';        
    }
    return li;
};

const renderTabs = async(i = 0) => {
    const tabsContent = document.querySelectorAll('.tabs-content');
    const type = tabsContent[i].dataset.base;

    const data = await getData(`db/${type}.json`)
    const listElem = data.map(getCard, type);
    
    tabsContent[i].textContent = '';
    tabsContent[i].append(...listElem);
};

export default renderTabs;