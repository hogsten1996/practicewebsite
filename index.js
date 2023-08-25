//This block of code allows images to be clicked temporarily hiding them and instead displaying text.
document.addEventListener("DOMContentLoaded", function() {

    let imageElements = document.getElementsByClassName('imgz');
    let textElements = document.getElementsByClassName('imgText');

    for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].addEventListener("click", function() {
            imageElements[i].style.display = "none";
            textElements[i].style.display = "block";

            setTimeout(function(){
                imageElements[i].style.display = "block";
                textElements[i].style.display = "none";
            }, 3000);
        });
    }
});

//This block of code makes page contents hidden until button is clicked
document.addEventListener("DOMContentLoaded", function() {

    const unveilButton = document.getElementById('unveil');
    const hiddenSection = document.getElementById('hidden');

    hidden.style.display = 'none';

    unveilButton.addEventListener('click', function() {
        if (hiddenSection.style.display === 'none') {
            hiddenSection.style.display = 'block';
        } else {
            hiddenSection.style.display = 'none';
        }
    });
});

//Takes whatever is inputed into the input and turns it into a new div inside the div "container"
document.addEventListener("DOMContentLoaded", function() {
    const insertButton = document.getElementById("insertButton");
    const textInput = document.getElementById("textInput");
    const container = document.getElementById("container");
  
    insertButton.addEventListener("click", function() {
      const textValue = textInput.value;
      
      const newDiv = document.createElement('div');
      const newP = document.createElement('p');
      
      newP.innerText = textValue;
    
      newDiv.appendChild(newP);
      container.appendChild(newDiv);
    });
  });
  






