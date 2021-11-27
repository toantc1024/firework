
window.addEventListener("keydown", function (event) {
	if (event.defaultPrevented) {
	  return; // Do nothing if the event was already processed
	}
	switch (event.key) {
	  case "p":
		document.getElementById("btn-launch").click();
		// Do something for "esc" key press.
		break;
	  case "3":
		  localStorage.setItem("Type_Flower","Ghost");
			// Do something for "esc" key press.
		break;
		case "4":
			
			localStorage.setItem("Type_Flower","Floral");
			alert(localStorage.getItem("Type_Flower"));
			// Do something for "esc" key press.
			break;
	  default:
		return; // Quit when this doesn't handle the key event.
	}
  
	// Cancel the default action to avoid it being handled twice
	event.preventDefault();
  }, true);
