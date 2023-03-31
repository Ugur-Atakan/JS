const sorgu="SELECT * FROM Hastalar";

fetch(`http://localhost:3001/query`,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body:sorgu
})
.then(res => res.json())
.then(data => {console.log(data);})

