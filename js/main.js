'use strict';
// que cuando haces click en "agregar" lo que hayas escrito en el input se añada en js_list


// CONSTANTES
const inputTarea = document.querySelector(".js_input-tarea");
const btnTarea = document.querySelector(".js_button-tarea");
const inputBuscador = document.querySelector(".js_input-buscador");
const btnBuscador = document.querySelector(".js_button-buscador");
const listaTareas = document.querySelector(".js_list");
let tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
      id: 4,
    },
  ];

// FUNCIONES

// si queremos limpiarlo:::: 
//localStorage.removeItem("tasks");
// verificar si hay local storage
if (localStorage.getItem("tasks")!== null) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
} 
//esta función pinta lo del array tasks
 function pintarArrayTasks(){
 listaTareas.innerHTML = " "; // borrar la lista si tiene cosas antes de pintarla
    for (let task of tasks){
      if (task.completed === true){
        listaTareas.innerHTML += 
        `<li><label class="tachado"><input checked type="checkbox" id="${task.id}"/> ${task.name}</label></li>`; 
      } else {
      listaTareas.innerHTML += 
        `<li><label><input type="checkbox" id="${task.id}"/> ${task.name}</label></li>`;
    }
  }

 };

 pintarArrayTasks();

function handleClickTask(ev) {
  console.log(tasks.length);
  const numId = parseInt(tasks.length) + 1;
  tasks.push(
    {
      name: inputTarea.value,
      completed: false,
      id: numId,
    }
  );
  console.log(tasks);
  pintarArrayTasks();
  //Almacenar informacion en el local storage (falta pintarlo)
  //localStorage.setItem("tasks", JSON.stringify(tasks));
};


function handleClickComplete(ev){
  const taskId = parseInt(ev.target.id);
  if (!taskId) return; // si no estamos haciendo click en el check, no nos devuelve nada
    // Busca la tarea que tenga el id `taskId` en el array `tasks`
    for (let task of tasks){
      if (task.id === taskId){
        if (task.completed === false){
          task.completed = true;
        } else {
          task.completed = false;
        }
      }
    }
    
    console.log(tasks);
    pintarArrayTasks(); // Pinta de nuevo las tareas en el html
  };


// TERMINAR FUNCIÓN: al hacer click por ahora solo recoge el valor del input buscador
function handleClickSearch(ev){
  let taskValue = inputBuscador.value;
  console.log(taskValue);
};

// EVENTOS
btnTarea.addEventListener("click", handleClickTask);
listaTareas.addEventListener("click", handleClickComplete);
btnBuscador.addEventListener("click", handleClickSearch);

