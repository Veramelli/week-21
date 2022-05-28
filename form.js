let errors = [];

function checkValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if (validity.patternMismatch) {
        errors.push('Не верный формат заполнения e-mail');
    }

}

function checkPassword() {
    let password = document.querySelector('.password').value;
    console.log(password);

    if (password.length < 4) {
        errors.push('Минимальное значение символов пароля не может быть меньше, чем 4');
    }
    if (password.length > 10) {
        errors.push('Максимальное значение символов пароля не может быть больше, чем 10');
    }
    if (password.search(/[a-z]/) === -1) {
        errors.push('Пароль должен содержать минимум одну прописную букву');
    }
    if (password.search(/[A-Z]/) === -1) {
        errors.push('Пароль должен содержать минимум одну заглавную букву');
    }
    if (password.search(/[0123456789]/) === -1) {
        errors.push('Пароль должен содержать минимум одну цифру');
    }
}

function result() {
    errors = [];
    console.log(errors);
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    }

    checkPassword();

    document.getElementById("errorsInfo").innerHTML = errors.join('.<br>');

    let firstName = document.querySelector(".firstName").value;

    let lastName = document.querySelector(".lastName").value;
    let birthday = document.querySelector(".birthday").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;

    let object = {
        firstName: firstName,
        lastName: lastName,
        birthday:birthday,
        email:email,
        password:password
    };
    console.log(object);

    fetch ('https://httpbin.org/post ',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(object)
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}

document.querySelector('form').addEventListener('submit', (e) => e.preventDefault());