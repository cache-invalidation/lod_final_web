<script>
    import { Card, Button, Dialog, Snackbar } from "smelte";
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'fontawesome-svelte';
    import { faBan } from '@fortawesome/free-solid-svg-icons';

    export let type = "photo";
    export let content = "";
    export let sentiment = 1;
    export let date;
    export let link;
    library.add(faBan);

    let showDialog = false;
    let dialogArgee = false;

    function getSent(sent) {
        if (sent === 1) {
            return ["НЕГАТИВНО", "negative"];
        }
        else if (sent === 2) {
            return ["НЕЙТРАЛЬНО", "neutral"];
        }
        
        return ["ПОЗИТИВНО", "positive"];
    }
</script>
{#if showDialog}
<div style="width: 100vw; height: 100vh; position: fixed; background-color: #000000; left: 0; top: 0; opacity: 0.5; z-index: 11;"></div>
{/if}

<div class="card">
    <Dialog bind:value={showDialog} classes="items-center z-50 rounded bg-white dark:bg-dark-400 p-4 shadow bg">
        <h5 slot="title">Вы уверены, что хотити воспользоваться совим правом на цифровое забвение?</h5>
        <!-- <div class="text-gray-700">Подвердите</div> -->
        <div slot="actions">
            <Button text on:click={() => showDialog = false}>Отменить</Button>
            <Button text on:click={() => {showDialog = false; dialogArgee = true}}>Подвердить</Button>
        </div>
    </Dialog>

    <Snackbar color="success" top bind:value={dialogArgee}>
        <div>Отправляем товарищу майору.</div>
    </Snackbar>

    <Card.Card>
        <div slot="media">
            {#if type === "photo"}
            <img
                class="w-full card-img"
                src={link}
                alt="kitty"
            />
            {:else if type="text"}
            <div class="p-5 pb-0 pt-3 text-gray-700 body-2 card-text">
                {content}
            </div>
            {/if}
        </div>
        <div slot="text" class="est-and-date">
            <div class="estimation {getSent(sentiment)[1]}">{getSent(sentiment)[0]}</div>
            <p class="date">Дата публикации {date}</p>
        </div>
        <div slot="actions">
            <div class="p-2 buttons">
                <Button add="source-button" on:click={() => {window.open(link)}}>К ИСТОЧНИКУ</Button>
                <Button add="ban-button" on:click={() => showDialog = true}><FontAwesomeIcon icon={faBan} size="lg"/></Button>
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
        width: 50%;
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
        object-fit: contain;
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

    .card :global(.bg) {
        background-color: #ffffff;
    }

    .positive {
        background-color: #009E62;
    }

    .negative {
        background-color: #E65872;
    }

    .neutral {
        background-color: #FF8A01;
    }
</style>
