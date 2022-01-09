# Gandi.net Promotion Checker

If you want to check, if you're desired domain is on discount on Gandi.net, or just check what's avaialble for a reasonable price, this script will affordlessly check for them.

## Usage
The script's main (asynchromous) function is `gandiNetPromos()`, which will return an array of Javascript objects containing the following information:
* tld: the discounted top level domain
* normalPrice: the normal price of the domain
* promoPrice: the discounted price of the domain

## Example
```javascript
const promoTLDs = require('./gandinet');

promoTLDs().then((promos) => console.log(promos));
```

Result:
```javascript
 [
  { tld: '.academy', normalPrice: ' $41.21 ', promoPrice: '$19.99' },
  { tld: '.agency', normalPrice: ' $29.81 ', promoPrice: '$5.00' },
  { tld: '.art', normalPrice: ' $17.44 ', promoPrice: '$6.99' },
  { tld: '.bio', normalPrice: ' $80.33 ', promoPrice: '$19.99' },
  { tld: '.blog', normalPrice: ' $38.35 ', promoPrice: '$9.99' },
  ...
]
```
