const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('searchBtn');

btn.addEventListener('click', () => {
   let inpWord = document.getElementById('inp-word').value ;
    fetch(`${url}${inpWord}`)
    .then(res => res.json())
    .then((data) => {
        result.innerHTML = `
        <div class="word">
        <h1>${inpWord}</h1>
        <div>
        <button onclick="play()"><img src="./images/volume.png" alt=""></button>
            <div style="display: flex; gap: 10px;">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p></div>
                <div class="word-meaning">
                    <p>${data[0].meanings[0].definitions[0].definition}</p>
                    <p class="word-example" style="color: rgb(80, 77, 77);">${data[0].meanings[0].definitions[0].example}</p>
                </div>
        </div>
    </div>`
    sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    })
    .catch((err) => {
        result.innerHTML = `<h1 style="color:red;">no result found</h1>`
    })
})

function play(){
    sound.play();
}