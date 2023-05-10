fetch('https://striveschool-api.herokuapp.com/books')
    .then((res) =>{
        console.log(res);
        if(res.ok){
            return res.json()
        } else {
            throw new Error('Error fetching')
        }
    })
    .then((books) =>{
        console.log('books obtained', books)
        let row = document.getElementById('row1')
        books.forEach((book) =>{
            let col = document.createElement('div')
            col.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3')
            col.innerHTML=`
            <div class="card my-3 gx-2 bg-dark" style="width: auto; height: 45rem">
                <img src=${book.img} class="card-img-top" alt="image book" 
                style="width: auto; height: 32rem">
                <div class="card-body pt-1">
                    <h5 class="card-title text-white">${book.title}</h5>
                    <p class="card-text text-white pt-2">Category: ${book.category}</p>
                    <a href="#" class="btn btn-primary">Cart ${book.price} $</a>
                    <a href="#" class="btn btn-danger" onclick="discard(this)">Discard</a>
                    </div>
            </div>
            `
            row.appendChild(col)
               discard = function (e){
                   e.closest(".col-12").remove()
                }
          
            })   
        })
    .catch((err) =>{
        console.log(err);
    })