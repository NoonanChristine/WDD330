function getData(type) {
    //fetch data from API
    let url = "https://acnhapi.com/v1/ + type"
    fetch(url).then((response) => {
            if (!response.ok) {
                alert("network fail")
                throw Error();
            }
            return response.json(); //also a promise
        })
        .then((data) => {
            //console.log(data);
            let currentDate = new Date()
            let currentMonth = currentDate.getMonth() + 1; // 1-Jan, 2-Feb
            let result = [];
            //console.log(month);
            for (const item in data) { //each object in object
                //console.log(data[item]);
                let availability = data[item].availability["month-array-northern"];
                availability.map((month) => {
                    if (month == currentMonth) {
                        result.push(data[item]);
                    }
                })
                //console.log(availability);
            }
            //console.log(result);
            let itemContainer = document.querySelector(".item-container");
            for (let i = 0; i < result.length; i++) {
                let bug = result[i];
                let name = bug.name["name-USen"];
                let price = bug.price;
                let sellOrSave = price < 800 ? "sell" : "save";
                let imageURI = bug["image_uri"];
                let bugDiv = `
                <div class="item">
                    <img src=${imageURI} alt="bug image"/>
                    <div class="name">${name}</div>
                    <div class="price">${price}</div>
                    <div class="sellOrSave">${sellOrSave}</div>
                </div>`
                itemContainer.innerHTML += bugDiv;
            }
        })
        .catch(err => console.log(err))
}

export {
    getData
};