<script>
    import Button from "smelte/src/components/Button";
    import { startLogin } from "./login"
</script>

<div class="main-view">
    <div class="left-side">
        <div class="title">
            <p align="left"> 
                <span class="primary">Твой</span> Цифровой
                Двойник<span class="primary">.</span>
            </p>
        </div>

        <hr width="47%">

        <p class="sub-text" align="left">
            Живите полной жизнью в сети, а мы поможем управлять вашей репутацией и отслеживать ваши данные.
        </p>

        <Button add="start-button" on:click={startLogin}>Начать</Button>
    </div>
    <img src="img/landing-pic.svg" alt="landing-pic" class="landing-pic">
</div>

<style>
    .main-view {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 3%;
    }

    .left-side {
        width: 50%;
        font-size: 30px;
        margin-left: 5%;
        margin-top: 7%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .landing-pic {
        height: 75vh;
    }

    .title {
        display: block;
        font-size: 96px;
        font-weight: 900;

    }

    hr {
        border-top-width: 2px;
        border-style: solid;
        --tw-border-opacity: 1;
        border-color: #826dfd;
    }

    .sub-text {
        font-weight: 400;
        margin-top: 5%;
        color: #4a4a4a;
        font-size: 1.5rem;
    }

    .left-side :global(.start-button) {
        margin: 15px;
        border-radius: 20px;
        font-weight: 900;
        color: #ffffff;
        padding: 1rem 4rem 1rem 4rem;
        font-size: 1.3rem;
        margin-top: 5%;
        margin-left: 0;
    }

    .primary {
        color: #826dfd;
    }

    @media (max-width: 1200px) {
        .landing-pic {
            display: none;
        }
    }
</style>