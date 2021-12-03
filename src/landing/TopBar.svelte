<script>
    import ThreeButtons from "./ThreeButtons.svelte";
    import Button from "smelte/src/components/Button";
    import { startLogin } from "./login";
    
</script>

<div class="top-bar">
    <img src="img/logo.svg" alt="logo" class="logo">
    <div class="menu-buttons">
        <ThreeButtons b1_name="Главная" b2_name="Поддержка" b3_name="О нас"/>
    </div>
    
    <Button add="login-button" outlined on:click={startLogin}>Вход</Button>
</div>

<style>
    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;

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
</style>