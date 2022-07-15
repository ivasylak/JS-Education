let shop = document.querySelector("#shop");

let basket = JSON.parse (localStorage.getItem("data")) || [];

let addShop = () => {
    return (shop.innerHTML = shopItemsInfo
      .map((x)=>{
        let {id, name, price, description, img} = x;

        let search = shopItemsInfo.find ((x) => x.id === id) || [];

        return `
        <div id=produc7t-id-${id} class="item">
              <img width="215" src= ${img}>
              <div class="details">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="price-quantity">
                  <h2>$ ${price}</h2>
                  <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">
                    ${search.item === undefined? 0: search.item}
                    </div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                  </div>
                </div>
              </div>
            </div>
        `;
    }).join(" "));
     };

addShop();


function showData() {

  let searchProduct = document.querySelector("#searchItem").value;

  if (!searchProduct) {
    addShop();
    return;
  }

  let item = shopItemsInfo.find(x => x.name.toLowerCase() === searchProduct.toLowerCase());

  if (item === undefined) {

    shop.innerHTML = "Not found <br>" + shop.innerHTML;

    return;
  }

  let {id, name, price, description, img} = item;

  shop.innerHTML = `
  <div id=product-id-${id} class="item">
        <img width="215" src= ${img}>
        <div class="details">
          <h3>${name}</h3>
          <p>${description}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${1}
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
  `;
}


let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined){
    basket.push({
    id: selectedItem.id,
    item: 1,
});
  }
  else {
    search.item += 1;
  };

  // console.log(basket);
  updateItem(selectedItem.id);
  localStorage.setItem('data', JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;

  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search === 0) return;
  else {
    search.item -=1;
  };

  updateItem(selectedItem.id);
  basket = basket.filter ((x) => x.item !== 0 );
  // console.log(basket);
  localStorage.setItem('data', JSON.stringify(basket));
};

let updateItem = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.querySelector("#cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
