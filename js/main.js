'use strict';
// que cuando haces click en "agregar" lo que hayas escrito en el input se añada en js_list


// constantes
const inputTarea = document.querySelector(".js_input-tarea");
const btnTarea = document.querySelector(".js_button-tarea");
const inputBuscador = document.querySelector(".js_input-buscador");
const btnBuscador = document.querySelector(".js_button-buscador");
const listaTareas = document.querySelector(".js_list");
const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
      id: 4,
    },
  ];

// funciones
//esta función pinta lo del array tasks
 function addArrayTasks(){
    for (let task of tasks){
        listaTareas.innerHTML += `<li>${task.name}</li>`;
    }
 };
 addArrayTasks();


 // tenemos que modificar esta función para que los nuevos elementos se añadan al array como objeto
function handleClickTask(ev) {
listaTareas.innerHTML += `<li>${inputTarea.value}</li>`;
console.log(listaTareas.innerHTML);
};


// eventos
btnTarea.addEventListener("click", handleClickTask);