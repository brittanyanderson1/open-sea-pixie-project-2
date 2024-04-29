//when gitForm is called  the DOM grabs HTML form element
const gifForm = document.querySelector('form');

const stickersForm = document.querySelector('form');

//const updateGifs = async (gifs) => {
//const gifDets = await getGifs(data.url);
//}

//processes user search request via keyboard click and prevents page from refreshing
gifForm.addEventListener('submit', e => {
    e.preventDefault();

    const gifs = gifForm.gifs.value.trim();
    //clears/refreshes the search bar
    gifForm.reset();
});
    stickersForm.addEventListener('submit', e => {
        e.preventDefault();
    
        const stickers = stickersForm.stickers.value.trim();
        //clears/refreshes the search bar
        stickersForm.reset();

});