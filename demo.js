// Description: using cards.json file to create cards
const page= document.getElementById('Page');

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        data.map(function (value, i) {

    const collapsediv = document.createElement('div');
    collapsediv.className = 'collapsediv';

    //collapse button
    const collapsebutton = document.createElement('button');
    collapsebutton.type = 'button';
    collapsebutton.className = 'btn btn-primary';
    collapsebutton.setAttribute("data-bs-toggle", "collapse");
    collapsebutton.setAttribute("data-bs-target", `#collapseid${i+1}`);
    collapsebutton.setAttribute("aria-expanded", "false");
    collapsebutton.setAttribute("aria-controls", `collapseid${i+1}`);
    collapsebutton.innerText = `TIKLA BANA ${i+1}`;

    //collapse button end

    const minheightdiv= document.createElement('div');
    minheightdiv.style = "min-height: 120px;";

    
    const collapsehorizontal = document.createElement('div');
    collapsehorizontal.className = 'collapse collapse-horizontal';
    collapsehorizontal.id = `collapseid${i+1}`;

    const card = document.createElement('div');
    card.className = 'card';
    card.style = "width: 18rem;";
    
    
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = value.image;
    img.alt = value.alt;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerText = value.title;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerText = value.description;

    const cardA=document.createElement('a');
    cardA.href="https://google.com";

    const cardbuttonA= document.createElement('button');
    cardbuttonA.className="btn btn-primary";
    cardbuttonA.innerText="AL  ";

    const cardspan= document.createElement('span');
    cardspan.className="badge text-bg-secondary";
    cardspan.innerText=`${value.price} $ `;


cardbuttonA.appendChild(cardspan)
cardA.appendChild(cardbuttonA);

cardBody.appendChild(cardTitle)
cardBody.appendChild(cardText);
cardBody.appendChild(cardA);

card.appendChild(img);
card.appendChild(cardBody);

collapsehorizontal.appendChild(card);
minheightdiv.appendChild(collapsehorizontal);
collapsediv.appendChild(minheightdiv);
collapsediv.appendChild(collapsebutton);
page.appendChild(collapsediv);


        });
    });
