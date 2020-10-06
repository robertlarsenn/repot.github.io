window.addEventListener('load', (x) => {
	moreInfoModule.addNmbContainers();

   document.getElementById("footButton2").addEventListener('click',function(e){
			moreInfoModule.addNmbContainers();
			
	});
	
	document.getElementById("person1").addEventListener('click',function(e){
		
			localStorage.setItem("personId",0);
			
	});
		document.getElementById("person2").addEventListener('click',function(e){
			localStorage.setItem("personId",1);
			
	});
		document.getElementById("person3").addEventListener('click',function(e){
			localStorage.setItem("personId",2);
			
	});
		document.getElementById("person4").addEventListener('click',function(e){
			localStorage.setItem("personId",3);
			
	});
});
var moreInfoModule = (function() {
  'use strict';
  let infoCounter = 0;
  let maxCounter  = 100;
  return {
    addNmbContainers: function() {
	  if(infoCounter === maxCounter) return;
	  document.getElementsByClassName("containerSpecial")[infoCounter].style.visibility = 'visible';

      infoCounter++;

    }
  };
})();

