'use strict';
const form = document.getElementById ('form');
const table = document.getElementById ('table');
let all = [];
let clicked =false ;
getData ();
render ();
/// constructor //
function Flower (flowerName,flowerType,image,season){
  this.flowerName =flowerName;
  this.image = image;
  this.imageSrc = `./assets/${flowerType}.jpeg`;
  this.season =season;
  all.push (this);

}

form.addEventListener ('submit', handlerSubmit);

function handlerSubmit (e){
  e.preventDefault ();

  let flowerNames = e.target.names.value;
  let image = e.target.flowers.value;
  let flowerSeason = e.target.season.value;
  let type = e.target.flowers.value.toLowerCase();
  let object = new Flower (flowerNames,type,image,flowerSeason);
  console.log (object);
  setData ();
  render ();
}

function render (){
  table.innerHTML = '';
  const hr = document.createElement ('tr');
  table.appendChild (hr);

  const hd1 = document.createElement ('td');
  hr.appendChild (hd1);
  hd1.textContent = '#';

  const hd2 = document.createElement ('td');
  hr.appendChild (hd2);
  hd2.textContent = 'Image';

  const hd3 = document.createElement ('td');
  hr.appendChild (hd3);
  hd3.textContent = 'Name';

  const hd4 = document.createElement ('td');
  hr.appendChild (hd4);
  hd4.textContent = 'Season';

  for (let i = 0 ; i < all.length;i++){
    let raw =document.createElement ('tr');
    table.appendChild (raw);

    let td1 = document.createElement ('td');
    raw.appendChild (td1);
    let btn =document.createElement ('button');
    td1.appendChild (btn);
    btn.textContent ='X';
    btn.setAttribute ('id',i);
    btn.addEventListener ('click',function (){
      clicked = true;
    });
    btn.setAttribute ('onClick', `remove(${btn.id})`);
    let td2 = document.createElement ('td');
    raw.appendChild (td2);
    let img = document.createElement ('img');
    td2.appendChild (img);
    img.src = all[i].imageSrc;
    let td3 = document.createElement ('td');
    raw.appendChild (td3);
    td3.textContent =all[i].flowerName;
    let td4 = document.createElement ('td');
    raw.appendChild (td4);
    td4.textContent = all[i].season;
  }

}

function setData (){
  localStorage.setItem ('flower', JSON.stringify (all));
}
function getData (){
  if (localStorage.getItem ('flower')){
    all = JSON.parse (localStorage.getItem ('flower'));
  }
}

function remove(i) {
  if (clicked=== true){
    let allUpdate = JSON.parse (localStorage.getItem ('flower'));
    
    allUpdate.splice (i,1);
    all = allUpdate;
    console.log ('hi');
    setData();
    render();
  }
}
