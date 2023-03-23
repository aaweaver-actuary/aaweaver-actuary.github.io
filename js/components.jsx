// text box component: userText
// button component: submitButton
// output component: outputText

// create the text box component
var userText = app.project.activeItem.layers.addText('Enter text here');

// set the position of the text box component
userText.position.setValue([100, 100]);

// create the button component
var submitButton = app.project.activeItem.layers.addSolid(
	[1, 1, 1],
	'Submit',
	100,
	50,
	1,
	1,
);

// set the position of the button component
submitButton.position.setValue([100, 200]);

// create the output component
var outputText = app.project.activeItem.layers.addText('Output text here');

// set the position of the output component
outputText.position.setValue([100, 300]);

// create a button click event for the button component
// this event will set the output text to the user text
// when the button is clicked, specifically when the mouse is released
submitButton.onMouseUp = function () {
	// set the output text to the user text
	outputText.text.sourceText.setValue(userText.text.sourceText.value);
};

// create a keyframe for the button click event
// a keyframe is required to set the button click event
// and is used to set the button click event to the first keyframe, which is the button click event
// this is required because the button click event is set to the current time, which is the second keyframe
submitButton.onMouseUp(1);

// create a keyframe for the button click event
submitButton.onMouseUp(2);

// set the button click event to the first keyframe
submitButton.onMouseUp.setValueAtTime(1, submitButton.onMouseUp.valueAtTime(1));

// set the button click event to the second keyframe
submitButton.onMouseUp.setValueAtTime(2, submitButton.onMouseUp.valueAtTime(1));

// set the button click event to the current time
submitButton.onMouseUp.setValueAtTime(
	app.project.activeItem.time,
	submitButton.onMouseUp.valueAtTime(1),
);

// in order to use thses components, you must create a new composition
// and then run the script
// the script will create the components in the new composition
