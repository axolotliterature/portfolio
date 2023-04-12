let projects = {
    data:[
            {
            projectName: "DATA ENTRY: Portal (In Progress)",
            category: "gamedev",
            role: "Lead Gameplay Programmer, Game Developer, January-May 2023",
            info: "A VR puzzle mystery game built in Unreal Engine 5 that reimagines the 1986 hypertext game and Science Fiction novel Portal by Rob Swigart.",
            webLink: "https://docs.google.com/presentation/d/e/2PACX-1vSExmlMSVyKF1KezahpH4y2pzfIUzQarUE93jh6g313onwG96uaYGJ1UzhvHXquJey7XnTp8vQyxp2f/pub?start=true&loop=true&delayms=60000",
            image: "img/Cloud_Gate_Portal.jpg",
            imageAlt: "DATA ENTRY: Portal Cloud Gate Concept Art",
        },
        {
            projectName: "Generative Ship Shooter Game",
            category: "gamedev",
            role: "Game Developer, May 2021",
            info: "A miniature linear ship shooter game that is procedurally generated, built using Javascript in P5.js.",
            webLink: "https://dtc-wsuv.org/ahansen20/final477/",
            image: "img/ahansenp5jsgame.png",
            imageAlt: "Space Shooter Game",
        },
        {
            projectName: "Blogging Application Backend",
            category: "software",
            role: "Programmer, June 2022",
            info: "A text based blogging application built entirely in C that allows users to create, count, search, print, and delete blog entries.",
            webLink: "https://github.com/axolotliterature/blog_C",
            image: "img/ahansenblog.png",
            imageAlt: "Text Based Blog",
        },
        {
            projectName: "A Guided Tour of Hogwarts Filming Locations",
            category: "webdev",
            role: "Web Developer, March 2021",
            info: "A web based guided tour of the filming locations for Hogwarts Castle using Mapbox API and HTML5, controlled with Javascript, and styled with CSS3.",
            webLink: "https://dtc-wsuv.org/ahansen20/map/",
            image: "img/ahansenmapbox.png",
            imageAlt: "Harry Potter Mapbox Tour",
        },
        {
            projectName: "Coffee: Endangered Species",
            category: "webdev",
            role: "Web Developer, December 2020",
            info: "A basic website built with HTML and CSS that exhibits presentations on the dangers facing coffee plants worldwide.",
            webLink: "https://dtc-wsuv.org/ahansen20/Capstone%20Website/",
            image: "img/ahansencoffee.png",
            imageAlt: "Coffee: Endangered Species",
        },
        {
            projectName: "Narrative Skrollr Project",
            category: "webdev",
            role: "Web Developer, September 2020",
            info: "This project utilizes the Skrollr paralax scrolling Javascript plugin to create a narrative experience introducing the viewer to The Outsider, from the Dishonored series",
            webLink: "https://dtc-wsuv.org/ahansen20/narrative/",
            image: "img/ahansennarrative.png",
            imageAlt: "Narrative: The Outsider",
        },
        {
            projectName: "Orange Chicken Recipe",
            category: "webdev",
            role: "Web Developer, October 2020",
            info: "A simple responsive web page using HTML and CSS media queries to quickly and seamlessly adapt the page layout according to screen size.",
            webLink: "https://dtc-wsuv.org/ahansen20/recipe/",
            image: "img/ahansenrecipe.png",
            imageAlt: "Recipe: Full Page",
        }
    ]
}

for(let i of projects.data){
    //creates cards
    let card = document.createElement("div");
    //add category
    card.classList.add("card", i.category, "hide");

    //create image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag with attributes

    //creates anchor tag
    let weblink = document.createElement("a");
    //creates image
    let image = document.createElement("img");
    image.classList.add("myImg");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", i.imageAlt);
    //appends image to anchor
    weblink.appendChild(image);
    //sets anchor href and open in new tab
    weblink.setAttribute("href", i.webLink);
    weblink.setAttribute("target", "_blank");   
    //appends anchor to imgContainer
    imgContainer.appendChild(weblink);
    //appends imgContainer to the card
    card.appendChild(imgContainer);

    //creates content container
    let container = document.createElement("div");
    container.classList.add("container");
    //project name
    let name = document.createElement("h2");
    name.classList.add("projectName");
    name.innerText = i.projectName;
    container.appendChild(name);
    //role
    let role = document.createElement("p");
    role.innerText = i.role;
    container.appendChild(role);
    //adds project info
    let info = document.createElement("p");
    info.innerText = i.info;
    container.appendChild(info);

    //appends content container to the card
    card.appendChild(container);
    //appends cards to web page
    document.getElementById("projects").appendChild(card);
}

//parameter passed from button
function setActive(value) {
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    })
}

//parameter passed from button
function filterProject(value) {
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    })
}

//display all products by default
window.onload = () => {
    filterProject("all");
}