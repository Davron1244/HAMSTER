let hamsterCounter = document.getElementById("hamsterCounter");
let boots = document.getElementsByClassName("variable")[0];

hamsterCounter.addEventListener("click", function () {
    let currentValue = parseInt(boots.textContent, 10);
    if (!isNaN(currentValue) && currentValue > 0) {
        boots.textContent = currentValue - 1;
    }
});
