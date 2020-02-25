const check = document.getElementById("mycheck");
const text = document.getElementById("mytext");
const arrow = document.getElementById("myarrow");

check.onclick = () => {
    text.classList.toggle("isShow");
    arrow.classList.toggle("isShow");
}