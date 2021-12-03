<script>
    import Button from "smelte/src/components/Button";
    import * as animateScroll from "svelte-scrollto";

    export let active = 1;

    function scrollTo() {
        animateScroll.scrollTo({element: '.publications-page', duration: 2000});
    }
</script>

<div class="menu-block">
    {#if active === 1}
    <Button add="menu-button" basicClasses="white-text" on:click={() => {active = 1; scrollTo()}}>Публикации</Button>
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 2; scrollTo()}}>Упоминания</Button>
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 3; scrollTo()}}>Друзья</Button>
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 4; scrollTo()}}>Поиск</Button>
    {:else if active === 2}
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 1; scrollTo()}}>Публикации</Button>
    <Button add="menu-button" basicClasses="white-text" on:click={() => {active = 2; scrollTo()}}>Упоминания</Button>
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 3; scrollTo()}}>Друзья</Button>
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 4; scrollTo()}}>Поиск</Button>
    {:else if active === 3}
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 1; scrollTo()}}>Публикации</Button>
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 2; scrollTo()}}>Упоминания</Button>
    <Button add="menu-button" basicClasses="white-text" on:click={() => {active = 3; scrollTo()}}>Друзья</Button>
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 4; scrollTo()}}>Поиск</Button>
    {:else if active === 4}
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 1; scrollTo()}}>Публикации</Button>
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 2; scrollTo()}}>Упоминания</Button>
    <Button add="menu-button" basicClasses="white-text" outlined on:click={() => {active = 3; scrollTo()}}>Друзья</Button>
    <Button add="menu-button" basicClasses="white-text" on:click={() => {active = 4; scrollTo()}}>Поиск</Button>
    {/if}
</div>

<!-- <a on:click={() => animateScroll.scrollTo({element: 'scroll-to-element-selector'})}> Scroll to element </a> -->

<style>
    .menu-block {
        display: flex;
        justify-content: center;
        margin-bottom: 6vh
    }

    .menu-block :global(.menu-button) {
        border-radius: 65px;
        border-width: 2px;
        margin-left: 2%;
        margin-right: 2%;
        min-width: 200px;
        font-weight: 700;
        font-size: 1.2rem;
        padding-top: 1%;
        padding-bottom: 1%;
    }

    .menu-block :global(.active) {
        color: #ffffff;
        background-color: #826DFD;
    }

    .menu-block :global(.white-text) {
        color: #ffffff;
    }
</style>