// Description: using cards.json file to create cards
const hastalar = document.getElementById("hastalar");
const muayeneler = document.getElementById("muayeneler");
fetch("http://localhost:3001/hastalar")
    .then(res => res.json())
    .then(data => {
        data.map(function (value, i) {

            const satir = `
<tr id="hasta${value.id}" onclick="hastagoster(${value.id})">                                       
<td class="text-nowrap">${value.id}</td>
<td class="text-nowrap">${value.name}</td>
<td class="text-nowrap">${value.surname}</td>
<td class="text-nowrap">${value.birthPlace}</td>
<td class="text-nowrap">${value.birthYear}</td>
</tr>
`

            hastalar.innerHTML += satir;

        });
    });
    function tablotemizle() {
        muayeneler.innerHTML = "";
    }
function hastagoster(hastaid) {
tablotemizle();
    fetch(`http://localhost:3001/ozelsorgu/${hastaid}`)
        .then(res => res.json())
        .then(data => {
            data.map(function (value, i) {

                let muayenesatiri = `
                        <tr>
                            <td>${value.hastanename}</td>
                            <td>${value.type}</td>
                            <td>${value.description}</td>
                            <td>${value.code}</td>
                        </tr>`
    
    muayeneler.innerHTML+=muayenesatiri;
    
            });
        });

    }

