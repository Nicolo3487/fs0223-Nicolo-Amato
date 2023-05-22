console.log("Running")
const PRODUCTS_url = "https://striveschool-api.herokuapp.com/api/product/"
const Key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY4ZmExYjg3NDc2YTAwMTRiNDg3YTgiLCJpYXQiOjE2ODQ2MDE1MzksImV4cCI6MTY4NTgxMTEzOX0.6NnspGK6EfJ4csdGKK0Lhe6fc8AjvcrGMDa2tor4c_o"


fetch(PRODUCTS_url, {
    headers: { 'Authorization': Key },
})
.then((res)=>{
    if(res.ok) {
        return res.json();
    } else{
        throw new Error('Error Fecthing')
    }
})
.then((prod) =>{
    console.log('Prod', prod)
    prod.forEach((prod)=> {
        let col= `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
        <div class="card shadow-md">
            <img src="${prod.imageUrl}" alt="image" class="p-2">
            <div>
                <h4 class="card-title mx-2">${prod.name}</h4>
                <p class="card-text mx-3">Marca: ${prod.brand}</p>
                <p class="card-text mx-3">Descrizione:<br>${prod.description}</p>
                <p class="card-text mx-3">Prezzo: ${prod.price} $</p>
                <div class="row justify-content-between">
                    <div class="col-5 text-start m-2">
                        <a href="./detail.html?prod_id=${prod._id}" class="btn btn-outline-info">Scorpi di più</a>
                    </div>
                    <div class="col-5 text-end m-2">
                        <a href="./backoffice.html?prod_id=${prod._id}" class="btn btn-primary">Modifica</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    let rowMain = document.getElementById('products-container')
    rowMain.innerHTML += col
    })
})
.catch((err)=>{
console.log(err)
})

