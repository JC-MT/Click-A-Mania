const boxX = document.querySelector('.X')

boxX.addEventListener("click", (event) => {
    event.preventDefault();
    alert("X marks the start of this Click-A-Mania Journey!")
    if (event){
        const boxJ = document.querySelector('.J')
        boxJ.addEventListener("click", (event) => {
            alert(`You're Goood 😏 \nOkay, this time I got a hint. \nHint: "No less than 90%."`)
            if (event){
                const boxA = document.querySelector('.A')
                boxA.addEventListener("click", (event) => {
                    alert(`You paid attention at school.\nHint:\nF is for friends,\nthat do stuff together.\nU if for you and me\n...`)
                    if(event){
                        const boxN = document.querySelector('.N')
                        boxN.addEventListener("click", (event) => {
                            alert(`I'm bored for now\nThese clicks did speal my name.\nI'm Jan :)`)
                        })
                    }
                })
            }
        })
    }
})