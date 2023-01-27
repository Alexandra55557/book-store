<template>
    <div class="content">
        <div class="text">
            <h1>Корзина: 0</h1>
            <form class="d-flex" role="order">
				<button class="btn" type="submit">Удалить все товары</button>
			</form> 
        </div>
        <div class="order">
            <div class="amount">
                <a>Товаров: 0</a>
                <p>Общая сумма.....₽</p>
            </div>
            <form class="d-flex" role="order">
				<button class="btn" type="submit">Оформить заказ</button>
			</form> 
        </div>
        
    </div>
</template>

<script>

</script>

<style scoped>
.text {
    display: flex;
    border-bottom: 1px solid black;
}
.text h1 {
    font-size: 23px;
    margin-top: 20px;
    margin-left: 50px;
}

.text .d-flex .btn {
    background-color: #2B4F5A;
    color: white;
    margin-top: 10px;
    margin-left: 950px;
    padding: 8px 15px;
    margin-bottom: 10px;
}

.order .amount {
    display: flex;
    font-size: 18px;
    margin-top: 30px;
    margin-left: 50px; 
    
}
.order a {
    padding-right: 10px;
}

.order .d-flex .btn {
    background-color: #2B4F5A;
    color: white;
    margin-top: 10px;
    margin-left: 20px;
    padding: 8px 15px; 
}

</style>
