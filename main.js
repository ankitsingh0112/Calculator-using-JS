let btn = document.getElementsByClassName("btn");
let display = document.getElementById("display");
let answer = "";

// logic :-

Array.from(btn).forEach((element) => {
    element.addEventListener("click", (e) => {
        let val = e.target.innerHTML;
        if(val == "=") {
            answer = eval(answer);
            display.value = answer;
        }else if(val == "DEL") {
            answer = answer.slice(0,-1);
            display.value = answer
        }else if(val == "C") {
            display.value = "";
            answer = "";
        }else {
            answer += val;
            display.value = answer
        }
    })
})