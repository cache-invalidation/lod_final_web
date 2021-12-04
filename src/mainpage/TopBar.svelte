<script>
    import Button from "smelte/src/components/Button";
    import { token } from "../stores"
</script>

<div class="top-bar">
    <div class="logo-and-title">
        <img src="../static/img/logo.svg" alt="logo" class="logo">
        <h1 class="title"><span class="text-primary">Твой</span> Цифровой Двойник</h1>
    </div>
    
    <Button add="login-button" outlined on:click={() => {token.set(null);}}>Выход</Button>
    <!-- <Button add="login-button" on:click={() => {loginWindow.close()}} outlined>Выход</Button> -->
</div>

<style>
    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1em;
    }

    .logo-and-title {
        display: flex;
        justify-content: flex-start;
        width: 50%;
        align-items: center;
        margin-left: 2%;
    }

    .logo {
        margin-left: 3%;
        cursor: pointer;
    }

    .top-bar :global(.login-button) {
        margin-right: 3%;
        border-radius: 65px;
        padding-right: 25px;
        padding-left: 25px;
        font-weight: 900;
        border-width: 2px;
    }

    .title {
        font-size: 2rem;
        font-weight: 900;
        margin-left: 5%;
    }

    .text-primary {
        color: #826dfd;
    }
</style>