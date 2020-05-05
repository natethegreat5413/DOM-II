// Your code goes here


//Mouseover

const changeNav = document.querySelector('.main-navigation');

changeNav.addEventListener('mouseover', (event) => {
    
    event.target.style.color = 'gold';
});

//Mouseover2

    document.querySelectorAll('img').forEach( el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.08)";
        el.style.transition = "transform 0.3s"
    })

    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
    })
})


//Mouseout

changeNav.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
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
bodyColor2.addEventListener('click', (event) => {
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

//Double Click 2 //Make home link disappear

const homeLink = document.querySelector('nav a');
homeLink.addEventListener('dblclick', () => {
    homeLink.classList.add('off')
})

// double click to bring back homelink

const contact = document.querySelectorAll('nav a')
contact[3].addEventListener('dblclick', () => {
    homeLink.classList.remove('off')
    
})

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
    event.stopPropagation()
})




// const getAll = (selector) => {
//     return document.querySelectorAll(selector);
//     }
//     const bottomButtons = getAll('.btn');
//     const bottomButtonsArray = Array.from(bottomButtons);
//     bottomButtonsArray.forEach(button => {
//       button.addEventListener('click', event =>{
//         // button.innerHTML = `Click count: ${event.detail}`;
//         alert('Lets get YOU Signed up!!')
//     });
//     });


//Welcome Alert

const button = document.querySelectorAll('.btn');
    const bottomBtns = Array.from(button);
    bottomBtns.forEach(event => {
        event.addEventListener('click', e =>{
            alert('Lets get YOU Signed up!!')
        })
    })
    






