<script>
    import { DatePicker } from "smelte";
    import { Select, Checkbox } from "smelte";
    import PubVis from "./PubVis.svelte"
    import Card from "./Card.svelte"

    import { token } from "../stores"
    import { onMount } from 'svelte'

    let startData = null;
    let endData = null;
    let estSelected = null;
    let typeSelected = null;

    let userData = ["", "", "", "", "", "", "", "", "", "", "", ""];

    function getPub() {
        let fetchData = {"jsonrpc": "2.0", "method": "get_publications", "params": [$token, startData, endData, estSelected, typeSelected], "id": 1};
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
            console.log("pub len:", userData.length);
            console.log(userData);
        })
        .catch(err => {
            console.log(err);
        });
    }

    onMount(() =>{
        setTimeout(getPub(), 100);
    });

    const ests = [
        { value: 1, text: "Негативная" },
        { value: 2, text: "Нейтральная" },
        { value: 3, text: "Позитивная" }
    ];

    const type = [
        {value: 1, text: "Фото"},
        {value: 2, text: "Посты"},
        {value: 2, text: "Коментарии"},
    ];

    // console.log([...Array(5).keys()]);
</script>

<div class="publications-page">
    <div class="title">
        <p><span class="primary-text">Твои</span> публикации</p>
        <hr width="100%" align="center">
    </div>
    <div class="filter">
        <div class="filter-item"><DatePicker on:change={i => {startData = i.detail; getPub();} } label="Начало"/></div>
        <div class="filter-item"><DatePicker on:change={i => {endData = i.detail; getPub();} } label="Конец" /></div>
        <div class="filter-item"><Select label="Оцеки" items={ests} on:change={v => {estSelected = v.detail; getPub()}} optionsClasses="bg absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500 absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500  rounded-t-none "/></div>
        <div class="filter-item"><Select label="Тип" items={type} on:change={v => {typeSelected = v.detail; getPub();}} optionsClasses="bg absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500 absolute left-0 bg-white rounded shadow w-full z-20 dark:bg-dark-500  rounded-t-none" /></div>
    </div>
    <div class="graph"><PubVis/></div> 
    {#each [...Array(userData.length / 4).keys()] as i}
    <div class="card-holder">
        {#each [...Array(4).keys()] as j}
        {#if i * 4 + j < userData.length}
            <Card type={userData[i * 4 + j][2] === 1 ? "photo" : "text"} sentiment={userData[i * 4 + j][3]} date={userData[i * 4 + j][4]} link={userData[i * 4 + j][5]} content={userData[i * 4 + j][6]}/>
        {/if}
        {/each}
    </div>
    {/each}
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

    .graph {
        padding:20px;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
        margin-top:2vh;
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