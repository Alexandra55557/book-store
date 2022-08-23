<template>
    <div class="container">
        <div class="title">
            {{post.title}}
        </div>
        <div class="description">
            {{post.description}}
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