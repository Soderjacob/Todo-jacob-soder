document.addEventListener('DOMContentLoaded', function() {
let myArray = [];

document.getElementById('add-button').addEventListener('click', function()  {
    let inputValue =
    document.getElementById('myInput').value;
    myArray.push({ value: inputValue });

    let ul = document.getElementById('my-list');
    ul.innerHTML = '';

    myArray.forEach(item => {

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        let li = document.createElement('li');
        li.appendChild(checkbox);

        let text = document.createTextNode(item.value)
        li.appendChild(text)
        
        ul.appendChild(li);
        
    })

    console.log(myArray);
    });
});
