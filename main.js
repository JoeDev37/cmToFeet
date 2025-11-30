
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    const inputCm = document.getElementById('input').value;
    const inputNumber = parseFloat(inputCm)
    const toInche = inputNumber/2.54;
    const toFeet = Math.floor(toInche/12);
    let remainInches = Math.round(toInche % 12);

    const output = document.getElementById('output');
    output.value = `${toFeet}'${remainInches}`

})