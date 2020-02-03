let formElement = document.querySelector("form");
let name = document.querySelector("#name");
let car = document.querySelector("#car-field");
let carInfo = document.querySelectorAll(".carInfo");
let carName = document.querySelector(".car-group")
let carYear = document.querySelector("#car-year");
let carMake = document.querySelector("#car-make");
let carModel = document.querySelector("#car-model");
let parkingDate = document.querySelector("#start-date");
let parkingDays = document.querySelector("#days");
let number = document.querySelector("#credit-card");
let cvvValid = document.querySelector("#cvv");
let cardExp = document.querySelector("#expiration");




formElement.addEventListener("submit", function (e) {
    e.preventDefault()
    nameValid(name)
    emptyCarFields(carInfo)
    carYearValid(carYear)
    carMakeValid(carMake)
    carModelValid(carModel)
    dateValidation(parkingDate)
    daysValidation(parkingDays)
    validateCardNumber(number)
    cvvValidation(cvvValid)

})

let forName = document.createElement('div');

function nameValid(name) {
    if (name.value === "") {
        forName.textContent = "Name is required";
        name.parentElement.appendChild(forName);
        name.parentElement.classList.add("input-invalid");
        name.parentElement.classList.remove("input-valid");



    } else if (name.value.match(/^[a-zA-Z ]{2,30}$/)) {
        name.parentElement.classList.add("input-valid");
        name.parentElement.classList.remove("input-invalid")
        name.parentElement.removeChild(forName);

    } else {
        name.parentElement.classList.add("input-invalid");
        name.parentElement.classList.remove("input-valid");


        forName.textContent = "Please enter valid name";
        name.parentElement.appendChild(forName);
    }
}





function emptyCarFields(carInfo) {
    for (let info of carInfo) {
        if (info.value != "") {
            carName.style.color = "rgb(0,198,67)";
        } else {
            carName.style.color = "red";
        }
    }
}

let year = document.createElement("p");

function carYearValid(carYear) {
    if (carYear.value === "") {
        carYear.parentElement.classList.add("input-invalid");
        carYear.parentElement.classList.remove("input-valid");
        year.textContent = "Required";
        carYear.parentElement.appendChild(year);

    } else if (!carYear.value.match(/^[0-9]+$/)) {
        carYear.parentElement.classList.remove("input-valid");
        carYear.parentElement.classList.add("input-invalid");
        year.textContent = "Invalid year";
        carYear.parentElement.appendChild(year);

    } else if (carYear.value < 1900 || carYear.value > 2020) {
        carYear.parentElement.classList.remove("input-valid");
        carYear.parentElement.classList.add("input-invalid");
        year.textContent = "1900-2020 only";
        carYear.parentElement.appendChild(year);
    } else {
        carYear.parentElement.classList.remove("input-invalid");
        carYear.parentElement.classList.add("input-valid");
        carYear.parentElement.removeChild(year);
    }
}



let make = document.createElement("p");

function carMakeValid(carMake) {
    if (carMake.value === "") {
        carMake.parentElement.classList.add("input-invalid");
        carMake.parentElement.classList.remove("input-valid");
        make.textContent = "Required";
        carMake.parentElement.appendChild(make);

    } else {
        carMake.parentElement.classList.remove("input-invalid")
        carMake.parentElement.classList.add("input-valid");
        carMake.parentElement.removeChild(make);
    }
}
let model = document.createElement("p");

function carModelValid(carModel) {
    if (carModel.value === "") {
        carModel.parentElement.parentElement.parentElement.classList.add("input-invalid");
        carModel.parentElement.parentElement.parentElement.classList.remove("input-valid")
        model.textContent = "Required";
        carModel.parentElement.appendChild(model);

    } else {
        carModel.parentElement.classList.remove("input-invalid")
        carModel.parentElement.classList.add("input-valid");
        carModel.parentElement.removeChild(model);
    }
}


let date = document.createElement("p");

function dateValidation(parkingDate) {
    let currentDate = new Date();
    let shortDate = currentDate.toLocaleDateString('en-US');
    console.log(shortDate)
    if (parkingDate.value === "") {
        parkingDate.parentElement.classList.add("input-invalid");
        parkingDate.parentElement.classList.remove("input-valid");
        date.textContent = "Date is required";
        parkingDate.parentElement.appendChild(date);

    } else if (parkingDate.value < shortDate.value) {
        parkingDate.parentElement.classList.add("input-invalid");
        parkingDate.parentElement.classList.remove("input-valid");
        date.textContent = "Invalit date";
        parkingDate.parentElement.appendChild(date);
    } else {
        parkingDate.parentElement.classList.add("input-valid");
        parkingDate.parentElement.classList.remove("input-invalid");
        parkingDate.parentElement.removeChild(date);
    }
}

let day = document.createElement("p");


function daysValidation(parkingDays) {
    if (parkingDays.value === "") {
        parkingDays.parentElement.classList.add("input-invalid");
        parkingDays.parentElement.classList.remove("input-valid");
        day.textContent = "Number of days is required";
        parkingDays.parentElement.appendChild(day);

    } else if (!parkingDays.value.match(/^[0-9]+$/)) {
        parkingDays.parentElement.classList.remove("input-valid");
        parkingDays.parentElement.classList.add("input-invalid");
        day.textContent = "Enter valid numbers";
        parkingDays.parentElement.appendChild(day);

    } else if (parkingDays.value < 1 || parkingDays.value > 30) {
        parkingDays.parentElement.classList.remove("input-valid");
        parkingDays.parentElement.classList.add("input-invalid");
        day.textContent = "Can't park more than 30 days";
        parkingDays.parentElement.appendChild(day);
    } else {
        parkingDays.parentElement.classList.remove("input-invalid");
        parkingDays.parentElement.classList.add("input-valid");
        parkingDays.parentElement.removeChild(day);
    }
}
let creditCard = document.createElement("p");

function validateCardNumber(number) {
    if (number.value === "") {
        number.parentElement.classList.add("input-invalid");
        number.parentElement.classList.remove("input-valid");
        creditCard.textContent = "Credit Card number is required";
        number.parentElement.appendChild(creditCard);

    } else if (!number.value.match(/^[0-9]+$/)) {
        number.parentElement.classList.remove("input-valid");
        number.parentElement.classList.add("input-invalid");
        creditCard.textContent = "Enter valid numbers";
        number.parentElement.appendChild(creditCard);

    } else if (number.value.length > 5 || number.value.length < 5) {
        number.parentElement.classList.remove("input-valid");
        number.parentElement.classList.add("input-invalid");
        creditCard.textContent = "Must be a 5 digit number";
        number.parentElement.appendChild(creditCard);
    } else {
        number.parentElement.classList.remove("input-invalid");
        number.parentElement.classList.add("input-valid");
        number.parentElement.removeChild(creditCard);
    }
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

let cvv = document.createElement("p");

function cvvValidation(cvvValid) {
    if (cvvValid.value === "") {
        cvvValid.parentElement.classList.add("input-invalid");
        cvvValid.parentElement.classList.remove("input-valid");
        cvv.textContent = "CVV is required";
        cvvValid.parentElement.appendChild(cvv);

    } else if (cvvValid.length == 3 && cvvValid.value.match(/^[0-9]+$/)) {
        cvvValid.parentElement.classList.remove("input-invalid");
        cvvValid.parentElement.classList.add("input-valid");
        cvvValid.parentElement.removeChild(cvv);
    } else {
        cvvValid.parentElement.classList.add("input-invalid");
        cvvValid.parentElement.classList.remove("input-valid");
        cvv.textContent = "Enter valid CVV";
        cvvValid.parentElement.appendChild(cvv);
    }
}


let expiration = document.createElement("p");

function expValidation(cvvValid) {
    if (cvvValid.value === "") {
        cvvValid.parentElement.classList.add("input-invalid");
        cvvValid.parentElement.classList.remove("input-valid");
        cvv.textContent = "Expiration date is required";
        cvvValid.parentElement.appendChild(cvv);

    } else if (cvvValid.length == 3 && cvvValid.value.match(/^[0-9]+$/)) {
        cvvValid.parentElement.classList.remove("input-invalid");
        cvvValid.parentElement.classList.add("input-valid");
        cvvValid.parentElement.removeChild(cvv);
    } else {
        cvvValid.parentElement.classList.add("input-invalid");
        cvvValid.parentElement.classList.remove("input-valid");
        cvv.textContent = "Enter valid CVV";
        cvvValid.parentElement.appendChild(cvv);
    }
}