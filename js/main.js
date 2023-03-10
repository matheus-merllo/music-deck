const buttons = document.querySelectorAll('.button');
const cardTitle = document.querySelector('.card-title');
const cardDesc = document.querySelector('.card-desc');

const descAHa = document.querySelector('.desc_a-ha').textContent;
const descKansas = document.querySelector('.desc_kansas').textContent;
const descPinkFloyd = document.querySelector('.desc_pink-floyd').textContent;
const descBeatles = document.querySelector('.desc_beatles').textContent;
const descIronMaiden = document.querySelector('.desc_iron-maiden').textContent;
const descSupertramp = document.querySelector('.desc_Supertramp').textContent;
const descEagles = document.querySelector('.desc_eagles').textContent;
const descBlackSabbath = document.querySelector('.desc_black-sabbath').textContent;
const descAcDc = document.querySelector('.desc_ac-dc').textContent;
const descGuns = document.querySelector('.desc_guns').textContent;
const descPearlJam = document.querySelector('.desc_pearl-jam').textContent;
const descMetallica = document.querySelector('.desc_metallica').textContent;
const descTheCramberries = document.querySelector('.desc_the-cranberries').textContent;
const descLedZeppelin = document.querySelector('.desc_led-zeppelin').textContent;
const descDireStraits = document.querySelector('.desc_dire-straits').textContent;
const descDoors = document.querySelector('.desc_doors').textContent;

const titles = ['A-ha', 'Kansas', 'Pink Floyd', 'The Beatles', 'Iron Maiden', 'Supertramp', 'Black Sabbath', 'Eagles', 'Ac/Dc', 'Guns', 'Pearl Jam', 'Metallica', 'The Cramberries', 'Led Zeppelin', 'Dire Straits', 'The Doors'];           
const descriptions = [descAHa, descKansas, descPinkFloyd, descBeatles, descIronMaiden, descSupertramp, descBlackSabbath, descEagles, descAcDc, descGuns, descPearlJam, descMetallica, descTheCramberries, descLedZeppelin, descDireStraits, descDoors];

//contador para as condicionais de play e stop
var count = 0;

//função que para o audio
function resetAudio(model){
	let trackList = ["audio_a-ha", "audio_kansas", "audio_pink-floyd", "audio_beatles", "audio_iron-maiden", "audio_supertramp", "audio_black-sabbath", "audio_eagles", "audio_ac-dc", "audio_guns", "audio_pearl-jam", "audio_metallica", "audio_the-cranberries", "audio_led-zeppelin", "audio_dire-straits", "audio_doors"]
    if(model == 1){
		for(i = 0; i < trackList.length; i++) {
			let element = document.getElementById(trackList[i]);
			if(idTarget === trackList[i]){ 
				element.pause();
				element.currentTime = 0;
			}else{
				element.pause();
			}
		}
	}else if(model == 2){
		for(i = 0; i < trackList.length; i++) {
			let element = document.getElementById(trackList[i]);
			element.pause();
			element.currentTime = 0;
		}
	}
}

//Função de play
function play(audio){
    let element = document.querySelector(audio);
        element.play(); 
}

//Função de pause
function pauseAudio(audio){
    let element = document.querySelector(audio);
	if(element.currentTime > 0) {
		element.pause();
	}else{
		element.play();
	}
    idTarget = '0';
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
    var idTarget = '0';
	button.onclick = (event) => {
        var evento = event.target.classList[1];
        if (evento != idTarget){
            resetAudio(1);
            play(audio);
            cardChanger(title, description);
            idTarget = evento;
        } else {
            pauseAudio(audio);
        } 
    }
	
	//Evento de duplo-click
	button.addEventListener('dblclick', () => {
        resetAudio(2);
		idTarget = '0';
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
