function run (fromVisited) {
    if (!unselectedNameCount) {
        return;
    }
    const list = nameList;
    const len = list.length;
    const alpha = 360 / len;
    if (!fromVisited) {
        angle += Math.random() * 360 + 720;
    } else {
        angle += alpha;
    }
    const circle = document.querySelector('.outer-circle');
    const spanIdx = (angle % 360) / alpha;
    const initIdx = 90 / alpha;
    const idx = (Math.floor(initIdx - spanIdx) + len) % len;
    const nameBoxes = document.querySelectorAll('.name-box');
    const splitLines = document.querySelectorAll('.split-line');
    for (let i = 0; i < len; i++) {
        if (nameBoxes[i].getAttribute('class').includes('active')) {
            nameBoxes[i].setAttribute('class', 'name-box visited');
        }
        if (splitLines[i].getAttribute('class').includes('active')) {
            splitLines[i].setAttribute('class', 'split-line');
        }
    }
    if (nameBoxes[idx].getAttribute('class').includes('visited') || check(nameList[idx])) {
        run(true);
        return;
    }
    record(nameList[idx]);
    unselectedNameCount--;
    circle.setAttribute('style', `transform: rotate(${ angle }deg)`);
    setTimeout(() => {
        nameBoxes[idx].setAttribute('class', 'name-box active');
        splitLines[idx].setAttribute('class', 'split-line active-before');
        splitLines[(idx + 1) % len].setAttribute('class', 'split-line active-after');
    }, 4200);
}

function record (name) {
    if (!window.state.reviewMode) {
        return;
    }
    const recordInfo = JSON.parse(localStorage.getItem('RECORD_INFO')) || {};
    recordInfo[name] = Date.now();
    localStorage.setItem('RECORD_INFO', JSON.stringify(recordInfo));
}

/**
 * @description 检查是否三天内被点名过
 */
function check (name) {
    if (!window.state.reviewMode) {
        return false;
    }
    const recordInfo = JSON.parse(localStorage.getItem('RECORD_INFO')) || {};
    if (!recordInfo[name]) {
        return false;
    }
    return Date.now() - recordInfo[name] < 1000 * 60 * 60 * 24 * 3;
}

run = throttle(run, 4500);

createNames(nameList);

let angle = 0;
let unselectedNameCount = nameList.length;
