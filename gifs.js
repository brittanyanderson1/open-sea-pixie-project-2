//My personal Giphy API key
const APIKEY = 'HXr9smLb4V3amxAGsOe5cSNOqV6fiM5c'
// imageContainer is assigned to the image container in the HTML document
const imageContainer = document.querySelector('.js-gif-container');
//pixel is the class assigned to the HTML image src Container
////const pixel = document.querySelector('img.pixel');

//get gif data from api
const getGifs = async () => {
    //this variable is meant to represent user input data from the search bar
    const userInput = document.getElementById('search').value;
    console.log(userInput);
    //this is the giphy search address
    const base = 'https://api.giphy.com/v1/gifs/search?';
    //this is the required API key and search parameters 
    const query = `api_key=${APIKEY}&limit=25&q=${userInput}`;
    
    const url = base + query;

    document.getElementById("gif-container").innerHTML = '';

    const response = await fetch(url);
    const data = await response.json()
    console.log(data.data);

    data.data.forEach(element => {
        var img = `<img src='${element.images.downsized.url}' class='gif-image' />`;
                document.getElementById("gif-container").innerHTML += img;
    });
    
    return data;

//I thought lines 27-38 would return and append the gif image data

    //let pixelSrc = data.data.images.original.url;

    // pixelSrc = "https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=25&q="
    // pixel.setAttribute('src', pixelSrc);

    //  imageContainer.innerHTML = pixel
    // .map(data => `
    //<div class="data-item">
    // <img src="${data.data.images.original.url}" alt=""/>
    //</div>
    //`)
    //.join('');

};
//getGifs calls the function to search the giphy api and return an array
function searchGifs() //this is connected to html onclick reference not having this function makes the entire app not work.
{

getGifs();
}



//};

//getGifs('cats')
//.then(data => console.log(data))
//.catch(err => console.log(err));
