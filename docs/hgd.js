const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'https://avatars1.githubusercontent.com/u/13474314?s=32';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/', true);
request.onload = function () {

  // Begin accessing JSON data here
  var datagggg = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    datagggg.forEach(id => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = ' at the maximus, ⛔: ' + id.max_supply;
      const h2 = document.createElement('h2');
      h2.textContent = 'nOUR, ' + id.name + ' , ' + id.percent_change_7d + ' ⇨ has now just' + id.total_supply;

      ee = document.createElement('eeee');
      ee.textContent = id.price_BTC + ' awor ' + id.market_cap_usd + ' vCrazy,№. » ' + id.rank + 'th this dæy!';
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
    errorMessage.textContent = `wuhtf ¬gg`;
    app.appendChild(errorMessage);
  }
}

request.send();
