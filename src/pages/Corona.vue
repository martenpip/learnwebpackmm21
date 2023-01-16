<template>
<input class="input" v-model="search">
    <div class="colums is-multiline">
        <div v-for="county in countries" :key="county.ID" class="column is-one-fifth">
            <country-card :country="country"></country-card>
        </div>
        </div>
</template>

<script>
import axios from 'axios';
import CountryCard from '../components/CountryCard.vue';
export default {
    components: { CountryCard },
    created(){
        axios.get('https://api.covid19api.com/summary').then(res => {
            console.log(res.data.value);  
            this.countries = response.data.Countires;
        });
    },
    data(){
        return{
            countries: [],
            search: ''
        }
    },
    computed: {
        filteredCountries(){
            return this.countries.filter(country => {
                return country.Country.substr(0,this.search.length).toLowerCase() == this.search.toLowerCase()
            });
        }
    }
}
</script>

<style>

</style>