// header section
// Get elements
const navOpen = document.querySelector('.mobile-open-btn');
const navClose = document.querySelector('.mobile-close-btn');
const primaryNavigation = document.getElementById('primary-navigation');

// Open menu
navOpen.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible');

    if (visibility === 'false') {
        primaryNavigation.setAttribute('data-visible', 'true'); // show nav
        navClose.setAttribute('data-visible', 'true'); // show close button
    } else {
        primaryNavigation.setAttribute('data-visible', 'false'); // hide nav
        navClose.setAttribute('data-visible', 'false'); // hide close button
    }
});


navClose.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible'); // ✅ you asked to keep this line

    if (visibility === 'true') { // ✅ also keeping this check
        primaryNavigation.setAttribute('data-visible', 'false');
        navClose.setAttribute('data-visible', 'false');
    }
}
);


///cart menu ==========


const shoppingBag  = document.getElementById('cart-box');
const CartItem = document.getElementById('cart-icon');
const crossBtn = document.getElementById('cross-btn');

shoppingBag.addEventListener('click' , ()=>{
    //  console.log("shopping bag clicked"); // 🔍 Debug log
const showCart  = CartItem.getAttribute('data-visible');

if(showCart == 'false'){
    CartItem.setAttribute('data-visible', 'true')
}else{
    CartItem.setAttribute('data-visible', 'false')
}
})

crossBtn.addEventListener('click', ()=>
{
    //   console.log("close button clicked"); // 🔍 Debug log
    const showCart = CartItem.getAttribute('data-visible');

    if(showCart === 'true'){
        CartItem.setAttribute('data-visible', 'false')
    }
}) 



  // Show button after scrolling 100px
  window.onscroll = function() {
    const btn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



  // sbscribe email


function subscribeEmail() {
  const email = document.getElementById("subscriberEmail").value;
  const popup = document.getElementById("popupMessage");

  if (!email || !email.includes("@")) {
    popup.textContent = "❌ Please enter a valid email address.";
    popup.className = "popup-message popup-error";
  } else {
    popup.textContent = "✅ Thank you for subscribing!";
    popup.className = "popup-message popup-success";
    document.getElementById("subscriberEmail").value = "";
  }

  popup.style.display = "block";
  setTimeout(() => {
    popup.style.opacity = 1;
  }, 10);

  setTimeout(() => {
    popup.style.opacity = 0;
    setTimeout(() => {
      popup.style.display = "none";
    }, 400);
  }, 3000);
}








