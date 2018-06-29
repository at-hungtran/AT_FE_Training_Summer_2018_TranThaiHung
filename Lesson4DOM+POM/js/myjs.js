var productData = [
  {
    'id':'0',
    'img':'images/product1.jpg',
    'name':'Sữa tươi trân châu đường đen',
    'price':'30.000',
  },
  {
    'id':'1',
    'img':'images/product2.jpg',
    'name':'Trà xanh cheese milk foam',
    'price':'20.000',
  },
  {
    'id':'2',
    'img':'images/product3.jpg',
    'name':'Trà trái cây',
    'price':'25.000',
  },
  {
    'id':'3',
    'img':'images/product4.jpg',
    'name':'Trà Alisan cheese milk foam',
    'price':'15.000',
  },
  {
    'id':'4',
    'img':'images/product5.jpg',
    'name':'Trà sữa trân châu đen',
    'price':'30.000',
  },
  {
    'id':'5',
    'img':'images/product6.jpg',
    'name':'Trà cam',
    'price':'45.000',
  },
  {
    'id':'6',
    'img':'images/product7.jpg',
    'name':'Trà ô long kem phô mai',
    'price':'10.000',
  },
  {
    'id':'7',
    'img':'images/product8.jpg',
    'name':'Trà trộn nước màu',
    'price':'50.000',
  },
];

var products = document.getElementById('ul-list');
var carts = document.getElementsByClassName('body-table')[0];
var btnAddCart = document.getElementsByClassName('add-to-cart');
var btnRemoveCart = document.getElementsByClassName('icon-delete');

function showListProduct() {
  var htmlProduct='';
  for(var item of productData) {
    htmlProduct += '<li class="product-item">'
    + '<article class="product-item-border">'
    + '<a href="#"><img class="product-image"' + ' src="'+ item.img + '"' + ' alt="image product"></a>'
    + '<h4 class="product-name"><a href="#">' + item.name + '</a></h4>'
    + '<span class="product-price">' + item.price + '</span>'
    + '<button class="add-to-cart" id="' + item.id + '"><span class="icon-add"></span></button>'
    + '</article>'
    + '</li>';
  }
  products.innerHTML = htmlProduct; 
}

function addToCart() {
  for(var i = 0; i < productData.length; i++) {
    btnAddCart[i].addEventListener('click', function() {
      var idBtnCart = this.id;
      addIdToLocalStored(idBtnCart);
      changeCountProduct(idBtnCart);
      disabledBtn(idBtnCart);
    });
  }
}

function disabledBtn(id) {
  if(!id) {
    for(var i = 0; i < localStorage.length; i++) {
      var btnAdd = document.getElementById(getIdLocal(i));
      if(btnAdd) { 
        btnAdd.disabled = true;       
        changeIconAfterClick(getIdLocal(i));
      }
    }
  }else {
    document.getElementById(id).disabled = true;
    changeIconAfterClick(id);
  }
}

function changeIconAfterClick(id) {
  document.getElementsByClassName('icon-add')[getIndexProdcuctFromId(id)]
  .style.backgroundImage = "url(../images/icon-plus-disable.png)";
}

function getIndexProdcuctFromId(id) {
  for(var i = 0; i < productData.length; i++) {
    if(id === productData[i].id) {
      return i;
    }
  }
}

function addIdToLocalStored(id) {
  localStorage.setItem('key' + id, id);
}

function changeCountProduct() {
  var countProduct = localStorage.length;
  document.getElementsByClassName('cart-count')[0].innerHTML = countProduct;
}

function getIdLocal(index) {
  return localStorage.getItem(localStorage.key(index));
}

function findProductInLocal(id) {
  for(var i = 0; i < productData.length; i++) {
    if(productData[i].id === id) {
      return productData[i];
    }
  }
}

function showShopCart() {
  var htmlCarts='';
  for(var i = 0; i < localStorage.length; i++) {
    var product = findProductInLocal(getIdLocal(i));
    htmlCarts += '<tr class="body-table-row">'
    + '<td class="body-table-column">'
    + '<div class="image-product">'
    + '<img src="' + product.img + '" alt="product image">'
    + '</div>'
    + '<div class="product-description">'
    + '<h4 class="product-name">' + product.name + '</h4>'
    + '<span class="product-price">' + product.price + '</span>'
    + '</div>'
    + '</td>'
    + '<td class="body-table-column product-quantity"><span>1</span></td>'
    + '<td class="body-table-column icon-delete-border"><span id="' + product.id + '" class="icon-delete"></span></td>'
    + '</tr>';
  }
  carts.innerHTML = htmlCarts;
}

function removeCart() {
  for(var i = 0; i < localStorage.length; i++) {
    btnRemoveCart[i].addEventListener('click', function() {
      var idCart = this.id;
      localStorage.removeItem('key' + idCart);
      location.reload();
    });
  }
}

changeCountProduct();

if(window.location.pathname === '/product.html') {
  showListProduct();
  addToCart();
  disabledBtn();
}

if(window.location.pathname === '/cart.html') {
  showShopCart();
  removeCart();
}
