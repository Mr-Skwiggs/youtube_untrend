var settings = new Settings();
console.log(settings);
run();

function run() {
  console.log("Youtube Untrend v0.2 loaded");
  
  setInterval(workIt, 500);
}

function workIt() {
  if(settings.getHidden()){
    console.log("hide");
    document.getElementById("appbar-nav").children[0].children[1].setAttribute("style", "display:none");
  } else if (settings.getMakeLast()) {
    console.log("makeLast");
    //make last
  }
}

function Settings (){
  //retrieve settings 
  const hide = localStorage.getItem("hideTab");
  const makeLast = localStorage.getItem("makeLastTab");
  console.log(hide);
  console.log(makeLast);
  
  if(hide !== null) {
    this.hide = hide;
  } else {
    this.hide = true;
  }
  
  if(makeLast !== null) {
    this.makeLast = makeLast;
  } else {
    this.makeLast = false;
  }
  
  this.setHidden = function (newVal) {
    if(newVal !== undefined){
      localStorage.setItem("hideTab", JSON.stringify(newVal));
      this.hide = newVal;
    }
  }
  
  this.getHidden = function () {
    return this.hide;
  }
  
  this.setMakeLast = function (newVal) {
    if(newVal !== undefined) {
      localStorage.setItem("makeLastTab", JSON.stringify(newVal));
      this.makeLast = newVal;
    }
  }
  
  this.getMakeLast = function () {
    return this.makeLast;
  }
  
  return this;
}