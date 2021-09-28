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
let univercityNames = document.querySelectorAll('.allUnivercity li');
const clear = document.querySelector('.name .close')
const closeWindow = document.querySelector('.closeWindow')
nameUnivercity.addEventListener('input', function(){
    if(!allUnivercity.classList.contains('showAllUnivercity')){
        allUnivercity.classList.add('showAllUnivercity');
        // this.style.transform = 'rotate(180deg)'
    }else{
        // return
        // allUnivercity.classList.remove('showAllUnivercity');
        // this.style.transform = 'rotate(0deg)'
    }
    univercityNames.forEach(name=>{
        if(name.innerText.toLowerCase().indexOf(nameUnivercity.value.toLowerCase()) !== -1){
            if(!name.classList.contains('showText')){
                name.classList.add('showText')
            }else{
                return
            }
        }else{
            if(name.classList.contains('showText')){
                name.classList.remove('showText')
            }else{
                return
            }
        }
    })
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


const dropZone = document.querySelector('.download')
const content = document.querySelector('.download_text');
const addFiles = document.querySelector('input[type="file"]');
addFiles.addEventListener('change', function(e){
    let countFiles = '';
    if(this.files && this.files.length >=1){
        countFiles = this.files.length;
        if(countFiles){
            if(this.files[0].name.length>33){
                showFile(content, this.files[0].name.slice(0,30)+'...')
            }else{
                showFile(content, files[0].name)
            }

        }else{
            console.log('Файлы не выбраны');
        }
    }
})
const reader = new FileReader()
if(window.FileList && window.File){
    dropZone.addEventListener('dragover', event=>{
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    })
    dropZone.addEventListener('drop', event=>{
        event.stopPropagation();
        event.preventDefault();
        const files = event.dataTransfer.files;
        // console.log(files);
        reader.readAsDataURL(files[0]);
        reader.addEventListener('load', (event)=>{
            console.log(event);
            if(files[0].name.length >33){
                showFile(content, files[0].name.slice(0,30)+'...')
                // content.innerHTML = `<span class="red">Документ:</span><span class="grey yourDocument">${files[0].name.slice(0,30)+'...'}</span>`
            }else{
                showFile(content, files[0].name)
                // content.innerHTML = `<span class="red">Документ:</span><span class="grey yourDocument">${files[0].name}</span>`
            }
      
            // console.log(event);
        })
    })
}
function showFile(item, text){
    item.innerHTML = `
    <span class="red">Документ:</span>
    <div class="grey yourDocument">
        ${text}       
        <svg class="deleteDocument" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 220.496 220.496" style="enable-background:new 0 0 10 10;" xml:space="preserve">
        <path d="M0.003,192.658c0,7.434,2.897,14.424,8.154,19.684c5.257,5.261,12.25,8.154,19.684,8.154    c7.44,0,14.429-2.894,19.674-8.154l62.732-62.731l62.717,62.72c5.255,5.26,12.244,8.154,19.684,8.154    c7.44,0,14.436-2.895,19.678-8.154c5.255-5.26,8.155-12.25,8.155-19.684s-2.9-14.424-8.155-19.684l-62.714-62.717l62.727-62.727    c5.254-5.257,8.154-12.247,8.154-19.681c0-7.434-2.9-14.427-8.154-19.684C207.084,2.897,200.095,0,192.655,0    c-7.435,0-14.424,2.897-19.678,8.155l-62.724,62.732L47.522,8.155C42.271,2.897,35.281,0,27.847,0    c-7.44,0-14.433,2.897-19.684,8.155c-5.257,5.257-8.155,12.25-8.155,19.684c0,7.434,2.897,14.423,8.155,19.681l62.732,62.727    L8.157,172.974C2.9,178.234,0.003,185.224,0.003,192.658z M16.858,181.681l67.08-67.086c1.156-1.152,1.801-2.714,1.801-4.344    c0-1.631-0.646-3.198-1.801-4.348l-67.08-67.08c-2.939-2.936-4.552-6.836-4.552-10.985c0-4.152,1.618-8.056,4.552-10.989    c2.939-2.933,6.831-4.552,10.989-4.552c4.149,0,8.055,1.619,10.98,4.552l67.079,67.077c2.306,2.306,6.39,2.306,8.695,0    l67.07-67.077c5.867-5.873,16.104-5.861,21.972,0c2.937,2.939,4.552,6.836,4.552,10.989c0,4.149-1.615,8.056-4.552,10.985    l-67.073,67.074c-2.402,2.404-2.402,6.29,0,8.697l67.062,67.056c2.936,2.937,4.545,6.84,4.545,10.989s-1.609,8.053-4.551,10.988    c-5.85,5.867-16.094,5.873-21.966,0l-67.059-67.056c-2.405-2.407-6.29-2.407-8.695,0l-67.085,67.08    c-5.846,5.866-16.09,5.872-21.962,0c-2.939-2.937-4.552-6.84-4.552-10.989C12.307,188.515,13.919,184.612,16.858,181.681z"/>
        </svg>
    </div>
    `;
    let deleteDoc = document.querySelector('.deleteDocument');
    deleteDoc.addEventListener('click', ()=>{
        addFiles.value='';
        content.innerHTML = `<span class="red">Документ:</span> <span class="grey">Загрузить файлы или</span> <span class="black">открыть проводник</span>`
    })
}
