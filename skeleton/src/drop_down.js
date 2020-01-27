
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};
// debugger
function dogLinkCreator() {
  // debugger
  let links= [];
  for (const [dog, url] of Object.entries(dogs)){
    const a = document.createElement("a");
    a.innerHTML = dog;
    a.href = url;
    // debugger
    const li = document.createElement("li");
    li.className = "dog-link";
    li.appendChild(a);
    links.push(li);
  }
  // Object.defineProperties(dogs).dogs.forEach( el => {
  //   const a = document.createElement("a");
  //   a.innerHTML = Object.keys(el);
  //   a.href = Object.values(el);
  //   debugger
  //   const li = document.createElement("li");
  //   li.addClass("dog-link");
  //   li.appendChild(a);
  //   links.push(li);
  // });
  return links;
}

function attachDogLinks() {
  // debugger
  const dogLinks = dogLinkCreator();
  const dropDown = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach( el => {
  dropDown.appendChild(el);
  });
  dropDown.style.display = 'none';
}

function handleEnter (){
  // const link = document.querySelector(".dog-link");
  const nav = document.querySelector(".drop-down-dog-nav");
  nav.addEventListener("mouseenter", () => {
    const dropDown = document.querySelector(".drop-down-dog-list");
    // console.log("happen");
    dropDown.style.display = 'block';
  });
  
}

function handleLeave(){
  const nav = document.querySelector(".drop-down-dog-nav");
  nav.addEventListener("mouseleave", () => {
    const dropDown = document.querySelector(".drop-down-dog-list");
    // console.log("happen");
    dropDown.style.display = 'none';
  });
  // dropDown.style.display = 'none';
}

attachDogLinks();
handleEnter();
handleLeave();


