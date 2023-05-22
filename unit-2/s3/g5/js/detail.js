console.log("Running")
const PRODUCTS_url = "https://striveschool-api.herokuapp.com/api/product/"
const Key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY4ZmExYjg3NDc2YTAwMTRiNDg3YTgiLCJpYXQiOjE2ODQ2MDE1MzksImV4cCI6MTY4NTgxMTEzOX0.6NnspGK6EfJ4csdGKK0Lhe6fc8AjvcrGMDa2tor4c_o"

let address = new URLSearchParams(window.location.search)
let prod_id = address.get('prod_id')
console.log('Product', prod_id)

const getProduct = function() {
    fetch(PRODUCTS_url + prod_id, {
        headers: { 'Authorization': Key },
    })
    .then((res) => {
        console.log('Response', res);
        if (res.ok) {
            return res.json()
        } else {
            throw new Error('Data Recovery Error')
        }
    })
    .then((data)=>{
        console.log('Product', data)
        let rowMain = document.getElementById('char-prod');
        rowMain.innerHTML = `
        <div class="row">
            <div class="col-12 mx-3">
                    <img src="${data.imageUrl}" width='302px' class="rounded p-1">
            </div>
            <div class="col-12">
                <div class="text-white mx-3">
                  <h4>${data.name}</h4>
                <p><b>Marca:</b> ${data.brand}</p>
                <p><b>Descrizione :</b><br>${data.description}</p>
                <p><b>Prezzo :</b> ${data.price} $</p>
                <p><b>Creato :</b><br>${data.createdAt}</p>
                <p><b>Ultimo Aggiornamento :</b><br>${data.updatedAt}</p>
                </div>
            </div>
        </div>
        <hr class="text-white">
        `
    })
    .catch((error)=>{
        console.log(error)
    })
}

window.onload = () => {
    getProduct();
}
