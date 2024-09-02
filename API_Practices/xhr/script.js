let input = document.getElementById("postID");
let getOneBtn = document.getElementById("getOne");
let getAllBtn = document.getElementById("getAll");

getAllBtn.addEventListener('click', getAll);
getOneBtn.addEventListener('click', getOne);
document.querySelector('#post').addEventListener('click',postData);

async function getAll() {
    let url = 'https://jsonplaceholder.typicode.com/posts/';

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            data.forEach(item => {
                let html = "";
                html = `
            <div class="card">
                <div class="card-title">
                    ${item.title}
                </div>
                <div class="card-body">
                    <p>${item.body}</p>
                </div>
            </div>
            `
                document.querySelector('.result-area').innerHTML += html;
            });
        }
    };
    xhr.onerror = () => {
        console.log("Error");
    }
    xhr.send();
}

async function getOne() {
    console.log(input.value);
    let url = `https://jsonplaceholder.typicode.com/posts/${input.value}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            let html = "";
            html = `
            <div class="card">
                <div class="card-title">
                    ${data.title}
                </div>
                <div class="card-body">
                    <p>${data.body}</p>
                </div>
            </div>
            `
            document.querySelector('.result-area').innerHTML += html;

        }
    };
    xhr.onerror = () => {
        console.log("Error");
    }
    xhr.send();

}

async function postData(){
    let url = 'https://jsonplaceholder.typicode.com/posts';

    let data = {
        body : 'new body',
        id : 101,
        title : 'new Title',
        userId : 1,
    };

    let json = JSON.stringify(data);
    let xhr = new XMLHttpRequest();
    xhr.open('POST',url,true);

    xhr.setRequestHeader('Content-type','application/json','charset=UTF-8');

    xhr.onload = () => {
        if (xhr.status === 201 && xhr.readyState === 4) {
            console.log(xhr.responseText);
        }
    }

    xhr.send(json);
}