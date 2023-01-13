import './style.css'
const fondo = document.querySelector('.fondo');

const divCard = document.createElement('div');
divCard.classList.add('card');

const button = document.createElement('button');
button.innerText='Github'
button.classList.add('btn');

const img = document.createElement('img');
img.setAttribute('src', 'https://scontent.fmex28-1.fna.fbcdn.net/v/t1.6435-9/56985377_2179095605500482_1523310481962434560_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFR2w3fWgSHGjZHqVrP9xIztZ3S1xXIC7O1ndLXFcgLs73YzMtOSSBGzAPP8q4JsWsJixREQWlg0ONkfYHTbCa_&_nc_ohc=z3lzmU9AJpUAX97I_hW&_nc_ht=scontent.fmex28-1.fna&oh=00_AfCENCEiEoKGVblEd1m2hvgR0W6fr_I3xhDVq7B5liU5Uw&oe=63E5A5E6' );

const section = document.createElement('section');
section.classList.add('container');

const h1 = document.createElement('h1');
h1.classList.add('name');
h1.innerText = 'Nombre: Barajas Correa Bruno Nicolas';

const hDosOcupation = document.createElement('h2');
hDosOcupation.innerText = 'Desarrollador Web - Programador';

const h2Edad = document.createElement('h2');
h2Edad.innerText = '22 Años';

const hDosCelular = document.createElement('h2')
hDosCelular.innerText = 'Celular: 55-5099-0404'

section.append(h1, hDosOcupation, h2Edad, hDosOcupation);
divCard.append(img, section);
fondo.append(divCard, button);

button.addEventListener('click', changePageGithub);

function changePageGithub(){
    location.href="https://github.com/BricoBC/card/"
}
