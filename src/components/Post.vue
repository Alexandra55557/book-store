<template>
    <div class="container">
        <div class="title">
            {{post.title}}
        </div>
        <div class="author">
            {{post.author}}
        </div>
        <div class="description">
            {{post.description}}
        </div>
        <div class="images">
            <img :src='post.images[0]' />
        </div>

    </div>
</template>

<script>
export default {
    props: {
        post: Object,
    }
}
</script>