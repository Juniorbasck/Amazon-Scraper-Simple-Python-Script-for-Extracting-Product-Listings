
# Amazon Scraper

Create a simple script to scrape Amazon product listings from the first page of search results for a given keyword.


## OBS:

I took the liberty of using the React library in the front-end together with Tailwind CSS to implement the interface


## Stack used

**Front-end:** React, TailwindCSS, Axios

**Back-end:** Express, Node , Axios and JSDOM


## Instalação

 - You need to have node.js instaled in your system: version 21.7.1 
---
 
 ### Install the back-end dependences

```bash
  cd server/  
  npm install  
```

 ### Install front-end dependences
 
```bash
  cd server/  
  npm install  
```

 ### to run the server side just put on terminal on directory src/
 ```bash
    node serve.js
```
 ### to run the client side just put on terminal on directory src/
 ```bash
    npm start
```

## API documentation

```http
  GET http://localhost:5000/api/scrape?keyword=${keyword}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `keyword` | `string` | keyword is mandatory. |

#### Return a JSOM of products of amazon store. 

example:
```http
    {
        "title": "Mouse Gamer Redragon Storm Elite RGB Lunar White M988W-RGB, Branco",
        "rating": "4,6",
        "reviews": "163",
        "image": "https://m.media-amazon.com/images/I/51tniuFnhzL._AC_UL320_.jpg"
    },
```
