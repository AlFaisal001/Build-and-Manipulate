
// money donation from card 1
document.getElementById('btnDonate1')
    .addEventListener('click', function(){
        const donation=getInput('donate1');

        // returns undefined and stops the code if user inputs Not a Number
        if(isNaN(donation)){
            return;
        }
        // add to donation amount 
        const afterDonation=donation+donateCard1Number;
        document.getElementById('currentDonation1').innerText=afterDonation;

        // substract from remaining amount
        const substract=remainingNumber-donation;
        document.getElementById('remainingAmount').innerText=substract;
        remainingNumber=substract;

        // // showDonationModal
        document.getElementById('donation_modal').showModal();

        // add to history
        const donationTitle=document.getElementById('card-1-donation').innerText;
        const div=document.createElement('div');
        const time=new Date().toString();
        div.innerHTML=`
            <div class="lg:w-[800px] mx-auto border-2 rounded-xl md:w-[650px] mt-10 px-6 py-8 space-y-4">
                    <p class="text-lg font-bold">${donation} taka is Donated for ${donationTitle}.</p>
                    <div class='text-dark'>Date: ${time}</div>
            </div>  
            `;
        
             document.getElementById('donationHistory').appendChild(div);
        
    })


// money donation from card 2
document.getElementById('btnDonate2')
    .addEventListener('click', function(){
        const donation=getInput('donate2');

        // returns undefined and stops the code if user inputs Not a Number
        if(isNaN(donation)){
            return;
        }

        // add to donation amount 
        const afterDonation=donation+donateCard2Number;
        document.getElementById('currentDonation2').innerText=afterDonation;

        // substract from remaining amount
        const substract=remainingNumber-donation;
        document.getElementById('remainingAmount').innerText=substract;
        remainingNumber=substract;

        // showDonationModal
        document.getElementById('donation_modal').showModal();

        // add to history
        const donationTitle=document.getElementById('card-2-donation').innerText;
        const div=document.createElement('div');
        const time=new Date().toString();
        div.innerHTML=`
            <div class="lg:w-[800px] mx-auto border-2 rounded-xl mt-10 px-6 py-8 space-y-4 lg:w-[800px] md:w-[650px]">
                <p class="text-lg font-bold">${donation} taka is donated for ${donationTitle}.</p>
                <p class="text-dark">Date: ${time}</p>
            </div>
        `;
        
        document.getElementById('donationHistory').appendChild(div);

    })


// money donation from card 3
document.getElementById('btnDonate3')
    .addEventListener('click', function(event){
        const donation=getInput('donate3');

        // returns undefined and stops the code if user inputs Not a Number
        if(isNaN(donation)){
            return;
        }

        // add to donation amount 
        const afterDonation=donation+donateCard3Number;
        document.getElementById('currentDonation3').innerText=afterDonation;

        // substract from remaining amount
        const substract=remainingNumber-donation;
        document.getElementById('remainingAmount').innerText=substract;
        remainingNumber=substract;

        // showDonationModal
        document.getElementById('donation_modal').showModal();

        // add to history
        const donationTitle=document.getElementById('card-3-donation').innerText;
        const time=new Date().toString();
        const div=document.createElement('div');
        div.innerHTML=`
            <div class="lg:w-[800px] border-2 rounded-xl mt-10 px-6 py-8 space-y-4 lg:w-[800px] md:w-[650px]">
                <p class="text-lg font-bold">${donation} taka is donated for ${donationTitle}.</p>
                <p class="text-dark">Date: ${time}</p>
            </div>
        `;

        document.getElementById('donationHistory').appendChild(div);
    })





    
// document.getElementById('btnDonate')
//     .addEventListener('click', function(){
//         const donation=getInput('donate');
        
//         // add to donation amount 
//         const afterDonation=donation+donateCard1Number;
//         document.getElementById('currentDonation1').innerText=afterDonation;

//         // substract from remaining amount
//         const substract=remainingNumber-donation;
//         document.getElementById('remainingAmount').innerText=substract;

//     })

// const work=document.getElementById('btnDonate1');
// if(work){
//     work.addEventListener('click', function(){
//         const donation=getInput('donate1');
        
//         // add to donation amount 
//         const afterDonation=donation+donateCard1Number;
//         document.getElementById('currentDonation1').innerText=afterDonation;

//         // substract from remaining amount
//         const substract=remainingNumber-donation;
//         document.getElementById('remainingAmount').innerText=substract;

//     })
// }

// const work2=document.getElementById('btnDonate2');
// if(work2){
//     work2.addEventListener('click', function(){
//         const donation=getInput('donate2');
        
//         // add to donation amount 
//         const afterDonation=donation+donateCard2Number;
//         document.getElementById('currentDonation2').innerText=afterDonation;

//         // substract from remaining amount
//         const substract=remainingNumber-donation;
//         document.getElementById('remainingAmount').innerText=substract;

//     })
// }

// const work3=document.getElementById('btnDonate3');
// if(work3){
//     work3.addEventListener('click', function(){
//         const donation=getInput('donate3');
        
//         // add to donation amount 
//         const afterDonation=donation+donateCard3Number;
//         document.getElementById('currentDonation3').innerText=afterDonation;

//         // substract from remaining amount
//         const substract=remainingNumber-donation;
//         document.getElementById('remainingAmount').innerText=substract;

//     })
// }