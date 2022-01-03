const nameEl = document.querySelector('#name');
const heightEl = document.querySelector('#height');
const weightEl = document.querySelector('#weight');
const bmiBtn = document.querySelector('#bmi-btn');

const comments = [
    { 'bmi': 18.5, 'comment': '體重過輕' },
    { 'bmi': 24, 'comment': '健康體位' },
    { 'bmi': 35, 'comment': '體位異常' },
];

function getBmi(heightEl, weightEl, point = 2) {
    const bmi = weightEl.value / (heightEl.value / 100) ** 2;
    return bmi.toFixed(point);
}


bmiBtn.addEventListener('click', () => {
    let bmi = getBmi(heightEl.value, weightEl.value);
    alert(`${nameEl.value} bmi：${bmi}`);

    if (heightEl.value == '' || weightEl.value == '' || isNaN(bmi)) {
        alert('輸入錯誤');
    };

    document.querySelector('#result').innerHTML(`<h2>${result}</h2>`);
});


let bmiComment = '體位異常';

for (let i = 0; i < comments.length; i++) {
    if (bmi <= comments[i][`bmi`]) {
        bmiComment = comments[i][`comment`];
        break;
    }
};

