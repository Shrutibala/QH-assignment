var slideIndex = 0;
displaySlides();

//slideshow function
function displaySlides() 
{
	var i;
	var slides = document.getElementsByClassName("Slide");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) 
	{
		slideIndex = 1
	}    
	for (i = 0; i < dots.length; i++) 
	{
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(displaySlides, 2000);  // Change image every 2 seconds
}

//To open the know us tab
function openAbout() 
{
	document.getElementById("knowus").style.width = "100%";
}

//to close the know us tab
function closeAbout()
{
	document.getElementById("knowus").style.width = "0%";
}