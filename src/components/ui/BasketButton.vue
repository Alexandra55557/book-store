<template>
     <form class="basket-button">
		<button class="btn" type="submit"><router-link  style="text-decoration: none !important; color: #FFF" :to="{name: 'bag'}">В корзину</router-link></button>
	</form> 
</template>

<style scoped>
.basket-button .btn {
    background-color: #2B4F5A;
    color: white;
}
</style>