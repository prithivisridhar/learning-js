window.onload = function(){
  pageLoaded();
  document.getElementById("btnSubmit").onclick = function(evt){
    alert("Hi from event handler");
  };
};

//window.onload = pageLoaded;
// the function is called automatically in the previous statement,
// as the property is set to a function reference
// console.log(window.onload);
//
function pageLoaded(){
  alert("hi from page");
}

function clickMe(){
  alert("button is clicked");
}
