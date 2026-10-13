import {products} from "./products.js";
import {createProductCardFunc as createProductCard} from "./create-product-card.js";


products.map(function (object) {
    createProductCard(object);
});


const productItems = document.querySelectorAll(".product-card");

let categoryArray = ["All"];

productItems.forEach(element => {
    const category = element.querySelector("span").textContent;

    if (categoryArray.includes(category)) {
        return;
    }

    categoryArray.push(category);
});

const productTab = document.createElement("div");
productTab.classList.add("product-tab");

categoryArray.forEach(item => {
    const productTabLinks = document.createElement("a");

    productTabLinks.setAttribute("href", "#");
    productTabLinks.classList.add("product-tab-link");
    productTabLinks.textContent = item;
    productTabLinks.dataset.filter = item.toLowerCase();

    productTab.appendChild(productTabLinks);
});

const productTabWrapper = document.querySelector(".product-tab-wrapper");

productTabWrapper.appendChild(productTab);

const categoryLinks = document.querySelectorAll(".product-tab-link");
const activeTab = document.querySelector("[data-filter='all']");
activeTab.classList.add("is-active");

const searchInput = document.querySelector(".product-search");

let activeFilter = "all";
let searchValue = "";

function filterProducts() {
    productItems.forEach(product => {
        const category = product.dataset.category;
        const text = product.textContent.toLowerCase();

        const matchesCategory =
            activeFilter === "all" || category === activeFilter;

        const matchesSearch =
            text.includes(searchValue);

        if (matchesCategory && matchesSearch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

categoryLinks.forEach(tab => {
    tab.addEventListener("click", function (e) {
        e.preventDefault();

        activeFilter = tab.dataset.filter;

        categoryLinks.forEach(tab => {
            tab.classList.remove("is-active");
        });

        tab.classList.add("is-active");

        filterProducts();
    });
});

searchInput.addEventListener("input", function () {
    searchValue = searchInput.value.toLowerCase();

    filterProducts();
});