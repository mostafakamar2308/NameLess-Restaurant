import "./style.css";
const contentContainer = document.querySelector("#content");
function importAll(r) {
  let k = {};
  r.keys().map((item, index) => {
    k[item.replace("./", "")] = r(item);
  });

  return k;
}

const drinkImages = importAll(
  require.context("./photos/drinks", false, /\.(png|jpe?g|svg)$/)
);
const foodImages = importAll(
  require.context("./photos/food", false, /\.(png|jpe?g|svg)$/)
);
const stockImages = importAll(
  require.context("./photos/stock", false, /\.(png|jpe?g|svg)$/)
);

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
    btn.classList.add("selected");
    switch (btn.id) {
      case "home":
        homePage();
        break;

      case "menu":
        menuPage();
        break;

      case "about":
        aboutPage();
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

//make a function for the home page structure
function homePage() {
  document.querySelector("#home").classList.add("selected");
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
  let subtitle = document.createElement("h3");
  subtitle.innerText = "Prepare to Get Fat";
  subtitle.id = "home-subtitle";
  container.appendChild(subtitle);

  //create a div for the background image
  let img = document.createElement("img");
  img.id = "main-background";
  img.src = stockImages["blackKnight.png"].default;
  main.appendChild(img);
}
homePage();

//make a function for the menu structure

function menuPage() {
  //create a div for the background image
  let img = document.createElement("img");
  img.id = "menu-background";
  img.src = stockImages["chosenUndead.png"].default;

  main.appendChild(img);

  //create part for drinks
  let drinks = document.createElement("div");
  drinks.id = "drinks-container";

  let titleContainer = document.createElement("div");
  titleContainer.id = "title-drink-container";

  let estus = document.createElement("img");
  estus.src = stockImages["estus flask.png"].default;
  estus.id = "title-drink-photo";
  titleContainer.appendChild(estus);

  let drinksTitle = document.createElement("h3");
  drinksTitle.innerText = "DRIKS";
  titleContainer.appendChild(drinksTitle);
  drinks.appendChild(titleContainer);

  main.appendChild(drinks);
  for (let i = 0; i < Object.keys(drinkImages).length; i++) {
    makeMenuItems(drinkImages, Object.keys(drinkImages)[i]);
  }
  //food

  let foods = document.createElement("div");
  foods.id = "food-container";
  main.appendChild(foods);

  let titleFoodContainer = document.createElement("div");
  titleFoodContainer.id = "title-food-container";

  let foodTitlePic = document.createElement("img");
  foodTitlePic.src = stockImages["Elizabeth-Mushroom.png"].default;
  foodTitlePic.id = "elizabeth";
  titleFoodContainer.appendChild(foodTitlePic);

  let foodTitle = document.createElement("h3");
  foodTitle.innerText = "Food";
  titleFoodContainer.appendChild(foodTitle);

  foods.appendChild(titleFoodContainer);

  for (let i = 0; i < Object.keys(foodImages).length; i++) {
    makeMenuItems(foodImages, Object.keys(foodImages)[i]);
  }
}

//make a factory function for image + title

function makeMenuItems(container, name) {
  let itemContainer = document.createElement("div");
  itemContainer.id = `${name}-container`;
  itemContainer.classList.add("item-container");

  let itemImg = document.createElement("img");
  if (container == drinkImages) {
    itemImg.src = drinkImages[name].default;
  } else if (container == foodImages) {
    itemImg.src = foodImages[name].default;
  }
  itemContainer.appendChild(itemImg);

  let itemDiscreption = document.createElement("h5");
  itemDiscreption.innerText = name.slice(0, -4);
  itemContainer.appendChild(itemDiscreption);
  if (container == drinkImages) {
    document.querySelector("#drinks-container").appendChild(itemContainer);
  } else if (container == foodImages) {
    document.querySelector("#food-container").appendChild(itemContainer);
  }
}

function aboutPage() {
  let sigward = document.createElement("img");
  sigward.id = "sigward";
  sigward.src = stockImages["Siegward.png"].default;
  main.appendChild(sigward);

  let talk = document.createElement("P");
  talk.id = "talk";
  talk.innerText = `Hello I am Mostafa, I am a front-end Developer in training.
  This Project is one of the projects on The Odin Project platform.
  I am a huge D.S Fan, So I said "why not use it as an Inspiration" and this website is the result`;
  main.appendChild(talk);
}
