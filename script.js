(() => {
    let myNumb = 0;
    let myNumbPlus = 1;
    let counter = document.getElementById("counter");
    let button = document.getElementsByTagName("button")[0];
    let counterValue = document.getElementById("counter").value;
    let upgrade1 = document.getElementById("upgrade1");
    let upgrade2 = document.getElementById("upgrade2");
    let upgrade3 = document.getElementById("upgrade3");
    let upgrade4 = document.getElementById("upgrade4");
    let upgrade5 = document.getElementById("upgrade5");
    let firstUpgrade
    console.log(button);

    button.addEventListener("click", () => {
        myNumb += myNumbPlus;
        counter.innerHTML = myNumb;
    })
    upgrade1.addEventListener("click", () => {
        myNumbPlus *= 2;
    })
    upgrade2.addEventListener("click", () => {
        setInterval(function () {
            myNumb += 1;
        },1000);
    })
    upgrade3.addEventListener("click", () => {

    })

})();