let length;
let width;


function calculateArea () {
    length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length*width;
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


function groceryTracker () {
    input1 = parseFloat(document.getElementById('input1').value);
    input2 = parseFloat(document.getElementById('input2').value);
    input3 = parseFloat(document.getElementById('input3').value);

    let totalAmount = input1 + input2 + input3;

    document.getElementById("total").innerHTML = `The total value : ${totalAmount}`

    
    
}