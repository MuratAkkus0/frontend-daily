let leftSeatNum = 10;
let middleSeatNum = 20;
let rightSeatNum = 10;
let seatCounter = 1;

seatFunc();

// Choose Varaibles
const seats = document.querySelectorAll('.seat');
const area = document.querySelector('.container');
const choose = document.querySelectorAll('.choose');
const movies = document.querySelector('.movies');
const active = document.querySelector('.active');

let seat;
let controlClick = false;
let controlLi;
let seatNum = [];
let price = null;
let priceTotal = null;
let localItems;
let choosedSeats;


eventListeners();
arrow();
getItemLS();

// Local Storage

// Set İtem To Local Storage
function setItemLS() {
    const currentMovie = document.querySelector('.active');
    let movieName = currentMovie.childNodes[0].textContent;
    let choose = [];

    choosedSeats = seatNum.forEach((item) => {
        choose.push(item.id)
    })


    localItems = {movie: movieName, seats: choose}
    localStorage.setItem('item', JSON.stringify(localItems));
}

function getItemLS() {
    if (localStorage.getItem('item')) {
        localItems = JSON.parse(localStorage.getItem('item'));
        seats.forEach((seat) => {
            localItems.seats.forEach((seatId) => {
                if (seatId == seat.id) {
                    seat.setAttribute('data-id', 'choosed')
                    seat.style.backgroundColor = '#f9e789';
                    calcPrice();
                }
            })
        })
        choose.forEach((li) => {
            if (li.textContent == localItems.movie) {
                delActiveClass();
                li.className += ' active';
                arrow();
                calcPrice();
                return;
            }
        })

        setItemLS();
    }
}


// Event Listeners


function eventListeners() {
    seats.forEach((item) => {
        item.addEventListener('click', chooseSeat)
    })
    choose.forEach((item) => {
        item.addEventListener('click', choosed)
    })
    area.addEventListener('click', getOut);
}

// Choose Seat

function chooseSeat(event) {
    seat = event.target;

    if (!seat.hasAttribute('data-id')) {
        seat.setAttribute('data-id', 'choosed');
        seat.style.backgroundColor = '#f9e789';
        calcPrice();
    } else if (seat.getAttribute('data-id') == 'choosed') {
        seat.removeAttribute('data-id');
        seat.style.backgroundColor = '#7D7D7D';
        calcPrice()
    }

}

// Choose Movie

function showList() {
    choose.forEach((li) => {
        li.style.display = 'block';
    })
};

function hideList() {
    choose.forEach((li) => {
        if (!li.className.includes('active')) {
            li.style.display = 'none';
        }
    })
}

function delActiveClass() {
    choose.forEach((li) => {
        if (li.className.includes('active')) {
            li.className = 'choose';
            li.children[0].remove();
            return;
        }
    })
}

function choosed(item) {
    item.stopPropagation();
    if (item.target.className.includes('active')) {
        if (controlClick == false) {
            showList();
            controlClick = true;
            return;
        } else {
            hideList();
            calcPrice();
            controlClick = false;
            return;
        }
    } else {
        delActiveClass();
        item.target.className += ' active';
        arrow();
        hideList();
        calcPrice();
        controlClick = false;
        return;
    }
}

function getOut(e) {
    e.stopPropagation();
    controlLi = false;
    controlClick = false;

    choose.forEach((item) => {
        if (item.className.includes('active')) {
            return;
        }
    })
    choose.forEach((item) => {
        if (item.className.includes('active')) {
            controlLi = true;
        }
    })
    if (controlLi == false) {
        movies.children[0].className += ' active';
    }
    choose.forEach((item) => {
        if (!item.className.includes('active')) {
            item.style.display = 'none';
        }
    })
}

function arrow() {
    choose.forEach((item) => {
        if (item.className.includes('active')) {
            item.innerHTML += `<span class="arrow">&#8891;</span>`;
        }
    })
    const arrowSpan = document.querySelector('.arrow');
    arrowSpan.addEventListener('click', clickedArrow)
}

function clickedArrow(item) {
    item.stopPropagation();
    if (controlClick == false) {
        showList()
        controlClick = true;
    } else {
        hideList();
        controlClick = false;
    }

}


function calcPrice() {
    const choosedActive = document.querySelector('.active');
    const selectSeats = document.querySelectorAll('.seat');
    seatNum = [];

    if (choosedActive.childNodes[0].textContent == 'Movie 1') {
        selectSeats.forEach((item) => {
            price = 15;
            if (item.getAttribute('data-id') === 'choosed') {
                seatNum.push(item);
            }
        })
        priceTotal = seatNum.length * price;
        totalPrice(priceTotal);
        return;
    }
    if (choosedActive.childNodes[0].textContent == 'Movie 2') {
        selectSeats.forEach((item) => {
            price = 10;
            if (item.getAttribute('data-id') === 'choosed') {
                seatNum.push(item);
            }
        })
        priceTotal = seatNum.length * price;
        totalPrice(priceTotal);
        return;
    }
    if (choosedActive.childNodes[0].textContent == 'Movie 3') {
        selectSeats.forEach((item) => {
            price = 20;
            if (item.getAttribute('data-id') === 'choosed') {
                seatNum.push(item);
            }
        })
        priceTotal = seatNum.length * price;
        totalPrice(priceTotal);
        return;
    }
    if (choosedActive.childNodes[0].textContent == 'Lütfen Bir Film Seçiniz ...') {
        selectSeats.forEach((item) => {
            price = 0;
            if (item.getAttribute('data-id') === 'choosed') {
                seatNum.push(item);
            }
        })
        priceTotal = seatNum.length * price;
        totalPrice(priceTotal);
        return seatNum;
    }
}


// Total price

function totalPrice(total) {
    const mainDiv = document.querySelector('.total');
    if (mainDiv === null) {
        const totalPriceDiv = document.createElement('div');
        totalPriceDiv.className = 'total';
        area.appendChild(totalPriceDiv);
        totalText(total);
        return;
    } else {
        totalText(total);
        return;
    }
}

function totalText(total) {
    const currentActive = document.querySelector('.active');
    const priceDiv = document.querySelector('.total')
    if (currentActive.childNodes[0].textContent == 'Lütfen Bir Film Seçiniz ...') {
        priceDiv.textContent = `Fiyat Hesaplaması İçin Lütfen Bir Film Seçiniz ...`;
        return;
    } else {
        priceDiv.textContent = ` Koltuk Başı Ücret: ${price}, Toplam Fiyat ${total}`;
        setItemLS();
        return;
    }
}

function seatFunc() {
    addLeftSeat();
    addMiddleSeat();
    addRightSeat();
}

function addLeftSeat() {
    const leftSeats = document.querySelector('.left-seats');
    for (let i = 1; i <= leftSeatNum; i++) {
        const createLeftSeat = document.createElement('div');
        createLeftSeat.className = 'seat';
        createLeftSeat.id = `s${seatCounter}`
        leftSeats.appendChild(createLeftSeat)
        seatCounter++;
    }
}

function addMiddleSeat() {
    const middleSeats = document.querySelector('.middle-seats');
    for (let i = 1; i <= middleSeatNum; i++) {
        const createMiddleSeat = document.createElement('div');
        createMiddleSeat.className = 'seat';
        createMiddleSeat.id = `s${seatCounter}`
        middleSeats.appendChild(createMiddleSeat)
        seatCounter++;
    }
}

function addRightSeat() {
    const rightSeats = document.querySelector('.right-seats');
    for (let i = 1; i <= rightSeatNum; i++) {
        const createRightSeat = document.createElement('div');
        createRightSeat.className = 'seat';
        createRightSeat.id = `s${seatCounter}`;
        rightSeats.appendChild(createRightSeat);
        seatCounter++;
    }
}
