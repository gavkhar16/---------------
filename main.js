function saleDate(){

    let newDate = new Date()
    let saleDate= new Date(2024, 10,20);
    let finishDate =saleDate-newDate   
    let day =Math.floor(finishDate/(1000*60*60*24))    
    let hours = Math.floor((finishDate% (1000*60*60*24))/(1000*60*60))   
    let minutes = Math.floor((finishDate %(1000*60*60))/(1000*60))    
    let seconds = Math.floor((finishDate%(1000*60))/1000)    
    let dayValue= document.getElementsByClassName("time")[0]    
    let hoursValue= document.getElementsByClassName("time")[1]    
    let minutesValue= document.getElementsByClassName("time")[2]    
    let secondsValue= document.getElementsByClassName("time") [3]   
    dayValue.innerHTML=day    
    hoursValue.innerHTML=hours   
    minutesValue.innerHTML=minutes    
    secondsValue.innerHTML=seconds    
    }    
    setInterval(()=>{   
    saleDate()    
    },1000)


    document.querySelector('button').addEventListener('click', function () {
      const telephoneInput = document.querySelector('.telephone');
      const errorInput = document.querySelector('.error');
      const correctInput = document.querySelector('.correct');
      const loader = document.querySelector('.loader');
    
      // Скрыть все поля перед проверкой
      errorInput.style.display = 'none';
      correctInput.style.display = 'none';
    
      // Проверка: введено ли 9 или 12 цифр
      const inputLength = telephoneInput.value.length;
      if (inputLength === 9 || inputLength === 12) {
        // Показать loader
        loader.style.display = 'block';
    
        // Скрыть loader через 3 секунды и показать "correct" input
        setTimeout(() => {
          loader.style.display = 'none';
          correctInput.style.display = 'block';
          telephoneInput.style.display = 'none'; // Скрыть поле ввода телефона
        }, 3000);  // 3 секунды для loader
    
      } else if (inputLength === 0) {
        // Показать loader на 3 секунды, затем показать "error" input
        loader.style.display = 'block';
    
        setTimeout(() => {
          loader.style.display = 'none';
          errorInput.style.display = 'block';
          telephoneInput.style.display = 'none'; // Скрыть поле ввода телефона
        }, 3000);  // 3 секунды для loader
      }
    });
    

let openWindow = document.querySelector('.first_menu');
openWindow.addEventListener('click', openFirstWindow);

function openFirstWindow(){
    console.log('Я работаю');
}
const materialButton = document.getElementById('materialButton');
const furnitureButton = document.getElementById('furnitureButton');

function toggleBorder(clickedButton, otherButton) {
 
  clickedButton.classList.add('active-border');
  otherButton.classList.remove('active-border');
}

materialButton.addEventListener('click', function() {
  toggleBorder(materialButton, furnitureButton);
});

furnitureButton.addEventListener('click', function() {
  toggleBorder(furnitureButton, materialButton);
});



const subscribeButton = document.querySelector('.subscribe');
const closeButton = document.querySelector('.close');
const seventhSection = document.querySelector('.seventh');
const additionalSection = document.querySelector('.additional');
const blackSection = document.querySelector('.black');


subscribeButton.addEventListener('click', () => {
  seventhSection.style.display = 'none'; 
  additionalSection.style.display = 'flex'; 
});


closeButton.addEventListener('click', () => {
  additionalSection.style.display = 'none'; 
  blackSection.style.display = 'block'; 
});
