import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { List } from "./classes/List.js";
import { FormatterInterface } from "./interfaces/FormatterInterface.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new List(ul);

const hasInput = (): boolean => {
  return toFrom.value != "" && details.value != "" && amount.value != null;
};

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  let doc: FormatterInterface;
  if (hasInput()) {
    if (type.value === "invoice") {
      doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
      doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value);
    form.reset();
  } else {
    alert("Please, make sure you have input data in all the fields");
  }
});
