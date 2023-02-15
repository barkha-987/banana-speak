var button = document.querySelector("#btn-trans");
var textarea= document.querySelector("#txtarea");
var translate = document.querySelector("#translate");
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function translateValue(text)
{

return serverURL+ "?" + "text="+text

}
 function errorHandler(error){
   console.log("error occure" + error);
 }
 function Eventlistner(){
        var inputText = textarea.value; 
        fetch(translateValue(inputText))
        .then(response=>response.json())
         .then(json=>
         {var  translatedd = json.contents.translated;
         translate.innerText = translatedd})
        .catch(errorHandler)

 }
button.addEventListener("click", Eventlistner);





