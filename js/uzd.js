let images = ["img/02a16hbe-550x550.jpg", "img/1000_F_65218950_8gGgy60Q1BFQvz13RLAJOCBtydFwJxFH.jpg", "img/5980b7ca87543302234a1a57.webp", "img/637625b1a06a3c7d7a62f0a7_squirrel-woman.jpeg", "img/images (1).jpeg", "img/images.jpeg", "img/MightyStocklead1200.jpg", "img/non_cheesy_stock_photos_cover-edit.jpg", "img/pexels-photo-3760790.webp", "img/ph_024_043_pw1.webp"]
const rodyti = document.querySelector(".rodyti")
const maisyti = document.querySelector(".maisyti")


//rodyti button creates img
rodyti.addEventListener("click", ()=>{
    for (let image of images){
        let createImg = document.createElement('img')
        createImg.setAttribute("src", image)
        document.querySelector('section').appendChild(createImg)
    }
}, {once:true})

const shuffleImgF = ()=>{
    i = -1
    //removes existing images(well their sources technically)
    for(let image of document.querySelectorAll('img')){
        image.removeAttribute('src')
    }
    //shuffles the images array by swapping the last array index with the random one, which is then inaccessable by the cycle
        for (let lastImage = images.length -1; lastImage != 0; lastImage--) {
            const shuffledImage = Math.floor(Math.random() * lastImage);
            [images[lastImage], images[shuffledImage]] = [images[shuffledImage], images[lastImage]];
        }
    //inserts the newly shuffled arrays images into source
        for(let img of document.querySelectorAll('img')){
            i += 1
                img.setAttribute("src", images[i])
            }
        }         
maisyti.addEventListener("click", shuffleImgF)
