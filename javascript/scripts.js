

const scriptURL = 'https://script.google.com/macros/s/AKfycbzbCvg1BJcJTtvFGMsHaMI00iq-GGCNObYAS9lEk9QZlPsQesXVOiydxG3N2PKcB8yJig/exec'
const form_1 = document.forms['mynikaa-website-db']
form_1.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form_1) })
        .then(response => response.submit, window.open("index.html",))
        .catch(error => console.error('error', error.message))
})

//sign up database
var form = document.getElementById("sign-up");
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sign-up")),
    })

        .then(response => response, window.open("index.html", "_blank")
        )

        .catch(error => error.alert("check your internet"))
});


AOS.init({

    offset: 120, // offset (in px) from the original trigger point
    delay:0,  //values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease',  //default easing for AOS animations
    once:false,
}
    // whether animation should happen only once - while scrolling down
);