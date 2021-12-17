const url = '/api/v1/products';
const container = document.querySelector('.container');

async function fetchProducts() {
    try{
        const{
            data: {products}
        } = await axios.get(url);
        const tempProducts = products.map((each) => {
            return `<article class='product'> 
<img src='${each.image}' al='${each.name}' class='img'/>
<footer>
<p>${each.name}</p>
<span>${each.price}</span>
<button>
</footer>
</article>`;
        })
        .join("")
        container.innerHTML = tempProducts
        console.log(container)
    }
    catch(error){
        console.log(error);
    }
}

fetchProducts();