<template> 
    <div class="content">
        <div class="images">
            <img :src="images[index]" >
        </div>
        <div class="button">
            <button @click="moveRight" class="btn-right btn btn-secondary">&GT;</button>
            <button @click="moveLeft" class="btn-left btn btn-secondary"> &LT;</button>
        </div>  
    </div>
</template>

<script>
export default {
    props: {
       images: Array,
    },
    data() {
        return {
            index: 0,
        }
    },
    methods: {
        moveRight() {
            this.index != this.images.length-1 ? this.index++ : this.index = 0
        },
        moveLeft() {
            this.index === 0 ? this.index = this.images.length-1 : this.index--
        }
    }
}
</script>

<style scoped>
.content {
    display: flex;
    justify-content: center;
}
.images {
    width: 160px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.images img {
    width: 100%;
    height: 100%;
}
.btn {
    background-color: #2B4F5A;
    border-radius: 10px;
    padding: 3px;
}
.button {
    position: absolute;
    width: 100%;
    height: 100%;
}
.btn-left {
    width: 30px;
    position: absolute;
    color: white;
    top: 100px;
    left: 30px;
}
.btn-right {
    width: 30px;
    position: absolute;
    color: white;
    top: 100px;
    left: 200px;
}
</style>