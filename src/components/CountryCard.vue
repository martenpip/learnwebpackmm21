<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">{{country.Country}}</p>
        </header>
        <div class="card-content">
            <div class="content">
                <b>New Confirmed:</b> {{country.NewConfirmed}}<br>
                <b>New Deaths:</b> {{country.NewDeaths}}<br>
                <b>New Recovered:</b> {{country.NewRecovered}}<br>
                <b>Total Confirmed:</b> {{country.TotalConfirmed}}<br>
                <b>Total Deaths:</b> {{country.TotalDeaths}}<br>
                <b>Total Recovered:</b> {{country.TotalRecovered}}<br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['country']
}
</script>

<style>
    .card {
        height:100%;
    }
</style>