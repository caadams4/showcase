// TODO Scroll buttons

// TODO Contents scrolling side

let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".header nav ol li");

function atBottom(ele) {
    var sh = ele.scrollHeight;
    var st = ele.scrollTop;
    var ht = ele.offsetHeight;
    if(ht==0) {
        return true;
    }
    if(st == sh - ht)
        {return true;} 
    else 
        {return false;}
}


  
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        current = section.getAttribute("id");
    }
    });

    console.log(current)
    links.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });

 