document.getElementById('open-btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar'); 
});


function addProduct (event){
    let categoria = document.getElementById('categoria').value;
    let descricao = document.getElementById('descricacao').value;
    let fabricante = document.getElementById('fabricante').value;
    let precovenda = document.getElementById('precovenda').value;
    let preco = document.getElementById('preco').value;
    let Imgproduto = document.getElementById('Imgproduto').files[0];

    if (!categoria || !descricao || !fabricante || !precovenda || !preco || !Imgproduto) {
      event.preventDefault();
      alert('Campos obrigatórios não preenchidos'); 
  }else {
    alert ('Produto cadastrado com sucesso!')
  
    let reader = new FileReader();
      reader.onloadend = function() {
      let product = {categoria, descricao, fabricante, precovenda, preco, image: reader.result};
    
      let products = JSON.parse(localStorage.getItem('products')) || [];
      products.push(product);
    
      localStorage.setItem('products', JSON.stringify(products));
    
      }
      reader.readAsDataURL(Imgproduto);
      
      console.log (products);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn == 'false'){
      document.getElementById ('cart').style.display = 'none';
    }
});