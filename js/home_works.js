const gmailBtn = document.getElementById("gmail_button")
const gmailInput = document.getElementById('gmail_input')
const gmailResult = document.getElementById('gmail_result')
function isValidGmail(gmail) {
    let gmailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;

    return gmailRegex.test(gmail);
}
gmailBtn.addEventListener('click', function (event){
    let value = gmailInput.value
    if(isValidGmail(value)){
        gmailResult.innerHTML = '<p>valid</p>'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = '<p>invalid</p>'
        gmailResult.style.color = 'red'
    }
})

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')


const runCupe = anime({
    targets: childBlock,
    keyframes: [
        {translateX : 400}, {translateY: 350}, {translateX: -90}, {translateY: -100}
    ],
    scaleX: [
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 },
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 }
    ],
    scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 }
    ],
    duration: 5000,
    easing: 'easeOutElastic(1, .8)',
    loop: true,

})


const count = document.querySelector('.count')

let countValue = 0

const countFunc = () => {
    setInterval(() => {
        countValue++
        count.textContent = countValue
    },900)
    setTimeout(() => {
        count.style.display = 'none'
    },5000)
}

countFunc()

const skipTime = () => {
    setTimeout(() => {
        parentBlock.style.backgroundImage = 'url(../images/background.gif)';
        parentBlock.style.transition = '1.2s'
        parentBlock.style.border = '2px solid rgb(208, 136, 0)'
        childBlock.style.backgroundImage = 'url(../images/raiden_dance-gif.gif)'
        childBlock.style.width = '110px'
        childBlock.style.height = '110px'
    },5000)
    setTimeout(() =>{
        childBlock.style.backgroundImage = 'url(../images/mistral_dance-gif.gif)'
        childBlock.style.borderRadius = '50%'
        childBlock.style.transition = '1.2s'
    },7000)
}


skipTime()
