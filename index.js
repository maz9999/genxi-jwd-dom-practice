// Buttons
// 
const btn = document.querySelector('#display-name-button');
btn.addEventListener('click', () => {
    var element = document.getElementById("display-name");
    element.classList.remove("invisible");
});


//
// document.getElementById('display-name-button').onclick = () => {
//     document.getElementById('display-name').classList.remove
//     ('invisible');
// }


// Mouse Over


let image = document.querySelector('#light-bulb');

image.addEventListener('mouseover', function(){
    image.src = "images/light-bulb-on.png"

})

image.addEventListener('mouseout', function(){
    image.src = "images/light-bulb-off.png"
  })


// Toggle

// Clicking the button with id "toggle-button" should toggle the visibility
// of the alert with id "toggle-alert" on and off.


let toggled = false;

const btn2 = document.querySelector('#toggle-button');
const btnAlert = document.querySelector('#toggle-alert');

btn2.addEventListener('click', () => {

    if (toggled) {
        toggled = false;
        btnAlert.classList.add('invisible');
        btn2.innerHTML = 'On';
    } else {
        toggled = true;
        btnAlert.classList.remove('invisible');
        btn2.innerHTML = 'Off';
    }

});



// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
// When the form with id "form-validate" is submitted,
// - prevent the default event from firing
// - check the length of the input with id "form-validate-first-name"
// - if the length is greater than 2, add "is-valid" class to the input, remove the "is-invalid" class
// - if the length if less than 2, add "is-invalid" class to the input, remove the "is-valid" class



const validateForm = document.querySelector('#form-validate');
const validateFirstName = document.querySelector('#form-validate-first-name');

validateForm.addEventListener('submit', (event) => {
    event.preventDefault();


if (validateFirstName.value.length > 2) {
    validateFirstName.classList.add('is-valid');
    validateFirstName.classList.remove('is-invalid');
} else {
    validateFirstName.classList.add('is-invalid');
    validateFirstName.classList.remove('is-valid');
}

});

// Challenge: Lists
// When the form with the id "form-hobby" is submitted
// - prevent default events from firing
// - get the value from the input with the id "form-hobby-text"
// - use the vlaue to create a new li with the class "list-group-item"
// - add the li to the ul with the id "hobby-list"


const hobbyForm = document.querySelector('#form-hobby');
const hobbyformText = document.querySelector('#form-hobby-text');
const hobbyList = document.querySelector('#hobby-list');

hobbyForm.addEventListener('submit', (event) => {
    event.preventDefault();


    const newHobby = document.createElement('li');
    newHobby.innerText = hobbyformText.value;

    newHobby.classList.add('list-group-item');
    hobbyList.appendChild(newHobby);

});



// Challenge: Lists (Part 2)
// When the ul with the id "hobby-list-2" is clicked
// - check if the event target has the class "remove-hobby", if it does
//      - prevent the default event
//      - get the parent li of the target
//      - remove the parent li from the list with the id "hobby-list-2"



const hobbyList2 = document.querySelector('#hobby-list-2');

hobbyList2.addEventListener('click', (event) => {

        if (event.target.classList.contains('remove-hobby')) {
            event.preventDefault();
            let parentList = event.target.parentElement;
            hobbyList2.removeChild(parentList);
        }
            
});

