var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  const opneBtn=document.querySelector("#menu-btn")
  const closeBtn=document.querySelector("#close-btn")
  const nav_item=document.querySelector(".nav_item")
  

  opneBtn.addEventListener("click",()=>{
    closeBtn.style.display='block'
    opneBtn.style.display='none'
    nav_item.style.display='flex'
  })
  closeBtn.addEventListener("click",()=>{
    closeBtn.style.display='none'
    opneBtn.style.display='block'
    nav_item.style.display='none'
  })