const list_items = [
  {
    id: "0",
    title: "IMichelin",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "1",
    title: "IMichelin1",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "2",
    title: "IMichelin2",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "3",
    title: "IMichelin3",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "4",
    title: "IMichelin4",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "5",
    title: "IMichelin5",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "6",
    title: "IMichelin6",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "7",
    title: "IMichelin7",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "8",
    title: "IMichelin8",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "9",
    title: "IMichelin9",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "11",
    title: "IMichelin11",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
  {
    id: "12",
    title: "IMichelin12",
    descr: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    price: "990",
    img: "./img/product.png",
  },
];

const list_element = document.getElementById("card");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 6;

if (window.innerWidth < 1200) {
  rows = 4
} else {
  rows = 6
}


function displayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let card_item = document.createElement("div");
    card_item.classList.add("cards__wrapper");
    card_item.classList.add("col-6");
    card_item.classList.add("col-xl-4");
    card_item.innerHTML = `
          <div class="card ">
            <a href="#"><img src="${item.img}" alt="" class="card__img" /></a>  
            <a href="#"><h5 class="card__title">${item.title}</h5></a>
            <a href="#"><p class="card__descr">${item.descr}</p></a>
            <div class="card__options">
              <span class="options__price">${item.price}p.</span>
              <div class="options__counter">
                <button class="counter__minus btn-reset"></button>
                <span class="counter__score" id="countNumber">1</span>
                <button class="counter__plus btn-reset"></button>
              </div>
              <button class="options__cart btn-reset"></button>
            </div>
          </div>
          `;
    wrapper.appendChild(card_item);
  }
}

function setupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function paginationButton(page, items) {
  let button = document.createElement("button");
  button.classList.add("btn-reset");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    displayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector(".catalog__pages button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

displayList(list_items, list_element, rows, current_page);
setupPagination(list_items, pagination_element, rows);
