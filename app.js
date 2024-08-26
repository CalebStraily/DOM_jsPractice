//getElementById
let listItemThree = document.getElementById("thirdListItem");
console.log(listItemThree);

//getElementsByClassName
let headerColumns = document.getElementsByClassName("col-6");
console.log(headerColumns);
console.log(headerColumns[1]);

//querySelector/querySelectorAll
let listItemOne = document.querySelector(".aboutMe li:first-child");
console.log(listItemOne);

let allListItems = document.querySelectorAll(".aboutMe li");
console.log(allListItems);

//DOM Styling and Changing text
let description = document.querySelector(".textSide p:first-child");

//.innerHTML is a DOM method to change text.
description.innerHTML = "Peanut Bubber"

//.style gives you the option of changing the elements css properties from Javascript
description.style.fontSize = "25px";

//makes sure when you're calling a method for DOM element to ONLY affect one item at a time
let allPTags = document.querySelectorAll(".textSide p");

//target an index of that array list of nodes to change properties
allPTags[0].style.fontSize = "60px";

function changeParagraphColor()
{
    for (let i = 0; i < allPTags.length; i++)
    {
        const element = allPTags[i];

        allPTags[i].style.color = "tomato";
    }
}

changeParagraphColor();

//EventListeners

let imageElement = document.querySelector(".imageSide img");
let pFirstColumns = document.querySelectorAll(".firstCol p");
console.log(imageElement);
console.log(pFirstColumns);

imageElement.addEventListener("click", reColorParagraphs);

function reColorParagraphs()
{
    for (let i = 0; i < pFirstColumns.length; i++)
    {
        const currentParagraph = pFirstColumns[i];

        currentParagraph.style.color = "yellow";
    }
}