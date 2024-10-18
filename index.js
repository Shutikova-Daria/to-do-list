const button = document.querySelector(".input-text button");
    const input=document.querySelector(".input-text input");
    const list=document.querySelector(".toDo-list");
    
    button.addEventListener("click", ()=>{
        const li=document.createElement("li");
        li.className="toDo-list-item";
        const deleteBtn=document.createElement("button");
        deleteBtn.innerText="Delete";
        li.innerText= input.value;
        list.appendChild(li);
        li.appendChild(deleteBtn);
        input.value="";

        deleteBtn.addEventListener("click", ()=>{
            list.removeChild(li);
        });
    });
