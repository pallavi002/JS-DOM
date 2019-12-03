var input = document.getElementById("custom-input");
var icon = document.getElementById("icon");
var checkboxContainer = document.getElementById("checkboxContainer")
// declaring labels and extensions in array filters
var filters = [
  {
    label: "Movies", extensions: [
      { label: "Mp4" },
      { label: "Mp3" }
    ]
  },
  {
    label: "Music", extensions: [
      { label: "Mp4" },
      { label: "Mp3" }
    ]
  },
  {
    label: "Softwares / Games / Apps", extensions: [
      { label: "Mp4" },
      { label: "Mp3" }
    ]
  },
  {
    label: "Books /Docs", extensions: [
      { label: "Mp4" },
      { label: "Mp3" }
    ]
  }
];
var div = document.createElement("div");       //creating a div
  var all = document.createElement("INPUT");    //creating input box
  all.setAttribute("type", "checkbox");         //applying checkbox attribute
  div.appendChild(all);                         //appendchild is to display input box in div 
  var allLabel = document.createElement("allLabel");             
  allLabel.innerHTML = "ALL";
  div.appendChild(allLabel);
  document.getElementById("checkboxContainer").appendChild(div);      //to display inputs at proper location

filters.forEach(filter => {                     //creates checkbox, labels for all the inputs
  var div = document.createElement("div");      
  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  div.appendChild(x);
  var label = document.createElement("label");
  label.innerHTML = filter.label;
  div.appendChild(label);
  var extDiv = document.createElement("div");
  filter.extensions.forEach(extension => {
    var ip = document.createElement("INPUT");
    ip.setAttribute("type", "checkbox");
    extDiv.appendChild(ip);
    var extLabel = document.createElement("label");
    extLabel.innerHTML = extension.label;
    extDiv.appendChild(extLabel);
    extLabel.style.marginRight = "10px";
    all.addEventListener("click", () =>{
      ip.checked = false;                 //unchecking ext on clicking "ALL"
    })
  })
  div.appendChild(extDiv);
  document.getElementById("checkboxContainer").appendChild(div);
  extDiv.style.paddingLeft = "24px";
  extDiv.classList.add("displayExt");
  x.addEventListener("click", function () {
    extDiv.classList.toggle("displayExt");
  })
  checkboxContainer.style.marginLeft = "20px";
  // unchecking other tabs on clicking 'all' checkbox
  all.addEventListener("click", () =>{
    x.checked = false;
  })
  x.addEventListener("click", () =>{
    all.checked = false;
  })
  all.addEventListener("click", () =>{
    extDiv.classList.add("displayExt");     //hiding extensions on clicking "ALL"
  })
})
// icon.addEventListener("click", function(){
//     var customDiv = document.createElement("div");
//     var customIp = document.createElement("INPUT");
//         customIp.setAttribute("type", "checkbox");
//         customDiv.appendChild(customIp);
//         var customLabel = document.createElement("label");
//         customLabel.innerHTML = "CUSTOM"
//         customDiv.appendChild(customLabel);
//         document.getElementById("checkboxContainer").appendChild(customDiv);
//         var cextDiv = document.createElement("div");
//         var cip = document.createElement("INPUT");
//         cip.setAttribute("type", "checkbox");
//         cextDiv.appendChild(cip);
//         var cLabel = document.createElement("label");
//         cLabel.innerHTML = input.value;
//         cextDiv.appendChild(cLabel);
//         customDiv.appendChild(cextDiv);
//         cextDiv.style.paddingLeft = "24px";
//         cextDiv.classList.add("displayExt");
//         customIp.addEventListener("click", function(){
//             cextDiv.classList.toggle("displayExt");
//         })
// })
var customDiv = document.createElement("div");
var customIp = document.createElement("INPUT");
customIp.setAttribute("type", "checkbox");
customIp.checked = true;                         //checkbox will be checked
customDiv.appendChild(customIp);
var customLabel = document.createElement("label");
customLabel.innerHTML = "CUSTOM"
customDiv.appendChild(customLabel);
document.getElementById("checkboxContainer").appendChild(customDiv);
customDiv.classList.add("custom");
icon.addEventListener("click", () => {
  customDiv.classList.remove("custom");
  var cextDiv = document.createElement("div");
  var cip = document.createElement("INPUT");
  cip.setAttribute("type", "checkbox");
  cextDiv.appendChild(cip);
  var cLabel = document.createElement("label");
  cLabel.innerHTML = input.value;
  cextDiv.appendChild(cLabel);
  customDiv.appendChild(cextDiv);
  cextDiv.style.paddingLeft = "24px";
  cextDiv.classList.add("displayExt");
  cextDiv.classList.toggle("displayExt");
})
