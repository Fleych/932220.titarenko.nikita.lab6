function left() {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let cat = document.getElementById('cat');
    let dog = document.getElementById('dog');

    left.style.width = "95%";
    right.style.width = "5%";
    cat.style.visibility = "visible";
    dog.style.visibility = "hidden";
}

function two() {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let cat = document.getElementById('cat');
    let dog = document.getElementById('dog');

    left.style.width = "50%";
    right.style.width = "50%";
    cat.style.visibility = "visible";
    dog.style.visibility = "visible";
}

function right() {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let cat = document.getElementById('cat');
    let dog = document.getElementById('dog');

    left.style.width = "5%";
    right.style.width = "95%";
    cat.style.visibility = "hidden";
    dog.style.visibility = "visible";
}