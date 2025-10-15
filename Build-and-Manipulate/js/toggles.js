// transparent header
const header=document.getElementById('header-conatiner');
const navBar=document.getElementById('nav-container');

window.addEventListener('scroll', function(){
        if(window.scrollY>50){
            header.classList.add('bg-black/10', 'backdrop-blur-lg');
            // header.classList.remove('bg-transparent');
            navBar.classList.remove('bg-background');
        }
        else if(window.scrollY==0){
            header.classList.remove('bg-black/10', 'backdrop-blur-lg');
            // header.classList.add('bg-transparent');
            navBar.classList.add('bg-background');
        }
    });


// toggle like btn
const getBtnHistoryId=document.getElementById('btnHistory');
if(getBtnHistoryId){
    getBtnHistoryId.addEventListener('click', function(){
    console.log('click handler');
        toggleOne('btnHistory');
    });
}

const getBtnDonationId=document.getElementById('btnDonation');
if(getBtnDonationId){
    getBtnDonationId.addEventListener('click', function(){
        toggleOne('btnDonation');
    });
}
    


// // btn clicking to another file
// document.getElementById('btnBlog')
//     .addEventListener('click', function(){
//         blogButtonToAnotherPage('btnBlog');
//     });
    
// document.getElementById('btnHome')
//     .addEventListener('click', function(){
//        blogButtonToAnotherPage('btnHome');
//     });

// blog page appearance
const blogBtn = document.getElementById('btnBlog');
if (blogBtn) {
    blogBtn.addEventListener('click', function () {
        blogButtonToAnotherPage('btnBlog');
    });
}

// home page appearance
const homeBtn = document.getElementById('btnHome');
if (homeBtn) {
    homeBtn.addEventListener('click', function () {
        blogButtonToAnotherPage('btnHome');
        console.log('click handler');
    });
}

// const getId=document.getElementById('btnHome');
// if(getId){
//     getId.addEventListener('click', function(){
//         console.log('click handler');
//         toHome();
//     });
// }
    

