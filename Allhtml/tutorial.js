var sentence = document.getElementById("heading");
sentence.onclick =(function(){
    sentence.innerHTML = "DID YOU CALL ME.";
    console.log(sentence.innerHTML);
});
