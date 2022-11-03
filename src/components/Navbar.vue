<template>
    <nav class="gsapNavbar">
        <div class="logo">
            <a href="/" class="nav-desktop">Jef .Fasseur</a>
            <a href="/">
                <img class="nav-mobile" src="./../assets/logo-mobile.svg" alt="Jef Fasseur logo">
            </a>
        </div>
        <button v-on:click="openMenu()" class="nav-desktop">Menu</button>
        <button class="nav-mobile" v-on:click="openMenu()">
            <img class="menuBurger" src="./../assets/menu-burger.svg" alt="burger menu">
        </button>
    </nav>

    <div class="menu d-none">
        <div class="menu-items">
            <a href="/">Home</a>
            <a href="#">Photography</a>
            <a href="#">Videography</a>
            <a href="/contact">Contact</a>
        </div>
        <div class="menu-close">
            <button v-on:click="closeMenu()">
                <img src="./../assets/close.svg" alt="close menu" class="btnClose">
            </button>
        </div>
    </div>
</template>

<script setup>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    const showNav = gsap.from(".gsapNavbar", {
        yPercent: -100,
        paused: true,
        duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            console.log(self.direction);
            self.direction !== 1 ? showNav.play() : showNav.reverse();
        }
    });

    // open menu
    function openMenu() {
        const menu = document.querySelector(".menu");
        menu.classList.remove("d-none");
    }

    function closeMenu() {
        const menu = document.querySelector(".menu");
        menu.classList.add("d-none");
    }

</script>


<style lang="scss" scoped>
    .active {
        color: #FFF;
    }

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0;
    }

    button:hover {
        text-decoration: underline;
    }

    .btnClose {
        width: 3rem;
        height: 3rem;
        position: absolute;
        top: 6em;
        right: 6em;
    }
    .gsapNavbar {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        padding: 4rem 6rem 1rem 6rem;
        z-index: 25;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background: red;
        transition: ease 0.4s;
        &--scrolled {
            height: 120px;
        }
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
    }

    span {
        text-transform: uppercase;
        color: #000;
        font-size: 2rem;
        font-weight: 600;
    }
    .nav-mobile {
        display: none;
    }
    .nav-desktop {
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: -1.7%;
        color: #000;
    }
    .menu {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        height: 100vh;
        background: #000000;
        padding: 8rem 6rem;
    }
    
    .menu-items {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .menu-items > a {
        display: block;
        color: #666666;
        font-size: 8rem;
        font-weight: 600;
        transition: all 0.3s ease-in-out;
    }

    .menu a:hover {
        color: #FFFFFF;
        transform: scale(102%);
    }
    .d-none {
        display: none;
    }
    .d-block {
        display: block;
    }

    @media screen and (max-width: 768px)  {
        .gsapNavbar {
            position: fixed;
            top: 0;
            left: 0;
            padding: 2rem 2rem 1rem 2rem;
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(4px);
        }
        span {
            font-size: 1.5rem;
        }
        .nav-mobile {
            display: block;
        }
        .nav-desktop {
            display: none;
        }
        .btn__menu {
            width: 3rem;
            height: 3rem;
            padding: 1rem;
            border-radius: 96px;
            background: rgba(255, 255, 255, 0.05);
        }

        .menu{
            display: block;
            padding: 2rem;
        }

        .menu-items {
            justify-content: center;
            align-items: center;
            gap: 4rem;
            text-align: center;
        }

        .menu-items > a{
            font-size: 3rem;
        }

        .btnClose {
            position: absolute;
            top: 2rem;
            right: 2rem;
        }

        .d-none { display: none ;}
    }
</style>