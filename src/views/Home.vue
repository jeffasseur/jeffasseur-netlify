<script setup>
    import Carousel from './../components/Carousel.vue'
</script>

<template>
    <div class="hero">
        <div class="infinite-scroll">
            <div class="cta--mobile">
                <div class="cta--btn">
                    <a href="mailto:info@jeffasseur.be">Pick up contact</a>
                    <img src="./../assets/vuesax/linear/vuesax/linear/arrow-right.svg" alt="arrow right">
                </div>
                <div class="cta--text">
                    <p>For business inquiries and awesome projects</p>
                </div>
            </div>
            <div class="hero--mobile">
                <h1>
                    Recent & 
                    <br>
                    Highlighted work
                </h1>
            </div>
            <Carousel />
        </div>   
    </div>
</template>

<style scoped>
    .hero {
        width: 100%;
        height: 100vh;
        position: static;
        top: 0;
        left: 0;
        background: url('./../assets/bg-logo.svg') #FFFFFF no-repeat;
        background-size: 85vw;
        background-position: left bottom;
        background-attachment: fixed;
        overflow-x: hidden;
        /* padding: 0 6em; */
    }
    .cta--mobile {
        display: none;
    }
    .hero--mobile {
        display: none;
    }
    .infinite-scroll {
        display: flex;
        align-items: center;
        overflow-x: auto;
        overflow-y: hidden;
        gap: 3rem;
        min-height: 50vh;
        max-height: 70vh;
        height: 100%;
        margin: 0rem 0rem 0rem 0rem;
        padding: 0 6em;
        /* Scrollbar weg */
        -ms-overflow-style: none;
        scrollbar-width: none; 
    }
    .infinite-scroll::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 768px) {
        #app {
            height: 100vh;
        }
        .hero {
            background: none;
            padding: 0 2rem;
            height: auto;
        }
        .hero--mobile h1 {
            font-size: 2.3rem;
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: -0.017rem;
        }
        .infinite-scroll {
            /* flex-direction: column; */
            /* gap: 1rem; */
            height: auto;
            width: 100%;
            margin: 0;
            /* overflow-x: hidden; */
            /* overflow-y: auto; */
        }
        .portfolio {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
        }
        .portfolio-item img {
            width: 100%;
            object-fit: contain;
        }
        .hero--mobile {
            display: block;
            color: #13179A;
            width: 100%;
            /* margin-top: 6rem; */
        }
        .infinite-scroll {
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
            overflow-y: auto;
            gap: .5rem;
            height: 800px;
            margin-bottom: 10rem;
            padding: 0;
            max-height: 100vh;
            /* Scrollbar weg */
            -ms-overflow-style: none;
            scrollbar-width: none; 
        }
        .infinite-scroll::-webkit-scrollbar {
            display: none;
        }
        .infinite-scroll img {
            min-width: 100px;
            min-height: auto;
        }
        .cta--mobile {
            display: block;
            position: fixed;
            width: 100%;
            color: #000;
            z-index: 50;
            bottom: 0;
            left: 0;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.01) 100%);
            backdrop-filter: blur(6px);
            padding: 1.5rem 2rem;
        }
        .cta--mobile .cta--btn img {
            min-width: 0px;
        }
        .cta--btn {
            padding: 1rem 2rem;
            gap: .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #000;
            border-radius: 100px;
            max-width: 250px;
        }
        .cta--btn a {
            color: #000;
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: 500;
            letter-spacing: -0,017rem;
        }
        .cta--text {
            font-size: 0.75rem;
            font-weight: 500;
        }
    }
</style>