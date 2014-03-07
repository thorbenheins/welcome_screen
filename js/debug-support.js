var debugLog = function(str) {
	var debugDiv = document.getElementById("debugDiv");
	
	if (debugDiv === null) {
		debugDiv = document.createElement("div");
		debugDiv.id = "debugDiv";
		debugDiv.style.position="absolute";debugDiv.style.width="400px";debugDiv.style.height="400px";debugDiv.style.minHeight="400px";debugDiv.style.maxHeight="400px";debugDiv.style.minWidth="400px";debugDiv.style.maxWidth="400px";debugDiv.style.backgroundColor="lightgrey";debugDiv.style.top="40px";debugDiv.style.right="5px";debugDiv.style.overflow="scroll";debugDiv.style.zIndex=1000;
		
		if (myConfig)
			debugDiv.textContent = JSON.stringify(myConfig);
		
		document.body.appendChild(debugDiv);
	}
	
	debugDiv.appendChild(document.createTextNode(str));
	debugDiv.appendChild(document.createElement("br")); 
}