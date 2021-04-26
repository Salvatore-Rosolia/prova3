
function onJson(json) {
    console.log('JSON ricevuto');

    const library = document.querySelector('#auto_view');
    library.innerHTML= '';

    const results = json.Results;
    for(let i=0; i<30;i++)
    {
        const auto_data = results[i];
        const make_name= auto_data.Make_Name;
        const model_name=auto_data.Model_Name;
        const auto = document.createElement('div');
        auto.classList.add('auto');
        const testo1= document.createElement('span');
        testo1.classList.add('testo_auto');
        const testo2= document.createElement('span');
        testo2.classList.add('testo_auto');
        testo1.textContent = make_name;
        testo2.textContent = model_name;
        auto.appendChild(testo1);
        auto.appendChild(testo2);
        library.appendChild(auto);
    }
}
function onResponse(response) 
{
    console.log('Risposta ricevuta');
    return response.json();
}

function search(event)
{
    event.preventDefault();

    const modello_input = document.querySelector('#input');
    const modello_value = encodeURIComponent(modello_input.value);
    console.log('Eseguo ricerca: ' + modello_value);

    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/' 
    + modello_value + '?format=json').then(onResponse).then(onJson);
}


//Aggiungi event listener al form
const form = document.querySelector('form');
form.addEventListener('submit', search);



function onJsonmeteo(json){
    console.log('JSON ricevuto');
    const library = document.querySelector('#meteo');
    library.innerHTML = '';
    
    const previsioni = document.createElement('div');
    previsioni.classList.add('previsioni');
    const caption = document.createElement('span');
    const caption2 = document.createElement('span');
    const caption3 = document.createElement('span');
    const caption4 = document.createElement('span');
    const caption5 = document.createElement('span');
    
    const img = document.createElement('img');
    caption.textContent = json.location.name;
    caption2.textContent = json.location.country;
    caption3.textContent = json.location.region;
    caption4.textContent = json.current.temperature;
    caption5.textContent = json.current.weather_descriptions;
    img.src = json.current.weather_icons;
    previsioni.appendChild(caption);
    previsioni.appendChild(caption2);
    previsioni.appendChild(caption3);
    previsioni.appendChild(caption4);
    previsioni.appendChild(caption5);
    previsioni.appendChild(img);
    library.appendChild(previsioni);
}



function onResponsemeteo(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }

function meteo_sede1(event)
{
    event.preventDefault();

    fetch('http://api.weatherstack.com/current?access_key='+ api_key + '&query=Catania').then(onResponsemeteo).then(onJsonmeteo);
}


const bottone1 =document.querySelector('#numero_1');
bottone1.addEventListener('click', meteo_sede1); 

function meteo_sede2(event)
{
    event.preventDefault();

    fetch('http://api.weatherstack.com/current?access_key='+ api_key +'&query=Rome').then(onResponsemeteo).then(onJsonmeteo);
}


const bottone2 =document.querySelector('#numero_2');
bottone2.addEventListener('click', meteo_sede2); 

function meteo_sede3(event)
{
    event.preventDefault();

    fetch('http://api.weatherstack.com/current?access_key=' + api_key + '&query=Milan').then(onResponsemeteo).then(onJsonmeteo);
}


const bottone3 =document.querySelector('#numero_3');
bottone3.addEventListener('click', meteo_sede3); 
const api_key='1286101b8dcdfb2d8ff10ec439e69583';