const searchinput = document.getElementById('search_input');
const resultartist = document.getElementById('result_artist');
const Music_box_results = document.getElementById('Music_box_results');

function requestapi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    Music_box_results.classList.add("hidden");
    const artistname = document.getElementById('artist_name');
    const artistimage = document.getElementById('artist_img');

    result.forEach(element => {
        artistname.innerText = element.name;
        artistimage.src = element.urlImg;
    });

    resultartist.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchTerm = searchinput.value.toLowerCase();
    if (searchTerm === '') {
        Music_box_results.classList.add('hidden');
        resultartist.classList.remove('hidden');
        return;
    }

    requestapi(searchTerm);
});