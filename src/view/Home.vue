<template>
    <div class="quote">
        <div class="image">
            <img src="../assets/icons/image/tiny-woman.png" alt="logo">
        </div>
        <div class="text">
            <h2>Чтение хороших книг — это разговор с самыми лучшими людьми прошедших времен, и притом такой разговор, когда они сообщают нам только лучшие свои мысли.</h2>
            <h1>Декарт</h1>
        </div>
       
    </div>
</template>

<script>

</script>

<style scoped>
.quote {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.image {
    display: flex;
}

.image img {
    width: 80%;
}


.text h2{
    font-size: 30px;
    margin-top: 30px;
    margin-right: 50px;
    font-family: italic;   
}

.text h1 {
    font-size: 35px;
    font-family: italic;
    font-weight: bold;
}

</style>
