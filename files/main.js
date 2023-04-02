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
    let datamap = date.map((country) => {
        let newp = country.population.toString();
        let stringP = [];
        if (newp.length <= 6) {
            stringP = `${newp.slice(0,newp.length-2)/10}k`
        } else if (newp.length <= 9) {
            stringP = `${newp.slice(0,newp.length-5)/10}mln`
        } else if (newp.length <= 12) {
            stringP = `${newp.slice(0,newp.length-8)/10}b`
        }
        return `
  <div class="col-lg-3 col-md-6 col-sm-12">
  <img class="card-img-top" src="${country.flags.png}" alt="">
  <h2 class="name_country">${country.name.common}</h2>
  <h2 class="name_cp">${country.capital}</h2>
  <p class="population">${stringP}</p>
</div>
  `
    })
    row.innerHTML = datamap.join('')
})