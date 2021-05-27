// FORM

// Web App URL https://script.google.com/macros/s/AKfycbxG1KGDIisbjp2dRFMA2ksFvcXCySF2yq7hfLbeRiOHMHfv0QmyayfWGSfonmrFxK1Y/exec

const scriptURL = 'https://script.google.com/macros/s/AKfycbxG1KGDIisbjp2dRFMA2ksFvcXCySF2yq7hfLbeRiOHMHfv0QmyayfWGSfonmrFxK1Y/exec'
const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //Clear form after submit
            form.reset()
            document.querySelector('h3').innerText = 'Request Submitted Successfully!'


            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})