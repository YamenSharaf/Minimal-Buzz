var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json', false);
ourRequest.onLoad = function() {
    //console.log(ourRequest.responseText);
    var OurData = ourRequest.responseText;
    console.log(OurData[0]);
};

ourRequest.send();
