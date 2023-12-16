const products = [
    { 
        name: "Petchay Seed", 
        price: "₱54.00",
        orgprice: "₱70.00", 
        seller: "Patricia Lungay", 
        image: "petchayseed_product.jpg" 
    },
    { 
        name: "Fiber Optic Cable", 
        price: "₱145.00",
        orgprice: "₱160.00",
        seller: "Peter Miles Laporre", 
        image: "fiberopticcable_product.jpg" 
    },
    { 
        name: "Neymar Jr. - Funko Pop", 
        price: "₱1,500.00",
        orgprice: "₱2,000.00", 
        seller: "Belle Maniquez", 
        image: "funkopop_product.jpg" 
    },
    { 
        name: "sn74ls32n IC", 
        price: "₱60.00",
        orgprice: "₱80.00",
        seller: "Jericho Lagang", 
        image: "IC_product.jpeg"
    },    
    { 
        name: "Preloved Converse Shoes", 
        price: "₱799.00",
        orgprice: "₱2,500.00", 
        seller: "Richardo_collection", 
        image: "shoes_product.jpg" 
    },

    { 
        name: "Lato Lato", 
        price: "₱20.00",
        orgprice: "₱70.00",
        seller: "ShinToy", 
        image: "lato_product.jfif" 
    },    
    { 
        name: "Cookie", 
        price: "₱69.00",
        orgprice: "₱75.00", 
        seller: "SashaBakes", 
        image: "cookie_product.png" 
    },

    { 
        name: "Vegan Sisig", 
        price: "₱110.00",
        orgprice: "₱130.00",
        seller: "Loleng's specialty", 
        image: "sisig_product.jpg" 
    },    { 
        name: "Heart Necklace", 
        price: "₱123.00",
        orgprice: "₱270.00", 
        seller: "Melanie4", 
        image: "necklace_product.jpg" 
    },

    { 
        name: "Preloved PS4 set", 
        price: "₱4,550.00",
        orgprice: "₱7,695.00",
        seller: "AllisonTech", 
        image: "ps4_product.jpg" 
    },
    

];

function generateProductList() {
    const productListDiv = document.getElementById('productList');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="images/${product.image}">
            <p class="product_name">${product.name}</p>
            <p class="price">${product.price} - <del>${product.orgprice}</del></p>
            <p class="seller_name">${product.seller}</p>
        `;

        productListDiv.appendChild(productDiv);
    });
}
// Call the function to generate the product list
generateProductList();


function search() {

    let filter = document.getElementById('search_market').value.toUpperCase();
    let item = document.querySelectorAll('.product');
    let l = document.getElementsByClassName('product_name');

    for(var i = 0;i<=l.length;i++){
    let a=item[i].getElementsByClassName('product_name')[0];
    let value=a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1) {
    item[i].style.display="";
    }
    
    else
    {
    item[i].style.display="none";
    }
    }
}