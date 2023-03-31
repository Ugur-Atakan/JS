// Description: using cards.json file to create cards
const table=document.getElementById("hastalar");

fetch("http://localhost:3001/hastalar")
    .then(res => res.json())
    .then(data => {
        data.map(function (value, i) {

const satir=`<tr>
<td>${value.id}</th>
<td>${value.name}</td>
<td>${value.surname}</td>
<td>${value.birthPlace}</td>
<td>${value.birthYear}</td>
</tr>`

table.innerHTML+=satir;

        });
    });


