function bold(){
	document.execCommand('bold');
}

function italic(){
	document.execCommand('italic');
}

function underline(){
	document.execCommand('underline');
}

function change_color(new_color){
	console.log(new_color);
	document.execCommand('foreColor', false, new_color);
}

function highlight(){
	document.execCommand('hiliteColor', false, "#ffff00");
}