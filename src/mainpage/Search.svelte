<script>
    import { DatePicker } from "smelte";
    import { Select, Checkbox } from "smelte";
    import Card from "./Card.svelte"
    import { TextField } from "smelte";
    import { token } from "../stores"

    let startData = null;
    let endData = null;
    let estSelected = null;
    let typeSelected = null;
    let searchVal = null;

    let fetchData = {"jsonrpc": "2.0", "method": "search", "params": [$token, startData, endData, estSelected, typeSelected, searchVal], "id": 1};
    let userData = ["", "", "", "", "", "", "", "", "", "", "", ""];

    function search() {
        fetch('http://45.134.255.154:32086/', {
            method: 'post', 
            body: JSON.stringify(fetchData)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(fetchData);
            userData = data.result.publications;
            userData = userData.slice(0, userData.length - userData.length % 4);
            console.log("search len:", userData.length);
            console.log(userData);
        })
        .catch(err => {
            console.log(err);
        });
    }

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
        <p><span class="primary-text">Твой</span> поиск</p>
        <hr width="100%" align="center">
    </div>
    
    <div class="search-engine">
        <div class="search-input-wrapper">
            <TextField label="Поиск" add="search-input" append="search" on:change={i => {searchVal = i.detail; search();}}/>
        </div>
        <div class="filter">
            <div class="filter-item"><DatePicker on:change={i => {startData = i.detail; console.log(i)} } label="Начало" /></div>
            <div class="filter-item"><DatePicker on:change={i => endData = i.detail } label="Конец" /></div>
            <div class="filter-item"><Select label="Оцеки" items={ests} on:change={v => (estSelected = v.detail)}  optionsClasses="bg absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500 absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500  rounded-t-none "/></div>
            <div class="filter-item"><Select label="Тип" items={type} on:change={v => (typeSelected = v.detail)}  optionsClasses="bg absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500 absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500  rounded-t-none" /></div>
        </div>
    </div>
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
        /* height: 100vh; */
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
        /* margin-top: 1%; */
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
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 3%;
        width: 85%;

    }

    .search-input-wrapper {
        margin-left: 3%;
        margin-right: 3%;
        margin-top: 3%;
    }

    .publications-page :global(.search-input) {
        width: 100%;
        background-color: #ffffff;
        margin-bottom: 0;
    }

    .footer {
        margin-top: 200px;
    }
</style>