
function lastModified(){

	lastmod = document.lastModified     // get string of last modified date
	lastmoddate = Date.parse(lastmod)   // convert modified string to date
	if(lastmoddate == 0){               // unknown date (or January 1, 1970 GMT)
		document.writeln("(Updated: Unknown)")
	} 
	else {
		d = new Date(lastmod);
		document.writeln("(Updated: " + d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + ")")
	}

}

function abouticon() {

	var rand1 = Math.floor((Math.random()*11)+1);
	var str = "<img src=\"images/icon_" + rand1 + ".png\" />";
	
	document.write(str);
}

function writemenunav(page) {

	var pressed = new Array();
	var folder;

	folder = "../";

	switch (page){
		case "home":
			folder = "/";
			pressed[1] = "pressed";
			break;
		case "about":
			folder = "/";
			pressed[2] = "pressed";
			break;
	}
	
	var str;
	str = "<label for=\"menuopen\">&#9776;</label><input type=\"checkbox\" name=\"menuopen\" id=\"menuopen\" checked>";
	str += "<ul class=\"menu\">";
	str += "<li><A class=\"menu " + pressed[1] + "\" href=\"	#home\">Home</A></li>";	
	str += "<li><A class=\"" + pressed[2] + "\" href=\"#about\">About</A></li>";
	str += "</ul>";
	document.write(str);

}