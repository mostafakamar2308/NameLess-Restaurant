import "./style.css";
const contentContainer = document.querySelector("#content");

//create the header
const header = document.createElement("header");
header.id = "header";
contentContainer.appendChild(header);

//create the buttons to choose from
let arr = ["Home", "Menu", "About"];

function createButtons(name) {
  let btn = document.createElement("button");
  btn.id = name.toLowerCase();
  btn.innerText = name;

  header.appendChild(btn);
  return btn.addEventListener("click", function () {
    for (let i = 0; i < header.children.length; i++) {
      header.children[i].classList.remove("selected");
    }
    main.innerHTML = "";
    switch (btn.id) {
      case "home":
        btn.classList.add("selected");
        //create container for the two items
        let container = document.createElement("div");
        container.id = "title-container";
        main.appendChild(container);
        //create the title for main screen

        let title = document.createElement("h1");
        title.innerText = "Nameless Restaurant ";
        title.id = "home-title";
        container.appendChild(title);

        //create the subtitle for main screen
        let subtitle = document.createElement("h5");
        subtitle.innerText = "Prepare to Get Fat";
        subtitle.id = "home-subtitle";
        container.appendChild(subtitle);
        break;

      case "menu":
        btn.classList.add("selected");
        break;

      case "about":
        btn.classList.add("selected");
        break;
    }
  });
}
for (let i = 0; i < arr.length; i++) {
  createButtons(arr[i]);
}

//create the main
const main = document.createElement("main");
main.id = "main";
contentContainer.appendChild(main);

//create the footer
const footer = document.createElement("footer");
footer.id = "footer";
contentContainer.appendChild(footer);
