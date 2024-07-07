// https://restcountries.com/v3.1/all


let tblCountries = document.getElementById("tblCountries");

let tableBody = `<tr>
                    <th>Country Detail</th>
                    <th>Falg</th>
                </tr>` ;



fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{

    data.forEach(element => {

        tableBody+=`<tr>
                        <td>
                            <h1>${element.name.common}</h1> <br> 
                            <p>OfficialName : ${element.name.official} <br> 
                            Area : ${element.area} <br> 
                            Population : ${element.population} <br> 
                            Borders : ${element.borders} <br>
                            TimeLine : ${element.timezones}</p>
                            <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Map</a>
                        </td>
                        <td>
                            <img src="${element.flags.png}" alt="">
                        </td>
                    </tr>`
        console.log(element.name.common);
    });

    tblCountries.innerHTML=tableBody;
})

function searchCountry(){
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");
    let description = document.getElementById("description");
    let time = document.getElementById("time");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official
            region.innerText=obj.region;
            population.innerText=obj.population
            description.innerText=obj.flags.alt
            time.innerText=obj.timezones

            console.log(obj);
        })
    })
}