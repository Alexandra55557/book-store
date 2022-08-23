<template>

	<nav class="navbar navbar-expand-lg bg-light">
		<div class="container-fluid">
			<router-link class="navbar-brand" :to="{name: 'home'}">Лабиринт</router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<!-- <li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">О нас</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Контакты</a>
				</li> -->

				<li class="catalog">
					<form class="d-flex" role="catalog">
					<button class="btn" type="submit">Каталог</button>
				</form>
					
				<!-- <select name="books" class="form-select">
					<option selected hidden value="Книги">Каталог товаров</option>
					<optgroup label="Жанры">
						<option value="1">Художественная литература</option>
						<option value="2">Книги для детей</option>
						<option value="3">Психология</option>
						<option value="3">Фантастика</option>
						<option value="3">Наука и техника</option>
						<option value="3">Искусство</option>
					</optgroup>
				</select> -->
				</li>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
					<button class="btn" type="submit">Поиск</button>
				</form>
				<div class="navbar-user">
					<div class="image">
						<img src="../assets/icons/icon-user.png" alt="logo">
						<h1><router-link :to="{name: 'register'}">Вход</router-link></h1>
					</div>
					

					<div class="image">
						<img src="../assets/icons/icon-heart.png" alt="logo">
						<h1>Избранное</h1>
					</div>
					

					<div class="image">
						<img src="../assets/icons/icon-bag.png" alt="logo">
						<h1>Корзина</h1>
					</div>
					
				</div>
				
				

			</ul>
			
			
		
			</div>
		</div>
	</nav>

</template>

<script>


</script>

<style scoped>
.navbar-brand {
	font-size: 40px;
}

.d-flex .btn {
	background-color: #EC9B7D;
	color: black;
}

.d-flex .form-control {
	margin-left: 25px;
	width: 500px;
}

.catalog .btn {
	background-color: #EC9B7D;
	color: black;

}

.navbar-user {
	width: 0;
    height: 0; 
	display: flex; 
	margin-left: 100px;
}

.navbar-user img {
	width: 25px;
    height: 25px; 
}

h1 {
	font-size: 20px;
}

.image {
	margin-left: 25px;
}

</style>
