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
    let myAudio = new Audio("audio.mp3/audio1.mp3");

    button.addEventListener("click", () => {
        myNumb += myNumbPlus;
        counter.innerHTML = myNumb;
    })
    upgrade1.addEventListener("click", () => {
        myNumbPlus *= 2;
        price = 10;
        myAudio.play();
    })
    upgrade2.addEventListener("click", () => {
        myAudio.play();
        price = 100;
        setInterval(function () {
            counter.innerHTML = myNumb;
            myNumb += 1
        },1000);
    })
    upgrade3.addEventListener("click", () => {
        myAudio.play();
        setTimeout(() => {
            myNumbPlus *=10;
            price = 1000;
            let myTimer = 30;
            console.log(myTimer);
            setInterval(() => {
                if(myTimer === 0) {
                    clearInterval();
                }
                upgrade3.innerHTML = myTimer;
                myTimer -= 1;
            }, 1000)
        }, 1000)
        clearTimeout();
    })
    upgrade4.addEventListener("click", () => {
        myNumbPlus *= 3;
        myAudio.play();
        price = 5000;
    })
    upgrade5.addEventListener("click", () => {
        myAudio.play();
        setInterval(function () {
            counter.innerHTML = myNumb;
            myNumb += 10;
            price = 10000;
        }, 1000)
    })

    function upgrade(
	{
		if(myNumb >= price)
		{
			myNumb -= price;
			price *= 2;
			counter.innerHTML.myNumb = myNumb;
		}
		else
		{
			alert("Not enough cookies!");
		}
	})

})();