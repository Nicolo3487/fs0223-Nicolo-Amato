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
    let mainRow = document.getElementById('products-container')
    prod.forEach((el)=> {
        let col= document.createElement('div')
        col.classList.add('col-12 col-md-3')
        col.innerHTML =`
        <div class="card shadow-md my-2">
            <img src="${el.imageUrl}" class="card-image-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
                <div class="card-text">
                <p>${el.brand}</p>
                <p>${el.description}</p>
                </div>
                <p>Costo: ${el.price}$</p>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <button type="button" class="btn btn-outline-info>
            <a class="nav-link active" href="">Scopri di più</a></button>
            <button type="button" class="btn btn-outline-primary">
            <a class="nav-link active" href="./backoffice2.html">Modifica</a></button>
        </div>
        `
    mainRow.appendChild(col)
    })
})
.catch((error)=>{
    console.log(error)
})
