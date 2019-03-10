function show_synonyms(){
	var selection = window.getSelection();
	var word = selection.toString();
	var url = "https://api.datamuse.com/words?ml="+word+"&max=5";
	var synonyms = new Array();

	var synonyms = fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data);
		let output = "";
		data.forEach(function(user){
			output += generate_synonym_button(user.word);
		})
		
		$("synonyms_bar").innerHTML = output;
	});
}

function generate_synonym_button(synonym){
	var button = `<button class="synonym" onclick="replace_word('${synonym}');" >${synonym}</button>`;

	return button;
}

function replace_word(new_word){
	console.log(new_word);
	var selection = window.getSelection();
	range = selection.getRangeAt(0);
	range.deleteContents();
	range.insertNode(document.createTextNode(new_word));

	$("synonyms_bar").update();
}