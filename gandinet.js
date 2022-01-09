const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function getPromos(url) {
  let promos = [];
  let page = await fetch(url);
  body = await page.text();

  const dom = new JSDOM(body);
  const doc = dom.window.document;

  let rows = doc.querySelectorAll('.comparative-table__row');
  for (let row of rows) {
    let promo = row.querySelector('.badge--promo-vertical');
    if (promo) {
      let tld = row.querySelector('.comparative-table__cell').textContent;
      let normalPrice = row.querySelector(
        '.comparative-table__normal-price'
      ).textContent;
      let promoPrice = row.querySelector(
        '.comparative-table__price'
      ).textContent;

      promos.push({ tld, normalPrice, promoPrice });
    }
  }
  return promos;
}

module.exports = async function gandiNetPromos() {
  let promos = [];

  // get special "#" page
  url = `https://www.gandi.net/en-US/domain/tld?prefix=xn--#tld-table`;
  let promo = await getPromos(url);
  if (promo) promos = promos.concat(promo);

  // loop through a to z
  for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    url = `https://www.gandi.net/en-US/domain/tld?prefix=${String.fromCharCode(
      i
    )}#tld-table`;

    promo = await getPromos(url);
    if (promo) promos = promos.concat(promo);
  }

  return promos;
};
