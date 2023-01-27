<template>
    <div class="registration-cssave">
        <form>
            <h3 class="text-center">Форма входа</h3>
            <div class="form-group">
                <input class="form-control item" type="email" name="email" id="email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <input class="form-control item" type="password" name="Пароль" id="password" placeholder="Пароль" required>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block create-account" type="submit">Вход в аккаунт</button>
            </div>
            <div class="form-group">
                <p>У Вас нет аккаунта? <router-link :to="{name: 'register'}">Регистрация</router-link></p> 
            </div>  
        </form>
    </div>
</template>

<style scoped>

.registration-cssave{
    padding: 50px 280px;
}

.registration-cssave form {
    max-width: 800px;
    padding: 50px 70px;
    border-radius: 10px;
    box-shadow: 4px 4px 15px #2B4F5A;
    background-color:#fff;
}

.registration-cssave form h3 {
    font-weight: bold;
    margin-bottom: 30px;
}

.registration-cssave .item {
    border-radius: 10px;
    margin-bottom: 25px;
    padding: 10px 20px;
    }

.registration-cssave .create-account {
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: nowrap;
    background-color:#2B4F5A;
    border: none;
    color: white;
}

.form-group p {
    text-align: center;
    font-family: italic;
    font-weight: bold;
    font-size: 18px;
    float: left;
    margin-top: -35px;
    margin-left: 200px;
}

</style>