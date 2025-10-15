// getting donate card values into variables
const donateCard1=document.getElementById('currentDonation1').innerText;
const donateCard2=document.getElementById('currentDonation2').innerText;
const donateCard3=document.getElementById('currentDonation3').innerText;

const donateCard1Number=parseFloat(donateCard1);
const donateCard2Number=parseFloat(donateCard2);
const donateCard3Number=parseFloat(donateCard3);

const remainingDonation=document.getElementById('remainingAmount').innerText;
let remainingNumber=parseFloat(remainingDonation);
console.log(donateCard1Number, donateCard2Number, donateCard3Number);
console.log(remainingDonation, remainingNumber);