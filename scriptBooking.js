  window.addEventListener('load', (x) => {  
  let personId = localStorage.getItem("personId");
   
	if(personId !=null){
		document.getElementById("stylists").selectedIndex= personId;
	}
     
   
  }
  );