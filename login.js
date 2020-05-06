const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users =>  checkUser(findUser(users)))


    function findUser(users){
        return users.find(user => user.user_name === username)
    }
    
    function checkUser(user){
        if (username === user.user_name && password === user.password) {
            alert("You have successfully logged in.");
            window.location.href = `user.html?id=${user.id}`
        }
    }  
})


