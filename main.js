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
    if (bill.value === "") {
      req.style.display = "block";
      billreq.textContent = "Bill Amount Cannot Be Blank";
    } else {
      billreq.textContent = "";
      req.style.display = "none";
    }
    if (user.value === "") {
      req.style.display = "block";
      userreq.textContent = "Number Of Users Must Be Greater Than Zero";
    } else {
      req.style.display = "none";
      userreq.textContent = "";
    }
    if (service.value === "Choose...") {
      req.style.display = "block";
      servicereq.textContent = "You Must Select A Service";
    } else {
      req.style.display = "none";
      servicereq.textContent = "";
    }
    if (service.value === "Great") {
      ans.style.display = "block";
      let tip = 0.2 * bill.value;
      let total = tip + parseInt(bill.value);
      let owe = total / parseInt(user.value);
      tipbill.textContent = `Tip Amount $ ${tip.toFixed(2)}`;
      totalbill.textContent = `Total Amount $  ${total.toFixed(2)}`;
      owebill.textContent = `Each Person Owes $ ${owe.toFixed(2)}`;
    } else if (service.value === "Good") {
      ans.style.display = "block";
      let tip = 0.1 * bill.value;
      let total = tip + parseInt(bill.value);
      let owe = total / parseInt(user.value);
      tipbill.textContent = `Tip Amount $ ${tip.toFixed(2)}`;
      totalbill.textContent = `Total Amount $ ${total.toFixed(2)}`;
      owebill.textContent = `Each Person Owes $ ${owe.toFixed(2)}`;
    } else if (service.value === "Bad") {
      ans.style.display = "block";
      let tip = 0.02 * bill.value;
      let total = tip + parseInt(bill.value);
      let owe = total / parseInt(user.value);
      tipbill.textContent = `Tip Amount $ ${tip.toFixed(2)}`;
      totalbill.textContent = `Total Amount $ ${total.toFixed(2)}`;
      owebill.textContent = `Each Person Owes $ ${owe.toFixed(2)}`;
    }
  })
);
