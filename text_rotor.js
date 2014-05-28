/*
	Text Rotor is a simple class that allows you to easily make the scrolly-generating text you see some places.
	Simply Create a new Rotor with "var foo = new Text_Rotor("YOUR_INTRO_BIT_OF_TEXT", "THE ID OF THE DIV WHERE THE TEXT GOES");
	Then add additional rotors with foo.add_rotor("NEW PIECE of Text")l

	TODO: Add (optional) cursor thingie at the end.
	TODO: Add ability to remove rotors
*/


function Text_rotor(targetdiv, static_text){
	thisCore = this;
	this.rotating_text = [];
	this.add_rotors = function(rotortext){
		var rotorArray = rotortext.split(",");
		for (var i in rotorArray){
			thisCore.rotating_text.push(rotorArray[i]);
		}
	};
	this.start_rotor_cycle = function(){
		var theWord = thisCore.rotating_text[0];
		thisCore.print_letters(theWord, 0, 0);
	};
	this.print_letters = function(word, position, location){
		var text_area = document.getElementById(targetdiv);
		if (position === 0){
			//Reset Everything if you're at the start of a word
			if (static_text !== undefined){
				text_area.textContent = static_text;
			}
			else{
				text_area.textContent = null;
			}

		}
		if (word[position] !== undefined){
			text_area.textContent += word[position];
			window.setTimeout(function(){
			position++;
			thisCore.print_letters(word, position, location);
		}, 50);
		}
		else{
			setTimeout(function(){
				location++;
				if (thisCore.rotating_text[location] !== undefined){
					thisCore.print_letters(thisCore.rotating_text[location], 0, location);
				}
				else{
					// If you're at the end, go back to the first
					thisCore.print_letters(thisCore.rotating_text[0], 0, 0);
				}
			}, 2000);
		}
		
	};

}


//SAMPLE ROTOR CALL: 
/*
var sampleRotor = new Text_rotor("word-area");
sampleRotor.add_rotors("Awesomatastic,Superfluenzic,Bodacious");
sampleRotor.start_rotor_cycle();
*/
