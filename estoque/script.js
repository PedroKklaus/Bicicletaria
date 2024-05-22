document.getElementById('open-btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar'); 
});

let sales = JSON.parse(localStorage.getItem("sales")) || [];

let salesTable = document.getElementById("salesTable");


sales.forEach(function (sale) {
  let tr = document.createElement("tr");

  let Product = document.createElement("td");
  Product.textContent = sale.product;
  tr.appendChild(Product);

  let Category = document.createElement("td");
  Category.textContent = sale.category;
  tr.appendChild(Category);

  let Payment = document.createElement("td");
  Payment.textContent = sale.payment;
  tr.appendChild(Payment);

  let Date = document.createElement("td");
  Date.textContent = new Date(sale.date).toLocaleDateString();
  tr.appendChild(Date);

  salesTable.appendChild(tr);


  let Vendedor = document.createElement("td");
  Vendedor.textContent = 'Pedro'
  tr.appendChild(Vendedor);

  salesTable.appendChild(tr);
});

document.addEventListener('DOMContentLoaded', function () {
  var isLoggedIn = localStorage.getItem('loggedIn');
  if (isLoggedIn == 'false'){
    document.getElementById ('cart').style.display = 'none';
  }
});







