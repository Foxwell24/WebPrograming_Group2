

var input = document.getElementById("input");
var inputConfirm = document.getElementById("inputConfirm");
var list = document.getElementById("list");
var listClear = document.getElementById("clear");

inputConfirm.onclick = ourButtonClick;
listClear.onclick = clearAll
listDelete.onclick = deleteItem;

var listItemCounter = 0; 

function ourButtonClick()
{
    var contentToAdd = document.createElement("li");
    contentToAdd.appendChild(document.createTextNode(input.value));
    list.appendChild(contentToAdd);

           

//    function addItemFunction() 
//    {
//        var li = document.createElement('li');
//       li.id = 'list-Item' + listItemCounter++;
//        li.innerHTML = addNewBox.value;
//
//        document.getElementById('itemList').appendChild(li);
//    }
}

function clearAll()
{
    while(list.firstChild)
    {
        list.removeChild(list.firstChild);
    }
}