<template>
    <div class="project-cta">
        <a href="mailto:info@jeffasseur.be" class="btn btn__footer">Send me an e-mail</a>
    </div>
    <div class="project">
        <h1 class="btn">{{ project.attributes.Title }}</h1>
        <img v-bind:src="project.attributes.FeaturedMedia.data.attributes.url" v-bind:alt="project.attributes.title">
        <p>{{ project.attributes.description }}</p>
        <div class="project-video" v-if="project.attributes.UrlVideo !== null">
            <h2>Video</h2>
            <iframe height="500" v-bind:src="project.attributes.UrlVideo" v-bind:title="project.attributes.Title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="gallery" v-if="project.attributes.Media.data !== null">
            <img v-for="image in project.attributes.Media.data" v-bind:key="image.id" v-bind:src="image.attributes.url" v-bind:alt="project.attributes.title">
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import data from './../api/api.json';

// get id from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const projectId = urlParams.get('id');
// console.log(projectId);

export default {
    name: 'Project',
    data() {
        return {
            projects: null,
            project: {},
            projectId: projectId,
            // projectPath: 'http://localhost:1337/api/portfolio-items/',
            // includeImages: '?populate=*',
            backendUrl: 'http://localhost:1337',
        }
    },
    created () {
        let realId = this.projectId - 1
        this.project = data.data[realId]
    }
}
</script>

<style scoped>
    .project {
        width: 100%;
        position: static;
        top: 0;
        left: 0;
        padding: 0 6em;
        margin: 0rem -6rem 6rem 0rem;
    }

    .project img {
        width: 100%;
    }

    .project h1 {
        font-size: 4rem;
        font-weight: 600;
        display: inline-block;
    }
    .project h2 {
        color: #252525;
        font-size: 4rem;
    }

    .project p {
        color: #000;
    }

    .project-video {
        height: 100%;
    }

    .project-video iframe {
        width: 100%;
        aspect-ratio: 16/9;
        height: auto;
    }

    .project-cta {
        position: fixed;
        top: 90vh;
        right: 0;
        z-index: 2;
        margin-right: 6rem;
    }

    .btn {
        padding: 1rem 2rem;
        border: 3px solid #000;
        border-radius: 70px;
        font-size: 2rem;
        color: #000;
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(14px);
    }

    @media screen and (max-width: 768px) {
        .btn__footer {
            font-size: 1rem;
        }

        .project {
            padding: 0 2em;
            margin: 6rem -2rem 0rem 0rem;
        }

        .project h1 {
            position: static;
            color: #000;
            font-size: 1.75rem;
            word-break: break-word;
        }

        .project h1.btn {
            padding: 0;
            border: none;
            background-color: none;
            backdrop-filter: none;
        }

        .project-cta {
            margin-right: 2rem;
        }
    }
</style>