(() => {
    /* //////////////////////VARIABLES////////////////////////////*/
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
    let myAudio = new Audio("audio.mp3/audio1.mp3");
    let myAudio2 = new Audio("audio.mp3/sound2.mp3")
    let myPrice1 = 50;
    let myPrice2 = 150;
    let myPrice3 = 300;
    let myPrice4 = 500;
    let myPrice5 = 1000;
    let myTimer = 30;
    let myNumbPlus2 = 0;
    let coin0 = document.getElementById("littleCoin0");
    let coin1 = document.getElementById("littleCoin1");
    let coin2 = document.getElementById("littleCoin2");
    /* ///////////////////COIN FALLING FUNCTIONS/////////////////////*/

    function myCoin0() {
        let pos = 270;
        let id0 = setInterval(frame0, 0.2);
        function frame0() {
            if (pos == 640) {
                clearInterval(id0);
                coin0.style.top = 270 + "px";
            }
            else {
                pos += 2;
                coin0.style.top = pos + "px";
            }
        }
    }
    function myCoin1() {
        let pos = 270;
        let id1 = setInterval(frame1, 0.2);
        function frame1() {
            if (pos == 640) {
                clearInterval(id1);
                coin1.style.top = 270 + "px";
            }
            else {
                pos += 2;
                coin1.style.top = pos + "px";
            }
        }
    }
    function myCoin2() {
        let pos = 270;
        let id2 = setInterval(frame2, 2);
        function frame2() {
            if (pos == 640) {
                clearInterval(id2);
                coin2.style.top = 270 + "px";
            }
            else {
                pos += 2;
                coin2.style.top = pos + "px";
            }
        }
    }
    let numberOfUpgrade1 = 0;
    let numberOfUpgrade2 = 0;
    let numberOfUpgrade4 = 0;
    let numberOfUpgrade5 = 0;
/* //////////////////////////////COIN FALL ANIMATION/////////////////////////*/
    button.addEventListener("click", () => {
        myNumb += myNumbPlus;
        counter.innerHTML = myNumb;
        let myCone = myNumb%3;
        
        
            if (myCone === 0) {
                myCoin0();
                console.log("0");
            }
            else if (myCone === 1) {
                myCoin1();
                console.log("1");
            }
            else if (myCone === 2) {
                myCoin2();
                console.log("2");
            }
    })
    setInterval(() => {
        if (myNumb < myPrice1) {
            document.getElementById("updatePriceButton1").setAttribute("disabled", "");
            document.getElementById("updatePriceButton1").removeAttribute("enabled", "");
            document.getElementById("updatePriceButton1").addEventListener("click", () => {
                function myPopup() {
                    let popup = document.getElementById("updatePriceButton1");
                    popup.classList.toggle("show");
                }
                myPopup();
            })
        }
        /*////////////////////////BUTTON ENABLED/DISABLED///////////////////////*/
        else if (myNumb >= myPrice1) {
            document.getElementById("updatePriceButton1").setAttribute("enabled", "");
            document.getElementById("updatePriceButton1").removeAttribute("disabled", "");
        }
        if (myNumb < myPrice2) {
            document.getElementById("updatePriceButton2").setAttribute("disabled", "");
            document.getElementById("updatePriceButton2").removeAttribute("enabled", "");
        }
        else if (myNumb >= myPrice2) {
            document.getElementById("updatePriceButton2").setAttribute("enabled", "");
            document.getElementById("updatePriceButton2").removeAttribute("disabled", "");
        }
        if (myNumb < myPrice3) {
            document.getElementById("updatePriceButton3").setAttribute("disabled", "");
            document.getElementById("updatePriceButton3").removeAttribute("enabled", "");
        }
        else if (myNumb >= myPrice3) {
            document.getElementById("updatePriceButton3").setAttribute("enabled", "");
            document.getElementById("updatePriceButton3").removeAttribute("disabled", "");
        }
        if (myNumb < myPrice4) {
            document.getElementById("updatePriceButton4").setAttribute("disabled", "");
            document.getElementById("updatePriceButton4").removeAttribute("enabled", "");
        }
        else if (myNumb >= myPrice4) {
            document.getElementById("updatePriceButton4").setAttribute("enabled", "");
            document.getElementById("updatePriceButton4").removeAttribute("disabled", "");
        }
        if (myNumb < myPrice5) {
            document.getElementById("updatePriceButton5").setAttribute("disabled", "");
            document.getElementById("updatePriceButton5").removeAttribute("enabled", "");
        }
        else if (myNumb >= myPrice5) {
            document.getElementById("updatePriceButton5").setAttribute("enabled", "");
            document.getElementById("updatePriceButton5").removeAttribute("disabled", "");
        }
    }, 100);
/*////////////////////////////////////////UPGRADES//////////////////////////*/
    upgrade1.addEventListener("click", () => {
        myNumbPlus *= 2;
        myAudio.play();
        myNumb -= myPrice1;
        counter.innerHTML = myNumb;
        myPrice1 *= 3;
        document.getElementById("updatePrice1").innerHTML = myPrice1;
        numberOfUpgrade1 += 1;
        document.getElementById("numberOfUpgrade1").innerHTML = numberOfUpgrade1;
    })
    upgrade2.addEventListener("click", () => {
        myAudio.play();
        myNumb -= myPrice2;
        myPrice2 *= 2;
        numberOfUpgrade2 += 1;
        counter.innerHTML = myNumb;
        document.getElementById("updatePrice2").innerHTML = myPrice2;
        document.getElementById("numberOfUpgrade2").innerHTML = numberOfUpgrade2;
        setInterval(function () {
            counter.innerHTML = myNumb;
            myNumb += 1
        }, 1000);
    })
    upgrade3.addEventListener("click", () => {
        myAudio.play();
        myNumb -= myPrice3;
        counter.innerHTML = myNumb;
        myPrice3 *= 2;
        myNumbPlus2 = myNumbPlus *3;
        button.addEventListener("click", () => {
            myNumb += myNumbPlus2;
            myNumb -= myNumbPlus
        });
        
        let myInt = setInterval(() => {
            myAudio2.play();
            document.getElementsByClassName("coinclicker")[0].innerHTML = myTimer;
            myTimer -= 1;
            if (myTimer === -1) {
                clearInterval(myInt);
                document.getElementsByClassName("coinclicker")[0].innerHTML = "Coin Clicker";
                button.addEventListener("click", () => {
                    myNumb += myNumbPlus;
                    myNumb -= myNumbPlus2;
                    myTimer = 30;
                })
            }
        }, 1000)
    })
    upgrade4.addEventListener("click", () => {
        myNumb -= myPrice4;
        myPrice4 *= 2;
        myAudio.play();
        counter.innerHTML = myNumb;
        myNumbPlus *= 3;
        numberOfUpgrade4 += 1;
        document.getElementById("updatePrice4").innerHTML = myPrice4;
        document.getElementById("numberOfUpgrade4").innerHTML = numberOfUpgrade4;
    })
    upgrade5.addEventListener("click", () => {
        myAudio.play();
        myNumb -= myPrice5;
        myPrice5 *= 2;
        numberOfUpgrade5 += 1;
        counter.innerHTML = myNumb;
        document.getElementById("updatePrice5").innerHTML = myPrice5;
        document.getElementById("numberOfUpgrade5").innerHTML = numberOfUpgrade5;
        setInterval(function () {
            counter.innerHTML = myNumb;
            myNumb += 10;
        }, 1000)
    })


})();