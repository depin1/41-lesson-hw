let row = document.querySelector('.row');

fetch('https://restcountries.com/v3.1/all').then((el) => el.json()).then((date) => {
    date.sort((a, b) => {
        if (a.name.common > b.name.common) {
            return 1;
        } else if (a.name.common < b.name.common) {
            return -1;
        } {
            return 0;
        }
    })
    const mydata = date.map((country) => {
        console.log(country);
        return `
        <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card" style="width: 18rem;">
                    <img src="${country.flags.png}" class="image card-img-top"  alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${country.name.common} </h5>
                      <p class="card-text">${country.capital} </p>
                      <a href="#" class="btn btn-primary">${country.population} </a>
                    </div>
                  </div>
            </div> 
    `
    })
    row.innerHTML = mydata.join('')
})