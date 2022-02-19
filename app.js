const Digidex = document.getElementById("Digidex");
console.log(Digidex);

const fetchDigimon = () => {
    const promises = [];
    // 209 objects instead of 1 object in the entire call
    const url = `https://digimon-api.vercel.app/api/digimon`;
    promises.push(fetch(url).then((res) => res.json()));
    console.log(promises);
Promise.all(promises).then((results) => {
    console.log('results', results[0]);
    const Digimon = results[0].map( data => ({
        name: data.name,
        img: data.img,
        level: data.level
    }));
    console.log('digimon', Digimon);
    displayDigimon(Digimon);
    });
};

const displayDigimon = (Digimon) => {
    console.log(Digimon);
    const DigimonHTMLString = Digimon
    .map(
        (Digiman) =>
        `<div class="flipcard">
        <div class="flipcard-inner">
        <div class="flipcard-front">
            <img src="${Digiman.img}" alt="Avatar" style="width:300px;height:300px;"/>
        </div>
            <div class="flipcard-back">
            <h2 class="card-name">${Digiman.name}</h2>
            <p class="card-level">${Digiman.level}</p>
        </div>
        </div>
        </div>`
    )
    .join('');
    Digidex.innerHTML = DigimonHTMLString;
};

fetchDigimon();

// flip card
// front - img
// back - details
// css
// 