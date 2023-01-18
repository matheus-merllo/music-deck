const buttons = document.querySelectorAll('.button');
const cardTitle = document.querySelector('.card-title');
const cardDesc = document.querySelector('.card-desc');

const titleAHa = document.querySelector('.title_a-ha').textContent;
const descAHa = document.querySelector('.desc_a-ha').textContent;
const titleKansas = document.querySelector('.title_kansas').textContent;
const descKansas = document.querySelector('.desc_kansas').textContent;
const titlePinkFloyd = document.querySelector('.title_pink-floyd').textContent;
const descPinkFloyd = document.querySelector('.desc_pink-floyd').textContent;
const titleBeatles = document.querySelector('.title_beatles').textContent;
const descBeatles = document.querySelector('.desc_beatles').textContent;
const titleIronMaiden = document.querySelector('.title_iron-maiden').textContent;
const descIronMaiden = document.querySelector('.desc_iron-maiden').textContent;
const titleSupertramp = document.querySelector('.title_Supertramp').textContent;
const descSupertramp = document.querySelector('.desc_Supertramp').textContent;
const titleEagles = document.querySelector('.title_eagles').textContent;
const descEagles = document.querySelector('.desc_eagles').textContent;
const titleBlackSabbath = document.querySelector('.title_black-sabbath').textContent;
const descBlackSabbath = document.querySelector('.desc_black-sabbath').textContent;
const titleAcDc = document.querySelector('.title_ac-dc').textContent;
const descAcDc = document.querySelector('.desc_ac-dc').textContent;
const titleGuns = document.querySelector('.title_guns').textContent;
const descGuns = document.querySelector('.desc_guns').textContent;
const titlePearlJam = document.querySelector('.title_pearl-jam').textContent;
const descPearlJam = document.querySelector('.desc_pearl-jam').textContent;
const titleMetallica = document.querySelector('.title_metallica').textContent;
const descMetallica = document.querySelector('.desc_metallica').textContent;
const titleTheCramberries = document.querySelector('.title_the-cranberries').textContent;
const descTheCramberries = document.querySelector('.desc_the-cranberries').textContent;
const titleLedZeppelin = document.querySelector('.title_led-zeppelin').textContent;
const descLedZeppelin = document.querySelector('.desc_led-zeppelin').textContent;
const titleDireStraits = document.querySelector('.title_dire-straits').textContent;
const descDireStraits = document.querySelector('.desc_dire-straits').textContent;
const titleDoors = document.querySelector('.title_doors').textContent;
const descDoors = document.querySelector('.desc_doors').textContent;

const titles = [titleAHa, titleKansas, titlePinkFloyd, titleBeatles, titleIronMaiden, titleSupertramp, titleBlackSabbath, titleEagles, titleAcDc, titleGuns, titlePearlJam, titleMetallica, titleTheCramberries, titleLedZeppelin, titleDireStraits, titleDoors];           
const descriptions = [descAHa, descKansas, descPinkFloyd, descBeatles, descIronMaiden, descSupertramp, descBlackSabbath, descEagles, descAcDc, descGuns, descPearlJam, descMetallica, descTheCramberries, descLedZeppelin, descDireStraits, descDoors];

//contador para as condicionais de play e stop
var count = 0;

//Função de play e pause
function playPause(audio){
    let element = document.querySelector(audio);
    if (element != null && element.localName === 'audio'){
        element.play();
        count = 1;
    } else {    
        alert('ERRO: Elemento não encontrado')
    }
}

//função que para o audio
function stopAudio(audio){
    let element = document.querySelector(audio);    
    element.pause();
    element.currentTime = 0;  
    count = 0;  
}

//Função de troca dos cards
function cardChanger(title, description){
    cardTitle.innerHTML = title;
    cardDesc.innerHTML = description;
}

//Iteração para "unir" botões e seus respectivos conteúdos
for (let counter=0; counter<buttons.length; counter++){
    let button = buttons[counter];
    let key = button.classList[1];
    let audio = `#audio_${key}`;
    let title = titles[counter];
    let description = descriptions[counter];

    //Evento de click
    button.addEventListener('click', () => {
        if (count == 0){
            playPause(audio);
            cardChanger(title, description);   
        } else {
            stopAudio(audio); 
        }   
    })

    //Eventos de teclado
    button.addEventListener('keydown', (event) => {
        if(event.code === 'Enter' || event.code === 'Space'){
            button.classList.add('active');
        }
    })  

    button.addEventListener('keyup', () => {
        button.classList.remove('active')
    })
}