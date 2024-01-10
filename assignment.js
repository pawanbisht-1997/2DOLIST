let btn = document.getElementById("addTask");
let mainDiv = document.querySelector(".toDOlist");

let div;

let inputText = "";
let getInput = (e) => {
  inputText = e.value;
};

btn.addEventListener("click", () => {
  div = document.createElement("div");
  div.classList.add("toDoList-Task");
  div.innerHTML = `
  <h2>gym</h2>
  <select class="status">
        <option value="Pending">Pending</option>
        <option value="Working">Working</option>
        <option value="Completed">Completed</option>
  </select>
  <i class="fa fa-trash" aria-hidden="true"></i>
            `;
  mainDiv.appendChild(div);
  inputText = document.getElementById('inputtask');
inputText.value = '';
let dltBtn = document.querySelectorAll('.fa-trash');
dltBtn.forEach(dlt => {
    dlt.addEventListener('click', ()=>{
        dlt.parentElement.remove();
    })
});

let statusCheck = document.querySelector('.status');
let parentEl = document.querySelector('.toDoList-Task');
statusCheck.addEventListener('change', ()=>{
        statusOutput = statusCheck.value;
        if(statusOutput == 'Pending')
        {
            parentEl.classList.toggle('pending');
            parentEl.classList.remove('working');
            parentEl.classList.remove('completed');
        }
        else if(statusOutput == 'Working')
        {
            parentEl.classList.toggle('working');
            parentEl.classList.remove('pending');
            parentEl.classList.remove('completed');
        }
        else if(statusOutput == 'Completed')
        {
            parentEl.classList.toggle('completed');
            parentEl.classList.remove('working');
            parentEl.classList.remove('pending');
        }
       
})

});





