window.onload = function() {
    // Lista de produtos
    const products = [
        { id: 1, name: 'pneu', price: 400, image: 'data:image/webp;base64,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' },
        { id: 2, name: 'bomba de combustivel', price: 300, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQU_V90R4VbtGXCiDQrpoTNg19tUqwERIlN0LUvACRQcDiIykTtV6mG2uZYK08pwcJhqCb4yC0B1STyC03dEtTA9UeaVzIAxhppWqVchTd5OXEO9MHArzwetuc0SFV6f55q_kq9JuTGQw&usqp=CAc' },
        { id: 3, name: 'amortecedor', price: 200, image: 'data:image/jpeg;base64,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OAGoDpffc91fAs2rGph2Fw4YC2CJkYcbkNAFytxEUUREQEREBERAREQEREBERAREQEREBEWtiVczDYpJpXaWRtLnHsAggc64m9gjoqY/1iruAR+6j+eU9ubD3PsVWcfqmYdGzCqTSAG+ofrtsb97ut9dJB53zUtY6hjlxSpaRUVW0Me14oh8LR7gHfpqd2KreVcCqMyvklvobKbSVA5DBa0NOT02F5Ottu51iPaPD5cSlFNSnU4D8+Sx0NP6X/qLf0i1zuexteIYhSeHFPa/mVEg4Ju+Q9z+lt/t2WrmLNVNkiIUOHxtdPawaNww/qkty7rb/FVvAMqyYrJ+LrnOfI839X/dh/0e9RgpRVZsLpp9QMhAO/pDQTZgbzbe/uRv0tamU0eCiI2L3Fwa65F/WWgvd/6hTtBh4J0RAXHJt6Wf7n2U4zBodBjewPDiC7UL6iDcE/folsidoY5Zbimt87bCSPRosDqbe41jqQdx2uV7lLI9Plu0jBqm02dJuL/RtzbbZWgBerOtY8svURRRERAREQEREBERAREQEREBERAREQEREBUDNWLRYrVCmllaylpHNdUvcbB8vLIR3tsbDkkdir3UX0u021WNr97bL87V874ZTDCNMjWl8z3aj5dz6+LuLi42sN3EgcWsFmxTFpMdq2yOilbSx7AaS2zBsXkOsbb7gA/H7C8lmzOsgjZS4Yyxft5g/djawAHBN+e245C5jUmoij89rnSQl2lxc3Rv02Dj256FXPJOF1ADalkTpYXW0ubYuF7GxHOxuD02H1GpWUllLJgovzZ/XK7ck7783KvVDRms+H0sHL/1ezf91kw6gdWAGRpYz9JuC/3d1A9lPtaGCwFgEtJHxTwNp2hrBYBZERZaEREBERAREQEREBERAREQEREBERAREQEREBEWOdpe1wBsSCAexsg45m7M78TqXQtY+cgkMgaXaWtHzODSNbjyS42F7AbXNEr5pMPndJLC5mtmmRhBaWbgtcL/AN1pB9irj4f4nFlvEatlYQx8hsxz9gPUTa/Tt9j2WbxUx1mMSU8VG4OnDiAYiHGzrANJGxubelS34KxLjT8UhNLE7znzWAZHEWBm4Jcb2u72aLbkldyyJgpwCihgf8YF3+zjuR9rrawXAYMNa0shja/SNRa0Ak9VLKjxeoiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCr5pyJSZmOuZha/8AWw2J+u268yvkGjy07zIYyZOj3nUR/d7fZWlEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//2Q==' },
        { id: 4, name: 'lampada automotiva', price: 100, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmrBkRr3Flas4zUaDSxolpU-jhJ3zRZzbFCpBuDHaXfj-GHqVh9k8U0dTLKkW-xCvnB0Qp2fH6ZUqF2YT0_6DjzKp6bDMomM8FlQyRJNKRq6rMkTWjwfx3P2ngvc7rcuneVv4_MD5csQ&usqp=CAc' },
        { id: 5, name: 'Produto E', price: 120, image: 'https://via.placeholder.com/200' }
    ];

    // Carrinho de compras
    let cart = [];

    // Função para exibir produtos
    function displayProducts(productsToShow) {
        const productContainer = document.getElementById('productContainer');
        productContainer.innerHTML = '';

        productsToShow.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>R$ ${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            `;

            productContainer.appendChild(productDiv);
        });
    }

    // Função para adicionar ao carrinho
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    };

    // Função para atualizar carrinho
    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');

        cartItems.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            totalPrice += item.price;

            const li = document.createElement('li');
            li.innerHTML = `
                ${item.name} - R$ ${item.price.toFixed(2)}
                <button onclick="removeFromCart(${index})">Remover</button>
            `;
            cartItems.appendChild(li);
        });

        cartCount.textContent = cart.length;
        cartTotal.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    }

    // Função para remover item do carrinho
    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        updateCart();
    };

    // Barra de pesquisa
    document.getElementById('searchBar').addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts);
    });

    // Exibe todos os produtos inicialmente
    displayProducts(products);
};
