const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    // console.log(now - prev, delay);
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    let div = document.createElement("div");
    div.classList.add("imageDiv");
    div.style.left = dets.clientX+'px';
    div.style.top = dets.clientY+'px';

    let img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1694619361594-92128061b0a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")

    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
        y:"0",
        ease: Power2,
        duration: .5
    })
    gsap.to(img, {
        y:"100%",
        delay: .7,
        ease: Power2,

    })


    setTimeout(function(){
        div.remove();
    }, 1000)
  }, 500)
);
