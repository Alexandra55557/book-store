<template>
    <div class="container">
        <div class="posts" v-for="post, index in posts" :key="index">
            <Post :post='post' />
        </div>
    </div>
</template>

<script>
import Post from '@/components/Post';
export default {
    components: {
        Post
    },

    data() {
        return {
            posts: [
                {
                    title: 'First post',
                    description: 'this is a first post!!!!',
                    images: [

                    ]
                },
                {
                    title: 'Second post',
                    description: 'this is a second post!!!!',
                    images: [

                    ]
                },
                {
                    title: 'Third post',
                    description: 'this is a third post!!!!',
                    images: [

                    ]
                },

            ]
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
