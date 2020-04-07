// Your code goes here


//Mouseover

const changeNav = document.querySelector('.main-navigation');

changeNav.addEventListener('mouseover', (event) => {
    
    event.target.style.color = 'gold';
});

//Mouseout

changeNav.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
})


//Welcome Alert

const button = document.querySelector('.destination .btn');
    button.addEventListener('click', (event) => {
    alert('Lets get YOU Signed up!!')
})

//change background color of the footer on click

const foot = document.querySelector('.footer')
foot.addEventListener('click', (event) => {
    if(event.target.style.backgroundColor === 'grey'){
    event.target.style.backgroundColor = '#FFEBCD'
    } else {
    event.target.style.backgroundColor = 'grey'
    }
    event.stopPropagation();
})


//Alert message when page Loads

// window.addEventListener('load', (event) => {
//     alert("HELLO GOOD PEOPLE!! THANKS FOR VISITING THIS WEBPAGE! TRY CLICKING SIGN UP!")
// });

//KeyDown

const bodyColor = document.querySelector('body');
    bodyColor.addEventListener('keydown', (event) => {
    bodyColor.style.backgroundColor = 'orange';
});


//Wheel, change color to tomato while you scroll

const bodyColor2 = document.querySelector('body');
bodyColor2.addEventListener('wheel', (event) => {
    bodyColor2.style.backgroundColor = 'tomato';
});

//Double Click

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', () => {
    if (logoHeading.textContent === 'Fun Bus'){
        logoHeading.textContent = 'Bus Fun';
    } else {
        logoHeading.textContent = 'Fun Bus'
    }
});


//click border

const imgBorder = document.querySelector('img');
imgBorder.addEventListener('click', (event) => {
    imgBorder.style.border = '5px dotted yellow';
})


//click change color

const mainNav = document.querySelector('.main-navigation')
mainNav.addEventListener('click', (event) => {
    if(event.target.style.backgroundColor === 'khaki'){
    event.target.style.backgroundColor = 'white'
    } else {
    event.target.style.backgroundColor = 'khaki'
    }
})











