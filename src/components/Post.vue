<template>
    <div class="container">
        <div @click="openPost">
            <div class="images">
                <Carousel :images="post.images" />
            </div>
            <div class="content">
                <div class="title">
                    {{post.title}}
                </div>
                <div class="author">
                    {{post.author}}
                </div>
                <div class="price">
                    {{post.price}}
                </div>
            </div> 
        </div>
        <BasketButton class="basket" />
    </div>
</template>

<script>
import Carousel from '@/components/Carousel';
import BasketButton from '@/components/ui/BasketButton.vue'
export default {
    components: {
        Carousel,
        BasketButton
    },
    props: {
        post: Object,
    },
    methods: {
        openPost() {
            console.log(111111)
            this.$router.push({ path: '/postContent/:id', name: 'id' })
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    gap: 10px;
    max-width: 300px;
    width: 250px;
    height: 100%;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    padding: 20px 40px;
	border-radius: 10px;
	box-shadow: 4px 4px 15px #2B4F5A;
	background-color:#fff;
}
.basket {
   display: flex;
   justify-content: center;
}

.title {
    margin-top: 10px;
    font-size: 18px;
    font-family: italic;
    font-weight: bold;
}

.author {
    font-size: 16px;
    font-family: italic;
    font-weight: bold;
}

.price {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
}

</style>