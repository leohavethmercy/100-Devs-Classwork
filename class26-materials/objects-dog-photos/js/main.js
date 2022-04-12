//Get a dog photo from the dog.ceo api and place the photo in the DOM

url = "https://dog.ceo/api/breeds/image/random"

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.message)
        document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    });