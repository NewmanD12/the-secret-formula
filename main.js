// ## Part 1: The alerter

let form = document.querySelector('form')
let textInput = document.querySelector('#text')


form.addEventListener('submit', function(e){
    e.preventDefault()
    alert(textInput.value)
    textInput.value = ''
})

// Part 2: Sandwich builder

let form2 = document.querySelector('#form2')
let allIngredients = document.querySelectorAll('#form2 input')

form2.addEventListener('submit', function(event){
    event.preventDefault()
    let usedIngredients = []
    for(let ingredient of allIngredients){
        if(ingredient.checked){
            usedIngredients.push(ingredient.value)
            ingredient.checked = false
        }
    }
    usedIngredients = usedIngredients.join(', ')
    alert(`Your sandwich contains: ${usedIngredients}`)
})

// Part 3: Haircut appointment scheduler

let form3 = document.querySelector('#form3')
let date = document.querySelector('#date')
let stylist = document.querySelector('#stylist')
let shortHairRadio = document.querySelector('#shortHair') 
let longHairRadio = document.querySelector('#longHair')

form3.addEventListener('submit', function(event){
    event.preventDefault()

    let hairLength = ''
    if(shortHairRadio.checked){
        hairLength = 'short'
    }
    else if(longHairRadio.checked){
        hairLength = 'long'
    }

    alert(`Haircut scheduled for ${date.value} with ${stylist.value} for ${hairLength} hair.`)

    date.value = ''
    stylist.value = ''
    shortHairRadio.checked = true
})

// Part 4: Create account

let form4 = document.querySelector('#form4')
let name_ = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let confirmPassword = document.querySelector('#confirmPassword')

let users = []

form4.addEventListener('submit', function(event){
    event.preventDefault()
    if(name_.value.length < 4){
        alert('Name not long enough. Enter a name with 4 characters or longer.')
    }
    else if(email.value.includes('@') === false){
        alert('Please enter a valid email address.')
    }
    else if(password.value.length < 4){
        alert('Password not long enough. Enter a password with 4 characters or more.')
    }
    else if(password.value !== confirmPassword.value){
        alert('Passwords do not match!')
        password.value = ''
        confirmPassword.value = ''
    }
    else{
        users.push({
            'name' : name_.value,
            'email' : email.value,
            'password' : password.value
        })
        alert(`Account created for ${name_.value} with the email address ${email.value}`)
        name_.value = ''
        email.value = ''
        password.value = ''
        confirmPassword.value = ''
    }
    console.log(users)
})

// User Login

let form5 = document.querySelector('#form5')
let emailLogin = document.querySelector('#emailLogin')
let passwordLogin = document.querySelector('#passwordLogin')

form5.addEventListener('submit', function(event){
    event.preventDefault()

    for(let user of users){
        if(user.email === emailLogin.value){
            if(user.password === passwordLogin.value){
                alert(`${user.name}, you have successfully logged in!`)
                emailLogin.value = ''
                passwordLogin.value = ''
            }
            else{
                alert('Sorry, that password is not correct. Try again.')
                passwordLogin.value = ''
            }
        }
        else {
            alert('Sorry, that email was not found! You may need to create an account.')
            emailLogin.value = ''
            passwordLogin.value = ''
        }
    }

})









