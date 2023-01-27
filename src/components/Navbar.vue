<template>
	<div class="navbar">
		<div class="logo">
			<router-link class="navbar-brand" :to="{name: 'home'}">Bookstore</router-link>
		</div>
		<div class="nav">
			<a><router-link :to="{name: 'bag'}">О нас</router-link></a>
			<a><router-link :to="{name: 'catalog'}">Книги</router-link></a>
			<a><router-link :to="{name: 'bag'}">Корзина</router-link></a>
			<a class="nav-item"><router-link :to="{name: 'users'}">Войти</router-link></a>
		</div>	
		<form class="d-flex" role="search">
			<input class="form-control me-2" type="search" placeholder="Поиск..." aria-label="Поиск">
			<div class="image">
				<button class="btn" type="submit"><img src="../assets/icons/icon-search.png" alt="logo"></button>
			</div>
		</form>
	</div>
	

	<!-- <nav class="navbar navbar-expand-lg bg-light">
		<div class="container-fluid">
			<router-link class="navbar-brand" :to="{name: 'home'}">Bookstore</router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				
				<form class="d-flex" role="catalog">
					<router-link class="btn" style="text-decoration: none !important; color: #000" :to="{name: 'catalog'}">Каталог</router-link>
				</form>
			
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
					<button class="btn" type="submit">Поиск</button>
				</form>
				<div class="navbar-user">
					<div class="post">
						<h1><router-link  style="text-decoration: none !important; color: #000" :to="{name: 'createPost'}">Добавить книгу</router-link></h1>
					</div>
					
					<div class="user">
						<img src="../assets/icons/icon-user.png" alt="logo">
						<h1><router-link  style="text-decoration: none !important; color: #000" :to="{name: 'users'}">Вход</router-link></h1>
					</div>

					<div class="bag">
						<img src="../assets/icons/icon-bag.png" alt="logo">
						<h1><router-link  style="text-decoration: none !important; color: #000" :to="{name: 'bag'}">Корзина</router-link></h1>
					</div>

				</div>
				
				

			</ul>
			
			
		
			</div>
		</div>
	</nav> -->

</template>

<script>


</script>

<style scoped>
body {
	margin: 0;
}

.navbar {
	width: 100%;
	background-color: #2B4F5A;
	align-items: center;
	/* position: fixed; */
}

.navbar-brand {
	font-size: 40px;
	font-family: Georgia,;
	color: white;
	margin-left: 40px;
}

.nav {
	list-style-type: none;
	display: flex;
	align-items: center;
	
}

.nav a {
	text-decoration: none;
	color: white;
	font-weight: 400;
	font-size: 18px;
	margin-right: 20px;
}

.nav .nav-item {
	margin-left: 425px;
}

a:hover {
	color: rgb(87, 166, 172);
}

.navbar .form-control {
	width: 500px;
	margin-left: 435px;
	border-radius: 10px;
}

.navbar .image {
	display: flex;
	margin-left: -60px;
}

.navbar .image img {
    width: 25px;
	height: 25px;
}

input[type="search"]::-webkit-search-cancel-button {
	margin-right: 45px;
}


/* .navbar-brand {
	font-size: 40px;
	font-family: item;
}

.d-flex .btn {
	background-color: rgb(221, 175, 122);
	color: black;
}


.d-flex .form-control {
	margin-left: 25px;
	width: 500px;
}

.catalog .btn {
	background-color: rgb(221, 175, 122);
	color: black;
}

.navbar-user {
	width: 0;
    height: 0; 
	display: flex; 
	margin-left: 100px;
}

.post {
	margin-left: -80px;
	text-align: center;
}

h1 {
	font-size: 20px;
	margin-left: 20px;
	text-decoration: none;	
}

.user img {
	width: 19px;
	margin-left: 32px;	
}

.bag img {
	width: 27px;
	margin-left: 40px;
	margin-top: -3px;
	margin-bottom: -2px;	
} */
</style>
