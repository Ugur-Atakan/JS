// Description: using cards.json file to create cards
const table = document.getElementById("receteler");

fetch("http://localhost:3001/receteler")
    .then(res => res.json())
    .then(data => {
        data.map(function (value, i) {

            const satir = `<tr>
<td>${value.id}</th>
<td>${value.code}</td>
<td>${value.muayeneId}</td>
</tr>`

            table.innerHTML += satir;

        });
    });


