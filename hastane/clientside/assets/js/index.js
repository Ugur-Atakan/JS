/*
AUTHOR:UĞUR ATAKAN SÜRMELİ
DATE: 01.04.2023
*/
const serverAdress = "http://localhost:3001";
const hastalar = document.getElementById("hastalar");
const muayeneler = document.getElementById("muayeneler");
const ilaclar = document.getElementById("ilaclartable");
function hastalarıGetir(){
hastalar.innerHTML = "";
fetch(`${serverAdress}/hastalar`)
    .then(res => res.json())
    .then(data => {
        data.map(function (value, i) {

            const satir = `
<tr id="hasta${value.id}" onclick="hastagoster(${value.id})">                                       
<td class="text-nowrap">${value.TCNo}</td>
<td class="text-nowrap">${value.Adi}</td>
<td class="text-nowrap">${value.Soyadi}</td>
<td class="text-nowrap">${value.DY}</td>
<td class="text-nowrap">${value.DT}</td>
</tr>
`

            hastalar.innerHTML += satir;

        });
    });} hastalarıGetir();

function selectrow(id) {
    let hastaselected = document.getElementById(`hasta${id}`);
    hastaselected.classList.add("table-primary");
}
function selecttemizle() {
    let selectedrow = document.getElementsByClassName("table-primary");
    for (let i = 0; i < selectedrow.length; i++) {
        selectedrow[i].classList.remove("table-primary");
    }
}

function hastagoster(hastaid) {
    selecttemizle();
    muayeneler.innerHTML = "";
    fetch(`${serverAdress}/ozelsorgu/${hastaid}`)
        .then(res => res.json())
        .then(data => {
            data.map(function (value, i) {
                let muayenesatiri = `
                        <tr>
                            <td>${value.HastaneAdi}</td>
                            <td>${value.MuayenePol}</td>
                            <td>${value.MuayeneTipi}</td>
                            <td id="recete-${value.ReceteID}" onclick="ilacgoster(${value.ReceteID})" data-bs-toggle="modal" data-bs-target="#recetemodal">${value.ReceteKod}</td>
                        </tr>`

                muayeneler.innerHTML += muayenesatiri;
            });
        });

    selectrow(hastaid);
}

function ilacgoster(receteID) {
    ilaclar.innerHTML = "";
    fetch(`${serverAdress}/ilaclar/${receteID}`)
        .then(res => res.json())
        .then(data => {
            data.map(function (value, i) {
                let ilac =
                    `<tr>
                                    <td>${value.ilacAdi}</td>
                                    <td>${value.ilacMiktari}</td>
                                    <td>${value.ilacBirimi}</td>
                                    <td>Günde ${value.ilacDoz} Kere</td>
                                </tr>
                        `
                ilaclar.innerHTML += ilac;

            });
        })
};


function valuetemizle() {
    const hastaTc = document.getElementById("hastaTc").value = "";
    const hastaAdi = document.getElementById("hastaAdi").value = "";
    const hastaSoyadi = document.getElementById("hastaSoyadi").value = "";
    const dogumYeri = document.getElementById("DogumYeri").value = "";
    const dogumYili = document.getElementById("DogumYili").value = "";

}
function hastaEkle() {
    const hastaTc = document.getElementById("hastaTc").value;
    const hastaAdi = document.getElementById("hastaAdi").value;
    const hastaSoyadi = document.getElementById("hastaSoyadi").value;
    const dogumYeri = document.getElementById("DogumYeri").value;
    const dogumYili = document.getElementById("DogumYili").value;

    fetch(`${serverAdress}/hastaekle`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                hastaTc: hastaTc,
                hastaAdi: hastaAdi,
                hastaSoyadi: hastaSoyadi,
                dogumYeri: dogumYeri,
                dogumYili: dogumYili,
                token: "token1234"
            }
        )
    })

        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error(error));
    valuetemizle();
    hastalarıGetir();
}