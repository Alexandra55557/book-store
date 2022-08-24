<template>
    <div class="registration-cssave">
        <form>
            <h3 class="text-center">Регистрация</h3>
            <div class="form-group">
                <p>Введите свой Email</p>
                <input class="form-control item" type="email" name="email" id="email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <p>Введите пароль</p>
                <input class="form-control item" type="password" name="Пароль" id="password" placeholder="Пароль" required>  
            </div>
            <div class="form-group">
                <p>Повторите пароль</p>
                <input class="form-control item" type="password" name="Повторите Пароль" id="password" placeholder="Повторите Пароль" required>
            </div>
           
            <div class="form-group">
                <button class="btn btn-primary btn-block create-account" type="submit">Регистрация</button>
            </div>
             <div class="form-group">
                <h1>У Вас уже есть аккаунт? <router-link :to="{name: 'users'}">Войти</router-link></h1> 
            </div>
        </form>
    </div>
</template>

<style scoped>
  .registration-cssave{
    padding: 50px 280px;
}

.form-group p {
    font-family: italic;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
}

.form-group h1 {
    font-family: italic;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    float: left;
    margin-top: -35px;
    margin-left: 200px;
}


.registration-cssave form {
  max-width: 800px;
  padding: 50px 70px;
  border-radius: 10px;
  box-shadow: 4px 4px 15px rgba(241, 121, 22, 0.616);
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
  background-color:#EC9B7D;
  border: none;
  color: black;
  margin-top: 20px;
}


</style>