const btnOfLevel = document.querySelector('.levelEducation svg');
const allLevel = document.querySelectorAll('.levelEducation-all li');


btnOfLevel.addEventListener('click', function(e){
    let show = document.querySelector('.levelEducation-all')
    if(!show.classList.contains('levelEducation-all-show')){
        show.classList.add('levelEducation-all-show')
        this.style.transform = 'rotate(180deg)';
    }else{
        show.classList.remove('levelEducation-all-show')
        this.style.transform = 'rotate(0deg)';
    }  
})

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
            `
        })
    })
}
changeEducation()

let regNumb = (/d/g);

const date = document.querySelector('.educationEnding');
function validate(evt){
    evt.value = evt.value.replace(/[^0-9]/g,"");

}
