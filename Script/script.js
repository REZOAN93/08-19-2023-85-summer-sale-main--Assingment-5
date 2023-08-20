function getTextElementById(elementId) {
  const textField = document.getElementById(elementId);
  const textValue = parseFloat(textField.innerText);
  return textValue;
}

function updateTotalAmountById(elementId, newPrice) {
  const previousAmountText = document.getElementById(elementId);
  const previousValue = parseFloat(previousAmountText.innerText);
  const newTotal = newPrice + previousValue;
  previousAmountText.innerText = newTotal;
}

function setProductNameById(productName) {
  const newTextField = document.getElementById("ProductNameList");
  const newItem = document.createElement("p");
  newItem.style.fontWeight = "700";
  const count = newTextField.childElementCount;
  const productText = document.getElementById(productName).innerText;
  newItem.innerHTML = `${count + 1}. ${productText}`;
  newTextField.appendChild(newItem);
}

function purchaseBtnEnableById() {
  const previousValue = getTextElementById("previousTotal");
  const btnActive = document.getElementById("purchaseBTN");
  if (previousValue > 0) {
    btnActive.removeAttribute("disabled");
  } else {
    btnActive.setAttribute("disabled", true);
  }
}
function applyBtnEnableById() {
  const previousValue = getTextElementById("previousTotal");
  const btnActive = document.getElementById("applyBtn");
  if (previousValue >= 200) {
    btnActive.removeAttribute("disabled");
  } else {
    btnActive.setAttribute("disabled", true);
  }
}

// Function for Btn/////////////////////////////////////////////////////

function handleProductBtn() {
  const productPrice = getTextElementById("productPrice1");
  updateTotalAmountById("previousTotal", productPrice);
  setProductNameById("productName1");
  purchaseBtnEnableById();
  applyBtnEnableById();
}
function handleProduct1Btn() {
  const productPrice = getTextElementById("productPrice2");
  updateTotalAmountById("previousTotal", productPrice);
  setProductNameById("productName2");
  purchaseBtnEnableById();
  applyBtnEnableById();
}
function handleProduct2Btn() {
  const productPrice = getTextElementById("productPrice3");
  updateTotalAmountById("previousTotal", productPrice);
  setProductNameById("productName3");
  purchaseBtnEnableById();
  applyBtnEnableById();
}
function handleSportswear1Btn() {
  const productPrice = getTextElementById("productPrice4");
  updateTotalAmountById("previousTotal", productPrice);
  setProductNameById("productName4");
  purchaseBtnEnableById();
  applyBtnEnableById();
}
function handleSportswear2Btn() {
  const productPrice = getTextElementById("productPrice5");
  updateTotalAmountById("previousTotal", productPrice);
  setProductNameById("productName5");
  purchaseBtnEnableById();
  applyBtnEnableById();
}
function handleSportswear3Btn() {
  const productPrice = getTextElementById("productPrice6");
  updateTotalAmountById("previousTotal", productPrice);
  setProductNameById("productName6");
  purchaseBtnEnableById();
  applyBtnEnableById();
}
function handleFurniture1Btn() {
  const productPrice = getTextElementById("productPrice7");
  updateTotalAmountById("previousTotal", productPrice);
  setProductNameById("productName7");
  purchaseBtnEnableById();
  applyBtnEnableById();
}
function handleFurniture2Btn() {
  const productPrice = getTextElementById("productPrice8");
  updateTotalAmountById("previousTotal", productPrice);
  setProductNameById("productName8");
  purchaseBtnEnableById();
  applyBtnEnableById();
}
function handleFurniture3Btn() {
  const productPrice = getTextElementById("productPrice9");
  updateTotalAmountById("previousTotal", productPrice);
  setProductNameById("productName9");
  purchaseBtnEnableById();
  applyBtnEnableById();
}

// Coupon Work

function handleCouponDiscountAdd() {
  const couponText = document.getElementById("couponId").value;
  if (couponText === "SELL200") {
    const totalValue = getTextElementById("previousTotal");
    const discountAmount = totalValue * 0.2;
    const discountFieldText = document.getElementById("PrevDiscountTotal");
    discountFieldText.innerText = parseFloat(discountAmount.toFixed(2));
    const total = totalValue - discountAmount;
    const totalTextField = document.getElementById("totalAmount");
    totalTextField.innerText = total;
  } else {
    alert("Please provide a valid coupon number");
  }
}

function handleClear() {
  window.location.reload();
}
