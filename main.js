const req = document.querySelector(".req");
const billreq = document.querySelector(".billreq");
const userreq = document.querySelector(".userreq");
const servicereq = document.querySelector(".servicereq");

const bill = document.querySelector("#bill");
const user = document.querySelector("#user");
const service = document.querySelector("#service");

const btn = document.querySelector(".calculate");

const ans = document.querySelector(".ans");
const tipbill = document.querySelector(".tipbill");
const totalbill = document.querySelector(".totalbill");
const owebill = document.querySelector(".owebill");

btn.addEventListener(
  "click",
  (calculate = () => {
    if (service.value === "Great") {
      ans.style.display = "block";
      let tip = 0.2 * bill.value;
      let total = tip + parseInt(bill.value);
      let owe = total / parseInt(user.value);
      tipbill.textContent = `Tip Amount $ ${tip}`;
      totalbill.textContent = `Total Amount $  ${total}`;
      owebill.textContent = `Each Person Owes $ ${owe}`;
    } else if (service.value === "Good") {
      ans.style.display = "block";
      let tip = 0.1 * bill.value;
      let total = tip + parseInt(bill.value);
      let owe = total / parseInt(user.value);
      tipbill.textContent = `Tip Amount $ ${tip}`;
      totalbill.textContent = `Total Amount $ ${total}`;
      owebill.textContent = `Each Person Owes $ ${owe}`;
    } else if (service.value === "Bad") {
      let total = tip + parseInt(bill.value);
      let owe = total / parseInt(user.value);
      ans.style.display = "flex";
      tipbill.textContent = `Tip Amount $ ${tip}`;
      totalbill.textContent = `Total Amount $ ${total}`;
      owebill.textContent = `Each Person Owes $ ${owe}`;
    }
  })
);
// if (bill.value === "") {
//     billreq.textContent = "Bill Amount Cannot Be Blank";
//   } else if (user.value === "") {
//     ("Number Of Users Must Be Greater Than Zero");
//   } else if (service.value === "Choose...") {
//     ("You Must Select A Service");
//   } else {

//   }
