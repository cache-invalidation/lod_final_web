<script>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'fontawesome-svelte';
    import { onMount } from "svelte";

    export let conf = false;
    export let info = "Нет информации"
    export let icon = null;

    onMount(() => {
        library.add(icon);
    });
</script>

<dev class="info-card">
    <FontAwesomeIcon bind:icon={icon} size="lg"/>
    <div class="info-block">
        <div class="info">{info}</div>
        <div class="conf">
        {#if conf}
            Конфиденциально
        {:else}
            Не конфиденциально
        {/if}
        </div>
    </div>
</dev>

<style>
    .info-card {
        display: flex;
        align-items: center;
        margin-top: 5%;
    }

    .info-block {
        margin-left: 5%;
    }

    .info {
        font-weight: 500;
        font-size: 1.5rem;
        text-align: left;
    }

    .conf {
        font-weight: 300;
        text-align: left;
    }
</style>