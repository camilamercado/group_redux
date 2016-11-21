# Shopify Redux
Branched out of dan_version

Redux toolkit for implementing Shopify Javascript Buy SDK

## Setup

Install the npm dependencies and run the webpack dev server:

```bash
npm i
node_modules/.bin/webpack-dev-server
open localhost:8080
```
## Redux Workflow

This App utitlizes the Shopify Javascript Buy SDK in a flux / redux pattern

Interactions with the API are carried out by the Apps Actions and Reducers

Examples ...

AppActions - Initialzie shop, and Receive Products

```javascript
export function initShopClient(e) {
  return dispatch => {
    e.fetchAllProducts()
      .then(function(products) {
        let items = []
        products.map(function(products){
          items.push(products)
        })
        receiveShop(items, dispatch)
      })
      .catch(function (x) {
        console.log('Request failed', x);
      })    
  }
}

function receiveShop(e, dispatch) {

    //console.log("shop items", e, dispatch)
    dispatch({'type': 'RECEIVE_SHOPBYID', 'shop': e})
    return dispatch({ 'type': 'RECEIVE_SHOP', 'shopItems': e})
  
}

```
Shop Reducer - Receive product data and re-title by product ID#
```javascript
  case 'RECEIVE_SHOP':
      //console.log("receiving", action)
      return { 
        ...state, 
        shopItems: action.shopItems
      }

      case 'RECEIVE_SHOPBYID':
      console.log("selecting shopBYID!", action)
      return {
        ...state, 
        shopByID: action.shop.reduce((retVal, curr) => 
        {
          retVal[curr.id] = curr
          return retVal

        }, {})
      
    }
```

## DOCS
- [SDK DOCS](http://shopify.github.io/js-buy-sdk/)
- [Github](https://github.com/Shopify/js-buy-sdk)
- [npm](https://www.npmjs.com/package/shopify-buy)
- [Example Cart Functions](https://github.com/Shopify/js-buy-sdk/blob/master/examples/cart/index.js)

## In The Wild

- [All Knit Wear](http://allknitwear.com/)
- [KYLE](http://www.kylekylekyle.net/)

