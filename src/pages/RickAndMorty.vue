<template>
<simple-pagination @prev="prev()" @next="next()" :info="info"></simple-pagination>
        <full-pagination :info="info" :current="currentPage"></full-pagination>

      <div class="columns is-multiline">
        <div v-for="character in characters" :key="character.id" class="column is-one-quarter">
            <br>
            <character-card :character="character"></character-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CharacterCard from '../components/CharacterCard.vue';
import SimplePagination from '../components/SimplePagination.vue';
export default {
  components: { CharacterCard, SimplePagination },
    created(){
        this.getPage('https://rickandmortyapi.com/api/character');
    },
    data(){
        return {
            info: {},
            characters: []
        }
    },
    methods: {
        getPage(url){
            axios.get(url).then(res => {
            console.log(res.data);
            this.info = res.data.info;
            this.characters = res.data.results;
        });            
    },
        prev(){
            this.currentPage--;
            this.getPage(this.info.prev);
    },
        next(){
            this.currentPage++;
            this.getPage(this.info.next);
    },
        goToPage(page){
            this.currentPage=page;
            this.getPage('https://rickandmortyapi.com/api/character?page=' +page);
        }
            
        }
    }
</script>

<style>

</style>