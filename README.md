text-rotor-js
=============

A simple javascript class that lets you set up one of those fancy automatic-typing thingies you see all over the place. Does not require JQuery or any other libraries.

## Usage

Either copy/paste the contents of the `Text_rotor` class or include this script in your HTML file.

## Initialization

Call a `new Text_Rotor` with the following parameters:

* `targetdiv`: the div (or span, or whatever) that you want to place your new text rotor in.
* `static text`: Any text you want in front of your rotor. This is optional.

Then, add additional items to the rotation with the `addrotors()` class function.

Initiate the rotor cycle by calling `start_rotor_cycle();`

## Example:

First, create a new instance of the class. In this example, we aren't calling any sort of static text prefix, so we only need a `targetdiv`.

In our HTML, we would have the following:

	<div id="word-area">	</div>

Using this ID, we can create a new instance of the rotor class

	var sampleRotor = new Text_rotor("word-area");   

Then add a few terms (comma separated) using `add_rotors`:

	sampleRotor.add_rotors("Awesomatastic,Superfluenzic,Bodacious");

Then just initialize the whole shebang with

	sampleRotor.start_rotor_cycle();
  
I have no idea if I intend on adding more to this tool (I'm sure there are hundreds just like it solving the same problem), I just made it for a random project and thought I'd share.
