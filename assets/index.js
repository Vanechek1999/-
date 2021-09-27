const btnOfLevel = document.querySelector('.levelEducation svg');
const allLevel = document.querySelectorAll('.levelEducation-all li');


btnOfLevel.addEventListener('click', function(e){
    showAllLevel(this)
})

function showAllLevel(btn){
    let show = document.querySelector('.levelEducation-all')
    if(!show.classList.contains('levelEducation-all-show')){
        show.classList.add('levelEducation-all-show')
        btn.style.transform = 'rotate(180deg)';
    }else{
        show.classList.remove('levelEducation-all-show')
        btn.style.transform = 'rotate(0deg)';
    }  
}

function changeEducation(){
    let answer = document.querySelector('.levelEducation .answer');
    let placeholder = document.querySelector('.levelEducation .placeholder')
    allLevel.forEach(level=>{
        level.addEventListener('click', function(){
            
            answer.innerHTML = `${level.innerText}`;
            placeholder.style.cssText=`
                font-size: 14px;
                position: absolute;
                left: 24px;
                top: 13.5px;
                color: #B2B2B2;
                transition: .3s ease-in-out
            `;
            showAllLevel(btnOfLevel)
        })
    })
}
changeEducation()

let regNumb = (/[^0-9]/g);

const date = document.querySelector('.educationEnding input');
const dateParent = document.querySelector('.educationEnding')

function validateForm(elem, text, value, important){
    elem.addEventListener('change', function(){
        if(+this.value == 0){
            if(!important.classList.contains('showError')){
                important.classList.add('showError')
                setTimeout(()=>{
                    important.classList.remove('showError')
                }, 1000)
            }
        }else if(+this.value <10 && +this.value > 0){
            if(!value.classList.contains('showError')){
                value.classList.add('showError')
                setTimeout(()=>{
                    value.classList.remove('showError')
                }, 1000)
            }
        }else if(regNumb.test(this.value)){
            if(!text.classList.contains('showError')){
                text.classList.add('showError')
                setTimeout(()=>{
                    text.classList.remove('showError')
                }, 1000)
            }
        }
    })
}
const series = document.querySelector('.series');
const number = document.querySelector('.number')
let seriesImportant = document.querySelector('.importantArea');
let seriesCount = document.querySelector('.countOfSymbols')
let seriesValidate =document.querySelector('.validateMessage')
validateForm(series, seriesImportant, seriesCount, seriesValidate)

date.addEventListener('input', function(){
    let error = document.querySelector('.educationEnding span')
    if(regNumb.test(this.value)){
        if(!error.classList.contains('showError')){
            error.classList.add('showError')
            setTimeout(()=>{
                error.classList.remove('showError')
            }, 1000)
        }
    }
})


function validate(evt){
    evt.value = evt.value.replace(/[^0-9]/g,"");

}
const nameUnivercity = document.querySelector('.name input');
const allUnivercity = document.querySelector('.allUnivercity');
const clear = document.querySelector('.name .close')
const closeWindow = document.querySelector('.closeWindow')
nameUnivercity.addEventListener('input', function(){
    if(this.value !== ''){
        clear.classList.add('showCloseIcon')
    }else{
        clear.classList.remove('showCloseIcon')
    }
})

clear.addEventListener('click', function(){
    nameUnivercity.value = '';
    this.classList.remove('showCloseIcon')
})
closeWindow.addEventListener('click', function(){
    if(!allUnivercity.classList.contains('showAllUnivercity')){
        allUnivercity.classList.add('showAllUnivercity');
        this.style.transform = 'rotate(180deg)'
    }else{
        allUnivercity.classList.remove('showAllUnivercity');
        this.style.transform = 'rotate(0deg)'
    }
})