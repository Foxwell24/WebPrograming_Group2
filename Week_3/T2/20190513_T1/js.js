

var input = document.getElementById("input");
var inputConfirm = document.getElementById("inputConfirm");
var list = document.getElementById("list");
var listClear = document.getElementById("clear");

inputConfirm.onclick = ourButtonClick;
listClear.onclick = clearAll;
//listDelete.onclick = deleteItem;

var listItemCounter = 0; 
var s = ""
var count = 0;

function ourButtonClick()
{
    var contentToAdd = document.createElement("li");
    listItemCounter++;
    s = listItemCounter.toString();
    contentToAdd.classList.add(s, "Green");

    //contentToAdd.classList.toggle("Green", complete == 1)
    contentToAdd.appendChild(document.createTextNode(input.value));


    

//    var contentToAdd2 = document.createElement("button")
//    contentToAdd2.appendChild(document.createTextNode("Complete"))
//    contentToAdd2.classList.add(s, "Complete")
//    contentToAdd2.onclick = function(){
//         this.classList.toggle("Green", this.parentNode.style.background == "green")
//    }

    var contentToAdd3 = document.createElement("button")
    contentToAdd3.appendChild(document.createTextNode("Remove"))
    contentToAdd3.classList.add(s, "Remove")
    contentToAdd3.onclick = function(){        
        this.parentNode.style.display = "none";
    }

    var contentToAdd2 = document.createElement("input");
    contentToAdd2.type = "checkbox"



    contentToAdd.appendChild(contentToAdd3)
    contentToAdd.appendChild(contentToAdd2)
    list.appendChild(contentToAdd);


    console.log(listItemCounter)
    console.log(s)

//    function addItemFunction() 
//    {
//        var li = document.createElement('li');
//       li.id = 'list-Item' + listItemCounter++;
//        li.innerHTML = addNewBox.value;
//
//        document.getElementById('itemList').appendChild(li);
//    }
}

//function isGreen{

//}

function clearAll()
{
    while(list.firstChild)
    {
        list.removeChild(list.firstChild);
    }
}