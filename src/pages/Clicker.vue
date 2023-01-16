<template>
    <div class="columns">
        <div class="column is-one-third has-text-centered">
            <b>{{clicks}} clicks</b>  
            <br>
            <b>{{cps}} clicks per second</b>  
            <img @click="clickClick()" :class="{'click': clickClass}" :src="pictures[imgIndex]">   
        </div>
        <div class="column">
            <button @click="upgrade(0.1, 10)" class="button is-white" :disabled="clicks<10">Buy 0.1 cps for 10 clicks</button>     
            <br>
            <br>
            <button @click="upgrade(1, 100)" class="button is-white" :disabled="clicks<100">Buy 1 cps for 100 clicks</button> 
            <br>
            <br>
            <button @click="upgrade(10, 1000)" class="button is-white" :disabled="clicks<1000">Buy 10 cps for 1000 clicks</button>
            <br>  
            <br>    
            <button @click="upgrade(100, 10000)" class="button is-white" :disabled="clicks<10000">Buy 100 cps for 10000 clicks</button> 
            <br>
            <br>
            <button @click="upgrade(1000, 100000)" class="button is-white" :disabled="clicks<100000">Buy 1000 cps for 100000 clicks</button>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <button @click="upgrade1(10, 1)" class="button is-white" :disabled="clicks<10 && imgIndex!=0">Upgrade The Beast For 10</button> 
            <button @click="upgrade1(100, 2)" class="button is-white" :disabled="clicks<100 && imgIndex!=1">Upgrade The Beast For 100</button>
            <button @click="upgrade1(1000, 3)" class="button is-white" :disabled="clicks<1000 && imgIndex!=2">Upgrade The Beast For 1000</button>
            <button @click="upgrade1(10000, 4)" class="button is-white" :disabled="clicks<10000 && imgIndex!=3">Upgrade The Beast For 10000</button> 



        </div>
    </div>
  
</template>

<script>
export default {
    created(){
        setInterval(()=>{
            this.clicks += this.cps;
            this.clicks = parseFloat(this.clicks.toFixed(1));


        }, 1000);
    },
    data(){
        return {
            clickClass: false,
            clicks: 0,
            cps: 0,
            pictures: [
                "https://www.pacefarm.com/assets/global_parallax/pe_pace_egg_1-d82e4d3d5753008862070cb840ff8a1712340df921cdf867b489fbbe1295a83e.png",
                "https://freepngimg.com/download/chick/21995-9-baby-chicken-transparent-image.png",
                "https://static.vecteezy.com/system/resources/previews/010/792/673/original/colorful-free-range-male-rooster-isolated-on-white-background-free-png.png",
                "https://freesvg.org/img/Golden-Rooster.png"
                ],
            imgIndex: 0

        }
        
    },
    
    methods: {
        clickClick(){
            this.clicks++;
            this.clickClass = true;
            setTimeout(()=> {
                this.clickClass = false;
            }, 100);
        },
        upgrade(cps, cost){
            if(this.clicks >= cost){
                this.clicks -= cost;
                this.cps += cps;
            }
              },
        upgrade1(cost, index){
            if(this.clicks >= cost){
                this.clicks -= cost;
       
                this.imgIndex= index;
            }
        }
    }

}


</script>

<style scoped>
    img.click {
        transform: scale(0.9);
    }
</style>