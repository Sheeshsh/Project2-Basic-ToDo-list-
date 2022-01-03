
// For this Project refer this .. i used this  :   https://www.youtube.com/watch?v=hKB-YGF14SY
function getAndUpdate(){
    console.log("Updating list");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemsJson')==null){
         itemJsonArray = [];  // [] is used to create Array.
         itemJsonArray.push([tit,desc]); // item will be push to the itemJsonArray
         localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update()
}
function update(){
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];  // [] is used to create Array.
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
   else{
       itemJsonArrayStr = localStorage.getItem('itemsJson')
       itemJsonArray = JSON.parse(itemJsonArrayStr);
   }    

    //populate the Table
    let tableBody = document.getElementById('tablebody');
    let str = "";
    itemJsonArray.forEach((element,index) => {    
        str +=`
        <tr>
        <th scope="row">${index + 1}</th> 
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
        });
        tableBody.innerHTML = str;     
  }
  let add = document.getElementById('add');
  add.addEventListener("click",getAndUpdate);
  update();     


function deleted(itemIndex){     // line 38
    console.log("deleted",itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    //Deleting the itemIndex from the array
    itemJsonArray.splice(itemIndex,1) // 1 means deleting 1 element
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    update();
}


function clearStorage(){
    confirm("Do you want to clear the ToDo list?")
    console.log("Clearing")
    localStorage.clear();
    update();
}





