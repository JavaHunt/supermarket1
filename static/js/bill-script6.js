
var i = 1;
var incIndex = 1;
var Bill = new Object();
//alert(data);
//console.log(data['102']['pname']);

function increment(name) {
    document.getElementById(name).stepUp();
    indexofTable1 = name.slice(-1);
    indexofTable1 = parseInt(indexofTable1);
    var table = document.getElementById("maintable");
    qnty = table.rows.item(indexofTable1).cells.item(2).innerHTML;
    table.rows.item(indexofTable1).cells.item(2).innerHTML = parseInt(qnty) + 1;
    // updated quantity
    qnty = table.rows.item(indexofTable1).cells.item(2).innerHTML;
    save = table.rows.item(indexofTable1).cells.item(4).innerHTML;
    table.rows.item(indexofTable1).cells.item(4).innerHTML = (save/(qnty-1)) * qnty;
    rate = table.rows.item(indexofTable1).cells.item(3).innerHTML;
    // updated save
    save = table.rows.item(indexofTable1).cells.item(4).innerHTML;
    table.rows.item(indexofTable1).cells.item(5).innerHTML = (qnty * rate)-save;
}
function decrement(name) {
    document.getElementById(name).stepDown();
    indexofTable1 = name.slice(-1);
    indexofTable1 = parseInt(indexofTable1);
    var table = document.getElementById("maintable");
    qnty = table.rows.item(indexofTable1).cells.item(2).innerHTML;
    if(qnty != 1){
      table.rows.item(indexofTable1).cells.item(2).innerHTML = parseInt(qnty) - 1;
      // updated quantity
      qnty = table.rows.item(indexofTable1).cells.item(2).innerHTML;
      save = table.rows.item(indexofTable1).cells.item(4).innerHTML;
      // alert("save : "+save);
      table.rows.item(indexofTable1).cells.item(4).innerHTML = (parseFloat(save)/(parseInt(qnty)+1)) * parseInt(qnty);
      rate = table.rows.item(indexofTable1).cells.item(3).innerHTML;
      // updated save
      save = table.rows.item(indexofTable1).cells.item(4).innerHTML;
      table.rows.item(indexofTable1).cells.item(5).innerHTML = (qnty * rate)-save;
    }
    else
      alert("You cant't reduce quantity less than 1");
    
}

function addelement(){
  if(document.getElementById("discount").value == ''){
    document.getElementById("discount").value = document.getElementById("rate").value;
  }
  document.getElementById("save").value = parseInt(document.getElementById("rate").value) - parseInt(document.getElementById("discount").value);
  
  var table =document.getElementById("maintable"),
        newRow=table.insertRow(table.length),
        cell1=newRow.insertCell(0),
        cell2=newRow.insertCell(1),
        cell3=newRow.insertCell(2),
        cell4=newRow.insertCell(3),
        cell5=newRow.insertCell(4),
        cell6=newRow.insertCell(5),
        id = document.getElementById("Iid").value,
        item = document.getElementById("product").value,
        quan = document.getElementById("item").value,
        rate = document.getElementById("rate").value;
        discount = document.getElementById("discount").value;
        save = document.getElementById("save").value;
        //save = document.getElementById("save").value;
        //total = document.getElementById("Iid").value;
        cell1.innerHTML=id;
        cell2.innerHTML=item;
        cell3.innerHTML=quan;
        cell4.innerHTML=rate;
        cell5.innerHTML= save*quan;
        cell6.innerHTML=(quan*rate)-(save*quan);
        //Bill[i] = [i, item, quan, rate, save, (quan*rate)-save]
        //i++;
        //console.log(Bill);

}
function addelement1(){
  var table =document.getElementById("secondtable"),
      newRow=table.insertRow(table.length),
      cell1=newRow.insertCell(0),
      cell2=newRow.insertCell(1),
      item = document.getElementById("product").value,
      quan = document.getElementById("item").value;
      celldata = `<button onclick=increment("`+item+incIndex+`")>+</button> \
      <input id="` + item+incIndex + `" type=number min=1 max=100 value="` + quan +`" class='no-outline'> \
      <button onclick=decrement("`+item+incIndex+`")>-</button>`
      incIndex++;
      cell1.innerHTML=item;
      cell2.innerHTML= celldata;
}
function download(){
  var table = document.getElementById("maintable");
  var j = 1, k = 0;
  for(j = 1; j < table.rows.length; j++){
    var Objcells = table.rows.item(j).cells;
    var tempArray = []
    for(k=0; k < Objcells.length; k++){
      tempArray.push(Objcells.item(k).innerHTML);
      //Bill[i] = [i, item, quan, rate, save, (quan*rate)-save]
      //i++;
    }
    Bill[i] = tempArray;
    i++;
  }

  var content = ''
  j = 1;
  while(j != i){
    content = content + Bill[j] + "\n";
    j++;
  }

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(content));
  element.setAttribute('download', "sample.txt");

  element.style.display = 'none';
  document.body.appendChild(element);
  
  element.click();
  document.body.removeChild(element);
}
/*
$(document).ready(function () {
  $("#test").submit(function (event) {
    $.ajax({
      type: "POST",
      url: "data",
      data: {
        'video': $('#test').val() // from form
      },
      success: function () {
        $('#message').html("<h2>Contact Form Submitted!</h2>")
      }
    });
    return false; //<---- move it here
  });

});


function sendData1(){
  alert('send data 1');
  var URL = "{% url 'accountant/bill.html/print-bill.html/' %}";
  var data = {
    'result': 'test data',
  };
  $.get(URL, data);
}
*/
