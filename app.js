inp = document.querySelector("input");
btn = document.querySelector("button");
list = document.querySelector(".list");

check = document.querySelector("#check");

btn.addEventListener("click", () => {
    if (inp.value.length > 2) {
        li = document.createElement("li");
        li.innerHTML = `  <h2> <input type="checkbox"  name="" id="check"> ${inp.value} </h2> <button id="update"> update </button> `;
        inp.value = null;
        list.prepend(li);
    }

})

list.addEventListener("click", (evt) => {
    // console.dir(evt.target)
    if (evt.target.nodeName == "BUTTON") {
        console.log(evt.target.parentElement);
        let inp = prompt("Put here the Updated Value");
        evt.target.parentElement.innerHTML = ` <h2> <input type="checkbox"  name="" id="check"> ${inp} </h2> <button id="update"> update </button> `
    }

    if (evt.target.nodeName == "INPUT") {
        let el = evt.target.parentElement;
        if (evt.target.checked == true) {
            console.log("some")
            // console.dir( evt.target.parentElement)
            el.style.textDecoration = "line-through";
            el.style.opacity = 0.5;
        }
        else {
            evt.target.parentElement.style.textDecoration = "none";
            el.style.opacity = 1;
        }
    }

})


lis = document.querySelectorAll("li");
for (li of lis) {
    console.log(li)
}


delbtn = document.querySelector(".delete")

delbtn.addEventListener("click", (evt) => {
    let checked = document.querySelectorAll('input[type=checkbox]:checked');
    for(c of checked){
        console.log(c.parentElement.parentElement.remove());
    }
}
)