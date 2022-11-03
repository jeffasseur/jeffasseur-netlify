<template>
    <!-- loop through portfolioItems -->
    <div class="portfolio-item" v-for="item in portfolioItems" :key="item.id">
        <a v-bind:href="projectPath + item.id" class="portfolio-item__link">
            <img class="portfolio-item__link__img" v-bind:src="item.attributes.FeaturedMedia.data.attributes.url" v-bind:alt="item.attributes.Title">
        </a>
    </div>
</template>

<script>
    // import axios from 'axios'
    import data from './../api/api.json'
    export default {
        name: 'Carousel',
        data() {
            return {
                portfolioItems: null,
                // backendUrl: 'http://localhost:1337',
                projectPath: '/project?id='
            }
        },
        mounted() {
            this.portfolioItems = data.data
            // console.log(this.portfolioItems)
        }
    }
</script>


<style scoped>
    .portfolio-item {
        min-width: 450px;
        max-width: 750px;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .portfolio-item__link {
        display: block;
        width: 100%;
        height: 100%;
    }

    .portfolio-item__link__img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>