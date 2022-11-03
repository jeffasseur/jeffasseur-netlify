<template>
    <footer>
        <div class="cta-mail">
            <div>
                <span class="footer-h1">Hello, let's collab</span>
            </div>
            <div class="cta-mail__cta">
                <span class="footer-h1 primary-50">over here</span>
                <img src="./../assets/arrow-right-footer.png" alt="right arrow">
                <a href="mailto:sayhi@jeffasseur.be" class="btn btn__footer">Send me an e-mail</a>
            </div>
        </div>
        <div class="cta-phone">
            <span class="footer-h1 primary-50">The direct aproach?</span>
            <a href="tel:0470013282">+32 470 01 32 82</a>
        </div>
        <div class="bottom-footer">
            <p class="primary-80" style="text-align: left;">Copyright</p>
            <a class="primary-30 copyright-arrogant" style="text-align: center;" href="https://arrogant.design/" target="_blank">Designed by <span class="arrogant">Arrogant.Design</span></a>
            <p class="primary-80" style="text-align: right;">BE0739922235</p>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        position: relative;
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* margin-top: calc(100vh + 0rem); */
        background: #13179A;
        width: 100%;
        padding: 6rem;
        gap: 6rem;
        color: #FFFFFF;
        z-index: 15;
    }
    .cta-mail {
        display: flex;
        flex-direction: column;
        gap: 64px;
    }
    .cta-phone {
        width: 100%;
        display: flex;
        justify-content: end;
        flex-direction: column;
        text-align: right;
        gap: 64px;
    }
    .cta-phone a {
        font-size: 3rem;
        font-weight: 500;
        color: #FFFFFF;
    }
    .bottom-footer {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        font-size: 2rem;
    }
    .footer-h1 {
        font-size: 6rem;
        font-weight: 600;
        color: #FFFFFF;
        letter-spacing: -0.017em;
    }
    .primary-50 {
        color: #898BCD;
    }
    .primary-80 {
        color: #D0D1EB;
    }
    .primary-30 {
        color: #5A5DB8;
    }
    .btn {
        padding: 1rem 2rem;
        border: 3px solid #FFFFFF;
        border-radius: 70px;
        font-size: 2rem;
        color: #FFFFFF;
    }
    .flex {
        display: flex;
        align-items: center;
    }
    .cta-mail__cta {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .copyright-arrogant {
        font-size: 2rem;
        line-height: 1.2em;
        letter-spacing: -1.7%;
    }
    .arrogant {
        text-transform: uppercase;
    }

    @media screen and (max-width: 1300px) {
        .footer-h1 {
            font-size: 4rem;
            line-height: 1em;
        }

        .cta-mail__cta {
            gap: 1rem;
        }

        .cta-mail__cta img {
            width: 65px;
        }

        .bottom-footer {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 1000px) {
        .footer-h1{
            font-size: 3rem;
        }

        footer a {
            font-size: 1.5rem;
        }

        .copyright-arrogant {
            font-size: 1.25rem;
        }

        .btn__footer {
            font-size: 1.5rem;
        }

        .bottom-footer {
            font-size: 1.25rem;
        }

        .cta-phone a {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 768px) {
        footer {
            display: none;
        }
    }
</style>