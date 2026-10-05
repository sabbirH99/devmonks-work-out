const productsContainer = document.querySelector(".products-wrapper");

const url = "https://script.google.com/macros/s/AKfycbyxfHYxTIDYEOHuezZXmQgDR1J8uPfVZC4wrQtPBF3JnCGcpjSKpVQ27I5vstnFCabC/exec"


async function getProducts() {
    productsContainer.innerHTML ="Loading..."

    try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const products = await response.json();
        console.log(products);

        renderProducts(products.data, productsContainer);
    } catch (error){
        console.error(error);
        productsContainer.innerHTML = "Sorry, something went wrong";
    }
}

getProducts();

function renderProducts(products, targetElement) {
    targetElement.innerHTML = "";

    const productCards = products.map(function (product) {
        return createProductCard(product);
    });

    productCards.forEach(function (productCard) {
        targetElement.appendChild(productCard);
    });
}



function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("div");
    productImage.classList.add("product-image");

    const image = document.createElement("img");
    image.src = "https://placehold.co/600x400/png";
    image.alt = product.products;

    const brand = document.createElement("span");
    brand.classList.add("product-brand");
    brand.textContent = product.Brand;

    const category = document.createElement("span");
    category.classList.add("product-category");
    category.textContent = product["Product Category"];

    productImage.append(image, brand, category);

    const productContent = document.createElement("div");
    productContent.classList.add("product-content");

    const productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.textContent = product.products;

    const productDetails = document.createElement("p");
    productDetails.classList.add("product-details");
    productDetails.textContent = product["Sub Text"];

    productContent.append(productName, productDetails);

    productCard.append(productImage, productContent);

    return productCard;
}