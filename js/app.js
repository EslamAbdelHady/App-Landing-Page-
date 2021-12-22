//creating sections dynamically

let navList = document.getElementById("navbar__list");
let sections = Array.from(document.querySelectorAll("section"));

function createListItem() {
    for (let sec of sections) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href= "#${sec.id}" data-nav="${sec.id}" class = "menu__link">${sec.dataset.nav}</a>  </li>`;
        navList.appendChild(listItem);

    }


}
createListItem();
// Style for the active statues with getBoundingClientRect

function viewSection(element) {
    let sectionPosition = element.getBoundingClientRect();
    return (sectionPosition.top >= 0);

}
window.onscroll = function ()
{
    document.querySelectorAll("section").forEach(function (sect)

    {
        if (!sect.classList.contains("your-active-class"))
        {
            sect.classList.add("your-active-class");
        } else
        {
            sect.classList.remove("your-active-class");
        }

    });
}

//Scroll to Anchor


navList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});
