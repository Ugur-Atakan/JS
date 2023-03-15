const mainMenu = document.getElementById('mainMenu');
fetch("menu.json")
    .then(res => res.json())
    .then(data => {
        data.map(function (menuItem, menuItemIndex) {

            if (menuItem.subMenus) {
                const liElement = document.createElement('li');
                liElement.className = "nav-item dropdown";

                const aElement = document.createElement('a');
                aElement.className = "nav-link dropdown-toggle";
                aElement.href = menuItem.url;
                aElement.innerText = menuItem.title;
                aElement.setAttribute('role', 'button');
                aElement.setAttribute('data-bs-toggle', 'dropdown');
                aElement.setAttribute('aria-expanded', 'false');

                const ulElement = document.createElement('ul');
                ulElement.className = "dropdown-menu";


                menuItem.subMenus.map(function (subMenuItem, subMenuItemIndex) {
                    const subMenuListItem = document.createElement('li');

                    const subMenuAItem = document.createElement('a');
                    subMenuAItem.className = "dropdown-item";
                    subMenuAItem.href = subMenuItem.url;
                    subMenuAItem.innerText = subMenuItem.title;

                    subMenuListItem.appendChild(subMenuAItem);
                    ulElement.appendChild(subMenuListItem);
                });

                liElement.appendChild(aElement);
                liElement.appendChild(ulElement);
                mainMenu.appendChild(liElement);

            } else {
                const listElement = document.createElement('li');
                listElement.className = "nav-item";

                const aElement = document.createElement('a');
                aElement.className = "nav-link";
                aElement.href = menuItem.url;
                aElement.innerText = menuItem.title;

                listElement.appendChild(aElement);
                mainMenu.appendChild(listElement);
            }


        });

    });

fetch("cards.json")
    .then(res => res.json())
    .then(data => {
        data.map(function (value, i) {
            const container = document.getElementById('container');
            const col = document.createElement('div');
            col.className = 'col';

            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = data[i].img;
            img.alt = data[i].alt;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = data[i].title;

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = data[i].text;

            container.appendChild(col);
            col.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
        });
    });
