(() => {
    let myNumb = 0;
    let myNumbPlus = 1;
    let counter = document.getElementById("counter");
    let button = document.getElementsByTagName("button")[0];
    let counterValue = document.getElementById("counter").value;
    let upgrade1 = document.getElementById("updatePriceButton1");
    let upgrade2 = document.getElementById("updatePriceButton2");
    let upgrade3 = document.getElementById("updatePriceButton3");
    let upgrade4 = document.getElementById("updatePriceButton4");
    let upgrade5 = document.getElementById("updatePriceButton5");
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
            counter.innerHTML = myNumb;
            myNumb += 1
        },1000);
    })
    /*upgrade3.addEventListener("click", () => {
        let myTimeout = setTimeout(function {
            //counter.innerHTML = myNumb;
            //myNumb += myNumbPlus;
            //myNumbPlus *=10;
        //},30000);
        //clearTimeout(myTimeout);
    })*/
    upgrade4.addEventListener("click", () => {
        myNumbPlus *= 3;
    })
    upgrade5.addEventListener("click", () => {
        setInterval(function () {
            counter.innerHTML.myNumb = myNumb;
            myNumb += 3;
        }, 1000)
    })

})();