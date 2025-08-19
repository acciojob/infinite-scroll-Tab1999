//your code here!

const list = document.getElementById("infi-list");
let itemCount = 0;

// function to create and append list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = "Item " + itemCount;
    list.appendChild(li);
  }
}

// add initial 10 items
addItems(10);

// detect scroll end
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
