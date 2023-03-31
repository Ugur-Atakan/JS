const table = document.getElementById("muayeneler");

fetch("http://localhost:3001/muayeneler")
    .then(res => res.json())
    .then(data => {
        data.map(function (value, i) {

            const satir = `
<tr>
<td>${value.id}</th>
<td>${value.description}</td>
<td>${value.hastaId}</td>
</tr>`

            table.innerHTML += satir;

        });
    });


