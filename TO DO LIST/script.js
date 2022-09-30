let i = 0;
let j = 0;
let x = 0;
function submit_task() {
    if (document.getElementById("task_holder").value != "") {
        let p = document.querySelectorAll("p");
        let a = document.querySelectorAll("a");
        let c = document.querySelectorAll("input[type=checkbox]");

        p[i].innerHTML = document.getElementById("task_holder").value;
        a[j].innerHTML = "x";
        c[x].style.display = "inline";
        i++;
        j++;
        x++;
        document.getElementById("task_holder").value = "";
    }


}
function delete_task(st) {
    let p = document.querySelectorAll("p");
    let a = document.querySelectorAll("a");
    let c = document.querySelectorAll("input[type=checkbox]");
    p[st].innerHTML = "";
    a[st].innerHTML = "";
    c[st].style.display = "none";
    for (let k = st; k < p.length; k++) {
        if (k == p.length - 1) {
            p[k].innerHTML = "";
            a[k].innerHTML = "";
            c[k].style.display = "none"
        }
        else {
            p[k].innerHTML = p[k + 1].innerHTML;
            a[k].innerHTML = a[k + 1].innerHTML;
            c[k].style.display = c[k + 1].style.display;
        }
    }
    j--;
    i--;
    x--;

}

function task_complete() {
    document.getElementById("btn1").style.borderBottom = "2px solid black";
    document.getElementById("btn3").style.borderBottom = "0px";
    document.getElementById("btn2").style.borderBottom = "0px";
    let p = document.querySelectorAll("p");
    let a = document.querySelectorAll("a")
    let c = document.querySelectorAll("input[type=checkbox]");
    for (let l = 0; l < p.length; l++) {
        p[l].style.display = "inline";
        a[l].style.display = "inline";
        c[l].style.display = "inline";
    }
    for (let k = 0; k < p.length; k++) {
        if (c[k].checked != true) {
            p[k].style.display = "none";
        }
        a[k].style.display = "none";
        c[k].style.display = "none";

    }

}
function task_pending() {
    document.getElementById("btn1").style.borderBottom = "0px";
    document.getElementById("btn3").style.borderBottom = "2px solid black";
    document.getElementById("btn2").style.borderBottom = "0px";
    let p = document.querySelectorAll("p");
    let a = document.querySelectorAll("a")
    let c = document.querySelectorAll("input[type=checkbox]");

    for (let l = 0; l < p.length; l++) {
        p[l].style.display = "inline";
        a[l].style.display = "inline";
        c[l].style.display = "inline";
    }
    for (let k = 0; k < p.length; k++) {
        if (c[k].checked == true) {
            p[k].style.display = "none";
        }
        a[k].style.display = "none";
        c[k].style.display = "none";

    }

}
function all_task() {
    document.getElementById("btn1").style.borderBottom = "0px";
    document.getElementById("btn3").style.borderBottom = "0px";
    document.getElementById("btn2").style.borderBottom = "2px solid black";
    let p = document.querySelectorAll("p");
    let a = document.querySelectorAll("a")
    let c = document.querySelectorAll("input[type=checkbox]");
    for (let l = 0; l < p.length; l++) {
        p[l].style.display = "inline";
        a[l].style.display = "inline";
        if (p[l].innerHTML != "")
            c[l].style.display = "inline";
    }
}

function check_anime(st) {
    let p = document.querySelectorAll("p");
    let c = document.querySelectorAll("input[type=checkbox]");
    p[st].style.transition = "transform 1s";
    p[st].style.transform = "rotateX(360deg)";
}
