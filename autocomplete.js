let availableKeywords = [

    'HTml',
    'css',
    'maya',
    'js',
    'Apple Vison Pro',
    'i phone 15 pro max'

];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter(()=>{
            availableKeywords.lowercase().includes(input.toLowerCase()).includes(input);
        });
        console.log(result);
    }
}