var hidden1 = document.getElementById('hidden1');
var hidden2 = document.getElementById('hidden2');
var textElement = document.getElementById('text');
var image = document.getElementById("success-icon");

setTimeout(() => {
    hidden1.style.visibility = 'hidden';
    hidden2.style.visibility = 'hidden';
    textElement.innerHTML = "Success!";
    textElement.style.color = "#00cc66";
    textElement.style.transform = "scale(1.2)";
    
    image.style.opacity = '1'; 
}, 4500);
