// Description: using cards.json file to create cards
const table=document.getElementById("hastaneler");

fetch("http://localhost:3001/hastaneler")
    .then(res => res.json())
    .then(data => {
        data.map(function (value, i) {

const satir=`<tr>
<td>${value.id}</th>
<td>${value.name}</td>
<td>${value.address}</td>
<td>${value.type}</td>
</tr>`

table.innerHTML+=satir;

        });
    });


