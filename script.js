function search() {
    let search = document.getElementById("search").value;
    let link = document.getElementById("link");
    link.href = `https://google.com/search?q= ${search}`
    link.target = _blank;
}
let border = document.getElementById("search")

function saveSearch() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    localStorage.setItem("searchInput", searchValue);
    switch (searchValue) {
        case "xxx":
            border.style.border = "1px solid red";
            border.classList.add("vibrate");
            setTimeout(() => {
                border.classList.remove("vibrate");
                alerts()
            }, Infinity);
            function alerts() {
                alert("Don't Search This Things")
            }
            break;
        case "xxx videos" :
            border.style.border = "1px solid red";
            border.classList.add("vibrate");
            setTimeout(() => {
                border.classList.remove("vibrate");
                alerts()
            }, Infinity);
            function alerts() {
                alert("Don't Search This Things")
            }
            break;
        case "xhamster":
            border.style.border = "1px solid red";
            border.classList.add("vibrate");
            setTimeout(() => {
                border.classList.remove("vibrate");
                alerts()
            }, Infinity);
            function alerts() {
                alert("Don't Search This Things")
            }
            break;
        case "pornhub" :
            border.style.border = "1px solid red";
            border.classList.add("vibrate");
            setTimeout(() => {
                border.classList.remove("vibrate");
                alerts()
            }, Infinity);
            function alerts() {
                alert("Don't Search This Things")
            }
            break;
        case "sex":
            border.style.border = "1px solid red";
            border.classList.add("vibrate");
            setTimeout(() => {
                border.classList.remove("vibrate");
                alerts()
            }, Infinity);
            function alerts() {
                alert("Don't Search This Things")
            }
            break;
        case "nudes" :
            border.style.border = "1px solid red";
            border.classList.add("vibrate");
            setTimeout(() => {
                border.classList.remove("vibrate");
                alerts()
            }, Infinity);
            function alerts() {
                alert("Don't Search This Things")
            }
            break;
        case "nudes" :
            border.style.border = "1px solid red";
            border.classList.add("vibrate");
            setTimeout(() => {
                border.classList.remove("vibrate");
                alerts()
            }, Infinity);
            function alerts() {
                alert("Don't Search This Things")
            }
            break;
        case "porn" :
            border.style.border = "1px solid red";
            border.classList.add("vibrate");
            setTimeout(() => {
                border.classList.remove("vibrate");
                alerts()
            }, Infinity);
            function alerts() {
                alert("Don't Search This Things")
            }
            break;
        case "18+" :
            border.style.border = "1px solid red";
            border.classList.add("vibrate");
            setTimeout(() => {
                border.classList.remove("vibrate");
                alerts()
            }, Infinity);
            function alerts() {
                alert("Don't Search This Things")
            }
            break;
    
        default:
            border.style.border = "0.3px solid white"; 
        border.classList.remove("vibrate");
            break;
    }
}
