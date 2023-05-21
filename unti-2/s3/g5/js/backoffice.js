console.log("Running");

const PRODUCTS_url = "https://striveschool-api.herokuapp.com/api/product/"
const Key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY4ZmExYjg3NDc2YTAwMTRiNDg3YTgiLCJpYXQiOjE2ODQ2MDE1MzksImV4cCI6MTY4NTgxMTEzOX0.6NnspGK6EfJ4csdGKK0Lhe6fc8AjvcrGMDa2tor4c_o"

let address = new URLSearchParams(window.location.search)
let prod_id = address.get('prod_id')
console.log('Product', prod_id)

if (prod_id) {
    document.getElementById('title').innerHTML= 'Modifica Proprietà Prodotto'
    document.getElementById('success-btn').innerHTML = 'Modifica Prodotto'

    let deleteBtn = document.getElementById('delete-btn')
        deleteBtn.classList.remove('d-none')
        deleteBtn.addEventListener('click', () => {
            fetch(PRODUCTS_url + prod_id, {
                method: 'DELETE',
                headers: { 'Authorization': Key },
            })
            .then((res) => {
                if(res.ok) {
                    alert('Prodotto eliminato con successo')
                    location.assign('./homepage.html')
                } else {
                    throw new Error('Problema eliminazione con il prodotto')
                }
            })
            .catch((error)=> {
                console.log(eroor)
            })
        })
        fetch(PRODUCTS_url + prod_id, {
            headers: { 'Authorization': Key },
        })
        .then((res) => {
            if(res.ok) {
                return res.json()
            } else {
                throw new Error('Problema recupero del prodotto')
            }
        })
        .then((prod) =>{
            console.log('Recuperato il prodotto', prod)
            document.getElementById('name').value = prod.name
            document.getElementById('brand').value = prod.brand
            document.getElementById('description').value = prod.description
            document.getElementById('price').value = prod.price
            document.getElementById('imageUrl').value = prod.imageUrl
        })
        .catch((error)=> {
            console.log(error)
        })
} else {
} 
let prodForm = document.getElementById('product-form')
    prodForm.addEventListener('submit',function(e) {
        e.preventDefault ()
        console.log('Recovering data..')
    
        let nameInput = document.getElementById('name');
        let brandInput = document.getElementById('brand');
        let descripInput = document.getElementById('description');
        let priceInput = document.getElementById('price');
        let imageInput = document.getElementById('imageUrl');
        
        let newProd = {
            name: nameInput.value,
            brand: brandInput.value,
            description: descripInput.value,
            price: priceInput.value,
            imageUrl: imageInput.value,
        }

        console.log('Creazione prodotto', newProd);
        fetch(prod_id ? PRODUCTS_url + prod_id : PRODUCTS_url, {
            method: prod_id ? 'PUT' : 'POST',
            body: JSON.stringify(newProd),
            headers:{'Authorization' : Key, 'Content-Type' : 'application/json',},
        })
        .then((res) => {
            console.log('Response', res)
            if (res.ok) {
                alert( prod_id ? 'Prodotto modificato' : 'Prodotto Creato')
                location.assign('./homepage.html')
            } else {
                alert('Errore Salvataggio')
                throw  new Error('Errore Salvataggio')
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    })

