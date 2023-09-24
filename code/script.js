const menu = document.getElementById('hamburger');
const headingItem = document.querySelector('.heading-item')
const menuBar = document.querySelector('.menu-bar')
const link = document.getElementById('link');
const shorten = document.getElementById('shorten')
const longLin = document.querySelector('.long-lin')
const shortLin = document.querySelector('.short-lin')
const copyBtn = document.getElementById('copy-btn')
const output = document.querySelector('.output')
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(shortLin.textContent);
    copyBtn.textContent = 'Copied'
    copyBtn.style.backgroundColor = 'hsl(257, 27%, 26%)';

})
menu.addEventListener('click', () => {
    // if(headingItem.classList.contains("menu-bar")){
    //     headingItem.classList.remove("menu-bar")
    // } else{
    //     headingItem.classList.add("menu-bar")
    // }
    toogleClass()
})
function toogleClass(){
    headingItem.classList.toggle("menu-bar")
}
const error = document.querySelector('.error');
shorten.addEventListener('click', ()=>{
    
    if(link.value == ''){
        error.classList.remove('err-msg');
        link.style.borderWidth = '2px'
        link.style.borderColor = 'hsl(0, 87%, 67%)'
    } else{
        output.classList.remove('visible')
        error.classList.add('err-msg')
    }

const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'eabf7bc5a7msh095bbcd9ec5a5a2p19cff6jsn00a020509772',
		'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
	},
	body: new URLSearchParams({
		url: link.value
	})
};

    fetch(url, options)
    .then(res => res.json())
    .then(data =>{
        console.log(data.result_url)
        longLin.textContent = link.value;
        shortLin.textContent = data.result_url;
    })
    .catch(error => {
	console.log({error})
    })
    // link.value = ''
    if(copyBtn.textContent == 'Copied'){
        location.reload()
    }
})