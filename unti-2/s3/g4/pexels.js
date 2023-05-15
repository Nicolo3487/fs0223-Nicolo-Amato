console.log('Running')
const renderCards =function (photos){
    let row =document.getElementById('mainRow')
    photos.forEach((photo) =>{
        let col = document.createElement('div')
        col.innerHTML =`
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="${photos.src.medium}">
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>`
        }
)}






let APIKey = "dXogYuwOrJ119SvwX5d2CopSctplyWEJL9rCHUtphSFTiiBsQaL8GnHO"
fetch("https://api.pexels.com/v1/search?query=nights",{
    headers :{
        Authorization: APIKey
    },
})
.then((res) =>{
    console.log(res);
    if(res.ok){
        return res.json()
    } else {
        throw new Error('Error fetching')
    }
})
.then((data) =>{
console.log('data obtained', data)
})
.catch((err) =>{
    console.log(err);
})

window.onload= function() {
    let primaryButton = document.querySelector('.btn-primary')
    primaryButton.addEventListener('click',() =>{ getImages('nights')})
}