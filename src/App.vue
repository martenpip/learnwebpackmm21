<template>
    <button class="button" @click="count++">{{ count }}</button>
    <input type="text" v-model="name">
    <button class="button" @click="items.push(name)">add</button>
 {{ name }} 
 <ul>

     <li v-for="(item,key) in items" :key="key">{{ item }}</li>

</ul>
</template>

<script>
export default {
    data(){
        return {
            name: 'marten',
            count: 0,
            items: ['piim', 'sai', 'viin']
        }
    }
}
</script>

<style>

</style>