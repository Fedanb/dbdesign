const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const close = document.querySelector('.modal__close');
const modalImg = document.querySelector('.modal__img');
const productList = document.querySelectorAll('.product__list');
const title = document.querySelector('.detail__title');
const closee = document.querySelector('.detail__bagBtn');

const productCost = ['$321', '$621', '$3321', '$721', '$421', '$351'];

productList.forEach((list, index)=> {
    const view = list.querySelector('.product__viewBtn');
    const productImg = list.querySelector('.product__img').getAttribute('src');

    view.addEventListener('click', () => {
        modal.classList.add('modal--bg');
        modalContent.classList.add('modal__content--show');
        modalImg.setAttribute('src', productImg);
        title.innerText = `product title ${index + 1}`;
        cost.innerText = productCost[index];
        // console.log(modalImg);
        
    })
})

closee.addEventListener('click', () => {
    modal.classList.remove('modal--bg');
    modalContent.classList.remove('modal__content--show');
})
modal.addEventListener('click', () => {
    modal.classList.remove('modal--bg');
    modalContent.classList.remove('modal__content--show');
})
