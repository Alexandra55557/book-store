<template>
    <div class="container">
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
            <div class="genre">
                {{post.genre}}
            </div>
            <div class="description">
                {{post.description}}
            </div>
            <div class="price">
                {{post.price}}
            </div>
            <div class="secondary btn">
                {{post.button}}
            </div>
        </div>  
    </div>
</template>

<script>
import Carousel from '@/components/Carousel';
export default {
    components: {
        Carousel
    },
    props: {
        post: Object,
    }
}
</script>

<style scoped>
.container {
    display: flex;
    padding: 15px;
}
.content {
    margin-left: 50px;
    margin-top: 20px;
}
.description {
    opacity: 0.8;
}
.images {
    position: relative;
}
.title {
    font-size: 25px;
    font-family: italic;
    font-weight: bold;
}
.author {
    font-size: 20px;
    font-family: italic;
    font-weight: bold;
}
.genre {
    font-size: 18px;
    font-family: italic;
}
.price {
    font-size: 23px;
    font-weight: bold;
    margin-top: 30px;
    text-align: center;
    float: left;
}
.secondary {
    font-size: 20px;
    border-radius: 10px;
    border-color: #2B4F5A;
    border-width: 4px;
    margin-top: 20px;
    margin-left: 50px;
}

</style>