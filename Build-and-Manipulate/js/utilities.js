
// toggle like btn
function toggleOne(id){
    const click=document.getElementById(id);
    const clickValue=click.dataset.type;

    if(clickValue==='btn-history'){
        // btn properties add/remove on clicks
        click.classList.add('text-[#000000]', 'bg-btn-primary');
        const notClicked=document.getElementById('btnDonation');
        notClicked.classList.remove('bg-btn-primary');
        notClicked.classList.add('border', 'text-dark');
        
        // cards appearance on btn clicks
        const transactionHistory=document.getElementById('donationHistory');
        const donationSection=document.getElementById('donationCards');
        donationSection.classList.add('hidden');
        transactionHistory.classList.remove('hidden');
    }
    else if(clickValue==='btn-donation'){
        // btn properties
        click.classList.add('text-[#000000]', 'bg-btn-primary');
        click.classList.remove('border');
        const notClicked=document.getElementById('btnHistory');
        notClicked.classList.add('text-dark');
        notClicked.classList.remove('bg-btn-primary');
        
        // section appearance
        const donationSection=document.getElementById('donationCards');
        const transactionHistory=document.getElementById('donationHistory');
        donationSection.classList.remove('hidden');
        transactionHistory.classList.add('hidden');
    }

}


// // btn blog to home page
// function blogButtonToAnotherPage(id){
//     const clickBtn=document.getElementById(id);
//     const clickDataType=clickBtn.dataset.type;
//     if(clickDataType==='btn-blog'){
//          window.location.href="faq.html";
//     }
//     else if(clickDataType==='btn-home'){
//         window.location.href="index.html";
//         console.log("click handler");
//     }
// }



// common function to redirect based on data-type
function blogButtonToAnotherPage(id) {
    const clickBtn = document.getElementById(id);
    if (!clickBtn) return; // safety: if element not found

    const clickDataType = clickBtn.dataset.type;

    if (clickDataType === 'btn-blog') {
        window.location.href = "faq.html";
    } 
    else if (clickDataType === 'btn-home') {
        window.location.href = "index.html";
        console.log('click handler');
    }
}


function toHome(){
    console.log('click handler');
    return window.location.href='index.html';
}

// // donate money
// function getInput(id){
//     const clicked=document.getElementById(id);
//     console.log(clicked);
//     const clickedValue=clicked.dataset.type;
//     console.log(clickedValue);

//     if(clickedValue==='donate-1'){
//         const getInputValue=document.getElementById(id).value;
//         const getInputValueNumber=parseFloat(getInputValue);
//         return getInputValueNumber;
//     }
//     else if(clickedValue==='donate-2'){
//         const getInputValue=document.getElementById(id).value;
//         const getInputValueNumber=parseFloat(getInputValue);
//         return getInputValueNumber;
//     }
//     else if(clickedValue==='donate-3'){
//         const getInputValue=document.getElementById(id).value;
//         const getInputValueNumber=parseFloat(getInputValue);
//         return getInputValueNumber;
//     }
// }



// donate money
function getInput(id){
    // const clicked=document.getElementById(id);
    // // console.log(clicked);
    // const clickedValue=clicked.dataset.type;
    // // console.log(clickedValue);

    const getInputValue=document.getElementById(id).value.trim();
// !/^\d+(\.\d+)?$/.test(getInputValue)

    if(!/^\d+(\.\d+)?$/.test(getInputValue)){
        alert('Invalid Input. Please insert a valid number.');
        return;
    }

    const getInputValueNumber=parseFloat(getInputValue);
    if(isNaN(getInputValueNumber) || getInputValueNumber<=0){
        window.alert('Invalid Input. Please insert a valid number.');
        return;
    }
    if(getInputValueNumber>=remainingNumber){
            alert('Insert lesser amount than current donate balance.');
            return;
        }
        else{
            return getInputValueNumber;
        }
}


// // show donation modal
// function showDonationModal(){
//     // <div class="modal" role="dialog">
//     //     <div class="modal-box">
//     //         <h3 class="text-lg font-bold">Hello!</h3>
//     //         <p class="py-4">This modal works with a hidden checkbox!</p>
//     //     </div>
//     //     <label class="modal-backdrop" for="my_modal_7">Close</label>
//     // </div>
//     document.getElementById
// }




// function toHomePage(id){
//     window.location.href="home.html";
//     console.log('click handler');
// }

// // section appearance on btn clicking
// function openSectionById(id){
//     const openSection=document.getElementById(id);
//     openSection.classList.remove('hidden')
// }

// document.getElementById('btn-history')
//     .addEventListener('click', function(){
//         const prime=1;
//     })

// if(prime==1){
//     function toggleOne(id){
//     const click=document.getElementById(id);
//     click.classList.add('text-black', 'bg-btn-primary');
// }
// }