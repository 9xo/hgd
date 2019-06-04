const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'https://avatars1.githubusercontent.com/u/13474314?s=32';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?limit=3&start=4', true);
request.onload = function () {

  // Begin accessing JSON data here
  var datagggg = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    datagggg.forEach(id => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = id.max_supply;
      const h2 = document.createElement('h2');
      h2.textContent = id.name + '⇨ has some ' + id.total_supply;


      ee = document.createElement('eeee');
      ee.textContent = id.name + ': wtf effe';


      const p = document.createElement('p');
      id.name = id.name.substring(3, 9);
      p.textContent = `${id.name}...`;


      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(ee);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
