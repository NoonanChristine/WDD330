function getData(type) {  //type is going to be bug or fish
    let url = "https://acnhapi.com/v1/" + type;

    //local storage -> amount = 0

    let amount = localStorage.getItem("amount");
    if(amount !=null) {
        document.querySelector("#amount").innerText = amount;
    } else {
        localStorage.setItem("amount", 0); //value setting to key ->0.  look in application in developer tools
    }

    //fetch data from API
    fetch(url).then((response) => {
            if (!response.ok) {
                alert("network fail")
                throw Error(); //will be thrown to catch block
            }
            return response.json(); //also a promise
        })
        .then((data) => {
            //console.log(data);
            let currentDate = new Date()  //new date object
            let currentMonth = currentDate.getMonth() + 1; // 1-Jan, 2-Feb, etc. getMonth() is the method
            let result = []; //to store results of bugs that are available in the current month
            //console.log(currentMonth);
            for (const item in data) { //each object in object
                //console.log(data[item]);  //getting a property out of an object. returns name of property. we now have our bugs
                let availability = data[item].availability["month-array-northern"]; //returns the array of months available for each
                availability.map((month) => { //loop through the array and the array has the month
                    if (month == currentMonth) {
                        result.push(data[item]); //push array of objects that are available in the current month into the result array
                    }
                })
                //console.log(availability);
            }
            //console.log(result);
            let itemContainer = document.querySelector(".item-container"); //append all of bugs into this div container
            for (let i = 0; i < result.length; i++) {  //loop through and append to item-container. don't need new variable to loop through an array
                let bug = result[i];
                let name = bug.name["name-USen"];
                let price = bug.price;
                let sellOrSave = price < 800 ? "sell" : "save"; //? is the 'if'. only works if there are two conditions
                let imageURI = bug["image_uri"]; //because of underscore have to use different syntax
                //create template string
                let handleSell = `var currAmountDiv = document.querySelector('#amount'); var currAmount = localStorage.getItem("amount"); localStorage.setItem("amount", currAmount); currAmountDiv.innerText = currAmount;`;
                let bugDiv = ` 
                <div class="item">
                    <img src=${imageURI} alt="bug image"/>
                    <div class="name">${name}</div>
                    <div class="price">${price}</div>
                    <div class="sellOrSave">${sellOrSave}</div>
                    <button onclick="${handleSell}">sell</button>
                    <button>save</button>
                </div>`
                itemContainer.innerHTML += bugDiv;
            }
        })
        .catch(err => console.log(err))
}

export {
    getData
};