function removeFirstAndLast(str) {
    // Check if the string has at least two characters
    if (str.length >= 2) {
      return str.substring(1, str.length - 1);
    } else {
      // Handle cases where the string is empty or has only one character
      return "";
    }
  }

const headerClickIntervalId = setInterval(() => {
    setInterval(kosherfy, 1000*5);
    
    function kosherfy() {
		

        // Select all elements with the specified class
        var elements = document.querySelectorAll('.MuiTypography-root.MuiTypography-body2.MuiListItemText-secondary.muirtl-ascnuj');
        var element2 = document.querySelectorAll('.MuiChip-label.MuiChip-labelMedium.muirtl-9iedg7')
        var contentOfSecondElement = 0
		var contentOfFirstElement = 0
        console.log(element2)
		// Get the content of the second element
        if (elements.length > 0){
			contentOfSecondElement = removeFirstAndLast(elements[1].textContent)
			contentOfFirstElement = removeFirstAndLast(elements[0].textContent);        
			}
        
        if (contentOfFirstElement > 1     || contentOfSecondElement > 0 || element2.length > 0) {
            console.log("The word ספירה is present on the page.");
            var soundAudio = new Audio("https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg")
            soundAudio.play();
        } else {
            console.log("The word ספירה is not present on the pagee.");
        }
    }
    clearInterval(headerClickIntervalId)
}, 100);