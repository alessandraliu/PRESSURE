function generate() {

    var selections = document.getElementsByTagName('input');
    var answerbox = document.getElementById('answer');

    if (selections[i].checked) {
            
        if (selections[i].value == 'option1') {
            answerbox.textContent = "hip thrusts";
        } 
        if (selections[i].value == 'option2') {
            answerbox.textContent = "squats";
        }
        if (selections[i].value == 'option3') {
            answerbox.textContent= "lat pulldown";
        }
        if (selections[i].value == 'option4') {
            answerbox.textContent = "lateral raise";
        }
        if (selections[i].value == 'option5') {
            answerbox.textContent = "stairmaster";
        }
    }
}

