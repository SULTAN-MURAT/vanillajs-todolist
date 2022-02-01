let todoNodeList = document.getElementsByTagName("LI");

for (let i = 0; i < todoNodeList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  todoNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

let list = document.querySelector("ul");
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

function newElement() {
  let listItem = document.createElement("li");
  let inputValue = document.getElementById("task").value;
  let textNode = document.createTextNode(inputValue);
  listItem.appendChild(textNode);
  if (inputValue === "") {
    alert("Yapılacak için metin girişi yapmadınız");
  } else {
    document.getElementById("list").appendChild(listItem);
  }
  document.getElementById("task").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listItem.appendChild(span);
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
