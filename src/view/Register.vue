<template>
    <form action="/action_page.php">
        <div class="container">
            <h1>Регистрация</h1>
            <p>Пожалуйста, заполните данную форму, чтобы создать учетную запись.</p>
            <hr>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Введите Email" name="email" required>

            <label for="psw"><b>Пароль</b></label>
            <input type="password" placeholder="Введите пароль" name="psw" required>

            <label for="psw-repeat"><b>Повторите пароль</b></label>
            <input type="password" placeholder="Повторите пароль" name="psw-repeat" required>
            <hr>
            <p>Создавая учетную запись, вы соглашаетесь с нашими <a href="#">условиями и конфиденциальностью</a>.</p>

            <button type="submit" class="registerbtn">Регистрация</button>
        </div>
  
        <div class="container signin">
            <p>У вас уже есть аккаунт? <a href="#">Войти</a>.</p>
        </div>
    </form>
</template>

<style scoped>
    body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: black;
}

* {
    box-sizing: border-box;
}

.container {
    padding: 16px;
    background-color: white;
}

input[type=text], input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
}


hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

.registerbtn {
    background-color: #EC9B7D;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

.registerbtn:hover {
    opacity: 1;
}

a {
    color: dodgerblue;
}

.signin {
    background-color: #f1f1f1;
    text-align: center;
}
</style>