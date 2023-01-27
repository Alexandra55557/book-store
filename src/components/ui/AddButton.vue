<template>
    <form class="add-button">
		<button class="btn" type="submit"><router-link  style="text-decoration: none !important; color: #FFF" :to="{name: 'createPost'}">Добавить книгу</router-link></button>
	</form> 
</template>

<style scoped>
.add-button .btn {
    background-color: #2B4F5A;
    color: white;
    margin-left: 40px;
}
</style>