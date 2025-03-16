
//Lista de Peliculas de terror
const dracula= document.getElementById('Pel_Dracula');
const fnaf= document.getElementById('Pel_FNAF');


let pelis_Terror= [dracula, fnaf];




// Funcion de buscar por medio de la barra
function search() {

    let searchP = document.getElementById('find').value.toUpperCase();

    let showItem = document.querySelectorAll('.ListPelis');

    let searchText = document.getElementsByTagName('h5');

    for (var i = 0; i <= searchText.length; i++) {

      let showPelis = showItem[i].getElementsByTagName('h5')[0];

      let value = showPelis.innerHTML || showPelis.innerText || showPelis.textContent

      if (value.toUpperCase().indexOf(searchP) > -1) {

        showItem[i].style.display = "";

      }
      else {
        showItem[i].style.display = "none";
      }
    }
  }


//Funcion de buscar por medio de chechkBoxs

  //Variable que continene el boton de buscar
let buttBuscar= document.getElementById('buscarPel');
  //Variable que continene el listado de peliculas de terror
const listP_Terror= pelis_Terror;
  //Variable que continene el check list
let checkB= document.getElementById('OptionTerror');



// Funcion de berificar y buscar
function buscarCheck(){


  
   
}


