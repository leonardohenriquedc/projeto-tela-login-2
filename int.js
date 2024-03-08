let btSingUp = document.querySelector("#btSingUp")
let btSingIn = document.querySelector("#btSingIn")


// function para SingUp
function calSingUp(){
    let mainSingUp = document.querySelector("#singUp")
    let mainSingIn = document.querySelector("#singIn")
    if(mainSingIn.style.display === 'grid' && mainSingUp.style.display === 'none' ){
        mainSingIn.style.display = 'none';
        mainSingUp.style.display = 'flex';
    }
    console.log('Esta com b.o')
}

// Function para SingIn
function calSingIn(){
    let mainSingUp = document.querySelector("#singUp")
    let mainSingIn = document.querySelector("#singIn")
    if(mainSingIn.style.display === 'none' && mainSingUp.style.display === 'flex' ){
        mainSingIn.style.display = 'grid';
        mainSingUp.style.display = 'none';
    }
    console.log('Esta com b.o')
}


btSingIn.addEventListener('click', calSingIn);
btSingUp.addEventListener('click', calSingUp);
