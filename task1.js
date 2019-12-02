var input = document.getElementById("custom-input");
var icon = document.getElementById("icon");
var filters = [
    { label: "Movies", extensions: [
        {label: "Mp4"},
        {label: "Mp3"}
    ] },
    { label: "Music", extensions: [
        {label: "Mp4"},
        {label: "Mp3"}
    ]  },
    { label: "Softwares / Games / Apps", extensions: [
        {label: "Mp4"},
        {label: "Mp3"}
    ] },
    { label: "Books /Docs", extensions: [
        {label: "Mp4"},
        {label: "Mp3"}
    ] }
];

filters.forEach(filter => {
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
    })
    div.appendChild(extDiv);
    document.getElementById("checkbox1").appendChild(div);
    extDiv.style.paddingLeft = "24px";
    extDiv.classList.add("displayExt");
    x.addEventListener("click", function(){
        extDiv.classList.toggle("displayExt");
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
//         document.getElementById("checkbox1").appendChild(customDiv);

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
customIp.checked = true;
customDiv.appendChild(customIp);
var customLabel = document.createElement("label");
customLabel.innerHTML = "CUSTOM"
customDiv.appendChild(customLabel);
document.getElementById("checkbox1").appendChild(customDiv);
customDiv.classList.add("custom");

icon.addEventListener("click", function(){
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
    customIp.addEventListener("click", function(){
    cextDiv.classList.toggle("displayExt");
})
})
