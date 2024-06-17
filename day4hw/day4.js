

let products = [
    { name: "Basketball", price: 89.99, description: "Wilson Evolution Game Ball 29.5 inches" },
    { name: "Clipboard", price: 29.99, description: "Black Clipboard w/ 2 pens" },
    { name: "Traction Mat", price: 64.99, description: "Removes dust, dirt, and debris from shoe soles" }
];

function displayProducts(products) {
    const container = document.getElementById('product-container');

    products.forEach(product => {
        
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

        
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p><strong>Description:</strong> ${product.description}</p>
        `;

        
        container.appendChild(productDiv);
    });
}


displayProducts(products);


document.getElementById('contactForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let formData = {
        name: name,
        email: email,
        message: message
    };

    console.log(formData);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Watched A LOT of youtube to complete this one

const boxes = document.querySelectorAll('.box');
    const changeAllBtn = document.getElementById('changeAllBtn');

    boxes.forEach(box => {
      box.addEventListener('click', function() {
        toggleHighlight(this);
      });

      box.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightgreen';
      });

      box.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'yellow';
      });
    });

    changeAllBtn.addEventListener('click', function() {
      boxes.forEach(box => {
        const randomColor = getRandomColor();
        box.style.backgroundColor = randomColor;
      });
    });

    function toggleHighlight(element) {
      element.classList.toggle('highlight');
    }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }




