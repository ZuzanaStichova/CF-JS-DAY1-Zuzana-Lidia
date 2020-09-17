/*Extra exercise 1*/
var text = "Hey there, i am a javascript developer, and i live in vienna";

console.log(text);

var text_array = new Array();
text_array=text.split(" ");

console.table(text_array);

document.write(text_array[2].toUpperCase() + " " + text_array[3] + " " + text_array[4] + " " + text_array[5] + " " + text_array[6].replace(/,/g,"."));





/*Extra exercise 2*/
var start = ["apple","banana","kiwi"];
start.splice(2,0,"orange","strawberry");
console.table(start);