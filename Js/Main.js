// common functionality

function UpdateProductNumber(product, isIncreasing, price) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;

  if (isIncreasing == true) {
    productInput.value = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productInput.value = parseInt(productNumber) - 1;
  }
  // Update product total
  productNumber = productInput.value;
  const productTotal = document.getElementById(product + "-total");

  //   if (product + "-number" == "phone-number") {
  //     productTotal.innerText = productNumber * 1219;
  //   } else if (product + "-number" == "case-number") {
  //     productTotal.innerText = productNumber * 59;
  //   }

  productTotal.innerText = productNumber * price;

  // Calculate total
  // calculateTotal();
}

// function getInputValue(product) {
//   const productInput = getElementById(product + "-number");
//  const productNumber = parseInt(productInput.value);

//   return productNumber;
// }

// function calculateTotal() {
//   const phoneTotal = getInputValue("phone") * 1219;
//   const caseTotal = getInputValue("case") * 59;
//   const subTotal = phoneTotal + caseTotal;

//   // Update on the sub total price html
//   document.getElementById("sub-total").innerText = subTotal;
// }

function calculateTotal() {
  const phoneInput = document.getElementById("phone-number");
  const phoneNumber = parseInt(phoneInput.value);
  const phoneTotal = phoneNumber * 1219;

  const caseInput = document.getElementById("case-number");
  const caseNumber = parseInt(caseInput.value);
  const caseTotal = caseNumber * 59;

  const subTotal = phoneTotal + caseTotal;
  document.getElementById("sub-total").innerText = subTotal;

  const taxTotal = parseFloat(subTotal / 10);
  document.getElementById("total-tax").innerText = taxTotal;

  const totalPrice = subTotal + taxTotal;
  document.getElementById("total-price").innerText = totalPrice;
}

// Phone increage and decrage events handler

document
  .getElementById("phone-plus-btn")
  .addEventListener("click", function () {
    UpdateProductNumber("phone", true, 1219);
    calculateTotal();
  });

document
  .getElementById("phone-mainus-btn")
  .addEventListener("click", function () {
    UpdateProductNumber("phone", false, 1219);
    calculateTotal();
  });

//   Case increage and decrage events handler

document.getElementById("case-plus-btn").addEventListener("click", function () {
  UpdateProductNumber("case", true, 59);
  calculateTotal();
});

document
  .getElementById("case-mainus-btn")
  .addEventListener("click", function () {
    UpdateProductNumber("case", false, 59);
    calculateTotal();
  });
