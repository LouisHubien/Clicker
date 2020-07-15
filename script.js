(() => {
    let myNumb = 0;
    let counter = document.getElementById("counter");
    let button = document.getElementsByTagName("button")[0];
    let counterValue = document.getElementById("counter").value;
    console.log(button);

    button.addEventListener("click", () => {
        myNumb += 1;
        counter.innerHTML = myNumb;
    });
})();