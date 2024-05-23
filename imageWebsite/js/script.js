const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('.search');
const cardContainer = document.querySelector('.card-container');
const addMoreBtn = document.querySelector('#addMore');
const errBox = document.querySelector('.msg');


let page = 0;

addMoreBtn.addEventListener('click', searchImage)
searchBtn.addEventListener('click', searchImage);
input.addEventListener('keyup', searchImage)
cardContainer.addEventListener('click',viewPhoto);


async function apifunc() {
    let inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const images = data.results;
    createCard(images)
}


function searchImage(e) {
    if (e.target.id == 'addMore') {
        apifunc();
        return;
    }
    if (e.type == 'click' || e.key === 'Enter') {
        cardContainer.innerHTML = '';
        apifunc();
        page = 0;
    }
}


function createCard(images) {
    images.forEach(image => {
        let link = image.links.html;
        cardContainer.innerHTML += 
        `<div class="card" data-link="${link}" >
            <div class="content">
                <img class="image" src="${image.urls.small}" alt="img" >
            </div>
            <div class="footer">
                <p class="text">${image.alt_description}</p>
            </div>
        </div>`;
    });
    page++;
    if (!(page == 0)) {
        addMoreBtn.style.display = 'block'
    }
    if (images.length === 0) {
        sourceFinished();
    } else {
        addMoreBtn.disabled = false;
        addMoreBtn.style.backgroundColor = 'rgb(85, 193, 85)';
    }
    page++;
}

function sourceFinished() {
    addMoreBtn.disabled = 'disabled';
    addMoreBtn.style.backgroundColor = '#ccc';
    showMsg('* There aren\'t many photos')
    setTimeout(() => { showMsg('* There aren\'t many photos') }, 3000)

}
function showMsg(text) {
    errBox.classList.toggle('enable_msg');
    errBox.innerText = `${text}`;
}

function viewPhoto(e){
    let targetClasses = e.target.classList;
    let wantedClases = ['card','text','image'];
    
    for (const key in wantedClases) {
        if (targetClasses.contains(wantedClases[key])) {
            let card = e.target.closest('.card');
            window.open(`${card.dataset.link}`,'_blank')
        }
    }

}


