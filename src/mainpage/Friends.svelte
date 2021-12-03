<script>
    import { DatePicker } from "smelte";
    import { Select, Checkbox } from "smelte";
    import PubVis from "./PubVis.svelte"
    import Card from "./Card.svelte"

    let startData = null;
    let endData = null;
    let estSelected = null;
    let typeSelected = null;

    const ests = [
        { value: 1, text: "Негативная" },
        { value: 2, text: "Нейтральная" },
        { value: 3, text: "Позитивная" }
    ];

    const type = [
        {value: 1, text: "Фото"},
        {value: 2, text: "Посты"},
        {value: 3, text: "Коментарии"},
    ];
</script>

<div class="publications-page">
    <div class="title">
        <p><span class="primary-text">Твои</span> друзья</p>
        <hr width="100%" align="center">
    </div>
    <div class="filter">
        <div class="filter-item"><DatePicker on:change={i => startData = i.detail } label="Начало"/></div>
        <div class="filter-item"><DatePicker on:change={i => endData = i.detail } label="Конец" /></div>
        <div class="filter-item"><Select label="Оцеки" items={ests} on:change={v => (estSelected = v.detail)} optionsClasses="bg absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500 absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500  rounded-t-none "/></div>
        <div class="filter-item"><Select label="Тип" items={type} on:change={v => (typeSelected = v.detail)} optionsClasses="bg absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500 absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500  rounded-t-none" /></div>
    </div>
    <PubVis/>
    <div class="card-holder">
        <Card type="photo"/>
        <Card type="text"/>
        <Card type="photo"/>
        <Card type="text"/>
    </div>
    <div class="card-holder">
        <Card type="photo"/>
        <Card type="text"/>
        <Card type="photo"/>
        <Card type="text"/>
    </div>
    <div class="footer"></div>
</div>

<style>
    .publications-page {
        width: 100%;
        background: linear-gradient(181.1deg, #BBB8FF -7.61%, rgba(239, 238, 255, 0) 95.19%);
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }

    .title {
        font-weight: 900;
        font-size: 3rem;
        color: #000000;
        width: 50%;
        margin-top: 5vh;
    }

    .primary-text {
        color: #826DFD;
    }

    hr {
        border-top-width: 2px;
        border-style: solid;
        --tw-border-opacity: 1;
        border-color: #826dfd;
    }

    .filter {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 3%;
    }

    .filter-item {
        margin-left: 3%;
        margin-right: 3%;
    }

    .filter :global(.bg) {
        background-color: #ffffff;
    }

    .card-holder {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 3%;
        width: 82%;

    }

    .footer {
        margin-top: 200px;
    }
</style>