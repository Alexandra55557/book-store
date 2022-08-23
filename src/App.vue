<template>
<div class="screen">
	<Navbar />
	
	<router-view />
</div>



</template>

<script>

import Navbar from '@/components/Navbar'
export default {
	name: 'app',
	components: {
		Navbar
	}
}


</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>
