function resetMagnet(button, text) {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 2.5,
      ease: "elastic.out(1.2, 0.2)"
    });
  
    gsap.to(text, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out"
    });
  }
  
  const magneticRadius = 150;
  
  document.addEventListener("mousemove", (e) => {
    const buttons = document.querySelectorAll(".magnetic-button");
  
    buttons.forEach((button) => {
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
  
      const distanceX = e.clientX - buttonCenterX;
      const distanceY = e.clientY - buttonCenterY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  
      const text = button.querySelector("span");
  
      if (distance < magneticRadius) {
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
  
        gsap.to(button, {
          x: offsetX * 0.2,
          y: offsetY * 0.2,
          duration: 0.5,
          ease: "power3.out",
          overwrite: "auto" 
        });
  
        gsap.to(text, {
          x: offsetX * 0.2,
          y: offsetY * 0.2,
          duration: 0.5,
          ease: "power3.out",
          overwrite: "auto" 
        });
      } else {
        if (!button.resetTimer) {
          button.resetTimer = setTimeout(() => {
            resetMagnet(button, text);
            button.resetTimer = null; 
          }, 200); 
        }
      }
    });
  });
  
  var t1 = gsap.timeline();

  t1.to(".fs1", {
    height: 0, 
    duration: 2,
    ease: "expo.inOut"
})
.to(".main", {
    opacity: 1,
    duration: 1,
    delay: -1,
});