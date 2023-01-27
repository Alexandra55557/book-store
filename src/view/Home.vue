<template>
    <div class="container">
        <div class="page">
            <div class="text">
                <a>Окунись в необыкновынный и <br /> удивительный мир вместе с нами</a>
            </div>
            <div class="image">
                <img src="../assets/icons/home/books1.png" alt="image">
            </div> 
            <div class="quote">
                <a>«Весь мир на <br /> книжной <br /> полке»</a>
            </div>
        </div>
       
    </div>

    
</template>

<script>

</script>

<style scoped>
.page { 
    background-color: #2B4F5A;
    width: 100%;
    
}

.page .text {
    font-size: 35px;
    font-family: italic;
    font-weight: bold;
    color: white; 
    text-align: center;
   
}

.page .image {
    display: flex;
  
}

.page .image img {
    width: 300px;
}

.quote {
    display: flex;
    font-size: 18px;
    width: 600px;
}

.quote a {
    background-color: #A6BFDD;
    padding: 40px;
    border-radius: 100%;
    text-align: center;
}

</style>
