// Getting the color from the local storage
let mainColor = localStorage.getItem("colorOption");

if(mainColor !== null){
    console.log(`your color is ${mainColor}`)
    //setting the value in the local storage in the root
    document.documentElement.style.setProperty("--main-Color", mainColor)
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active")

        if(element.dataset.color === mainColor){
            element.classList.add("active")
        }
    })
}


//background control
let backgroundChange = true;
let backgroundChanger; // To store interval ID
let backgroundChangeOption = localStorage.getItem("changeOption") || "true"; // fallback default
let backgroundButton = document.querySelector(".settings-box .option-box .play i");
let landingPage = document.querySelector(".landing-page");

let backgrounds = ['01.jpg','02.jpg','03.webp','04.jpg','05.jpg','06.jpg','07.jpg'];

if (backgroundChangeOption === "true") {
    backgroundChange = true;
    changeBackground();
    document.querySelector(".background-change").innerHTML = "Stop Random Backgroud"
    backgroundButton.classList.remove("fa-play");
    backgroundButton.classList.add("fa-stop");
} else {
    backgroundChange = false;
    document.querySelector(".background-change").innerHTML = "Play Random Backgroud"
    backgroundButton.classList.remove("fa-stop");
    backgroundButton.classList.add("fa-play");
}

backgroundButton.addEventListener("click", function () {
    if (!backgroundChange) {
        changeBackground();
        backgroundChange = true;
        document.querySelector(".background-change").innerHTML = "Stop Random Backgroud"
        localStorage.setItem("changeOption", "true");
        this.classList.remove("fa-play");
        this.classList.add("fa-stop");
    } else {
        clearInterval(backgroundChanger);
        backgroundChange = false;
        document.querySelector(".background-change").innerHTML = "Play Random Backgroud"
        localStorage.setItem("changeOption", "false");
        this.classList.remove("fa-stop");
        this.classList.add("fa-play");
    }
});

function changeBackground() {
    backgroundChanger = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * backgrounds.length);
        landingPage.style.backgroundImage = `url("/images/${backgrounds[randomNumber]}")`;
        localStorage.setItem("background", randomNumber)
    }, 5000);
}



//change the background randomly


let links = document.querySelectorAll(".header-area ul li a");


links.forEach((link)=>{
    link.addEventListener("click", function(element){
        handleActive(element)
        // links.forEach(function(el){
        //     el.classList.remove("active");
        // });
        // this.classList.add("active");
    });
});

//settings-box
let isOpen = true;
let settings = document.querySelector(".settings-box")
console.log(settings)
let settingsGear = document.querySelector(".settings-box .gear-spin")
let Gear = document.querySelector(".settings-box .fa-gear")

settingsGear.addEventListener("click", function(){
    if (isOpen) {
        settings.style.left = "-200px";
        Gear.classList.remove("fa-spin")
    } else {
        settings.style.left = "0px";
        Gear.classList.add("fa-spin")
    }
    isOpen = !isOpen;
})


let colors = document.querySelectorAll(".settings-container ul li")

const colorLi = document.querySelectorAll(".colors-list li")

colorLi.forEach(li => {
    li.addEventListener("click", function(e){
        console.log(e.target.dataset.color)

        document.documentElement.style.setProperty('--main-Color', e.target.dataset.color )
        handleActive(e)
        // colorLi.forEach(function(li){
        //     li.classList.remove("active")
        // })
        // this.classList.add("active")
        localStorage.setItem("colorOption", e.target.dataset.color)
    })
})




let arrows = document.querySelectorAll(".option-box .arrows i")

arrows.forEach((arrow) => {
    arrow.addEventListener("click", function(){
        let randomNumber = Math.floor(Math.random() * backgrounds.length)
        landingPage.style.backgroundImage = `url("/images/${backgrounds[randomNumber]}")`
    })
})



window.onload = () => {
    let background = localStorage.getItem("background")
    landingPage.style.backgroundImage = `url("/images/${backgrounds[background]}")`;
}



// Create popup on click in the picture

let ourGalley = document.querySelectorAll(".gallery .images-box img")

console.log(ourGalley)

ourGalley.forEach( img => {
    img.addEventListener("click", (e) => {
        console.log(img.src)
        let overLay = document.createElement("div")
        overLay.className = "popup-overlay";
        document.body.appendChild(overLay)

        //Ceate the image space
        let popupbox = document.createElement("div")
        popupbox.className= "popup-box"
        //create the image
        //create the close button
        let closebutton = document.createElement("i")
        closebutton.className = "fa-solid fa-xmark"
        popupbox.appendChild(closebutton)

        //create the image and 
        let popupimage = document.createElement("img")
        popupimage.src = img.src
        popupbox.appendChild(popupimage)
        document.body.appendChild(popupbox)

        closebutton.addEventListener("click", () => {
            // overLay.style.display = "none"
            // popupbox.style.display = "none"
            overLay.remove()
            popupbox.remove()
        })


    })
})


/*Testmonials Section */
const testimonials = [
    {
        img: "/images/tm.jpg",
        title: "Help us Improve Our Productivity",
        text: "Partnering with PixelCraft Studio has been one of the best decisions we’ve made. Their creative approach and attention to detail helped us launch a brand identity that truly resonates with our audience. We saw a 40% increase in engagement within the first month.",
        name: "Samantha Willaim",
        position: "Senior designer at design studio"
    },
    {
        img: "/images/tm2.avif",
        title: "Amazing Collaboration Experience",
        text: "It was a pleasure to work with the team. They were fast and professional!",
        name: "John Smith",
        position: "CEO at Creative Inc."
    },
    {
        img: "/images/tm3.avif",
        title: "Truly Outstanding Support",
        text: "I can't recommend them enough. Everything was top-notch!",
        name: "Aisha Khan",
        position: "Project Manager at NextGen Tech"
    }
];

let currentIndex = 0;

// DOM elements
const img = document.getElementById("testimonial-img");
const title = document.querySelector(".tm-text h3");
const paragraph = document.querySelector(".tm-text > p");
const name = document.querySelector(".tm-text h4");
const position = document.querySelector(".tm-text .postion");

function updateTestimonial(index) {
    const t = testimonials[index];
    img.src = t.img;
    title.textContent = t.title;
    paragraph.textContent = t.text;
    name.textContent = t.name;
    position.textContent = t.position;
}

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
});
/*Testmonials Section */


//Handle active function

function handleActive(e){
        console.log(e.target.parentElement.parentElement)
        e.target.parentElement.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active")
    })


    e.target.classList.add("active")
}



//Handle Contact Form


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_63t9k56', 'template_08gmjrt', this)
    .then(() => {
        showPopup();
        this.reset();
    }, (error) => {
        alert('❌ Failed to send message. Try again.');
    });
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


