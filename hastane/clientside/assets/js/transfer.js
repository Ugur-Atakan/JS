const serverAdress = "http://localhost:3001";

const TCNO = document.getElementById("TCNO");
const HastaTc=document.getElementById("HastaTc");
const hastaAdi = document.getElementById("HastaAdi");
const muayenePol = document.getElementById("MuayenePol");
const hastaneAdi= document.getElementById("HastaneAdi");
const muayeneID=document.getElementById("MuayeneID");

    function hastaSorgula() {
      const TC=TCNO.value;4
    fetch(`${serverAdress}/tcnosorgula/${TC}`)
    .then(res => res.json())
    .then(data => {
       HastaTc.value = data.TCNo;
        hastaAdi.value = data.Adi+" "+data.Soyadi;
        muayenePol.value = data.MuayenePol;
        hastaneAdi.value=data.HastaneAdi
        muayeneID.value=data.MuayeneID
        });
    };

  const hastaneselect = document.getElementById("HastanelerList");
fetch(`${serverAdress}/hastaneler`)
    .then(res => res.json())
    .then(data => {
        data.map(function (value, i) {
            const option = `<option value="${value.HastaneID}">${value.HastaneAdi}</option> `;
            hastaneselect.innerHTML += option;

        });
    });


    function transferEt(){
     let muayeneid=muayeneID.value;
     let hastaneid=hastaneselect.value;
      fetch(`${serverAdress}/hastanakil`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                muayeneID: muayeneid,
                hastaneID: hastaneid,
            }
        )
    })

        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error(error));
        hastaSorgula();
    };
  