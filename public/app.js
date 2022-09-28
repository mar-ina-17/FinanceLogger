import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { List } from "./classes/List.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector(".item-list");
const list = new List(ul);
const hasInput = () => {
    return toFrom.value != "" && details.value != "" && amount.value != null;
};
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let doc;
    if (hasInput()) {
        if (type.value === "invoice") {
            doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        }
        else {
            doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        }
        list.render(doc, type.value);
        form.reset();
    }
    else {
        alert("Please, make sure you have input data in all the fields");
    }
});
