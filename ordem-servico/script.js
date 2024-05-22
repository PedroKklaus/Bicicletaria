document.getElementById('open-btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar'); 
});

const openModal = () => {
    document.querySelector('.modal').style.display = 'block';
    document.getElementById('backgroundModal').style.display = 'block'; 
};


const closeModal = () => {
    document.querySelector('.modal').style.display = 'none';
    document.getElementById('backgroundModal').style.display = 'none'; 
};

const updateTable = () => {
    const tableBody = document.querySelector('#orderTable tbody');
    tableBody.innerHTML = '';

    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.forEach((order, index) => {
        const newRow = tableBody.insertRow();
        const cells = Object.values(order);
        cells.forEach((value) => {
            const newCell = newRow.insertCell();
            newCell.textContent = value;
        });

        const actionsCell = newRow.insertCell();

        const editIcon = document.createElement('i');
        editIcon.className = 'fa-solid fa-pen-to-square';
        editIcon.addEventListener('click', () => editOrder(index)); 
        actionsCell.appendChild(editIcon);

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash';
        deleteIcon.addEventListener('click', () => deleteOrder(index)); 
        actionsCell.appendChild(deleteIcon);
    });
}

window.addEventListener('load', updateTable);


const saveOrder = () => {
    const servico = document.getElementById('servico').value;
    const description = document.getElementById ('description').value
    const datainicial = document.getElementById('datainicial').value;
    const dataFinal = document.getElementById('dataFinal').value;
    const ContatoCliente = document.getElementById('ContatoCliente').value;
    const paymentSelect = document.getElementById('paymentSelect').value;

    const newOrder = {
        servico,
        description,
        datainicial,
        dataFinal,
        ContatoCliente,
        paymentSelect
    };


    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.push(newOrder);

    localStorage.setItem('orders', JSON.stringify(orders));

  
    closeModal();
    updateTable();
};

const editOrder = (index) => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders[index];

    document.getElementById('servico').value = order.servico;
    document.getElementById('description').value = order.description;
    document.getElementById('datainicial').value = order.datainicial;
    document.getElementById('dataFinal').value = order.dataFinal;
    document.getElementById('ContatoCliente').value = order.ContatoCliente;
    document.getElementById('paymentSelect').value = order.paymentSelect;

    
    const saveButton = document.getElementById('saveBtn');
    saveButton.textContent = 'Salvar Edição';

   
    saveButton.addEventListener('click', () => {
        order.servico = document.getElementById('servico').value;
        order.description = document.getElementById('description').value;
        order.datainicial = document.getElementById('datainicial').value;
        order.dataFinal = document.getElementById('dataFinal').value;
        order.ContatoCliente = document.getElementById('ContatoCliente').value;
        order.paymentSelect = document.getElementById('paymentSelect').value;

    
        localStorage.setItem('orders', JSON.stringify(orders));

        closeModal();
        updateTable();
    });


    openModal();
};


const deleteOrder = (index) => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    updateTable();
};

window.addEventListener('load', updateTable);
document.getElementById('addSo').addEventListener('click', openModal);
document.getElementById('saveBtn').addEventListener('click', saveOrder); 
document.getElementById('cancelBtn').addEventListener('click', closeModal); 


document.addEventListener('DOMContentLoaded', function () {
    var isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn == 'false'){
      document.getElementById ('cart').style.display = 'none';
    }
});
