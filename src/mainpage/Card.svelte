<script>
    import { Card, Button } from "smelte";
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'fontawesome-svelte';
    import { faBan } from '@fortawesome/free-solid-svg-icons';

    export let type = "photo";
    library.add(faBan);
</script>

<div class="card">
    <Card.Card>
        <div slot="media">
            {#if type === "photo"}
            <img
                class="w-full card-img"
                src="https://placekitten.com/300/200"
                alt="kitty"
            />
            {:else if type="text"}
            <div class="p-5 pb-0 pt-3 text-gray-700 body-2 card-text">
                The three little kittens, they lost their mittens,<br>
                And they began to cry,<br>
                "Oh, mother dear, we sadly fear,<br>
                That we have lost our mittens."
            </div>
            {/if}
        </div>
        <div slot="text" class="est-and-date">
            <div class="estimation">ПОЗИТИВНО</div>
            <p class="date">Дата публикации 13.11.2021</p>
        </div>
        <div slot="actions">
            <div class="p-2 buttons">
                <Button add="source-button">К ИСТОЧНИКУ</Button>
                <Button add="ban-button"><FontAwesomeIcon icon={faBan} size="lg"/></Button>
            </div>
        </div>
    </Card.Card>
</div>

<style>
    .card {
        margin: 1rem;
        height: 330px;
        width: 350px;
        box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
    }

    .estimation {
        background-color: #00A676;
        border-radius: 5px;
        margin: 5px;
        padding: 5px 20px 5px 20px;
        color: #ffffff;
        font-weight: 700;
        width: 40%;
    }

    .date {
        margin: 5px;
        padding: 5px 0 5px 0;
        font-weight: 500;
        font-size: 0.8rem;
        display: flex;
        align-content: center;
        align-items: center;
    }

    .est-and-date {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: 50px;
    }

    .buttons {
        display: flex;
        align-items: center;
        align-content: center;
        width: 100%;
        justify-content: space-between;
        height: 50px;
    }

    .buttons :global(.source-button) {
        background-color: #EFEEFF;
        color: #826DFD;
        width: 87%;
    }

    .buttons :global(.ban-button) {
        background-color: #F9D4D7;
        color: #DF2935;
        font-size: 1.1rem;
        padding: 5px;
        font-weight: 400;
        height: 100%;
    }

    .card-img {
        height: 250px;
        width: 350px;
        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25));
    }

    .card-text {
        height: 250px;
        width: 350px;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 1.2rem;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    }
</style>
