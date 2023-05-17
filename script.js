// import productsData from "./data.json"

const productsData = [
    {
        "id" :1,
        "title" :"cat",
        "sounds" :"purr",
        "image" : "https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "id" :2,
        "title" :"dog",
        "sounds" :"barks",
        "image" : "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "id" :3,
        "title" :"bird",
        "sounds" :"chirps",
        "image" : "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "id" :4,
        "title" :"horse",
        "sounds" :"neighs",
        "image" : "https://images.pexels.com/photos/4213367/pexels-photo-4213367.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "id" :5,
        "title" :"parrot",
        "sounds" :"sings",
        "image" : "https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
]

const productContainer = document.querySelector('.items');  

const products = productsData.map((item) => {     // The item variable in the map() function refers to each product in the productsData object. 
   return `
   <div class="product">
     <     img class="" src=" ${item.image}" alt="${item.title}">
    <h3>${item.title}</h3>     
    <p>${item.sounds}</p>

    </div>

`;
});
productContainer.innerHTML = products.join("");

// The code you provided is a JavaScript function that creates a list of products from a data object. 
// The function first creates a variable called productContainer and assigns it the value of the DOM element with the class .items. 
// Next, the function creates a variable called products and assigns it the value of the productsData object.
// The function then uses a map() function to iterate over the productsData object and create a new HTML element for each product.
// The HTML element contains an image, a title, and a list of sounds for each product. 
// The function then joins the HTML elements together with an empty string and assigns the resulting string to the innerHTML property of the productContainer element. 
// This causes the HTML elements to be displayed in the browser.
// The item variable in the map() function refers to each product in the productsData object. 
// The return statement in the map() function creates an HTML element for each product. 
// The HTML element contains an image, a title, and a list of sounds for each product. 
// The productContainer variable refers to the DOM element with the class .items. 
// The innerHTML property of the productContainer element contains the HTML elements that are displayed in the browser.


// This line of code creates an HTML image element. The image element has a class of "", a src attribute that contains the value of the image property of the item object, and an alt attribute that contains the value of the title property of the item object.
// The heading element has a level of 3 and contains the value of the title property of the item object.
// The paragraph element contains the value of the sounds property of the item object.


// The ${item.image} in the code you provided is a JavaScript template literal. 
// A template literal is a string literal that can contain embedded expressions. 
// The expression ${item.image} will be evaluated and the result will be inserted into the string. 
// In this case, the expression ${item.image} will evaluate to the value of the image property of the item object. 
// The value of the image property is a string that contains the URL of the image. 
// The URL of the image will be inserted into the HTML string, and the image will be displayed on the web page.
// The same is true for the ${item.title} and ${item.sounds} expressions. 
// The value of the title and sounds properties of the item object will be inserted into the HTML string, and the title and list of sounds will be displayed on the web page.