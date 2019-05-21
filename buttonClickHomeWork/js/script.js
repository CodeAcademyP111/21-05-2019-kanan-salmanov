var button = document.querySelector("button");
var ul = document.querySelector("ul");
var input = document.querySelector(".myInput");



button.addEventListener("click", function () {
    for (var j = 0; j <= ul.childElementCount+input.value; j++) {
        if (ul.childElementCount != "") {
            ul.removeChild(ul.lastElementChild);
        }
    }

    console.log(ul.childElementCount);
    console.log(input.value);
    for (var i = 1; i <= input.value; i++) {

        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = i;
        ul.appendChild(li);
    }
    input.value = "";

    console.log(ul.childElementCount);



})