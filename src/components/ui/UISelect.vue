<template>
    <div class="filter">
        <div class="title">
            {{select.title}}
        </div>
        <select>
            <option v-for="option in select.options" :key="option">
               {{option}}
            </option>
        </select>
    </div>
   
</template>
<script>
export default {
    props: {
        select: Object,
    }
}
</script>

<style scoped>
.title {
    font-size: 18px;   
}
.filter {
    width: fit-content;
}
.filter select{
    font-size: 17px;
    border-color: #2B4F5A;
    background: white;
    padding: 2px;
    border-radius: 5px;
    border-width: 2px;
    width: fit-content;
} 
</style>
